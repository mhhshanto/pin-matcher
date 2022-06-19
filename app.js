function getPin(){
  var num = Math.round(Math.random()*100000)
  num+= ""
  if(num.length === 4){
    
    return num

  }else{
   return getPin()
  }
 
}
function generatePin(){
  const newPin = getPin()
  const pintu = parseFloat(newPin)
  document.getElementById('display-pin').value = pintu
}
document.getElementById('key-pad').addEventListener('click',function(a){
const number = a.target.innerText;
if(isNaN(number)){
  if(number === 'C'){
    document.getElementById('num-input').value = ''
  }
}else{
  var dis = document.getElementById('num-input').value
  document.getElementById('num-input').value = dis+number
}

})
function verifyPin(){
  var pin = document.getElementById('display-pin').value
  var pin2 = document.getElementById('num-input').value
  if(pin === pin2){
    document.getElementById('success').style.display='block'
    document.getElementById('failed').style.display='none'
    document.getElementById('tryy').style.display='none'
    
  }else{
    document.getElementById('success').style.display='none'
    document.getElementById('failed').style.display='block'
    var failCheck = document.getElementById('fail-count').innerHTML;
    document.getElementById('fail-count').innerHTML= failCheck + '1';
    if(failCheck === '1'){
      document.getElementById('try-left').innerHTML = 2
      console.log('1');
    }
    else if(failCheck === '11'){
      document.getElementById('try-left').innerHTML = 1
      console.log('2');
    }
    else if(failCheck === '111'){
      document.getElementById('try-left').innerHTML = 'no';
      console.log('3');
      document.getElementById("btn").disabled = true;

    }
    console.log(failCheck);
  }
  
}
// shanto