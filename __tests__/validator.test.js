"use strict";

const validator = require("../src/midlleware/validator.js");
const supertest = require("supertest");

const request = supertest(server.app);

describe("testing validator midlleware", () => {
  it("testing/", async () => {
    const response = await request.get("/person");
    expect(typeof response.body).toEqual("object");
  });

  it("test noName", async () => {
    const response = await request.get("/person");
    expect(typeof response.body).toEqual("object");
  });
  it("test next", () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
//   it("test next", () => {
//     validator(req,res, next);
//     expect(next).toHaveBeenCalled();

//   });
//   it("test next", () => {
//     validator(req,res, next);
//     expect(next).toHaveBeenCalled();

//   });
// });
