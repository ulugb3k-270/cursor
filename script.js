const cursor = document.querySelector('.cursor')

cursor.innerHTML = cursor.textContent.replace(/\S/g, "<span>$&</span>")

const span = document.querySelectorAll('span')

const box = document.querySelector('.box')

const section = document.querySelector('section')

const hover = document.querySelector('.hover')

const round = document.querySelector('.round')

for(let i = 0; i < span.length; i++){
    span[i].style.transform = 'rotate('+i*23+'deg)'

    box.addEventListener('mouseover', () => {
        span[i].style.display = 'none'
        hover.style.display = 'inline'
    })

    section.addEventListener('mouseover',  ()=> {
        span[i].style.display = 'inline'
        hover.style.display = 'none'
        
    })

}

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px'
    cursor.style.top = e.pageY + 'px'
    round.style.left = e.pageX + 'px'
    round.style.top = e.pageY + 'px'
})



