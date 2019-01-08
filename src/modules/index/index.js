import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import './index.css'



const Root=styled.div`
   
`
@connect('index') 
class Content extends React.Component{
    
    render(){
        return (
           <Root>
              index
              56757567567567
           </Root>

        )
    }

}

export default Content;