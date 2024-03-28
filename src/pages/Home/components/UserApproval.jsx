import React, { useEffect} from "react";
import { Table } from "antd";
import { UserApprovalColumns } from "../hooks/UserApprovalColumns";
import { useDispatch, useSelector } from "react-redux";
import { FetchApprovalAxios } from "../../../service/ApprovalService/ApprovalService";

 const UserApproval = () => {
  const dispatch=useDispatch();
  const userApproval = useSelector((state)=>state?.approveUser?.allApproveUserList?.allUser);
  const updateUserApproval = useSelector((state) => state?.approveUser?.message);

  useEffect(() => {
    dispatch(FetchApprovalAxios())
  }, [updateUserApproval]);
  return (
    <Table
      columns={UserApprovalColumns}
      dataSource={userApproval}
      rowKey={(data) => data.userId}
    />
  );
};
export default UserApproval;
