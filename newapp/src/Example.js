import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function App() {

  let nav= useNavigate()

  const [data, setdata] = useState([]);

  const [id, setid] = useState();
  const [pname, setpname] = useState();
  const [description, setdescription] = useState();
  const [img, setimg] = useState();
  const [category, setcategory] = useState();
  const [price, setprice] = useState();

  const [datadlt, setdatadlt] = useState(null);
  const [dataedt, setdataedt] = useState(false);

  const datareset = () =>{
    setid('');
    setpname('');
    setimg('');
    setcategory('');
    setprice('');
    setdescription('');
  }

  const datainsert = async ()=>{
   const data = {
     pname:pname,
     description:description,
     img:img,
     category:category,
     price:price,
   }

   try{
    await axios.post(`https://67279b55270bd0b97553104b.mockapi.io/newapi`, data);
    datareset();
    datafetch();

   }catch(error) {
     console.log(error);
   }
  };


  const datafetch = async ()=>{
    try{
      const response = await axios.get(`https://67279b55270bd0b97553104b.mockapi.io/newapi`)
      setdata(response.data);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
   datafetch();
  }, []);


  const datadelete = async (id)=>{
    try{
      await axios.delete(`https://67279b55270bd0b97553104b.mockapi.io/newapi/${id}`);
      datafetch();
    }catch(error){
      console.log(error);
    }
  };

  const editmode = ()=>{
    setdataedt(true);
  }

  const dataedit =async ()=>{
    const updata = {
      pname:pname,
      description:description,
      img:img,
      category:category,
      price:price,
    }

    try{
      await axios.put(`https://67279b55270bd0b97553104b.mockapi.io/newapi/${id}`, updata);
      datafetch();
      datareset();
      setdataedt(false);
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <form className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter Name"
          value={pname}
          onChange={(e) => setpname(e.target.value)}
        />
        <br /> <br />
        <input
          type="text"
          className="input"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        <br /> <br />
        <input
          type="text"
          className="input"
          placeholder="Enter category"
          value={img}
          onChange={(e) => setimg(e.target.value)}
        />
        <br /> <br />
        <input
          type="text"
          className="input"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <br /> <br />

        <input
          type="text"
          className="input"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />


        <br /> <br />
        <button type="button"// type btn is required for submission
          onClick={
              ()=>{
                if(dataedt){
                  dataedit();
                }else{
                  datainsert();
                }
              }
            
          }>add</button>
      </form>

      <br />
    
    <table className="table" border={2}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">PNAME</th>
            <th scope="col">DESC</th>
            <th scope="col">IMAGE</th>
            <th scope="col">CATEGORY</th>
            <th scope="col">PRICE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>

        {data.map((val, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{val.id}</td>
                <td>{val.pname}</td>
                <td>{val.description}</td>
                <td><img src={val.img}></img></td>
                <td>{val.category}</td>
                <td>{val.price}</td>
                
                <td>
                 <button 
                onClick={()=>{
                     editmode();
                     setid(val.id);
                     setpname(val.pname);
                    setdescription(val.productdescription);
                    setimg(val.img);
                  setcategory(val.category);
                  setprice(val.price);
                }}> Edit</button>

                  &nbsp;&nbsp;

                  <button onClick={()=>{
                    datadelete(val.id)
                  }}> delete </button>

                   &nbsp;&nbsp;
                  <button onClick={()=>
                    nav(`/productdetail/${val.id}`)
                    }>view</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  )
}
