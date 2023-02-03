const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');

app.use(express.static('html'))

var mysql = require('mysql')
var dbInfo = mysql.createConnection({
  host : "127.0.0.1",
  port : 3306,
  user : "root",
  password : "hyehye66",
  database : "diarydb"
});

dbInfo.connect();

dbInfo.query("SELECT * FROM diary",function(error, results, fields){
            if (error) console.error('mysql 연결에러 : '+error);
            else console.log('records: ', results)  });

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/save', function(req, res){
  dbInfo.connect();
  const date = new Date();
  var Diarytitle = req.query.diarytitle
  var Diarycontents = req.query.content
  var Datedata = req.query.datedata
  var Picdata = req.query.upload

  dbInfo.query("INSERT INTO diary (title, content, datedata) VALUES ('"+Diarytitle+"', '"+Diarycontents+"', '"+Datedata+"')",
  function(error, result, fields) {
    if(error) {
      res.send('err : '+error)
    }
    else {
      console.log(result.body)
      res.send('success create write title: '+Diarytitle+'content: '+Diarycontents+'Datedata: '+Datedata)
    }

  })
})



app.get('/weather', function(req,res){
  var request = require('request');
  var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=IsMR0SxDXXmlx3jausqz27YjOleZxO0Cnb0%2FJtDfjh%2FyKAbw4wQJnIlwFsqbY7k2seWrytHTFMTseRQ2yV2adg%3D%3D';
  
  var base_date = req.query.base_date;
  var base_time = req.query.base_time;
  var nx = req.query.nx;
  var ny = req.query.ny;
  var dataType = req.query.dataType;

  url = url + "&base_date=" + base_date +"&base_time=" + base_time +"&nx=" + nx +"&ny=" + ny +"&dataType=" + dataType;
  
  var options = {
    'method': 'GET',
    'url': url,
    'headers': {
      'Cookie': 'JSESSIONID=fhpKiyB8zcc7eDbsDzDyYKEEANYWj714aryiTbsQH6BKiaAjbnE1RS44mTA3lN4N.amV1c19kb21haW4vbmV3c2t5Mw=='
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
})

app.get('/Path1', function (req, res) {
        res.send("GET Path1");
    })
app.get('/Path2', function(req,res) {
        res.send("GET Path2 : " + Date());
    })
app.put('/Path1', function (req, res) { 
        res.send("PUT Path1");
    })


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}/prj_diary.html`))