import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import './index.css'
import {Layout, Menu, Breadcrumb} from 'antd';



const { Header, Content, Footer } = Layout;
const Root=styled.div`
    width:100%;
    height:100%;
    .hearder-Style{
        display:flex;
        align-items:center;
        height:119px;
        line-height:44px;
        font-size:30px;
        color:rgba(16,16,16,1);
        font-family:Roboto;
        border-bottom: 1px solid rgba(187, 187, 187, 1);

    }
    .logo-Style{
        margin-right:124px;
        span{
            display:inline-block;
            width: 91px;
            height: 96px;
            line-height:96px;
            border-radius: 4px;
            text-align: center;
            font-family: Roboto;
            margin-right:20px;
            border: 1px solid rgba(187, 187, 187, 1); 
        }
    }
    .menu-Style{
        height:100%;
        flex-grow:1; 
        border:1px solid;
        & .ant-menu-item{
            color:rgba(16,16,16,1);
            font-size:30px;
            line-height:100px;
        }
        
    }
   
`
@connect('index') 
class MainContent extends React.Component{
    
    render(){
        return (
           <Root>
               <Layout>
                   <Header className='hearder-Style'>
                       <div className='logo-Style'>
                           <span>logo</span>
                           职引官
                       </div>
                       <Menu
                            mode="horizontal"
                            className='menu-Style'
                       >
                           <Menu.Item key="1">首页</Menu.Item>
                           <Menu.Item key="2">引享圈</Menu.Item>
                           <Menu.Item key="3">职位行情</Menu.Item>
                           <Menu.Item key="4">测一测</Menu.Item>
                       </Menu>
                   </Header>
               </Layout>
           </Root>

        )
    }

}

export default MainContent;