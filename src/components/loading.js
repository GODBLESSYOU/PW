import React from 'react';
import { Spin } from 'antd';

function LoadingComponent(error){
    if(error){
        return <div>404</div>
    }else{
        return (
            <Spin size="large" />
        )
    }
}
export default LoadingComponent;