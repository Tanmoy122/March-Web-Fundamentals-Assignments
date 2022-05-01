const addelement=document.querySelector('.h1_class')
addelement.innerHTML=`<img src="https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg" class="image1">`
imageElement=document.querySelector('img')

imageElement.addEventListener('mouseover',mousehover)
imageElement.addEventListener('mouseout',mouseout)

function mousehover(){
    imageElement.classList='hover'
}
function mouseout(){
    imageElement.classList='image1'
}