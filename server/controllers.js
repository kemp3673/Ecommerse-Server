const Model = require("./model.js");


module.exports = {

  getOne: function (req, res) {
    const urlTail = req.url;
    console.log(urlTail);
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    Model.individual(function(err, data) {
      if (err) {
        throw err;
      } else {
        res.send(data);
      }
    });
  },

  getList: function (req, res) {
    const urlTail = req.url;
    console.log(urlTail);
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    Model.list(function(err, data) {
      if (err) {
        throw err;
      } else {
        res.send(data);
      }
    });
  },


  getStyles: function (req, res) {
    const urlTail = req.url;
    console.log(urlTail);
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    Model.styles(function(err, data) {
      if (err) {
        throw err;
      } else {
        res.send(data);
      }
    });
  }

}


