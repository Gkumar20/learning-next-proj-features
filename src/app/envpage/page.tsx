import { API_URL } from '@/config/constant'
import Script from 'next/script'
import React from 'react'

export default function EnvPage() {
  console.log(process.env.NODE_ENV)
  console.log(process.env.DB_PASS)
  return (
    <div>

      <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></Script>

      {
        process.env.NODE_ENV == "development" ?
          <h1>This page is in development Mode</h1> :
          <h1>This page is in production Mode</h1>
      }

      {/* using configuration file */}
      <div className='text-5xl'>{API_URL}</div>

      <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="gkumar20" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/gkumar20?trk=profile-badge">GANESH KUMAR</a></div>


    </div>
  )
}
