
// navbar scrolling effect

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



// navbar responsiveness

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}



// Close menu when a link is clicked
let menuLinks = document.querySelectorAll("#menuList a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        toggleMenu();
    });
});


// Typing effect 

const dynamicText = document.querySelector("h1 span");

const words = ["Solutions" , "Consultancy", "Expertise", "Strategies", "Support", "Innovation", "Technologies",
    "Intelligence", "Growth", "Efficiency", "Transformation", "Sustainability"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");



    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 200);
    }else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 100);
    }else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);

    }

}

typeEffect();




// contact us section email sending


function sendMail() {

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,

    };

    const serviceID = "service_sy2nw5a";

    const templateID = "template_u4svml6";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("message").value = "";

                console.log(res);

                alert("your message sent sucessfully..");


            }
        ).catch(err => console.log(err));



}
