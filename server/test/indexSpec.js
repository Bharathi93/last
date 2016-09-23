var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("should handle the delete", function(done){
    url
        .delete("/movie/delfav")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          //expect(res.text).to.be.equal("Hello!");
           res.text.should.be.equal("Deleted");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the second route", function(err){
  it("should handle the put", function(done){
    url
        .put("/movie/upfav")
        .expect(200)
        .end(function(err,res){
          if (err) {
                throw err;
          }
          //expect(res.text).to.be.equal("Hello!");
           res.text.should.be.equal("Updated");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });

  });
});

describe("Testing the third route", function(err){
  it("should handle the post", function(done){
    url
        .post("/movie/favmovie")
        .expect(200)
        .end(function(err,res){
          if (err) {
                throw err;
          }
          //expect(res.text).to.be.equal("Hello!");
           res.text.should.be.equal('Movie added');
          //assert(res.text == "Hello!","Test has failed");
          done();
        });

  });
});

describe("Testing the fourth route", function(err){
  it("should handle and send the JSON data Part 1", function(done){
    url
        .get("/movie/allfav")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj[0].Title.should.be.equal("The Queen");
          done();
        });

  });
});
