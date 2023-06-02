const express = require("express");
const {
  categories,
  createPost,
  allPosts,
  deletePost,
  getPost,
} = require("../controllers/posts.controller");
const authJWT = require("../middlewares/auth.middleware");
const postsApi = express.Router();

postsApi
  .post("/get-post", getPost)
  .get("/categories", authJWT, categories)
  .get("/all-posts", authJWT, allPosts)
  .post("/create-post", authJWT, createPost)
  .delete("/delete-post", authJWT, deletePost);

module.exports = {
  postsApi,
};
