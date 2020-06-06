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



app.get('/', (req, res) =>{
    res.send('Hello World!')
})

 
app.post('/exportOrders', (req, res) =>{
    const order = req.body.Orders;
    const exportType = req.body.exportType
    const currentTimeStamp = new Date().toISOString().replace(/[\/\\:]/g, "_");
    const fileName = `/documents/orderResponse${currentTimeStamp}.${exportType}`
    const filePath = path.join(__dirname + fileName);
    jsonexport(order, function(err, exportType){
        if (err) return console.error(err);
        console.log(exportType);
        fs.writeFile(filePath, exportType, function(err) {
            if(err) {
                res.send(err);
            }
        });
        res.send(`${fileName}`);
    });
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))