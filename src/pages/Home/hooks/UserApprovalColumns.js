import { Row, Col } from "antd";
import { USER_APPROVAL_URL, USER_REJECTED_URL } from "../../../environment/LocalPathEnvironment";
import { DeleteRecord } from "../../../shared/Component/DeleteRecord";


export const UserApprovalColumns = [
    {
      title: "User Id",
      dataIndex: "userId",
      key: "Book ID",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "bookName", 
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "emailId",
    },
    {
      title: "phoneNumber",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render :(record)=>{
        const userRejectUrl=USER_REJECTED_URL;
        const userApproveUrl=USER_APPROVAL_URL;
        const reject="Rejected"
        const approve="Approve";
        return(
        <Row>
          <Col>
            <DeleteRecord Url={userApproveUrl} record={record} value={approve} types={"primary"} /> 
          </Col>
          <Col style={{marginLeft: "10px"}}>
          <DeleteRecord Url={userRejectUrl} record={record} value={reject}/> 
          </Col>
        </Row>)
      }
    }
  ];