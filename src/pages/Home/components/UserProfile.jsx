import { Card } from "antd";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const userInformation =useSelector(state=>state.user.data);
  return (
    <Card
      id="pro"
      title="User Profile"
      bordered={true}
      style={{
        width: 300,
      }}
    >
      <p className="card-pTag">Name : {userInformation.name}</p>
      <p className="card-pTag">Email : {userInformation.email}</p>
      <p className="card-pTag">Phone Number :{userInformation.phoneNumber}</p>
      <p className="card-pTag">Home Number: {userInformation.address}</p>
      <p className="card-pTag">City: {userInformation.city}</p>
      <p className="card-pTag">Role :{userInformation.role}</p>
    </Card>
  );
};
export default UserProfile;
