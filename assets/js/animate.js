
// WhatsApp Shrink Button
const content = document.querySelector('[data-shrink="yes"]');
const span = document.querySelector('[data-shrink="yes"] span');

span.classList.add('show');

setInterval(function() {
  content.classList.toggle('shrink')
}, 4200);

setTimeout(function() {
  setInterval(function() {
  span.classList.toggle('show')
}, 4200)
}, 200);
