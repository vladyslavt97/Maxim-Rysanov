import fs from "fs";
import path from "path";
import { sortingConcerts } from "@/date";
import { ConcertType } from "@/interfaces";

const CONCERTS_ARCHIVE_DIR = path.join(process.cwd(), "data", "concerts");

const archiveFilePattern = /^concerts(.+)\.json$/;

export async function getArchiveYears(): Promise<string[]> {
    if (!fs.existsSync(CONCERTS_ARCHIVE_DIR)) {
        return [];
    }

    const files = await fs.promises.readdir(CONCERTS_ARCHIVE_DIR);
    return files
        .map((file) => file.match(archiveFilePattern))
        .filter((match): match is RegExpMatchArray => Boolean(match))
        .map((match) => match[1])
        .sort((a, b) => (a < b ? 1 : -1));
}

export async function getArchiveConcerts(
    yearKey: string
): Promise<ConcertType[]> {
    const archivePath = path.join(
        CONCERTS_ARCHIVE_DIR,
        `concerts${yearKey}.json`
    );

    if (!fs.existsSync(archivePath)) {
        throw new Error(`Concert archive "${yearKey}" not found.`);
    }

    const fileContents = await fs.promises.readFile(archivePath, "utf-8");
    const parsed: ConcertType[] = JSON.parse(fileContents);
    // return parsed;
    return sortingConcerts([...parsed]) as ConcertType[];
}
