'use client'
import Script from 'next/script'
import React from 'react'

export default function Page() {
  return (
    <div>
        <h1>Get user Location</h1>
        <Script
        src='/location.js'
        onLoad={()=>{
            console.log("Location Loaded")
        }}
        />
    </div>
  )
}
