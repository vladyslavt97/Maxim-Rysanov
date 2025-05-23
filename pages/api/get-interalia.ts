import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import path from "path";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });
        const page = await browser.newPage();

        // Go to login page
        await page.goto("https://musicinteralia.overturehq.com/login", {
            waitUntil: "domcontentloaded",
        });

        // Fill credentials
        await page.type('input[name="signin[username]"]', "maxrysan");
        await page.type('input[name="signin[password]"]', "Ade!200903");


        // Submit login
        await Promise.all([
            page.click('input[type="submit"]'),
            page.waitForNavigation({ waitUntil: "networkidle0" }),
        ]);
        console.log("✅ Login successful");

        // Go to calendar
        await page.goto("https://musicinteralia.overturehq.com/calendar", {
            waitUntil: "networkidle0",
        });

        // Switch to year view
        await page.click("span.fc-button-year");
        await page.waitForSelector(".fc-event");
        // await page.waitForTimeout(1000);


        // Extract all black events
        const events = await page.evaluate(() => {
            const entries: any[] = [];
            const eventElements = document.querySelectorAll("a.fc-event");

            eventElements.forEach((event) => {
                const colorAttr = event
                    .querySelector(".fc-event-inner")
                    ?.getAttribute("data-color");
                if (colorAttr === "#000000") {
                    entries.push({
                        title: event.textContent?.trim(),
                        date: event.getAttribute("data-date") || "TBC",
                        url: event.getAttribute("href") || "",
                    });
                }
            });

            return entries;
        });

        console.log(`🗂️ Found ${events.length} black events`);
        console.log(events);

        // Visit and extract event details
        const detailedEvents = [];
        for (const event of events) {
            if (!event.url) continue;

            await page.goto(
                `https://musicinteralia.overturehq.com${event.url}`,
                {
                    waitUntil: "networkidle0",
                }
            );

            const details = await page.evaluate(() => {
                const venue =
                    document
                        .querySelector("a.contact_name")
                        ?.textContent?.trim() || "Unknown";

                const addressNode = document.querySelector(
                    "li.address_selecta + li"
                );
                const address =
                    addressNode?.textContent?.trim().replace(/\s+/g, " ") || "";

                const composer =
                    document
                        .querySelector("strong.composer_name")
                        ?.textContent?.trim() || "";
                const work =
                    document
                        .querySelector("span.work_name")
                        ?.textContent?.trim() || "";
                const program = `${composer}: ${work}`.trim();

                const date =
                    document
                        .querySelector("#event_name em")
                        ?.textContent?.trim() || "TBC";

                return {
                    venue,
                    address,
                    program,
                    date,
                };
            });

            console.log("🎯 Extracted:", details);
            detailedEvents.push(details);
        }

        await browser.close();
        res.status(200).json({ events: detailedEvents });
    } catch (err) {
        console.error("❌ Scraping error", err);
        res.status(500).json({ error: "Failed to scrape calendar" });
    }
}
