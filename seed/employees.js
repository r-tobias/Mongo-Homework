const db = require('../db')
const Employee = require('../models/employee')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const employees = [
        {
            first_name: "Miguel",
            last_name: "Lo",
            email: "MiguelLo@YOLO.com",
            job_title: "Software Engineering Instructor",
            address: {
                street: "5th Ave",
                city: "New York",
                state: "NY",
                zip: "10010"
            }
        },
        {
            first_name: "John",
            last_name: "Santos",
            email: "js@gmail.com",
            job_title: "Software Engineer",
            address: {
                street: "1st Street",
                city: "Jersey City",
                state: "NJ",
                zip: "07306"
            }
        },
        {
            first_name: "Anne",
            last_name: "Santana",
            email: "as@gmail.com",
            job_title: "Test Engineer",
            address: {
                street: "2nd Street",
                city: "California City",
                state: "CA",
                zip: "03043"
            }
        },
        {
            first_name: "Johnasse",
            last_name: "Pantosa",
            email: "jp@gmail.com",
            job_title: "QA Engineer",
            address: {
                street: "3rd Street",
                city: "Texas City",
                state: "TX",
                zip: "05843"
            }
        },
        {
            first_name: "Jessica",
            last_name: "May",
            email: "jm@gmail.com",
            job_title: "System Engineer",
            address: {
                street: "4th Street",
                city: "Jersey City",
                state: "NJ",
                zip: "07306"
            }
        },
   ]

   await Employee.insertMany(employees);
   console.log("Created Employees!");
}


const run = async () => {
    await main();
    db.close();
};

run();