const birthDates = [
    {year: 2003, month: 8, day: 6}, //S1 Seoyeon
    {year: 2007, month: 4, day: 12}, //S2 Hyerin
    {year: 2005, month: 10, day: 24}, //S3 Jiwoo
    {year: 2004, month: 12, day: 4}, //S4 Chaeyeon
    {year: 2001, month: 2, day: 9}, //S5 Yooyeon
    {year: 2007, month: 10, day: 3}, //S6 Soomin
    {year: 2002, month: 10, day: 13}, //S7 Nakyoung
    {year: 2005, month: 2, day: 3}, //S8 Yubin
    {year: 2005, month: 12, day: 20}, //S9 Kaede
    {year: 2003, month: 1, day: 8}, //S10 Dahyun
    {year: 2004, month: 3, day: 10}, //S11 Kotone
    {year: 2008, month: 1, day: 8}, //S12 Yeonji
    {year: 2003, month: 6, day: 2}, //S13 Nien
    {year: 2002, month: 10, day: 13}, //S14 Sohyun
    {year: 2002, month: 5, day: 25}, //S15 Xinyu
    {year: 2002, month: 5, day: 10}, //S16 Mayu
    {year: 2006, month: 4, day: 12}, //S17 Lynn
    {year: 2009, month: 1, day: 16}, //S18 Joobin
    {year: 2007, month: 8, day: 1}, //S19 Hayeon
    {year: 2006, month: 4, day: 3}, //S20 Shion
    {year: 2007, month: 5, day: 2}, //S21 Chaewon
    {year: 2006, month: 11, day: 30}, //S22 Sullin
    {year: 2010, month: 6, day: 11}, //S23 Seoah
    {year: 2004, month: 2, day: 13} //S24 Jiyeon
];

const currentDateTime = new Date();
const currentYear = currentDateTime.getFullYear();
const currentMonth = currentDateTime.getMonth() + 1; // +1 because months are 0-based
const currentDay = currentDateTime.getDate();

birthDates.forEach((birthDate, index) => {
    let ageYears = currentYear - birthDate.year;
    let ageMonths = currentMonth - birthDate.month;
    let ageDays = currentDay - birthDate.day;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
      }

      // const age = `${ageYears} years, ${ageMonths} months, and ${ageDays} days`;
      const age = `${ageYears} yo.`;

      const ageElement = document.getElementById(`ages${index + 1}`);
      ageElement.textContent = `${age}`;
    //   ageElement.textContent = `Person ${index + 1} is ${age} old.`;
});