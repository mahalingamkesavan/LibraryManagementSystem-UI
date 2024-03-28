import { DeleteRecord } from "../../../shared/Component/DeleteRecord";
import * as moment from "moment";
import { DELETE_ISSUED_BOOK_URL } from "../../../environment/LocalPathEnvironment";


export const IssuedBookColumns = [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "User ID",
    },
    {
      title: "First Name",
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
    },
    {
      title: "Action",
      key: "action",
      render: (records) => {
        const Url =DELETE_ISSUED_BOOK_URL;
        const value="Return"
        return (
          <>
            <DeleteRecord Url={Url} record={records} value={value}/>
          </>
        );
      },
    },
  ];