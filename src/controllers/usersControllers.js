const fs = require('fs');

const users = fs.readFileSync(`${__dirname}/../dev-data/data/users.json`);
const usersJSON = JSON.parse(users);

//USER CONTROLLERS
exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    message: null,
    data: {
      totalResults: usersJSON.length,
      users: usersJSON
    }
  });
};

exports.createUser = (req, res) => {
  const createdAt = req.creratedAt;
  const newId = usersJSON[usersJSON.length - 1].id + 1;
  const newData = Object.assign({ _id: newId, createdAt: createdAt }, req.body);

  usersJSON.push(newData);

  fs.writeFile(
    `${__dirname}/dev-data/data/users.json`,
    JSON.stringify(usersJSON),
    err => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          status: 500,
          success: false,
          message: 'Failed to create new user'
        });
      }

      res.status(201).json({
        status: 201,
        success: true,
        message: 'New user created successfully',
        data: newData
      });
    }
  );
};

exports.getUserById = (req, res) => {
  const userId = Number(req.params.id);
  const user = usersJSON.find(userJSON => userJSON._id === userId);
  if (userId > usersJSON.length) {
    res.status(404).json({
      status: 404,
      success: false,
      message: 'user not found!'
    });
  } else {
    res.status(200).json({
      status: 200,
      success: true,
      message: null,
      data: {
        user
      }
    });
  }
};

exports.updateUser = (req, res) => {
  const userId = Number(req.params.id);

  if (userId > usersJSON.length) {
    res.status(404).json({
      status: 404,
      success: false,
      message: 'user not found!'
    });
  } else {
    res.status(200).json({
      status: 200,
      success: true,
      message: null,
      data: {}
    });
  }
};

exports.deleteUser = (req, res) => {
  const userId = Number(req.params.id);
  if (userId > usersJSON.length) {
    res.status(404).json({
      status: 404,
      success: false,
      message: 'user not found!'
    });
  } else {
    res.status(200).json({
      status: 200,
      success: true,
      message: 'user Delete successfully',
      data: {}
    });
  }
};
