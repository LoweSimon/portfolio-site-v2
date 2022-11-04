const btn = document.getElementById('button');
const faders = document.querySelectorAll('.fade-in');



document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_ipfon8q';
   const templateID = 'template_g3to4r7';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


// const appearOptions = {}

// const appearOnScroll = new IntersectionObserver 
// (function(
//     entries,
//     appearOnScroll
//   ) {
//     entries.forEach(entry =>  {
//       if (!entry.isIntersecting)  {
//         return;
//       } else {
//         entry.target.classList.add('appear');
//         appearOnScroll.unobserve(entry.target);
//       }
//     })
//   }, 
//   appearOptions);

//   faders.forEach(fader => {
//     appearOnScroll.observe(fader);
//   })

const appearOnScroll = new IntersectionObserver
(function
  (
    entries, 
    appearOnScroll
    ) 
    {}, 
    options)