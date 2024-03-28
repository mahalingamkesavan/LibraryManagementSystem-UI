import {
    HomeOutlined,
    ShoppingCartOutlined,
    BellOutlined
  } from "@ant-design/icons";


export const SideUserMenuList = [
    {
      key: "Home",
      icon: <HomeOutlined />,
      label: "Home",
      link: "library/home",
    },
    {
      key: "Issued Book",
      icon: <ShoppingCartOutlined />,
      label: "Issued Book",
      link: "issuedDetail/BookIssued",
    },
    {
      key: "InBox",
      icon:<BellOutlined />,
      label: "Inbox", 
      link: "adminFeature/inbox",
    },
  ];