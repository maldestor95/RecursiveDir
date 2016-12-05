# recursive-readdir

A simple Node module for recursively listing all files in a directory,
or in any subdirectories.


## Installation
`npm install https://github.com/maldestor95/RecursiveDir.git --save`

## Usage


```javascript
var recursive = require('recursiveDir');

recursive.parse(path, function(err,files){
  // Files is an array of filename
  console.log(files);  
})
```

var rr=require('./index');
console.log(rr.list);
var print=function(e,d){
  // console.log(e,d);
  console.log(rr.filteredList);
};

var listeee=function(){
  rr.filter("2015",print);
  rr.filter(["2015","S1","data"],print);
  rr.clearfilter();
  rr.filter(["2016"],print);
  rr.clearfilter();
  rr.filter("09",print);
};

rr.parse('c:\\temp',listeee);

## API

