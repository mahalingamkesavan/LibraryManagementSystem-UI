import { useState,useEffect} from "react";
import ReturnCardLayout from "./ReturnCardLayout";
import DateTrim from "../../../shared/hooks/DateTrim";
import "./ReturnDuration";
import { ReturnDurationAxios } from "../../../service/IssuedBookService/IssuedBookService";
const ReturnDuration = () => {
  const [DurationOfBookDetail, setDurationOfBookDetail] = useState([]);

  const ReturnTimeDuration=async()=>{
    setDurationOfBookDetail(await ReturnDurationAxios())
  }
  useEffect(() => {
    ReturnTimeDuration();
  }, []);

  return (
    <div className="TodayReturnBookContainer">
      {DurationOfBookDetail.map((item, index) => {
        item.purchaseDate = DateTrim(item.purchaseDate);
        item.lastDate = DateTrim(item.lastDate);
        return (
          <ReturnCardLayout returnBook={item} key={index}></ReturnCardLayout>
        );
      })}
    </div>
  );
};
export default ReturnDuration;
