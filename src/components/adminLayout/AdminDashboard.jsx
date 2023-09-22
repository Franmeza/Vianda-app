"use client"

import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import NotAdmin from "@/components/adminLayout/NotAdmin"
import { useRouter } from "next/navigation"
import RowResponsive from "@/components/formaters/RowResponsive"
const AdminDashboard = ({tokenData}) => {
  const router = useRouter()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
      if (tokenData.rol !== "administrador") {
        setAuth(false)
      } else {
        setAuth(true)
      }
  }, [])

  return (
    <RowResponsive>
     {auth ? (
        <>
          <div
            className="w-full min-h-[85vh] hidden md:block bg-contain bg-no-repeat overflow-scroll"
            style={{ backgroundImage: 'url("/demoToDelete/adminD.png")' }}
          >
            <div className="min-h-[1900px]"></div>
          </div>
          <div
            className="w-full min-h-[85vh] md:hidden bg-contain bg-center bg-no-repeat overflow-scroll"
            style={{ backgroundImage: 'url("/demoToDelete/adminM.png")' }}
          >
            <div className="min-h-[1900px]"></div>
          </div>
        </>
      ) : (
        <NotAdmin />
      )} 
    </RowResponsive>
  )
}

export default AdminDashboard