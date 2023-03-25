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
    
    if(toggleTheme === 0){
        document.documentElement.style.setProperty('--ecriture', '#f1f1f1')
        document.documentElement.style.setProperty('--background_blanc', '#262626')
        document.documentElement.style.setProperty('--background_gradiant', 'radial-gradient(rgb(40, 40, 40), #202020)')
        document.documentElement.style.setProperty('--background_gris', '#525252')
        
        
        
        
        toggleTheme++;
        
    }else{
        
        document.documentElement.style.setProperty('--ecriture', '#262626')
        document.documentElement.style.setProperty('--background_blanc', '#f1f1f1')
        document.documentElement.style.setProperty('--background_gradiant', 'radial-gradient(rgb(139, 195, 245), #1294b8)')
        document.documentElement.style.setProperty('--background_gris', '#d7d7d7')
        
        
        
        toggleTheme--;
    }

})