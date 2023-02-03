var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    if (mydataform.msg) {   //base_data와 base_time은 요구되는 형식이 있기 때문에 글자수가 요구되는 값에서 하나라도 벗어나면 alert를 띄웁니다

        var parsed = JSON.parse(this.responseText);
                  
    }
        
});
/*function displaydataResponse(){
    location.href='./section0_loadmainpage.html';
    var url = "http://localhost:3000/save"                //확인을 눌렀을 때 작동하는 함수입니다.

    var msg = document.getElementById('msg').value;

    url = url + "content : "+msg; 

    xhr.open("GET", url);
    xhr.send();
}*/

function writediaryResponse(){
    location.href='./prj_diary.html';
}
