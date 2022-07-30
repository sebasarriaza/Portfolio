

const $ = name => document.querySelector('.' + name).classList.add(name + '-animation');
const $2 = name => document.querySelector('.' + name).classList.remove(name + '-animation');

function headerAnimation() {
    // let scroll = document.querySelector('.header').offsetTop;
    // console.log(scroll);
    // console.log(scroll2);
    if (document.documentElement.scrollTop != 0) {
        let header = $('header');
        let nav = $('nav');
        let nav__home = $('nav__home');
        let nav__img = $('nav__img');
        let nav__menu = $('nav__menu');
        let nav__projects = $('nav__projects');
        let nav__about = $('nav__about');
        let nav__contact = $('nav__contact');
        // console.log(document.documentElement.scrollTop);
        // let scroll = document.documentElement.scrollTop += 10;
        // console.log(scroll);

    }
    else{
        let header = $2('header');
        let nav = $2('nav');
        let nav__home = $2('nav__home');
        let nav__img = $2('nav__img');
        let nav__menu = $2('nav__menu');
        let nav__projects = $2('nav__projects');
        let nav__about = $2('nav__about');
        let nav__contact = $2('nav__contact');
        // console.log(document.documentElement.scrollTop);
    }
};


// let scroll2 = document.documentElement.scrollTop;
// console.log(scroll2)

// function animation (){
//     if (document.documentElement.scrollTop != 0) {
//         headerAnimation();
//         console.log(scroll2)
//     }
// }

window.addEventListener('scroll', headerAnimation);
