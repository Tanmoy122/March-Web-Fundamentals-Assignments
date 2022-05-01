let n=prompt("Enter as number")
let count=0;
for(let i=1;i<=n;i++){
    if(n%i==0){
        count=count+1
    }
}
if(count>2){
    console.log("not a prime number")
}
else{
    console.log("prime number")

}