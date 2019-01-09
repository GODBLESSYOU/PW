import Type from "./Type";
import LoadingComponent from '@comp/loading';
import Loadable from 'react-loadable'

const LoadableComMain=Loadable({
    loader:()=>import('@module/index/MainPage'),
    loading:LoadingComponent
})
const LoadableComLeading=Loadable({
    loader:()=>import('@module/leading'),
    loading:LoadingComponent
})
const LoadableComJobMarket=Loadable({
    loader:()=>import('@module/jobMarket'),
    loading:LoadingComponent
})
const LoadableComTestPages=Loadable({
    loader:()=>import('@module/testPages'),
    loading:LoadingComponent
})
const paths=[
    {
        key:'0',
        url:'/',
        comp:LoadableComMain
    },
    {
        key:'1',
        url:'/y',
        comp:LoadableComLeading
    },
    {
        key:'2',
        url:'/p',
        comp:LoadableComJobMarket
    },
    {
        key:'3',
        url:'/text',
        comp:LoadableComTestPages
    },
]
const initialState={
    paths,
    slectedPath:paths[0]
   
}
const getNewState=function(state=initialState,action){
    switch (action.type){
        case Type.INDEX_SELECT_MODULE:
            return {
                ...state,
                slectedPath:paths[action.data]
            }
        default:
            return state   
    }
}
export default getNewState;
