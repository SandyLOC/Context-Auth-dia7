import React from 'react'
import { useContext } from "react";
import {AuthContext} from "../context/auth.context";

export default function ButtonLogout() {

    const { logOutUser } = useContext(AuthContext);

  return (
    <div style={{width:"6em", alignSelf:"end"}}>
      <button onClick={logOutUser}>Logout</button>
    </div>
  )
}


