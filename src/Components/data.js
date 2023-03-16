import React from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import {message} from 'antd';
const data = ({children}) => {
    const {user} = useSelector((state)=>state.user);
    const location= useLocation();
    const navigate = useNavigate();

    const handleLogout= ()=>{
        localStorage.clear()
        message.success('Logout Successfully');
    }
  return (
    <div onClick={handleLogout}>
        <Link to="/login">Logout</Link>
      
    </div>
  )
}

export default data
