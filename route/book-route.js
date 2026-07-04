const express = require("express")
const {getBook,getBookById,addBook,updateBook,deleteBook} = require("../controller/book-controller")
 
const router = express.Router()

router.get("/getBook",getBook,)
router.get("/getBook/:id",getBookById)
router.post("/addBook",addBook)
router.put("/updateBook/:id",updateBook)
router.delete("/deleteBook/:id",deleteBook)

module.exports = router