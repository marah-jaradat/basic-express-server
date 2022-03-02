"use strict";
const server = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(server.app);

describe("testing my API server", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation();
  });

  it("should  get status 500", async () => {
    const response = await request.get("/person?name=");
    expect(response.status).toBe(500);
  });

  it("handles not found request", async () => {
    const response = await request.get("/wrongPath");
    expect(response.status).toEqual(404);
  });

  it("bad method", async () => {
    const response = await request.post("/");
    expect(response.status).toEqual(404);
  });

  it("testing /", async () => {
    const response = await request.get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("home route");
    // console.log(response.text);
  });

  it("testing /person", async () => {
    const response = await request.get("/person");
    // expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual("object");
  });
});
