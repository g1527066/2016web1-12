while(1){
document.getElementById('form').onsubmit=function(){
    // li,textContent=;
  window.alert(document.getElementById('form').word.value);
};


//結果を表示
var arg = new Object;
var pair=location.search.substring(1).split('&');
var word = 100;
if(pair){
    var kv = pair[0].split('=');
    word = parseInt(kv[1]);
}


for(var i=1;i<word;i++){
  //var li=document.createElement('li');

  if(i%3===0&&i%5===0)//3.5の公倍数か判断
  {
      document.write("FizzBuzz");
  }
  else if(i%3===0)//３の倍数か判断
  {
      document.write("Fizz");
  }
  else if(i%5===0)//5の倍数か判断
  {
      document.write("Buzz");
  }
  else
  {
      document.write(i);
  }
  
   document.write(\n);

//document.getElementById('list').appendChild(li);  
}
break;
}
