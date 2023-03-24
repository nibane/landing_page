const scroll_top = document.getElementById('scroll_top')
scroll_top.addEventListener('click',() => {

    window.scrollTo({
        top: 0,
        left: 0,
    })

})

const switchThemeBtn = document.querySelector('#button_dark_mode')
let toggleTheme = 0;


switchThemeBtn.addEventListener('click',() => {
    console.log("ok");
    if(toggleTheme === 0){
        document.documentElement.style.setProperty('--ecriture', '#f1f1f1')
        document.documentElement.style.setProperty('--background', '#262626')
        toggleTheme++;
        
    }else{
        
        document.documentElement.style.setProperty('--ecriture', '#262626')
        document.documentElement.style.setProperty('--background', '#f1f1f1')
        toggleTheme--;
    }

})