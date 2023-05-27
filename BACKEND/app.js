const express=require('express')
const app=express()
const sequelize=require('./util/database')
const bodyParser=require('body-parser')
const userRoute=require('./router/userRoute')
const cors=require('cors')
app.use(cors())
app.use(bodyParser.json());

app.use(userRoute)

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
  });

sequelize.sync().then((result) => {
    const hostname = '127.0.0.1';
    const port = 3000;
    app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
}).catch((err) => {
    console.log(err);
});