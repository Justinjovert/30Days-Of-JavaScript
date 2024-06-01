


/* let allSpans = document.querySelectorAll('span')

allSpans[1].className = 'SpanClass'
allSpans[2].id = 'SpanID' */

let spans = document.querySelectorAll('span')

spans.forEach((span, ctr )=> {
    if(ctr % 2 == 0){
        span.style.fontSize = '20px'
    }
    else{
        span.style.fontSize = '34px'
    }
})


const pElementsTag = document.getElementsByTagName('p')
const pElementsClass = document.getElementsByClassName('pDOM')


console.log(pElementsTag)
for(let ctr = 0; ctr < pElementsTag.length;ctr++){
    console.log(pElementsTag[ctr].innerText)
    console.log(pElementsTag[ctr].id)
}

/* for(let ctr = 0; ctr < pElementsTag.length;ctr++){
    console.log(pElementsTag[ctr].innerText)
    setTimeout(function() {
        pElementsTag[3].textContent = "Fourth Paragraph"
        pElementsTag[ctr].setAttribute('id', 'testID')
        pElementsTag[ctr].setAttribute('class', 'pDOM2')
    }, 2000);
} */
console.log(pElementsTag)

for(let ctr = 0; ctr < pElementsTag.length;ctr++){
    if(ctr %2 == 0){
        pElementsTag[ctr].style.color = 'green'
    }
    else{
        pElementsTag[ctr].style.color = 'red'
    }
}