const scroll_top = document.getElementById('scroll_top')
console.log(scroll_top)
scroll_top.addEventListener('click',() => {

    window.scrollTo({
        top: 0,
        left: 0,
    })

})