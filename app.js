// Sticky - Scroll
this.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', this.scrollY > 0);

})

function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

// Scroll to Top
this.addEventListener('scroll', () => {
    const scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", this.scrollY > 500);
})

function scrollToTop() {
    this.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const audioContext = new AudioContext();
// get the audio element
const audioElement = document.querySelector('audio');
// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
track.connect(audioContext.destination);
// select our play button
const play = document.getElementById("play");

play.addEventListener('click', function() {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    // play or pause track depending on state
    if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
        play.id = "pause";
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
        play.id = "play";
    }

}, false);

// When the track finishes playing
audioElement.addEventListener('ended', () => {
    play.dataset.playing = 'false';
    play.id = "play";
}, false);

// Toggle - Easy dark mode
const sec = document.querySelector('.sec');
const toggle = document.querySelector('.toggleDark');

toggle.onclick = () => {
    sec.classList.toggle('dark');
}

// Submit form
const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#mailto');
$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    $buttonMailto.setAttribute('href', `mailto:alberto196g@gmail.com?subject= ${form.get('name')} ${form.get('email')} - Message from Website &body=${form.get('message')}`);
    $buttonMailto.click();
}