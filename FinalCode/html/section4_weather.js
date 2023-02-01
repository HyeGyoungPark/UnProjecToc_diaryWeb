var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    if (myform.base_date.value.length==8 & myform.base_time.value.length==4) {   //base_data와 base_time은 요구되는 형식이 있기 때문에 글자수가 요구되는 값에서 하나라도 벗어나면 alert를 띄웁니다
        if(myform.base_time.value==0200| myform.base_time.value==0500 | myform.base_time.value==0800 | myform.base_time.value==1100 | myform.base_time.value==1400 | myform.base_time.value==1700 | myform.base_time.value==2000 |myform.base_time.value==2300){
                                                                                //위의 값은 api를 사용함에 있어서 base_time도 정해진 시간대에서만 작동이 됩니다. 따라서 요구되는 시간대가 아닐 경우 alert를 띄웁니다.
            if (this.readyState === 4) {

                var parsed = JSON.parse(this.responseText);
                var tbl = document.getElementById('tbl0');            
                for(i in parsed.response.body.items.item){
                    if (0<i & i<4){                                           //사용하고자 하는 데이터는 i 값이 1에서 3까지 입니다. 그래서 조건을 걸었습니다.

                        var cuur = parsed.response.body.items.item[i].category;

                        var caaar = parsed.response.body.items.item[i].fcstValue;

                        var tr = document.createElement('tr');
                        var td3 = document.createElement('td');
                        var td6 = document.createElement('td');

                        td3.innerHTML = JSON.stringify(cuur);
                        td6.innerHTML = JSON.stringify(caaar);

                        tr.appendChild(td3);
                        tbl.appendChild(tr)
                        
                        tr.appendChild(td6);
                        tbl.appendChild(tr)
                        }
                    else{
                        i++                                                    //i가 원하는 범위 밖이면 i++로 넘어가게끔 해서 원하는 값만 불러왔습니다.
                    }
                }
            }
        }
        else{
            alert("발표시간은 이미 지나간 시간, 그리고 0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300 에서 골라주세요");   //위에서 base_time의 요구되는 시간대가 아닐 경우 뜨는 alert 입니다.
            myform.base_time.focus();
            return;  

        }
    }
    else{
        if (myform.base_date.value.length!=8){
            alert("발표일자를 알맞은 형식으로 입력해주세요");      //base_date의 글자수가 맞지 않을 경우 뜨는 alert 입니다.
            myform.base_date.focus();
            return;  
        }

        if (myform.base_time.value.length!=4){
            alert("발표시각을 알맞은 형식으로 입력해주세요");      //base_time의 글자수가 맞지 않을 경우 뜨는 alert 입니다.
            myform.base_time.focus();
            return;
        }
        

    }
});

function displayResponse(){
    var url = "http://localhost:3000/weather"                  //확인을 눌렀을 때 작동하는 함수입니다.

    var base_date = document.getElementById('base_date').value;
    var base_time = document.getElementById('base_time').value;
    var nx = document.getElementById('nx').value;
    var ny = document.getElementById('ny').value;
    var dataType = document.getElementById('dataType').value;

    url = url + "?" + "&base_date="+base_date +"&base_time="+base_time +"&nx="+nx +"&ny="+ny +"&dataType="+dataType 

    xhr.open("GET", url);
    xhr.send();
}
