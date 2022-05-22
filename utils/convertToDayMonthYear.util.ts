export const convertToDayMonthYear = ( date : number ) => {
  const dateString = new Date(date);
  const month = dateString.getUTCMonth() + 1;
  const day = dateString.getUTCDate();
  const year = dateString.getUTCFullYear();
  return `${month < 10 ? '0' + month : month}.${day < 10 ? '0' + day : day}.${year < 10 ? '0' + year : year}`
};
