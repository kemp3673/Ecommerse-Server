const Model = require("./model.js");


const get = (req, res) => {
  Model.getOne()
  // .then((success) => {
  //   res.status(200).send('GET WORKED')
  // })
  // .catch((error) => {
  //   res.status(500).send('GET NO WORK-O');
  // })
};

const post = (req, res) => {};

  const put = (req, res) => {};


module.exports = {
  get,
  post,
  put,
};