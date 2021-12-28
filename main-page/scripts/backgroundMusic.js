function playMusic() {
    //email-confirm
    const email = 'vladyslavfilenko97@gmail.com';
    //audio
    const trackName = './audio/Onepunchman-OST-25.Mysterious.mp3';
    const audio = new Audio(`${trackName}`);    
    confirm(`Here is my email, good luck: ${email}`);
    audio.play();
};