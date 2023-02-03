function displaydataResponse(){
    location.href='./section0_loadmainpage.html';
    var url = "http://localhost:3000/save"; //확인을 눌렀을 때 작동하는 함수입니다
  
    var Diarytitle = document.getElementById("title").value;
    var Diarycontents = document.getElementById("msg").value;
    var Datedata = new Date().toString();
    

    url =
        url +
        "?" +
        "&diarytitle=" +
        Diarytitle +
        "&content" +
        Diarycontents +
        "&datedata=" +
        Datedata
        ;

    xhr.open("GET", url);
    xhr.send();

}