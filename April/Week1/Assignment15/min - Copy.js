let n=prompt("Enter a number")
let m=prompt("Enter a number")
let o=prompt("Enter a number")
if(n<m && n<o){
    console.log(n,"is minimum");
}
else if(m>n && m>o){
    console.log(m,"is minimum");
}
else{
    console.log(o,"is minimum");
}