document.getElementById('form').onsubmit=function(){
    // li,textContent=;
  window.alert(document.getElementById('form').word.value);


//結果を表示

for(var i=0;i<word;i++){
  var li=document.createElement('li');

  if(word%3===0&&word%5===0)//3.5の公倍数か判断
  {
      document.getElementById('choice').textContent=FizzBuzz;
  }
  else if(word%3===0)//３の倍数か判断
  {
      document.getElementById('choice').textContent=Fizz;
  }
  else if(word%5===0)//5の倍数か判断
  {
      document.getElementById('choice').textContent=Buzz;
  }
  else
  {
      document.getElementById('choice').textContent=word;
  }
  
  

document.getElementById('list').appendChild(li);  
}
};
