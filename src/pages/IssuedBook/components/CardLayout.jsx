import { Card } from 'antd';

const CardLayout = ({returnBook}) => {
  return (
    <div className='ReturnBook-container'>
    <Card  style={{ width: 300 }} key={returnBook.userID}>
      <p>Book Name : {returnBook.bookName}</p>
      <p>User ID : {returnBook.userID}</p>
      <p>User Name : {returnBook.name}</p>
      <p>Email ID : {returnBook.emailID}</p>
      <p>Purchased Date : {returnBook.purchaseDay}</p>
    </Card>
    </div>
  );
};
export default CardLayout;