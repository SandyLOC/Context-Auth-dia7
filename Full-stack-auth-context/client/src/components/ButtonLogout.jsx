import React from 'react'
import { useContext } from "react";
import {AuthContext} from "../context/auth.context";

export default function ButtonLogout() {

    const { logOutUser } = useContext(AuthContext);

  return (
    <>
      <button onClick={logOutUser}>Logout</button>
    </>
  )
}


