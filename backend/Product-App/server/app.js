const express = require('express');
const port = 3001;
const app = express();
const products = [{
    id : 1001,
    title : 'Mobile',
    price : 10000,
    quantity : 10
},
{
    id : 1002,
    title : 'laptop',
    price : '50000',
    quantity : 5
}];

app.get('/products', (req, res) => {
    res.status(200);
    res.json(products);
});
app.use(express.json());

app.get('/product/:id', (req, res) => {
    const pid = req.params.id;
    const index = products.findIndex(ind => ind.id == pid);
    if(index == -1){
        res.status(400).json({status: 'fail', message: 'Product not found'});
    }else{
        res.status(200).json({status: 'success', product: products[index]});
    }
});
app.post('/product', (req, res) => {
    const {title, price, quantity} = req.body;
    if(!title || !price || !quantity){
        res.status(400).json({status: 'fail', message: 'all fields required'});
    }else{
        const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1001;
        const newProduct = {
            newId, title, price, quantity
        };
        products.push(newProduct);
        res.status(201).json({status: 'success', message: 'Product added successfully', newProduct});
    }
});

app.patch("/editproduct/:id", (req, res) => {
    const pid = req.params.id;
    const {title, price, quantity} = req.body;
    if(!title || !price || !quantity){
        res.status(400).json({status: 'fail', message: 'All fields required except id'});
    }else{
        const index = products.findIndex(ind => ind.id == pid);
        products[index].title = title;
        products[index].price = price;
        products[index].quantity = quantity;
        res.status(200).json({status: 'success', message: 'data edited successfully', data: products[index]});
    }
});
app.delete("/deleteproduct/:id", (req, res) => {
    const pid = req.params.id;
    const index = products.findIndex(ind => ind.id == pid);
    if(index == -1){
        res.status(400).json({status: 'fail', message: 'id not found'});
    }else{
        products.splice(index, 1);
        res.status(200).json({status: 'success', message: 'data deleted successfully'});
    }
});

app.listen(port, (err) => {
    try{
        if(err) throw err;
        else console.log(`Server is running on port ${port}`);
    }
    catch(err){
        console.log('server error: ', err.message);
    }
})
