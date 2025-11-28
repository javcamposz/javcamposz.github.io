---
layout: single
title: "You're Invited!"
permalink: /invitation/
author_profile: false
---

We are thrilled to invite you to our upcoming event. Please join us for an evening of networking, learning, and celebration.

### Event Details
*   **Date:** December 15, 2025
*   **Time:** 6:00 PM - 9:00 PM
*   **Location:** The Grand Hall, 123 Innovation Drive, Tech City
*   **RSVP By:** December 1, 2025

---

### Registration Form
Please fill out the form below to confirm your attendance.

<form id="rsvp-form" action="https://script.google.com/macros/s/AKfycbykJ1ftbB_g1wUVZmmOrOG9mWGn4YMTVPblCX0h0Uy7ECS9CjadP8hZOHJE9GRsrl4/exec" method="POST" class="page__form">
  <div class="form-group">
    <label for="name">Full Name</label>
    <input type="text" id="name" name="name" required placeholder="John Doe" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
  </div>

  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email" id="email" name="email" required placeholder="john@example.com" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
  </div>

  <div class="form-group">
    <label for="guests">Number of Guests (including yourself)</label>
    <input type="number" id="guests" name="guests" min="1" max="5" value="1" required style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
  </div>

  <div class="form-group">
    <label for="comments">Dietary Restrictions / Comments</label>
    <textarea id="comments" name="comments" rows="3" placeholder="Vegetarian, gluten-free, etc." style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;"></textarea>
  </div>

  <button type="submit" class="btn btn--primary btn--large" style="width: 100%;">Submit RSVP</button>
</form>

<div id="form-message" style="display:none; margin-top: 20px; padding: 15px; border-radius: 4px;"></div>

<script>
  document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var form = e.target;
    var messageDiv = document.getElementById('form-message');
    var submitBtn = form.querySelector('button[type="submit"]');
    
    // Disable button to prevent double submit
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";
    
    var formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        messageDiv.style.display = 'block';
        messageDiv.style.backgroundColor = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.textContent = "Thank you! Your registration has been confirmed.";
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      messageDiv.style.display = 'block';
      messageDiv.style.backgroundColor = '#f8d7da';
      messageDiv.style.color = '#721c24';
      messageDiv.textContent = "Oops! Something went wrong. Please try again later.";
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit RSVP";
    });
  });
</script>
