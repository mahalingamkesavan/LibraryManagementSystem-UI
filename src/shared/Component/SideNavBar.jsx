import React, { useState, useEffect } from "react";
import { Row, Col, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { SideAdminMenuList } from "../hooks/SideAdminMenuList";
import { SideUserMenuList } from "../hooks/SideUserMenuList";
import { useDispatch, useSelector } from "react-redux";
import { AdminActionValidation } from "../hooks/UserValidation";
import logout from "../hooks/Logout";
import { UserGetAxios } from "../../service/UserService/UserAxios";

const { Sider } = Layout;

const SideNavBar = () => {
  const userInformation = useSelector((state) => state.user.data);
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserGetAxios());
    runLogoutTimer(1800 * 1000);
  }, []);

  const runLogoutTimer = (timer) => {
    setTimeout(() => {
      logout();
    }, timer);
  };

  useEffect(() => {
    setMenu(
      AdminActionValidation(
        userInformation.role,
        SideAdminMenuList,
        SideUserMenuList
      )
    );
  }, [userInformation]);

  return (
    <Sider id="sidebar">
      <div style={{ height: "50px" }}>
        <Row className="profile">
          <Col span={6}>
            <UserOutlined />
          </Col>
          <Col span={12}>
            <h3>{userInformation.name}</h3>
          </Col>
        </Row>
      </div>
      <Menu
        mode="inline"
        items={menu.map((item, index) => ({
          key: index + 1,
          icon: item.icon,
          label: <Link to={`/${item.link}`}>{item.label}</Link>,
        }))}
      />
    </Sider>
  );
};
export default SideNavBar;
