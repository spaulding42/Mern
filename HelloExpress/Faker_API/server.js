// import {faker } from '@faker-js/faker'
const {faker} = require("@faker-js/faker")
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newFake = {
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),

    }
    return newFake
}

const createCompany = () => {
    const newFake = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    }
    return newFake
}


    
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser()
    res.json(newFakeUser);
});
app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany()
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
    const newFakeUser = createUser()
    const newFakeCompany = createCompany()
    res.json({newFakeUser, newFakeCompany});
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );