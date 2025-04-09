const testimonials = [
    '"EduCampus changed the way I study. Now I understand concepts clearly and enjoy learning!" – Aditi R.',
    '"Amazing platform with great content and teachers. Helped me score better in exams!" – Rohit S.',
    '"Flexible learning schedule made my life so much easier!" – Meera K.'
  ];
  
  let current = 0;
  
  setInterval(() => {
    current = (current + 1) % testimonials.length;
    document.getElementById("testimonial-text").textContent = testimonials[current];
  }, 4000);
  