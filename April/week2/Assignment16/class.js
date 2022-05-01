const names=['virat','ronaldo','messi','dhoni','rohit']
const class_add=['one','two','three','four','five']
const target=document.querySelector('.h1_class')
for(let i=0;i<names.length;i++){
    const newelement=document.createElement('p')
    newelement.innerText=names[i]
    target.appendChild(newelement)
    newelement.classList.add(class_add[i])
}

