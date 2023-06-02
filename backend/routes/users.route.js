const express = require("express");
const {
  userRegister,
  userLogin,
  changePassword,
  changeUserName,
  changeStreet,
  changeCity,
  changeCountry,
} = require("../controllers/users.controller");
const authJWT = require("../middlewares/auth.middleware");
const usersApi = express.Router();

usersApi
  .post("/login", userLogin)
  .post("/register", userRegister)
  .post("/change-password",authJWT, changePassword)
  .post("/change-name",authJWT, changeUserName)
  .post("/change-street",authJWT, changeStreet)
  .post("/change-city",authJWT, changeCity)
  .post("/change-country",authJWT, changeCountry);

module.exports = {
  usersApi,
};
