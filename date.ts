export const sortingConcerts = (concerts: any) => {
    let validConcerts = concerts.sort((a: any, b: any) => {
        const getLastFiveCharacters = (dateString: any) => {
          const regex = /\b\d{2}\/\d{2}\b/;
          // Use the match() method to find the date pattern in the string
          const match = dateString.match(regex);
          // If a match is found, return the matched date pattern, else return null
          return match ? match[0] : null;
        };

        const lastFiveCharactersA = getLastFiveCharacters(a.date);
        const lastFiveCharactersB = getLastFiveCharacters(b.date);

        const twoDimensionalArrayA = lastFiveCharactersA.split('/');
        const twoDimensionalArrayB = lastFiveCharactersB.split('/');

        return twoDimensionalArrayB[1] - twoDimensionalArrayA[1] || twoDimensionalArrayB[0] - twoDimensionalArrayA[0];
    });
    return validConcerts;
} 

export const calculateTodaysDate = () => {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var formattedDay = ("0" + day).slice(-2);
    var formattedMonth = ("0" + month).slice(-2);
    var formattedDate = formattedDay + "/" + formattedMonth;
    return formattedDate;
}

export const findClosestEventInTheFuture = (concerts: any, validConcerts: any, today: any) => {
    let allNums: number[]=[];
    let newArr: String[] = [];
    if (concerts.length > 0){
      validConcerts.forEach((c: any) => {
        const regex = /\b\d{2}\/\d{2}\b/;
        const match = c.date.match(regex);
        if (match) {
            newArr.push(match[0]);
        }
    });
      for (let i = 0; i < newArr.length; i++) {
        var number1 = newArr[i];
        var [day1, month1] = number1.split("/");
        var [day2, month2] = today.split("/");
        var date1 = new Date(new Date().getFullYear(), parseInt(month1) - 1, parseInt(day1));
        var date2 = new Date(new Date().getFullYear(), parseInt(month2) - 1, parseInt(day2));

        // only consider future dates
        if (date1 < date2) {
          continue; // Skip dates that are earlier than today
        }
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        allNums.push(daysDiff)
      }
      
      const smallestNumber = Math.min(...allNums);
      if(allNums.indexOf(smallestNumber) > 0){
        return allNums.indexOf(smallestNumber);
      }

    }
}

export const sortedConcerts = (concerts: any) => {
  return concerts.sort((a: any, b: any) => {
    const [dayA, dateA] = a.date.split(' ')
    const [ddA, mmA] = dateA.split('/')
    const yyyyA = new Date().getFullYear()
    const fullDateStringA:any = `${yyyyA}-${mmA}-${ddA}`
    const dateObjectA = new Date(fullDateStringA)

    const [dayB, dateB] = b.date.split(' ')
    const [ddB, mmB] = dateB.split('/')
    const yyyyB = new Date().getFullYear()
    const fullDateStringB = `${yyyyB}-${mmB}-${ddB}`
    const dateObjectB = new Date(fullDateStringB)

    return dateObjectA.getTime() - dateObjectB.getTime()
  })
}