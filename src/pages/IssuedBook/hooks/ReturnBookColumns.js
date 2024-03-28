import * as moment from "moment";


export const ReturnBookColumn = [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "User ID",
    },
    {
      title: "Name",
      dataIndex: "firstName",
      key: "FirstName",
    },
    {
        title: "Book ID",
        dataIndex: "bookId",
        key: "Book ID",
      },
      {
        title: "Book Name",
        dataIndex: "bookName",
        key: "bookName",
      },
    {
      title: "Last Date",
      dataIndex: "bookSubmitDate",
      key: "Last Date",
      render:(record)=>(<p>{moment(record).format("DD-MM-YYYY")}</p>)
    },
    {
      title: "Email Address",
      dataIndex: "emailId",
      key: "Email Address",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "Phone Number",
    }
  ];