import express from "express";
import {
  getAllBlog,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/BlogController.js";

const router = express.Router();

///////get
router.get("/", getAllBlog);

///////get:id
router.get("/:id", getBlogById);

//////post
router.post("/", createBlog);

//////update
router.put("/:id", updateBlog);

/////delete
router.delete("/:id", deleteBlog);

export default router;
