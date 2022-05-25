
import React, { useState } from 'react'
import { useStateValue } from './StateProvider/StateProvider';

const AddTweet =() => {
    const [{userdata},dispatch] = useStateValue()
    console.log(dispatch);
    const initialFormState = {
        message:  "",
        username: "AnonymousUser",
        name: "Anonymous"
    };
    const [user,setUser] = useState(initialFormState)
    console.log(user.message);

    const handleSubmit = (e) => {
        e.preventDefault()
       dispatch({
           type:"ADD_TO_TWEET",
           usermessage: {message:user.message,id:4,username:user.username,name:user.name}
       })
    } 

    const handleChange = (e) => {
        
        console.log(e.target.value);
        setUser({name: user.name, username: user.name,[e.target.id]: e.target.value})
    }
    
    return (
        <div className="row">
            <div className="col s12 m10 18">
                <form onSubmit={handleSubmit}>
                    <input type="text" id='message' value={user.message} onChange={handleChange}/>
                    <button type='submit' className='btn waves-effect waves-light'>
                    Post <i className="fa fa-paper"></i>
                    </button>
                </form>
            </div>
        </div>
    );

}


export default AddTweet;