import React from "react"
import { useLoaderData } from "react-router-dom"
import FolderCard from "../../components/FolderCard"
import { getAllFolders } from "../../services"
import ButtonLogout from "../../components/ButtonLogout"

export const allFoldersLoader = async () => {
	const { data: folders } = await getAllFolders()
	return { folders }
}

function AllFolders() {
	const { folders } = useLoaderData()

	return (
		<>
			{folders.map((folder) => (
				<FolderCard key={folder._id} {...folder} />
			))}
			<ButtonLogout/>
		</>
	)
}

export default AllFolders
