const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');
dotenv.configDotenv();  

// Connect to DB
mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`).then(console.log("Connected to DB😮‍💨")).catch(err => console.log(err));

//middlewares
app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {
    try{
        const user = User.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        });
        res.json({status:'ok'})
    }
    catch(err){
        res.json({status:'error', error:"bsdk"})
    }
})
app.post('/api/login', async (req, res) => {
    
    const user = await User.findOne({email: req.body.email, password: req.body.password});

    if(user){

        const token = jwt.sign({
            email: user.email,
            name: user.name,
            phone: user.phone
        }, 'secretkey', {expiresIn: '1h'
        
        })
        res.json({status:'ok',user:token})
    }
    else{
        res.json({status:'error', error:'Invalid credentials'})
    
    }

})
app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.listen(process.env.PORT, () => {    // server running on port 3000
  console.log(`Server running on port ${process.env.PORT}`);
})