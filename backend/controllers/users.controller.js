// Packages
const { connection } = require("../database/config.js");
const JWT = require("jsonwebtoken");
const JWTSecret = "1234567890";
const bcrypt = require("bcrypt");
const saltRounds = 10;

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

// Register
const userRegister = async (req, res) => {
  try {
    const { name, email, password, street, city, country } = req.body;

    const hash = bcrypt.hashSync(password, saltRounds);

    const token = JWT.sign(
      {
        email: email,
      },
      JWTSecret,
      {
        expiresIn: "1h",
      }
    );

    if (await checkUser(email)) {
      res.status(200).json({
        message: "User is already Registered",
      });
    } else {
      connection.query(
        `INSERT INTO users (Name, Email, Password, Street, City, Country) VALUES ('${name}', '${email}', '${hash}', '${street}', '${city}', '${country}')`,
        async (err, result) => {
          if (err)
            res.status(500).json({
              message: "Cannot Register User",
            });
          else
            res.status(200).json({
              message: "User Registered",
              email: email,
              uid: result[0].UID,
              token: token,
            });
        }
      );
    }
  } catch (error) {
    res.status(500).json({
      message: "Error Occured!",
    });
  }
};

// Login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = JWT.sign(
      {
        email: email,
      },
      JWTSecret,
      {
        expiresIn: "1h",
      }
    );

    connection.query(
      `SELECT * FROM users WHERE Email = ?`,
      [email],
      async (err, result) => {
        if (result.length == 0)
          res.status(200).json({
            message: "Not Found",
          });
        else {
          const match = await bcrypt.compare(password, result[0].Password);
          if (match)
            res.status(200).json({
              message: "User Found",
              email: email,
              uid: result[0].UID,
              token: token,
            });
          else
            res.status(200).json({
              message: "Wrong Password",
            });
        }
      }
    );
  } catch (error) {
    res.status(500).json({
      message: "Error Occured!",
    });
  }
};

// Found User Object
const foundUser = {
  // As we cannot update the var (global) inside another function except we can call it
  value: false,
};

// Change Password
const changePassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    if (oldPassword === newPassword) {
      res.status(200).json({
        message: "Old Password cannot be the New Password!",
      });
      return;
    }

    const hash = await bcrypt.hashSync(newPassword, saltRounds);

    // Making Promise to Wait for Database Response
    let P1 = new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM users WHERE Email = ?`,
        [email],
        async (err, result) => {
          if (result.length == 0) {
            res.status(200).json({
              message: "Unauthorized Person",
            });
          } else {
            const match = await bcrypt.compare(oldPassword, result[0].Password);
            if (match) {
              foundUser.value = true;
            } else
              res.status(200).json({
                message: "Wrong Old Password",
              });
            resolve();
          }
        }
      );
    });

    await P1;

    if (foundUser)
      connection.query(
        `UPDATE users SET Password = ? WHERE users.Email = ?`,
        [hash, email],
        async (err, result) => {
          if (err) {
            res.status(500).json({
              message: "Error Occured!",
            });
          } else res.status(200).json({ message: "Password changed" });
        }
      );
  } catch (error) {
    res.status(500).json({
      message: "Error Occured!",
    });
  }
};

// Change User Name
const changeUserName = async (req, res) => {
  try {
    const { email, newName } = req.body;

    if (await checkUser(email)) {
      connection.query(
        `UPDATE users SET Name = ? WHERE users.Email = ?`,
        [newName, email],
        async (err, result) => {
          if (err)
            res.status(500).json({
              message: "Error Occured!",
            });
          else res.status(200).json({ message: "Name changed" });
        }
      );
    } else res.status(200).json("Invalid Credentials");
  } catch (error) {
    res.status(500).json({
      message: "Error Occured!",
    });
  }
};

// Change Street
const changeStreet = async (req, res) => {
  try {
    const { email, newStreet } = req.body;

    if (await checkUser(email)) {
      connection.query(
        `UPDATE users SET Street = ? WHERE users.Email = ?`,
        [newStreet, email],
        async (err, result) => {
          if (err)
            res.status(500).json({
              message: "Error Occured!",
            });
          else res.status(200).json({ message: "Street changed" });
        }
      );
    } else res.status(200).json("Invalid Credentials");
  } catch (error) {
    res.status(500).json({
      message: "Error Occured!",
    });
  }
};

// Change City
const changeCity = async (req, res) => {
  try {
    const { email, newCity } = req.body;

    if (await checkUser(email)) {
      connection.query(
        `UPDATE users SET City = ? WHERE users.Email = ?`,
        [newCity, email],
        async (err, result) => {
          if (err)
            res.status(500).json({
              message: "Error Occured!",
            });
          else res.status(200).json({ message: "City changed" });
        }
      );
    } else res.status(200).json("Invalid Credentials");
  } catch (error) {
    res.status(500).json({
      message: "Error Occured!",
    });
  }
};

// Change Country
const changeCountry = async (req, res) => {
  try {
    const { email, newCountry } = req.body;

    if (await checkUser(email)) {
      connection.query(
        `UPDATE users SET Country = ? WHERE users.Email = ?`,
        [newCountry, email],
        async (err, result) => {
          if (err)
            res.status(500).json({
              message: "Error Occured!",
            });
          else res.status(200).json({ message: "Country changed" });
        }
      );
    } else res.status(200).json("Invalid Credentials");
  } catch (error) {
    res.status(500).json({
      message: "Error Occured!",
    });
  }
};

// Exporting
module.exports = {
  userRegister,
  userLogin,
  changePassword,
  changeUserName,
  changeStreet,
  changeCity,
  changeCountry,
};
