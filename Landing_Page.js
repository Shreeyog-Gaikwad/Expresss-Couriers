let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () =>{

    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}
//color: transparent;
//background-image: linear-gradient(#000, #000);
//background-repeat: no-repeat;
//-webkit-background-clip: text;
//background-position: -750px 0;
//animation: backcolor 3s linear infinite;