const express = require('express');
const app = express();

app.use(express.static('public'))

const PORT = 3001;
app.get('*', (req, res)=>{
	console.log('hey')
	res.send("hey6")
})
app.listen(PORT, ()=>{
	let now = new Date(Date.now())
	console.log(now.toTimeString()+ ":asdfasdfasdfdataspeak frontend started on port " + PORT)
})