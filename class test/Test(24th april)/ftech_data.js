fetch('https://reqres.in/api/users?page=2').then((data)=>{
return data.json();
}).then((completedata)=>{
    console.log(completedata[2].last_name);
})
