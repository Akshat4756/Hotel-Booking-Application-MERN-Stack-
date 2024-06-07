import React, { useEffect, useState } from 'react'

function Intro() {
    const url=process.env.APIURL;
    const [data,setdata]=useState('');
    const func=async()=>{
        const res=await fetch(`${url}/Home/Intro`,{
            method:"GET",
            headers: {'Content-Type':'application/json'}
        });
        const dat=await res.json();
        console.log(dat);
        setdata(dat);
    }
    useEffect(()=>{
       func();
    },[])
  return (
    <div>
       
           <h1>Hi {data}</h1>
        
    </div>
  )
}

export default Intro