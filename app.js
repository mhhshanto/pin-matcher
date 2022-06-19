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
