import React, { useEffect, useState } from "react";
import { Card,Button} from "antd";
import { ApprovalMessageAxios, RemoveMessageAxios } from "../../service/ApprovalService/ApprovalService";

const ApprovalMessage = () => {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const approvalMessage=async()=>{
      setUserData(await ApprovalMessageAxios())
    }
    approvalMessage();
  }, []);

  const Removed=async()=>{
    await  RemoveMessageAxios();
  };
  return (
    <>
    {userData!==""
    &&
   <div>
      <Card bordered={false} style={{ width: 800 }}>
        <p>Hi , <b>{userData.name}</b></p>
<p>Thank you for filling out our sign up form .
  Congratulations, your account has been<b> successfully created</b>. {userData.name} your <b> UserID : {userData.userId}</b> 
   . Now you have access to our books</p>
   <Button  danger onClick={Removed} >Remove</Button>
      </Card>
    </div>
}
    </>
  );
};

export default ApprovalMessage;
