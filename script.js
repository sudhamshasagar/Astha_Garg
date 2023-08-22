const themechanger = document.querySelector('#arrow');
const themeChangeIcon = document.querySelector('#modeIcon');
const resume = document.querySelector('.downloadCV');
// Function for changing mode using icons
if (themeChangeIcon) {
    themeChangeIcon.addEventListener('click', changeTheme);
}

function changeTheme() {
    if (themechanger.href.endsWith('darkstyle.css')) {
        themechanger.href = 'lightstyle.css';
        localStorage.setItem('mode', 'light');
        themeChangeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themechanger.href = 'darkstyle.css';
        localStorage.setItem('mode', 'dark');
        themeChangeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        themechanger.href = 'darkstyle.css';
        themeChangeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        themechanger.href = 'lightstyle.css';
        themeChangeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});
const hiremeButton = document.querySelector('.hireme');

hiremeButton.addEventListener('click', function(){
    alert("Whoa, slow down there, eager beaver! While I'm flattered you're ready to hire me, let's take a moment to make sure you're not missing out on the adventure of exploring first. It's like eating dessert before the main course – tempting, but let's savor the journey!");

    // Remove the hireme button
    hiremeButton.style.display = 'none';
});

resume.addEventListener('click', function(){
    window.open("https://drive.google.com/file/d/1UqssJbd9H9-9BxiJrmbnnGTK9zB6edgE/view?usp=sharing", "_blank");
});

function sendWhatsAppMessage() {
    const whatsapp = document.getElementById('whatsapplink');
    const phoneNumber = "+918979991191";
    const defaultMessage = "Hello!%20I%20came%20across%20your%20portfolio%20website%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20work.%20Could%20you%20please%20provide%20me%20with%20more%20information?%20Thank%20you!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;
    whatsapp.href = whatsappUrl;
}

function sendEmail(){
    const emailMsg = document.getElementById('email');
    const emailId = 'sudhamshasagar@gmail.com';
    const subject = 'Inquiry from Portfolio Website';
    const message = "Hello!%20I%20came%20across%20your%20portfolio%20website%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20work.%20Could%20you%20please%20provide%20me%20with%20more%20information?%20Thank%20you!";
    emailMsg.href = `mailto:garg.astha1022@gmail.com?subject=${subject}&body=${message}`;
}

document.addEventListener('DOMContentLoaded', sendWhatsAppMessage);


function openPage(page) {
    window.location.href = page + '.html';
}

function startRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        if (transcript.includes('dark mode')) {
            changeTheme(); // Call the changeTheme() function to switch to dark mode
        }else if (transcript.includes('home')) {
            openPage('index'); // Call the function to open the About page
        } else if (transcript.includes('message')) {
            sendWhatsAppMessage() // Call the function to open the About page
        }else if (transcript.includes('email')) {
            sendEmail() // Call the function to open the About page
        } else if (transcript.includes('education') || transcript.includes('explore')) {
            openPage('About'); // Call the function to open the About page
        } else if (transcript.includes('experience') || transcript.includes('awards')) {
            openPage('experience');
        } else if (transcript.includes('certificate')) {
            openPage('certifications');
        } else if (transcript.includes('contact')) {
            openPage('contact');
        } else if (transcript.includes('light mode')) {
            changeTheme(); // Call the changeTheme() function to switch to light mode
        }
    };

    recognition.onend = () => {
        startRecognition(); // Restart the recognition loop after it ends
    };

    recognition.start();
}

// Function for changing mode using voice command
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    startRecognition();
} else {
    console.log('Speech recognition is not supported in this browser.');
}
