
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM content loaded.");
    const whatsapp = document.getElementById('whatsapplink');
    const phoneNumber = "+918979991191";
    const defaultMessage = "Hello!%20I%20came%20across%20your%20portfolio%20website%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20work.%20Could%20you%20please%20provide%20me%20with%20more%20information?%20Thank%20you!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;
    whatsapp.href = whatsappUrl;
  });

document.addEventListener('DOMContentLoaded', function(){
    const emailMsg = document.getElementById('email');
    const emailId = 'sudhamshasagar@gmail.com';
    const subject = 'Inquiry from Portfolio Website';
    const message = "Hello!%20I%20came%20across%20your%20portfolio%20website%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20work.%20Could%20you%20please%20provide%20me%20with%20more%20information?%20Thank%20you!";
    emailMsg.href = `mailto:garg.astha1022@gmail.com?subject=${subject}&body=${message}`;
});

const downLoad = document.querySelector('.downloadCV');

downLoad.addEventListener('click', function(){
  window.open("https://drive.google.com/file/d/1UqssJbd9H9-9BxiJrmbnnGTK9zB6edgE/view?usp=sharing", '_blank');
});
const hireBtn = document.querySelector('.hireme');
hireBtn.addEventListener('click', function(){
  alert(`Whoa, slow down there, eager beaver! While I'm flattered you're ready to hire me, let's take a moment to make sure you're not missing out on the adventure of exploring first.It's like eating dessert before the main course  tempting, but let's savor the journey!`);
  hireBtn.style.display = 'none';
});