let y = document.querySelector('#password')
let z = document.querySelector('#strength')
let a = document.querySelector('#eyeicon')
y.addEventListener('input',function(){
  if(y.value.length>1 && y.value.length<=4)
  {
    z.innerHTML = 'Weak'
    y.style.borderColor = 'red'
    z.style.color = 'red'
  }
  else if(y.value.length>=4 && y.value.length<=8)
  {
    z.innerHTML = 'Medium'
    y.style.borderColor = 'yellow'
    z.style.color= 'yellow'
  }
  else if(y.value.length>9)
  {
    z.innerHTML = 'Strong'
    y.style.borderColor = 'green'
    z.style.color = 'green'
  }
  else{
    z.innerHTML=''
    y.style.borderColor = ''
    z.style.color = ''
  }
})
a.addEventListener('click',function(){
  if(y.type=="password")
  {
    y.type="text"
    a.src="eye-open.png"
  }
  else
  {
    y.type="password"
    a.src="eye-close.png"
  }
})