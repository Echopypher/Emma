const hammer = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navigation_links');
// const body = document.getElementsByTagName('header')
// console.log(body)

// hammer.addEventListener('click', () =>{
//     if (navLinks.style.display === 'flex') {
//         navLinks.style.display = 'none'
//     } else {
//         navLinks.style.display = 'flex'
//     }
//      navLinks.style.display = 'flex'
// });

hammer.addEventListener('click', () =>{
    if (navLinks.style.transform === 'scaleY(1)') {
        navLinks.style.transform = 'scaleY(0)';
    } else {
        navLinks.style.transform = 'scaleY(1)';
    } 
    // navLinks.style.display = 'flex'
});
// body.addEventListener('click', () =>{
//     // navLinks.style.transform = 'scaleY(0)';
//     hammer.navLinks.style.transform = 'scaleY(0)'
// })



