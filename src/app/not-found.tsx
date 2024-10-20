import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <>
    <div className='text-5xl'>This page is not found</div>
    <Link href={"/"}>Go to Home Page</Link>
    </>
    
  )
}
