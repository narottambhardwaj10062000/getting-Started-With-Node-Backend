const express  = require("express");

const app = express();

const PORT = 8000;

app.get("/",(request, response) => {
    response.send("THIS IS MY HOME ROUTE")
    console.log("THIS IS MY HOME ROUTE")
})

app.listen(PORT, (error) => {
    if(!error){
        console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
    }
})