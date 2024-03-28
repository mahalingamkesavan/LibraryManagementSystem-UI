import { Card } from 'antd';

 const ReturnCardLayout=({returnBook,key})=>{
    return (
        <Card  style={{ width: 300 }} key={key}>
        <p>Book Name : {returnBook.bookName}</p>
        <p>Holding Days : {returnBook.holdingDays}</p>
        <p>Remaining Days : {returnBook.remainingDays}</p>
        <p>Last Date : {returnBook.lastDate}</p>
        <p>Purchased Date : {returnBook.purchaseDate}</p>
      </Card>
    );
 }
 export default ReturnCardLayout;