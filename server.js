const express = require("express");
const faker= require("faker")
const app = express();


// req is short for request
// res is short for response

let id=1
function updatedid(){
  id+=1
  return id
}
class User{
  constructor(){
    this._id=updatedid();
    this.firstName=faker.name.firstName();
    this.lastName=faker.name.lastName();
    this.phoneNumber=faker.phone.phoneNumber();
    this.email=faker.internet.email();
    this.password=faker.internet.password();
  }
}

class Company{
  constructor(){
    this._id=updatedid();
    this.name=faker.company.companyName();
    this.address=faker.address.streetName()+", "+faker.address.city()+", "+faker.address.state()+", "+faker.address.zipCode() +", " + faker.address.country()
  }
}


app.get("/api", (req, res) => {
  res.json("This is the home page");
});
app.get("/api/users/new", (req, res) => {
  res.json(new User());
});
app.get("/api/companies/new", (req, res) => {
  res.json(new Company());
});
app.get("/api/company", (req, res) => {
  res.json({
    company: new Company(),
    user: new User()})
  
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
