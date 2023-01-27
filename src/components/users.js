import React from "react";
import './users.css'
const User = ({usersId,id,title,body}) =>
{
    return(
        <div className='list'>
             
            <span>{id}</span>
            <br>
            </br>
            <span>{title}</span>
          

        </div>
    )
}
export default User