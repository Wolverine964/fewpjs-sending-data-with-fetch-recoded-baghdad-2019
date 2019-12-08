// Add your code here
function submitData (name, email){
  const url = 'http://localhost:3000/users'
  const requestOptions = {
    headers: {
            Accept: "application/json"
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({name: name, email:email})
  }
  return fetch(url,requestOptions)
}
submitData("John", "john@invisible.com").then(res => {return res.json()}).then(json => {console.log(json)})