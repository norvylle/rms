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
	var que = 'select * from removals where '+req.query.key+" like '"+req.query.value+"%'";
	c.query(que,[],(err,result) =>{
		res.send(result);
	});
}

exports.insert = (req,res,next) => {
	var data = JSON.parse(req.query.state);

	c.query('insert into removals (course_no, student_no, last_name, first_name, college, sem_year,remove_date, grade,instructor,remarks) values(?,?,?,?,?,?,?,?,?,?)',[data.course_no,data.student_no,data.last_name,data.first_name,data.college,data.sem_year,data.remove_date,data.grade,data.instructor,data.remarks],(err,result) =>{
		console.log(result);
		res.send(result);
	});
}