const $ = name => document.querySelector('.' + name).classList.add(name + '-animation');
const $2 = name => document.querySelector('.' + name).classList.remove(name + '-animation');

function headerAnimation() {
    if (document.documentElement.scrollTop != 0) {
        let header = $('header');
        let nav = $('nav');
        let nav__home = $('nav__home');
        let nav__img = $('nav__img');
        let nav__menu = $('nav__menu');
        let nav__projects = $('nav__projects');
        let nav__about = $('nav__about');
        let nav__contact = $('nav__contact');
    } else{
        let header = $2('header');
        let nav = $2('nav');
        let nav__home = $2('nav__home');
        let nav__img = $2('nav__img');
        let nav__menu = $2('nav__menu');
        let nav__projects = $2('nav__projects');
        let nav__about = $2('nav__about');
        let nav__contact = $2('nav__contact');
    }
};

window.addEventListener('scroll', headerAnimation);