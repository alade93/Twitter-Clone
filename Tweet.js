import React from 'react'
import { useState } from 'react';
import "./Tweet.css"
import { FiHeart } from 'react-icons/fi';
import { useStateValue } from './StateProvider/StateProvider';

function Tweet({tweets}) {
    console.log(tweets);
    const {username,message,name,id} = tweets;
    console.log(id);
    const initialState = {
        isLightTheme: true,
        light: {syntax:'#000000', ui:"#ddd"},
        green: {syntax: '#00FF00',ui: "#ddd"},
        blue: {syntax: '#0000FF', ui: "#333"},
        red: {syntax: '#FF0000', ui: "#333"},
    }
    const initialState2 = {
        isLightTheme2: true,
        light: {syntax: '#0000000', ui: "#ddd"},
        green: {syntax: '#00FF00', ui: "ddd"},
        blue: {syntax: '#0000FF', ui: "#333"},
        red: {syntax: '#FF0000', ui: "#333"},
    }

    const initialState3 = {
        isLightTheme3: true,
        light: {syntax: '#000000', ui: "#ddd"},
        green: {syntax: '#00FF00', ui: "#ddd"},
        blue: {syntax: '#0000FF', ui: "#333"},
        red: {syntax: '#FF0000', ui: "333"},

    }

    const [ color, setColor] = useState(initialState)
    const changeBackground = () => {
        setColor({isLightTheme: !isLightTheme})
    }
    const [ color2, setColor2] = useState(initialState2)
    const changeBackground2 = () => {
        setColor2({isLightTheme2: !isLightTheme2})
    }
    const [ color3, setColor3] = useState(initialState3)
    const changeBackground3 = () => {
        setColor3 ({isLightTheme3: !isLightTheme3})
    }
    console.log(color)
    console.log(color2)
    console.log(color3)

    const {isLightTheme} = color
    const {isLightTheme2} = color2
    const {isLightTheme3} = color3

    const theme1 = isLightTheme ? initialState.green : initialState.light
    const theme2 = isLightTheme2 ? initialState.blue : initialState.light
    const theme3 = isLightTheme3 ? initialState3.red : initialState3.light
    const [ {userdata,editing},dispatch] = useStateValue()
    console.log(userdata);


    const deletetweet =()=> {
        dispatch({
            type:"FILTER_TWEET",
            usertweet: id
        })
    }
    const update = () => {
        dispatch({
            type:"FILTER_TWEET",
            usertweet:id
        })
    }
    const edittweet = () => {
        
    }
    


  return (
    <div className="row">
        <div className="col s12 m10 l8">
        <ul className="collection">
            <li className="collection-item avatar">
                <img src="" alt="" className="circle" />
                <span className="title">
                {username}@{name}
                </span>
                <blockquote>
                {message}
                </blockquote>
                <span onClick={changeBackground}className='icon1'>

                <i className="material-icons"
                style={{color: theme1.syntax}}>
                repeat
                </i>
                </span>
                <span onClick={changeBackground2}className='icon2'>
                <i className="material-icons"
                style={{color: theme2.syntax}}>
                    reply
                </i>
                    
                </span>
                <span className='icon3' onClick={deletetweet}>
                <i className="material-icons">
                    delete
                </i>
                    
                </span>

                <span>
                <FiHeart size={20} color={theme1.syntax}/>
                </span>

                
                    
                
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Tweet