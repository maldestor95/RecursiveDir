var recursive = require('recursive-readdir');
var _=require('underscore');
var path=require('path');


var RecursiveDir={

 list:null,
 filteredList:null,

 parse:function(path, cb){
 // parse the directory with all the files 
 // and create a table in RecursiveDir.list
 // return null if success or an error
  recursive(path, function (err, files) {
    
    if (err!=null) {
    console.log(err);
    cb(JSON.stringify(err));
    }
    else {
      RecursiveDir.list=files;
      filteredList=files;
      cb(err,files);
    }
    });    
 }, 

 filter:function(filter,cb){
 // sort the list 
  if (RecursiveDir.list!=null){
    console.log(_.filter(RecursiveDir.list,function(k){ return k.match(filter)!=null}))
  }
  cb(null,RecursiveDir.list);
 },

 clearfilter:function(cb){

 }
};


module.exports = RecursiveDir
