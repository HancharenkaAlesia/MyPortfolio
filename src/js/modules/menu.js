const menu = () => {
    const hamburger = document.querySelector('.hamburger'),
          hamburgerMenu = document.querySelector('.menu'),
          hamburgerOverlay = document.querySelector('.menu__overlay'),
          hamburgerClose = document.querySelector('.menu__close');

        
    const menuOpen = (trigger) => {
        trigger.addEventListener('click', () => {
            hamburgerMenu.classList.add('active');
        }); 
    };

    const menuClose = (trigger) => {
        trigger.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
        });
    };

    menuOpen(hamburger);
    menuClose(hamburgerOverlay);
    menuClose(hamburgerClose);
      
};

export default menu;