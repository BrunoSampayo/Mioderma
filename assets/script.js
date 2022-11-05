const handleMobileMenu = () => {
    let menustat = document.querySelector(".mobileMenuContent").getAttribute('open');
    let menu = document.querySelector(".mobileMenuContent");
    console.log(menu)
    switch (menustat) {
        case 'false':
            menu.style.width = '100%';
            document.querySelector(".mobileMenuContent").setAttribute("open", 'true');
            document.querySelector('body').style.overflow = 'hidden'
            break;

        case 'true':
            menu.style.width = '0';
            document.querySelector(".mobileMenuContent").setAttribute("open", 'false');
            document.querySelector('body').style.overflow = ''
            break;
    }

}
const ListedButtons = document.querySelectorAll(".mobileListButtons li");
ListedButtons.forEach(Element => {
    Element.addEventListener('click', handleMobileMenu)
});