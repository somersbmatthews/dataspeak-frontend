const express = require('express');
const app = express();

app.use(express.static('public'))
app.use('/scripts', express.static(__dirname + '/node_modules/fusioncharts/'))
// app.use('/scripts', express.static( __dirname + '/node_modules/fusioncharts/'));

const PORT = 3001;
app.get('*', (req, res)=>{
})
app.listen(PORT, ()=>{
	let now = new Date(Date.now())
	console.log(now.toTimeString()+ "frontend started on port " + PORT)
})