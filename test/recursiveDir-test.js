/* eslint-env mocha */
var chai = require('chai');
var assert=chai.assert;
var expect=chai.expect;
var p = require('path');
var recursive = require('../index');
var _=require('underscore');

describe('recursive directory :', function() {
  describe('parse test', function() {

  it('should report an error if directory doesn\'t exist',function(done){
    recursive.parse('x:\\',function(e,d){
      expect(e).to.be.an('error');
      done();
    });
  }),
  it('should find all files in testdir',function(done){
    recursive.parse('./test/testdir',function(e,d){
      expect(e).to.be.a('null');
      // console.log(d);
      expect(d).to.be.an('array');
      var l=[
        'test\\testdir\\c.txt',
        'test\\testdir\\d.txt',
        'test\\testdir\\a\\beans',
        'test\\testdir\\a\\a',
        'test\\testdir\\b\\123',
        'test\\testdir\\b\\b\\hurp-durp'
        ];
      expect(_.difference(d,l)).to.deep.equal([]); 
      done();
    });
  }); //end of it
  });

describe('Filtering', function() {
  it('should filtering one string',function(done){
    recursive.parse('./test/testdir',function(e,d){
      recursive.filter('beans',function(err,data){
        expected_output=['test\\testdir\\a\\beans'];
        expect(_.difference(recursive.filteredList,expected_output)).to.deep.equal([]);
        done();
      });
    });
  }), // end of it
  
  it('should filtering one array with one value',function(done){
    recursive.parse('./test/testdir',function(e,d){
      recursive.filter(['a'],function(err,data){
        // expected_output=['test\\testdir\\a\\beans'];
        expect(recursive.filteredList).to.have.lengthOf(2);
        done();
      });
    });
  }), // end of it
  
  it('should filtering one array with two value',function(done){
    recursive.parse('./test/testdir',function(e,d){
      recursive.filter(['a','ns'],function(err,data){
        expect(recursive.filteredList).to.have.lengthOf(1);
        expect(recursive.filteredList).to.be.deep.equal(['test\\testdir\\a\\beans']);
        done();
      });
    });
  }), // end of it

  it('should clear filtering',function(done){
      recursive.clearfilter();
      expect(recursive.filteredList).to.be.deep.equal(recursive.list);
      done();
  }) // end of it

});

});

