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
        document.documentElement.style.setProperty('--background_blanc', '#262626')
        document.documentElement.style.setProperty('--background_gradiant', 'radial-gradient(rgb(30, 30, 30), #101010)')
        
        
        
        toggleTheme++;
        
    }else{
        
        document.documentElement.style.setProperty('--ecriture', '#262626')
        document.documentElement.style.setProperty('--background_blanc', '#f1f1f1')
        document.documentElement.style.setProperty('--background_gradiant', 'radial-gradient(rgb(139, 195, 245), #1294b8)')
        
        
        
        toggleTheme--;
    }

})