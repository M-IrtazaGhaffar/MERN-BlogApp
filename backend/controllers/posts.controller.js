// Packages
const { connection } = require("../database/config.js");

// Categories
const categories = async (req, res) => {
  try {
    connection.query(`SELECT * FROM categories`, async (err, result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({
      message: "Error Occured!",
    });
  }
};

// Check User
const checkUser = async (email) => {
  const P1 = await new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM users WHERE Email = ?`,
      [email],
      async (err, result) => {
        if (err) {
          resolve(false);
        } else if (result.length == 0) {
          resolve(false);
        } else resolve(true);
      }
    );
  });

  return P1;
};

// Create Posts
const createPost = async (req, res) => {
  const { email, UID, title, category, image, content } = req.body;

  try {
    if (await checkUser(email)) {
      connection.query(
        "INSERT INTO posts (Title, Content, Image, CID, UID) VALUES (?, ?, ?, ?, ?)",
        [title, content, image, category, UID],
        (err, result) => {
          if (err) {
            res.status(500).json({
              message: "Cannot Create Post",
            });
          } else {
            res.status(200).json({
              message: "Post Created",
            });
          }
        }
      );
    } else res.status(200).json("Invalid Credentials");
  } catch (error) {
    res.status(500).json({
      message: "Error Occured!",
    });
  }
};

// All posts
const allPosts = async (req, res) => {
  const { email, UID } = req.body;

  try {
    if (await checkUser(email)) {
      connection.query(
        `SELECT PID, Title, Content, Uploaded from posts WHERE UID = ${UID}`,
        (err, result) => {
          if (err)
            res.status(500).json({
              message: "Cannot get Posts!",
            });
          else res.status(200).json(result);
        }
      );
    } else res.status(200).json("Invalid Credentials");
  } catch (error) {
    res.status(500).json({
      message: "Error Occured!",
    });
  }
};

// Delete Post
const deletePost = async (req, res) => {
  const { email, UID, PID } = req.body;

  try {
    if (await checkUser(email)) {
      connection.query(
        `DELETE FROM posts WHERE posts.PID = ${PID} AND posts.UID = ${UID}`,
        (err, result) => {
          if (err) {
            res.status(500).json({
              message: "Cannot delete Post!",
            });
          } else {
            res.status(200).json({
              message: "Post deleted",
            });
          }
        }
      );
    } else res.status(200).json("Invalid Credentials");
  } catch (error) {
    res.status(500).json({
      message: "Error Occured!",
    });
  }
};

// Get Post
const getPost = async (req, res) => {
  const { PID } = req.body;
  try {
    connection.query(
      `SELECT * FROM posts WHERE PID = ${PID}`,
      (err, result) => {
        if (err) {
          res.status(500).json({
            message: "Error Occured!",
          });
        } else {
          res.status(200).json(result);
        }
      }
    );
  } catch (error) {
    res.status(500).json({
      message: "Error Occured!",
    });
  }
};

module.exports = {
  categories,
  createPost,
  allPosts,
  deletePost,
  getPost,
};
