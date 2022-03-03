'use strict';

// samesite cookies

// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';
// Set a cross-site cookie for third-party contexts
document.cookie = 'cookie2=value2; SameSite=None; Secure';


//상단메뉴 click section
function drop(){
    const click = document.getElementById('menutab');
    if(click.style.display === 'block'){
       click.style.display = 'none';
    }else{
       click.style.display = 'block';
    }
 }


//  map api
new daum.roughmap.Lander({
   "timestamp" : "1642345227209",
   "key" : "28tj4",
   "mapWidth" : "80%",
   "mapHeight" : "100%"
}).render();


//  kakao talk QR 코드 팝업
// 모달 열기
function modalOpen(){
   document.querySelector('.pop_wrap').style.display = 'block';
}

function modalClose(){
   document.querySelector('.pop_wrap').style.display = 'none';
}

//팝업 열림, 닫힘
document.querySelector('#popImg').addEventListener('click', modalOpen);
document.querySelector('#closeBtn').addEventListener('click', modalClose);