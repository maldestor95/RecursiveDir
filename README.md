# recursive-readdir

A simple Node module for recursively listing all files in a directory,
or in any subdirectories.


## Installation


## Usage


```javascript
var recursive = require('recursiveDir');

recursive.parse(path, function(err,files){
  // Files is an array of filename
  console.log(files);  
})
});
```

