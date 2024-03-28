import { Table } from "antd";
import { useEffect } from "react";
import { AllUserMenu } from "./AllUserMenu";
import { useDispatch, useSelector } from "react-redux";
import { UserGetAllAxios } from "../../service/UserService/UserAxios";

const AllUserDetail = () => {
  const dispatch =useDispatch();
  const allUserData =useSelector((state)=>state?.users?.allUser);
  const Update =useSelector((state)=>state?.users?.message);

  useEffect(() => {
    dispatch(UserGetAllAxios());
  }, [Update]);

  return (
    <Table
    className="table"
      columns={AllUserMenu}
      dataSource={allUserData}
      scroll={{
        y: 400,
      }}
      rowKey={(data) => data.userId}
    />
  );
};
export default AllUserDetail;
