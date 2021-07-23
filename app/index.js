const  express = require("express");
const redis = require('redis');

const client = redis.createClient({
	host: 'redis'
});
client.set('visits', 0);

const app = express();
app.get('/', (req,res)=>{
	client.get('visits', (error, visits)=>{
		res.send('Number of visits: '+ visits);
		client.set('visits', parseInt(visits)+1);
	});
});

app.listen(8080, ()=>{
	console.log("listening to port 8080");
});
