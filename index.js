'use strict'
/**
 * Includes files
 */
var _=require('underscore');
var path=require('path');
var fs=require('fs');
var recursive=require('recursive-readdir');

/**
 * RecursiveDir Function
 * Objective scan recursively through a directory and allow filtering on the list 
 * to match an array list
 * @private list : array containing the list of all files found during the search
 * @private filteredList : array after using @function filter
 */
 var RecursiveDir={

// private
 list:null,
 filteredList:null,

/**
 * parse a folder recursively
 * @param  {string}   searchpath [directory to look into]
 * @param  {Function} callback   [callback ]
 * @return {[type]}              [return an error (null if any) and a array containing the list of files]
 */
 parse:function(searchpath ,callback){
   recursive(searchpath, function (err, files) {
    if (err) {
      callback(err);
    }
    else {
      RecursiveDir.list=files;
      RecursiveDir.filteredList=files;
      return callback(null,files);
    }
    });    
 },

/**
 * Cumulative Filtering
 * Pre-requisite: run a parse function previously to create a list
 * @param  {String or Array}   filter   [if empty; doesn't reduce the filtered list]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
 filter:function(filter,callback){
 // sort the list 
  var searchfilter=null;

  // private function to perform the filtering
  var searchfunction=function(sf,cb){
    if (RecursiveDir.list!=null){
      _.each(sf,function(data){
        // console.log( data);
        RecursiveDir.filteredList=_.filter(RecursiveDir.filteredList,
            function(k){return k.match(data)!=null;}
        );
      });     
      cb (null,RecursiveDir.filteredList);
    }   
  };

  // main loop; decision taken wether the filter is a string or an array
  if (_.isString(filter)){
    searchfilter=[filter];
    searchfunction(searchfilter,callback);
  }
  else if (_.isArray(filter)){
    searchfilter=filter;
    searchfunction(searchfilter,callback);
  }
 },

/**
 * Re-init of the filter
 */
 clearfilter:function(){
  RecursiveDir.filteredList=RecursiveDir.list;
  }
};

module.exports=RecursiveDir;
