import { createBrowserRouter } from "react-router-dom"

// Pages
import Root from "./pages/Root"
import AllFolders, { allFoldersLoader } from "./pages/folders/AllFolders"
import FolderDetails, {
	folderDetailsAction,
	folderDetailsLoader
} from "./pages/folders/FolderDetails"
import CreateFolder, { createFolderAction } from "./pages/folders/CreateFolder"
import SignupPage from "./pages/auth/SignupPage"
import LoginPage from "./pages/auth/LoginPage"
import ButtonLogout from "./components/ButtonLogout"
import IsPrivate from "./components/IsPrivate"
import Anon from "./pages/auth/Anon"
import IsAnon from "./components/IsAnon"

const router = createBrowserRouter([
	{
		path: "/",
		element:  <Root /> ,
		children: [
			{
				// Colocar aca las carpetas de memes
				path: "/",
				loader: allFoldersLoader,
				element: <AllFolders />
			},
			{
				path: "folder/:id",
				loader: folderDetailsLoader,
				action: folderDetailsAction,
				element: <FolderDetails />
			},
			{
				path: "create-folder",
				action: createFolderAction,
				element: <CreateFolder />
			},
			// {
			//   path: 'create-meme'
			// },
			// {
			//   path: 'meme/id'
			// }
			{
				path: "signup",
				element: <SignupPage />
			},
			{
				path: "login",
				element: <LoginPage />
			},
			{
				path: "logout",
				element: <ButtonLogout />
			},
			{
				path: "anonima",
				element: <IsAnon><Anon /></IsAnon>
			}
			
		]
	}
])

export default router
