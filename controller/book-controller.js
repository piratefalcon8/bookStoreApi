const mongoose = require("mongoose")
const Book = require("../models/book-model")


const getBook = async(req,res) => {
  try {
    const getBook = await Book.find({})
    if (getBook) {
      res.status(201).json({
        success: true,
        message: "book fetched successfully",
        data:getBook
      })
    }else{
      res.status(400).json({
        success:false,
        message:"failed to fetch book"
      })
    }
  } catch (error) {
    console.log("Server error",error);
    res.status(500).json({
      success:false,
      message:"Server error"
    })
  }
}

const getBookById = async(req,res) => {
  try {
    const bookId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(bookId)){
      return res.status(400).json({
        success:false,
        message:`ID ${bookId} not found try different id`
      })
    }
    const fetchBookById = await Book.findById(bookId)
    if (!fetchBookById) {
      return res.status(400).json({
        success:false,
        message:`ID ${bookId} not found try different id`
      })
    }
    res.status(201).json({
        success: true,
        message: "book ID fetched successfully",
        data:fetchBookById
      })
  } catch (error) {
    console.log("Server error",error);
    res.status(500).json({
      success:false,
      message:"Server error"
    })
  }
}
const addBook = async(req,res) => {
  try {
    const bookFormData = req.body
    const addeBook = await Book.create(bookFormData)
    if (addBook) {
      res.status(201).json({
        success: true,
        message: "book added successfully",
        data:addBook
      })
    }else{
      res.status(400).json({
        success:false,
        message:"failed to add book"
      })
    }
    
  } catch (error) {
    console.log("Server error",error);
    res.status(500).json({
      success:false,
      message:"Server error"
    })
  }
}

const updateBook = async(req,res) => {
  try {
    const bookId = req.params.id
    const updateBookData = req.body
    if(!mongoose.Types.ObjectId.isValid(bookId)){
      return res.status(400).json({
        success:false,
        message:`failed to update book by ID`
      })
    }
    const updatedBookById =await Book.findByIdAndUpdate(bookId,updateBookData,{
      new:true
    })
    console.log("updatedBook",updatedBookById)
    if (!updatedBookById) {
      return res.status(400).json({
        success:false,
        message:`can not update ID`
      })
    }
    res.status(201).json({
        success: true,
        message: "book ID updated successfully",
        data:updatedBookById
      })

  } catch (error) {
    console.log("Server error",error);
    res.status(500).json({
      success:false,
      message:"Server error"
    })
  }
}

const deleteBook = async(req,res) => {
  try {
    const bookId = req.params.id
    if(!mongoose.Types.ObjectId.isValid(bookId)){
      return res.status(400).json({
        success:false,
        message:`failed to update book by ID`
      })
    }
    const deleteBookById = await Book.findByIdAndDelete(bookId)
    if (!deleteBookById) {
      return res.status(400).json({
        success:false,
        message:`book not found`
      })
    }
    res.status(201).json({
        success: true,
        message: "book ID deleted successfully",
        data:deleteBookById
      })

  } catch (error) {
    console.log("Server error",error);
    res.status(500).json({
      success:false,
      message:"Server error"
    })
  }
}

module.exports = {
  getBook,
  getBookById,
  addBook,
  updateBook,
  deleteBook
}