var express = require('express');
var http = require('http');
var app = express();

app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set ('ip',process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('view engine', 'jade');
app.use('views', express.static(__dirname +' /views'));
app.use('/img', express.static(__dirname + '/public/img'));

app.get('/styles.css', function(req, res){
	res.sendFile(__dirname + '/public/styles.css');
});
app.get('/trang-chu', function(req, res){
	res.render('trang-chu', {cat: 'trang-chu'});
});

app.get('/gioi-thieu', function(req, res){
	res.render('gioi-thieu', {cat: 'gioi-thieu'});
});
app.get('/dich-vu', function(req, res){
	res.render('dich-vu', {cat: 'dich-vu'});
});

app.get('/san-pham', function(req, res){
	res.render('san-pham/index', {cat: 'san-pham'});
});
app.get('/san-pham/:name', function(req, res){
	var model = {cat: 'san-pham', item:req.params.name };
	switch(req.params.name){
		case 'ors':
			res.render('san-pham/ors', model);	
			break;
		case 'home-trading':
			res.render('san-pham/home-trading', model);
			break
		case 'gateway':
			res.render('san-pham/gateway', model);
			break;
		case 'back-office':
			res.render('san-pham/back-office', model);
			break;
		default:
			res.send("Invalid URL");
			break;

	};
});

app.get('/lien-he', function(req, res){
	res.render('lien-he',{cat: 'lien-he'});
});
app.get('/lanh-dao', function(req, res){
	res.render('lanh-dao', {cat: 'lanh-dao'});
});
app.get('/why-us', function(req, res){
	res.render('why-us', {cat: 'why-us'});
});
app.get('/', function(req, res){
	res.redirect('/trang-chu');
});
http.createServer(app).listen(app.get('port'), function(){
	console.log('Start Successfully');
});
