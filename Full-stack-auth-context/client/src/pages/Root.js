import React from "react"
import { Layout, Menu } from "antd"
import { Link, Outlet } from "react-router-dom"

import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context";

import ButtonLogout from "../components/ButtonLogout"

const { Content, Footer, Header } = Layout

const pages = [
	{
		path: "/",
		title: "Home"
	},
	{
		path: "/create-folder",
		title: "Create new folder"
	},
	/*{
		path:"/logout",
		title: "Logout"
	}
	{
		path: "/signup",
		title: "Signup Page"
	},
	{
		path: "/login",
		title: "Login Page"
	}*/
	
]

function Root() {

	const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
	
	return (
		<Layout>
			<Header>
			<>
			{isLoggedIn && (
				
				<Menu
				mode="horizontal"
				theme="dark"
				items={pages.map((p) => ({
					key: p.path,
					label: <Link to={p.path}>{p.title}</Link>
				}))}
			/>
			
			)}
			
			{!isLoggedIn && (
				<>
				<Link to="/signup"> <button>Sign Up</button> </Link>
				<Link to="/login"> <button>Login</button> </Link>
				<Link to="/anonima"> <button>Ruta anonima</button> </Link>
				</>
			)}
				
				</>
			</Header>
			{isLoggedIn && (<ButtonLogout/>)}
			<Content
				style={{
					height: "100vh",
					maxHeight: "calc(100vh - 128.09px)"
				}}
			>
				<Outlet />
			</Content>
			<Footer>With 💙 by Ironhackers</Footer>
		</Layout>
	)
}

export default Root
