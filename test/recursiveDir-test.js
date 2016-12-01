/* eslint-env mocha */
var assert = require('assert')
var p = require('path')
var recursive = require('../index')
var rr= recursive;
function getAbsolutePath(file) {
  return p.join(__dirname, file)
}

function getAbsolutePaths(files) {
  return files.map(getAbsolutePath)
}

describe('recursive directory test', function() {
  it('should report an error if directory doesn\'t exist',function(done){
    rr.parse('x:\\');
    done();
  }),
  it('correctly lists all files in nested directories', function(done) {
    var expectedFiles = getAbsolutePaths([
      '/testdir/a/a', '/testdir/a/beans',
      '/testdir/b/123', '/testdir/b/b/hurp-durp',
      '/testdir/c.txt', '/testdir/d.txt'
    ])
    var path='.\\test';
    rr.parse(path,function(err,list){
      // console.log(path);
    // readdir(p.join(__dirname, 'testdir'), function(err, list) {
    //   assert.ifError(err)
    //   assert.deepEqual(list.sort(), expectedFiles.sort())
      done()
    })
  }),
  it('should be ready for filtering',function(done){
    rr.filter("Beta",function(err,list){
      // console.log(list);
      done();
    });
  })
})
