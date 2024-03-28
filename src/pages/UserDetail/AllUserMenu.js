import { DELETE_USER_URL } from "../../environment/LocalPathEnvironment";
import { DeleteRecord } from "../../shared/Component/DeleteRecord";

 export const AllUserMenu = [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "User ID",
    },
    {
      title: "First Name",
      dataIndex: "name",
      key: "FirstName",
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "Email Address",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "Phone Number",
    },
    {
      title :'Action',
      key:"delete",
      render:(record)=>{
        const Url =DELETE_USER_URL 
        const value="Delete"
        return(
          <DeleteRecord Url={Url} record={record} value={value} ></DeleteRecord>
        );
      }
    }
  ];