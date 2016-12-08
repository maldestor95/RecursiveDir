# recursive-readdir

A simple Node module for recursively listing all files in a directory,
or in any subdirectories.


## Installation
`npm install https://github.com/maldestor95/RecursiveDir.git --save`

## Usage

### Parse
```javascript
var recursive = require('recursiveDir');

recursive.parse(path, function(err,files){
  // Files is an array of filename
  console.log(files);  
})
```

The output is accessible through ```recursive.list```

### Filtering
Two parameters possible:
* A string ```rr.filter("2015",callback)```
* An array ```rr.filter(["A","B"],callback)```

The output is accessible through ```recursive.filteredList```

### Clear filtering
As the filtering is cumulative, a way to clear it is using ```recursive.clearfilter();```

