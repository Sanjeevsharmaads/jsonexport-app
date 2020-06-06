const express = require('express')
const jsonexport = require('jsonexport');
const app = express()
const port = 3000
const fs = require('fs');
const bodyParser = require('body-parser')
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const contacts = [{
    name: 'Bob',
    lastname: 'Smith'
},{
    name: 'James',
    lastname: 'David'
},{
    name: 'Robert',
    lastname: 'Miller'
},{
    name: 'David',
    lastname: 'Martin'
}];   


 
app.get('/', (req, res) =>{
    res.send('Hello World!')
    jsonexport(contacts, function(err, csv){
        if (err) return console.error(err);
        console.log(csv);
        fs.writeFile("C:/Users/Ribbon/Downloads/code/jsonexport-app/contacts.csv", csv, function(err) {
            if(err) {}
        });
        return "contacts.csv";
    });
})

 
app.post('/exportOrders', (req, res) =>{
    const jsonData = req.body.Orders;
    const currentTimeStamp = new Date().toISOString().replace(/[\/\\:]/g, "_");
    const fileName = `/documents/orderResponse${currentTimeStamp}.csv`
    const filePath = path.join(__dirname + fileName);
    console.log(filePath ,"Req");
    jsonexport(jsonData, function(err, csv){
        if (err) return console.error(err);
        console.log(csv);
        fs.writeFile(filePath, csv, function(err) {
            if(err) {
                res.send(err);
            }
        });
        res.send(`${fileName}`);
    });
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))