var Client = require('mariasql');

var c = new Client({
  host: 'localhost',
  user: 'root',
  password: '',
  db: 'records'
});


exports.viewall = (req,res,next) => {
	var que = 'select * from removals';
	c.query(que,[],(err,result) =>{
		res.send(result);
	});
}

exports.search = (req,res,next) => {
	var que = 'select * from removals where '+req.query.key+" like "+req.query.value+"%";
	c.query(que,[],(err,result) =>{
		res.send(result);
	});
}