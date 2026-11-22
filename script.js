// Mobile Menu
document.getElementById('menuBtn').addEventListener('click', function() {
  document.getElementById('nav').classList.toggle('show');
});

// Enroll button - auto select course and scroll to form
function enroll(courseName) {
  document.getElementById('course').value = courseName;
  document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
  alert('You selected ' + courseName + '. Please fill the form below to enroll!');
}

// Form submit
document.getElementById('enrollForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var course = document.getElementById('course').value;
  document.getElementById('formMsg').innerText = 'Thank you ' + name + '! We received your enquiry for ' + course + '. We will contact you on WhatsApp soon.';
  document.getElementById('formMsg').style.color = 'green';
  document.getElementById('formMsg').style.fontWeight = 'bold';
  this.reset();
});