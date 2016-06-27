while(1){
document.getElementById('form').onsubmit=function(){
    // li,textContent=;
  window.alert(document.getElementById('form').word.value);
};


//結果を表示
var arg = new Object;
var pair=location.search.substring(1).split('&');
var kv = pair[1].split('=');
var word = kv[1];

for(var i=0;i<word;i++){
  //var li=document.createElement('li');

  if(word%3===0&&word%5===0)//3.5の公倍数か判断
  {
      document.write("FizzBuzz");
  }
  else if(word%3===0)//３の倍数か判断
  {
      document.write("Fizz");
  }
  else if(word%5===0)//5の倍数か判断
  {
      document.write("Buzz");
  }
  else
  {
      document.write(word);
  }
  
  

//document.getElementById('list').appendChild(li);  
}
break;
}
