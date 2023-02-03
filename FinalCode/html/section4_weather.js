var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
  if (
    (myform.base_date.value.length == 8) &
    (document.getElementById("base_time").value.length == 4)
  ) {
    //base_data와 base_time은 요구되는 형식이 있기 때문에 글자수가 요구되는 값에서 하나라도 벗어나면 alert를 띄웁니다
    if (
      (document.getElementById("base_time").value == "0200") |
      (document.getElementById("base_time").value == "0500") |
      (document.getElementById("base_time").value == "0800") |
      (document.getElementById("base_time").value == "1100") |
      (document.getElementById("base_time").value == "1400") |
      (document.getElementById("base_time").value == "1700") |
      (document.getElementById("base_time").value == "2000") |
      (document.getElementById("base_time").value == "2300")
    ) {
      //위의 값은 api를 사용함에 있어서 base_time도 정해진 시간대에서만 작동이 됩니다. 따라서 요구되는 시간대가 아닐 경우 alert를 띄웁니다.
      if (this.readyState === 4) {
        var parsed = JSON.parse(this.responseText);
        var tbl = document.getElementById("tbl0");
        for (i in parsed.response.body.items.item) {
          var weatherTime = parsed.response.body.items.item[i].base_time;
          var weatherCategory = parsed.response.body.items.item[i].category;
          var weatherFcstValue = parsed.response.body.items.item[i].fcstValue;
          if (weatherCategory == "PTY") {
            if (weatherFcstValue == "0") {
              const element = document.getElementById("weather_icon");
              element.innerHTML = "clear_day";
              const explain = document.getElementById("weather_explain");
              explain.innerHTML = "비나 눈이 오지 않는 맑은 날씨 :) ";
            } else if (weatherFcstValue == "1") {
              const element = document.getElementById("weather_icon");
              element.innerHTML = "rainy";
              const explain = document.getElementById("weather_explain");
              explain.innerHTML = "비가 내리는 감성적인 날씨 :) ";
            } else if (weatherFcstValue == "2") {
              const element = document.getElementById("weather_icon");
              element.innerHTML = "water_drop";
              const explain = document.getElementById("weather_explain");
              explain.innerHTML = "눈과 비가 같이 내리는 날씨 :) ";
            } else if (weatherFcstValue == "3") {
              const element = document.getElementById("weather_icon");
              element.innerHTML = "weather_snowy";
              const explain = document.getElementById("weather_explain");
              explain.innerHTML = "눈이 오는 낭만적인 날씨 :) ";
            } else if (weatherFcstValue == "4") {
              const element = document.getElementById("weather_icon");
              element.innerHTML = "umbrella";
              const explain = document.getElementById("weather_explain");
              explain.innerHTML = "소나기가 내린 몽환적인 날씨 :) ";
            } else {
            }

            // alert("changed!");
            break;
          } else {
            i++; //i가 원하는 범위 밖이면 i++로 넘어가게끔 해서 원하는 값만 불러왔습니다.
          }
        }
      }
    } else {
      alert(
        "발표시간은 이미 지나간 시간, 그리고 0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300 에서 골라주세요"
      ); //위에서 base_time의 요구되는 시간대가 아닐 경우 뜨는 alert 입니다.
      myform.base_time.focus();
      return;
    }
  } else {
    if (myform.base_date.value.length != 8) {
      alert("발표일자를 알맞은 형식으로 입력해주세요"); //base_date의 글자수가 맞지 않을 경우 뜨는 alert 입니다.
      myform.base_date.focus();
      return;
    }
    if (document.getElementById("base_time").value.length != 4) {
      alert("발표시각을 알맞은 형식으로 입력해주세요"); //base_time의 글자수가 맞지 않을 경우 뜨는 alert 입니다.
      myform.base_time.focus();
      return;
    }
  }
});

function displayResponse() {
  var url = "http://localhost:3000/weather"; //확인을 눌렀을 때 작동하는 함수입니다
  var korea = [
    { region: "강원도", nx: 92, ny: 131 },
    { region: "서울특별시", nx: 60, ny: 127 },
    { region: "인천광역시", nx: 55, ny: 124 },
    { region: "경기도", nx: 60, ny: 121 },
    { region: "경상북도", nx: 91, ny: 106 },
    { region: "충청북도", nx: 69, ny: 106 },
    { region: "충청남도", nx: 68, ny: 100 },
    { region: "경상남도", nx: 90, ny: 77 },
    { region: "제주도", nx: 52, ny: 38 },
    { region: "부산광역시", nx: 98, ny: 76 },
    { region: "대구광역시", nx: 89, ny: 90 },
    { region: "광주광역시", nx: 58, ny: 74 },
    { region: "울산광역시", nx: 102, ny: 84 },
    { region: "세종특별자치시", nx: 66, ny: 103 },
    { region: "전라북도", nx: 63, ny: 89 },
    { region: "전라남도", nx: 51, ny: 67 },
  ];

  var base_date = document.getElementById("base_date").value;
  var base_time = document.getElementById("base_time").value;
  var region = document.getElementById("region").value;
  //var nx = document.getElementById('nx').value;
  //var ny = document.getElementById('ny').value;
  //var dataType = document.getElementById('dataType').value;
  for (var i = 0; i < korea.length; i++) {
    if (region == korea[i].region);
    break;
  }

  url =
    url +
    "?" +
    "&base_date=" +
    base_date +
    "&base_time=" +
    base_time +
    "&nx=" +
    korea[i].nx +
    "&ny=" +
    korea[i].ny +
    "&dataType=json";

  xhr.open("GET", url);
  xhr.send();

}
