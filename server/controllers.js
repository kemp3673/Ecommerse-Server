const Model = require("./model.js");


module.exports = {

  getOne: function (req, res) {
    const urlTail = (req.url).split('/')[2];
    Model.individual(urlTail)
      .then((data) => res.status(200).send(data.rows[0]))
      .catch((error) => res.status(500).send(error.stack));
  },

  getList: function (req, res) {
    Model.list(req.query)
      .then((data) => res.status(200).send(data.rows))
      .catch((error) => res.status(500).send(error.stack));
  },


  getStyles: function (req, res) {
    const urlTail = (req.url).split('/')[2];
    Model.styles(urlTail)
      .then((data) => res.status(200).send(data.rows[0]))
      .catch((error) => res.status(500).send(error.stack));
  }

}


