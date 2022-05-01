const pass= document.querySelector('.password')
const forms=document.querySelector('form')
const container=document.querySelector('.container')
const smalltxt=document.querySelector('small')
const button=document.querySelector('#btn')
forms.addEventListener('submit', submitForm)
const characters = ['@', '$', '#', "!", 'A', 'B']
var count=0
function submitForm(e){
    e.preventDefault()
    for(let i=0;i<characters.length;i++){
        if(pass.value.includes(characters[i]) === false){
            // console.log("error")
            count++
            
            // password.classList = "error"
        }
    }

    console.log("count - ", count)

    if(count === characters.length){
        pass.classList = "error"
        smalltxt.classList='visible'
    }else{
        console.log('password satisfies the conditions')
        container.innerHTML = `
        <p> thanks for submitting</p>`
    }

}
