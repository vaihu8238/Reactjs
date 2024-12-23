import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Product() {

  let {id}=  useParams()

  const [x, setx] = useState();

  const datafetch = async ()=>{
    try{
        const response = await axios.get(`https://67279b55270bd0b97553104b.mockapi.io/newapi/${id}`);
        setx(response.data);
    }catch(error){
        console.log(error);
    }
  };


  useEffect(() => {
    datafetch();
  }, [id]);

  if (!x) {
    return <p>Loading...</p>; // Or a loading spinner, etc.
  }
  return (
    <div>
      <p>{x.pname}</p>
    </div>
  )
}
