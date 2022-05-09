import express from 'express';
import cors from 'cors';

const port = 3001;

const app = express();
app.use(cors());


app.get('/employees', (req,res)=> {
    res.json([{
        id: 1,
        name: 'John',
        age: 30,
        position: 'Manager'
    },
    {
        id: 2,
        name: 'Jane',
        age: 25,
        position: 'Developer'
    },
])
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})