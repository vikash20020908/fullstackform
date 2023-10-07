const express = require ("express");
const app = express();

app.get("/" , (req , resp) => {
    resp.send("this is full connect")
} )

app.listen(5000 , () => {
    console.log("connected")
})
