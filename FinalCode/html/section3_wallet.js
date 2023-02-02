function show1(){                       //show1 함수. 소비 입력란에 사용된다. 숫자가 아니면 alert를 울린다. 숫자이면 elementID가 use인 곳의 html 안에 값을 넣는다
    var str = "" ;
    str = form1.txt1.value ;
    if (isNaN(str)){
        alert("숫자만 가능합니다");
            form1.txt1.focus();
            return;
    }
    else{
        document.getElementById("use").innerHTML = str; 
    }
}
function show2(){                    //show2 함수. 소비 입력 함수와 동일한 방식으로 작동합니다.
    var str = "" ;
    str = form2.txt2.value ;
    if (isNaN(str)){
        alert("숫자만 가능합니다");
            form2.txt2.focus();
            return;
    }
    else{
        document.getElementById("earn").innerHTML = str;
    }                  
}

function erase1(){                                  //취소 버튼을 눌렀을 때 작동하는 함수. 
    document.getElementById("use").innerHTML = 0;   //값에 0을 입력합니다. erase1은 소비. erase2는 수입에 관계있는 함수입니다.
}
function erase2(){
    document.getElementById("earn").innerHTML = 0;
}

function result(){
    var str1 = parseInt(form1.txt1.value)*(-1);               //완료를 누르면 작동합니다. 만약 소비 입력란과 소득 입력란 중 하나라도 비어있으면 alert가 뜹니다.
    var str2 = parseInt(form2.txt2.value);                    //소비 값*(-1)의 값과 소득 값을 더해서 str3에 넣습니다. 이는 오늘 지갑이 플러스 인지 마이너스인지 보여줍니다.
    var str3 = str1+str2;

    if (isNaN(str3)&(form1.txt1.value.length==0|form2.txt2.value.length==0)){   //소비와 소득 중 하나라도 비어있으면 alert가 뜨게 하는 부분입니다.
        alert("칸을 비울 수 없습니다. 0원이면 0을 입력해주세요")
        form1.txt.focus();
        return;
    }
    else{
    document.getElementById("total_use").innerHTML = str3;    //소비와 소득란이 비어있지 않으면 소득-소비 한 값(str3)을 ID가 total_use인 곳에 넣습니다.
    }
}

function change_theme(){
    const header = document.getElementById('h2');
    header.style.cssText = ' background color : black';
}
