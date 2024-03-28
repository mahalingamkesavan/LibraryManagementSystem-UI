import React from 'react'
import Layout, { Content } from 'antd/es/layout/layout'
import SideNavBar from './SideNavBar'
import { Header } from 'antd/es/layout/layout'
import { Menu } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import Navigator from '../../pages/Home/components/Navigator'

export const LibraryCommentPage = ({issuedBookMenuList}) => {
  return (
    <Layout className="layout">
      <SideNavBar></SideNavBar>
      <Layout>
        <Header style={{height:"50px"}}>
          {issuedBookMenuList==="HOME"?<Navigator></Navigator>:issuedBookMenuList!==undefined&&<Menu style={{height:"50px"}}
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={issuedBookMenuList.map((item, index) => ({
              key: index + 1,
              label: <Link to={`${item.link}`}>{item.label}</Link>,
            }))}
          />}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  )
}
