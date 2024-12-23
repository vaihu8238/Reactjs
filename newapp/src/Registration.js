import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const [data, setdata] = useState([]);

    const [username, setusername] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    let nave = useNavigate()

    const register= () =>{
        nave('/example')//redirect home page
    }
  return (
    <div>
      
      <form>
        username : <input type='text' onChange={(e)=>setusername(e.target.value)} value={username}></input>
        email : <input type='email' onChange={(e)=>setemail(e.target.value)} value={email}></input>
        password : <input type='password' onChange={(e)=>setpassword(e.target.value)} value={password}></input>

        <button type='button' onClick={()=>register()}>Registration</button>
      </form>
    </div>
  )
}
