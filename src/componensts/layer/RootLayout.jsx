import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>

        <div>Navbar</div>

            <Outlet/>

        <div>Footer</div>

    </div>
  )
}

export default RootLayout