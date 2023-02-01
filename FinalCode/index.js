const express = require('express')
const app = express()
const port = 3000
var dbConfig = require('./db.js');
var conn = dbConfig.init();

dbConfig.connect(conn);

app.use(express.static('html'))


app.get('/save', function(req, res){

  var Diarytitle = req.body.title
  var Diarycontents = req.body.contents

  res.send('title : ' + Diarytitle+'contents'+Diarycontents)
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