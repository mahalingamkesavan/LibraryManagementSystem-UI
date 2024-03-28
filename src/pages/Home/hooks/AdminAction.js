import { Row, Col } from "antd";
import { DELETE_BOOK_URL } from "../../../environment/LocalPathEnvironment";
import { DeleteRecord } from "../../../shared/Component/DeleteRecord";
import UpDateBookDetail from "../../AddBook/components/UpDateBookDetail";



export const AdminAction={
    title: "Action",
    dataIndex: "",
    key: "Delete",
    render: (record) => {
      const Url =DELETE_BOOK_URL
      const value="Delete"
      return (
        <Row>
          <Col>
            <DeleteRecord  Url={Url} record={record} value={value}/> 
          </Col>
          <Col style={{marginLeft: "10px"}}>
            <UpDateBookDetail
              record={record}
            ></UpDateBookDetail>
          </Col>
        </Row>
      );
    }
  }