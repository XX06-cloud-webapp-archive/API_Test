
// import
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

// Listener
app.listen(
    PORT,
    () => console.log(`Server ready at http://localhost:${PORT}`) 
);


/** */
// Endpoint GET
app.get('/store', (req,res) =>{
    res.status(200).send({
        product: "T-Shirt",
        size: "L",
        prize: 10.00,
        hasLogo: false
    })
});


// Endpoint POST
app.post('/store/:id', (req,res) =>{

    const{id} = req.params;
    const{logo} = req.body;

    if(!logo){
        res.status(418).send({message: "Wir brauchen ein LOGO!"})
    }

    res.send({
        tshirt: `T-Shirt with your ${logo} und ID of ${id}`
    })
});


