const scrollToTopButton = document.getElementById("scrollToTopButton");
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});
const hireButton = document.getElementById('Hire');
        hireButton.addEventListener('click', () => {
            window.location.href = 'file:///home/mmg/Developments/Code/Phase-0/Webpage/Contact.html';
        });
const LearnButton = document.getElementById('Learn');
        LearnButton.addEventListener('click', () => {
            window.location.href = 'file:///home/mmg/Developments/Code/Phase-0/Webpage/About.html';
        });

const WhatButton = document.getElementById('WhatsApp');
        WhatButton.addEventListener('click', () => {
            window.location.href = 'https://www.whatsapp.com/';
        });