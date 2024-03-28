import { BookOutlined, TeamOutlined,UserAddOutlined } from "@ant-design/icons";

export const SideAdminMenuList = [
  {
    key: "BooKStore",
    icon: <BookOutlined />,
    label: "Add BooK ",
    link: "adminFeature/BooKStore",
  },
  {
    key: "allUser",
    icon: <TeamOutlined />,
    label: "Users Detail",
    link: "adminFeature/allUser",
  },

  {
    key: "allUser",
    icon: <UserAddOutlined />,
    label: "Create Admin",
    link: "adminFeature/createAdmin",
  },
];
