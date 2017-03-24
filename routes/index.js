var express = require('express');
var indexRouter = express.Router();

var router = function(nav, model) {
  /* GET home page. */
  indexRouter.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', data: nav });
  });

  indexRouter.get('/data', function(req,res){

    var test = new model({title:'Hello'});

    test.save(function(err, test) {
      if (err){
        console.log(err);
      }else{
        model.find(function(err,books){
          if (err) {
            console.log(err);
          }else {
            res.json(books);
          }
        });
      }
    });
  });

  indexRouter.get('/knockout', function(req,res){
    res.render('knockout',{title:'Knockout'});
  });

  return indexRouter;
};

module.exports = router;
