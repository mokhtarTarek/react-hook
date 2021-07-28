import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initState = {
    loading:true,
    error:'',
    post: {}
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCES':
            return {
                loading: false,
                post: action.payload,
                error:''
            }
            case 'FETCH_ERROR':
                return{
                    loading:false,
                    post:'',
                    error:'Something went wrong'
                }
            default : return state
    }
}
function DataFetchingTow() {
    const [state, dispatch] = useReducer(reducer, initState,)
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'FETCH_SUCCES',payload: res.data})
        })
        .catch(err=>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])
    return (
        <div>
            {state.loading?'loading':state.post.title}
            {state.error?state.error:null}
        </div>
    )
}

export default DataFetchingTow
