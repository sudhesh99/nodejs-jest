const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");



beforeEach(async () => {
  await mongoose.connect("mongodb://localhost:27017/users");
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /users", () => {
  it("GET all users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("POST /users", () => {
  it("POST A PRODUCT", async () => {
    const res = await request(app).post("/users").send({
      name: "Sudhesh",
      email: "sudheshholla15@gmail.com",
      age: 23,
    });
    expect(res.statusCode).toBe(201);
  });
});

describe("PUT /users/:id", () => {
  it("UPDATE A USER", async () => {
    const res = await request(app)
      .patch("/users/63c02e9c3f1083fe65ca2c55")
      .send({
        name: "Sudhesh",
        email: "sudhesholla15@gmail.com",
        age: "23",
      });
    expect(res.statusCode).toBe(200);
  });
});
