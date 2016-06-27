document.getElementById('form').onsubmit=function(){
  window.alert(document.getElementById('form').word.value);
};

for(var i=0;i<word;i++){
  var li=document.createElement('li');

  if(word%3===0&&word%5===0)//3.5の公倍数か判断
  {
    
  }
  else if(word%3===0)//３の倍数か判断
  {
    
  }
  else if(word%5===0)//5の倍数か判断
  {
    
  }
  else
  {
      li,textContent=;
  }
  
  

document.getElementById('list').appendChild(li);  
}
