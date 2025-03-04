const express = require('express');
const app = express();
const fs = require('fs/promises');
const port = 3002;
const users = [];
const m1 = (req, res, next) => {
    const age = req.query.age;
    if(!age){
        res.status(400).send('enter age in query');
    }else{
        if(age < 18){
            res.status(401).send('user not authorize');
        }else{
            next();
        }
    }
}
//app.use(m1);
app.use(express.json());

app.get('/users', async(req, res) => {
    try{
        const data = await fs.readFile('./users.json', 'utf-8');
        res.status(200).json(JSON.parse(data));
    }catch(err){
        res.status(400).send('file not found');
    }
});
app.get('/user/:id', (req, res) => {
    const uid = req.params.id;
    const index = users.findIndex(ind => ind.id == uid);
    if(index == -1){
        res.status(400).json({status: 'fail', message: 'user not found'});
    }else{
        res.status(200).json({status: 'success', message: 'user found', data: users[index]});
    }
});
app.post('/createuser',m1 , async(req, res) => {
    const {name, email} = req.body;
    const newId = Date.now();
    const newUser = {
        id: newId, name, email
    };
    const data = await fs.readFile('./users.json', 'utf-8');
    users.push(JSON.parse(data));
    users.push(newUser);
    await fs.writeFile('./users.json', JSON.stringify(users));
    res.status(201).json({status: 'success', message: 'user created successfully', data: newUser});
});
app.patch('/edituser/:id', (req, res) => {
    const uid = req.params.id;
    const {name, email} = req.body;
    if(!name || !email){
        res.status(400).json({status: 'fail', message: 'all fields required'});
    }else{
        const index = users.findIndex(ind => ind.id == uid);
        if(index == -1){
            res.status(400).json({status: 'fail', message: 'user not found'});
        }else{
            users[index].name = name;
            users[index].email = email;
            res.status(200).json({status: 'success', message: 'user edited successfully', data: users[index]});
        }
    }
    
});
app.delete('/deleteuser/:id', (req, res) => {
    const uid = req.params.id;
    const index = users.findIndex(ind => ind.id == uid);
    if(index == -1){
        res.status(400).json({status: 'fail', message: 'user not found'});
    }else{
        const deleted_data = users.splice(index, 1);
        res.status(200).json({status: 'success', message: 'user deleted successfully', data: deleted_data});
    }
});

app.listen(port, () => {
    console.log('server running on ', port);
});