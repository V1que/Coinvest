const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('navLinks')[0]




toggleButton.addEventListener( 'click', () => {
    navbarLinks.classList.toggle('active')
    
   
})

toggleButton.addEventListener('click', () =>{
    navbarLinks.style.background='#0d0d0d'
})