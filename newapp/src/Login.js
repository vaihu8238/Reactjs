import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [data, setdata] = useState();

    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    let nave =useNavigate()


    const login = ()=>{
        nave('/example')
    }
  return (
    <div>
      email : <input type='email' onChange={(e)=>setemail(e.target.value)} value={email}></input>
        password : <input type='password' onChange={(e)=>setpassword(e.target.value)} value={password}></input>

        <button type='button' onClick={()=>login()}>Registration</button>
    </div>
  )
}
