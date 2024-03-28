
 
  const DateTrim = (DateTime) => {
    const dateTime=(DateTime);
    const date=dateTime.split("T");
    return date[0];
 }
 export default DateTrim;
 