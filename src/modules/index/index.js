import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import './index.css'
import {Layout, Menu, Breadcrumb} from 'antd';



const { Header, Content, Footer } = Layout;
const Root=styled.div`
    width:100%;
    height:100%;
   
`
@connect('index') 
class MianContent extends React.Component{
    
    render(){
        return (
           <Root>
               <Layout>
                   <Header>
                       <div>logo</div>
                       <Menu></Menu>
                   </Header>
               </Layout>
           </Root>

        )
    }

}

export default MianContent;