const router = require("express").Router()
const {
	getMemeCollections,
	getMemeCollectionByID,
	createMemeCollection,
	updateMemeCollections,
	deleteMemeCollections
} = require("../controllers/memeCollection")
// Middleware checks if JWT is Valid
const { isAuthenticated } = require("./../middleware/jwt.middleware.js");

router.get("/meme-collections", getMemeCollections)
router.get("/meme-collections/:id", isAuthenticated, getMemeCollectionByID)
router.post("/meme-collections", createMemeCollection)
router.put("/meme-collections/:id", updateMemeCollections)
router.delete("/meme-collections/:id", deleteMemeCollections)

module.exports = router
