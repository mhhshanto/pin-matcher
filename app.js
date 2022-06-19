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
  console.log(pintu);
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