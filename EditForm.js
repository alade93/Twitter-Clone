
import { truckMonster } from 'fontawesome';
import React, { useState,useEffect } from 'react'
import { useStateValue } from './StateProvider/StateProvider';


const EditFormUser = () => {

  
    const [{editing},dispatch] = useStateValue()
    console.log(editing);
    console.log(dispatch);
    
    const initialFormState = {
        message: "",
        username: "AnonymousUser",
        name: "Anonymous"
    };
    
    const [user, setUser] = useState(initialFormState)

   


    const handleChange = (e) => {
        setUser({name: user.name, username: user.name, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       dispatch({
           type:"ADD_TO_TWEET",
           usermessage: user.message
       })
    } 
    
  const canceltweet = () => {
        dispatch({
            type: "CANCEL_TWEET",
            editing: true,
        })
      
  }
    
  

   
    return (
        <div className="row">
            <div className="s12 m10 18">
                <form onSubmit={handleSubmit}>
                    <input type="text" id='message' value={user.message} onChange={handleChange} />
                    <button type='submit' className='btn waves-effect waves-light'>Update <i className='fa fa-edit'></i></button>

                    <button className= "btn red waves-effect waves-light" onClick={canceltweet}>
                        cancel <i className='fa fa-remove'></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditFormUser;

