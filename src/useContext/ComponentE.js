import React ,{useContext}from 'react'
import ComponentF from './ComponentF'
import {UserContext,ChannelContext} from '../App'

//1 create context 
//2 provide the context in the hight level component tree
//3 consume the context in the child component
export default function ComponentE() {
    //useContext returns the context value
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {user}-{channel}
        </div>
    )
}
