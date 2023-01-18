// 1. button을 클릭하면 서버의 데이터를 찾아서 화면에 출력하자.


const button = document.querySelector('.call-ajax-data-button');
const p = document.querySelector('.print-area');


function callAjaxData(){
  const xhr = new XMLHttpRequest;
  xhr.open('GET', './data/ajaxDesc.txt', false);
  xhr.send();
  
  if (xhr.status === 200){
    p.textContent = xhr.responseText;
  } else{
    console.warn('통신 실패');
  }
  
}
button.addEventListener('click', callAjaxData);
