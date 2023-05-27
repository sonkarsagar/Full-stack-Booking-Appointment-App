
function func(e){
  // e.preventDefault()
  const name=document.getElementById('name')
  const email=document.getElementById('email')
  const phone=document.getElementById('number')
  axios.post('http://127.0.0.1:3000/user/api',{
    name: name.value,
    email: email.value,
    phone: phone.value
  })
  }