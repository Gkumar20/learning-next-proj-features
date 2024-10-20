'use client'
import custom from '@/style/custom.module.css'
import React from 'react';
import { useState } from "react"


export default function LoginStudent() {
  const [style, setStyle] = useState({backgroundColor:"green"});
  const [tag, setTag] = useState('h1');
  return (
    <div className="flex flex-col items-center justify-center">

        <div style={style}>This is Login Student page</div>
        <button onClick={()=>setStyle({backgroundColor:"red"})}>Change color</button>
        <button className={custom.Button}>module Button</button>

        {/* chnage tag */}
        {React.createElement(tag,{style:{fontSize:'20px'}},'Cutomised Tag')}
        <button onClick={()=>setTag('p')}>Change Tag</button>
    </div>
  )
}
