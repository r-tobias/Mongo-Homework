const { del } = require('express/lib/application');
const db = require('./db');
const Employee = require('./models/employee.js');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const findAllEmployees = async () => {

    const allEmployees = await Employee.find();
    console.log(allEmployees)
}

const createOneEmployee = async () => {
    const newEmployee = new Employee({
        first_name: "Jenna", 
		last_name: "Marbles",
		email: "jm@gmail.com",
		job_title: "Electrical Engineer",
		address: {
			street: "5th Street",
        	city: "California City",
        	state: "CA",
    		zip: 49739
			}
    });
    await newEmployee.save();
    console.log("Created New Employee!");
}


const createManyEmployees = async () => {
    const manyEmployees = [
    {
        first_name: "Justin", 
		last_name: "Tim",
		email: "js@gmail.com",
		job_title: "Auditor",
		address: {
			street: "6th Street",
        	city: "Orlando",
        	state: "FL",
    		zip: "03732"
			}
    },
    {
        first_name: "Lana",
        last_name: "Del Ray",
        email: "ld@gmail.com",
        job_title: "Singer",
        address: {
            street: "15th Street",
            city: "Texas City",
            state: "TX",
            zip: "05843"
        }
    },
    {
        first_name: "Lanard",
        last_name: "Pel Raye",
        email: "lp@gmail.com",
        job_title: "Drummer",
        address: {
            street: "16th Street",
            city: "Texas City",
            state: "TX",
            zip: "05843"
        }
    },
]
  await Employee.insertMany(manyEmployees);
  console.log("Inserted Many New Employees!")
}
const updateEmployee = async () => {
    const updated = await Employee.updateOne({job_title: "Singer"}, { job_title: "Songwriter"});
    console.log(updated);
}
const deleteEmployee = async () => {
    const deleted = await Employee.deleteOne({first_name: "Anne"})
    console.log(deleted)

}
const employeeFullName = async () => {
    const employeeName = await Employee.find({}, {_id: 0, first_name: true, last_name: true});
    for(let i = 0; i < employeeName.length; i++){
    console.log((employeeName[i].first_name) +  ' ' + (employeeName[i].last_name));

    }
}

const run = async () => {
    // await findAllEmployees()
    // await createOneEmployee()
    // await createManyEmployees()
    // await updateEmployee();
    // await deleteEmployee();
    // await createOneEmployee()
    await employeeFullName()
    db.close()
}
run()