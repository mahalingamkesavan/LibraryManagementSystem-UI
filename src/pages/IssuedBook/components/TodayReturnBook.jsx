import { useEffect, useState } from "react";
import { TodayReturnBookAxios } from "../../../service/IssuedBookService/IssuedBookService";
import DateTrim from "../../../shared/hooks/DateTrim";
import CardLayout from "./CardLayout";
import "../style/TodayReturn.css"



const TodayReturnBook = () => {
  const [todayReturnBook, setTodayReturnBook] = useState([]);

  useEffect(() => {
   const TodayReturn=async()=>{setTodayReturnBook(await TodayReturnBookAxios());} 
   TodayReturn();
  }, []);
  
  return (
    <div className="TodayReturnBookContainer">
    {todayReturnBook.map((item)=>{
    item.purchaseDay=DateTrim(item.purchaseDay)
    return <CardLayout returnBook={item} key={item.userID}/>})}
    </div>
  );
};
export default TodayReturnBook;
