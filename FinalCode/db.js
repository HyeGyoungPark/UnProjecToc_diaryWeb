var mysql = require('mysql')
var dbInfo = {
  host : "127.0.0.1",
  port : 3306,
  user : "root",
  password : "hyehye66",
  database : "diarydb"
};

module.exports = {
    init: function () {
        return mysql.createConnection(dbInfo);
    },
    connect: function(conn) {
        conn.connect(function(err){
            if(err) console.error('mysql 연결에러 : '+err);
            else console.log('mysql 연결 성공');
        });
    }
};