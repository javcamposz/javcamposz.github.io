---
layout: single
title: "Registro al Evento"
permalink: /invitacion/
author_profile: false
---

<!-- SECCIÓN DE LOGOS -->
<!-- Sustituye 'URL_DEL_LOGO_...' por los enlaces reales a tus imágenes -->
<div style="display: flex; justify-content: space-around; align-items: center; margin-bottom: 30px; flex-wrap: wrap; gap: 20px;">
    <img src="/assets/img/logo-etsii.png" alt="Escuela Ingenieros Industriales" style="max-height: 80px; max-width: 30%; background-color: white; padding: 10px; border-radius: 8px;">
    <img src="/assets/img/logo-asociacion.png" alt="Asociación" style="max-height: 80px; max-width: 30%; background-color: white; padding: 10px; border-radius: 8px;">
    <img src="/assets/img/logo-matica.png" alt="Matica Partners" style="max-height: 80px; max-width: 30%; background-color: white; padding: 10px; border-radius: 8px;">
</div>

### ¡Estás invitado!

Matica Partners, la Escuela Técnica Superior de Ingenieros Industriales y el autor, Javier Campos, estarían encantados de contar con su presencia en este evento exclusivo.

Únase a nosotros para una tarde de aprendizaje, debate sobre el futuro de la IA y *networking*.

### Detalles del Evento
*   **Fecha:** 9 de Diciembre de 2025
*   **Hora:** 18:45 h - 21:30 h
*   **Lugar:** Salón de Actos, Escuela Técnica Superior de Ingenieros Industriales (Paseo de la Castellana 106, Madrid)
*   **Confirmar antes del:** 5 de Diciembre de 2025

---

### Formulario de Registro
Por favor, rellene el siguiente formulario para confirmar su asistencia.

<form id="rsvp-form" action="https://script.google.com/macros/s/AKfycbyqDM_qZUEsZUInhJ7Gc7BySOXDYAFwyOLPTaPxC5YuSJk0I8fIv2Lzx8Y1GUv1-mxv/exec" method="POST" class="page__form">
  
  <p style="font-size: 0.9em; color: #666; margin-bottom: 20px;">* Campos obligatorios</p>

  <div class="form-group">
    <label for="name">Nombre Completo *</label>
    <input type="text" id="name" name="name" required placeholder="Juan Pérez" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
  </div>

  <div class="form-group">
    <label for="company">Empresa / Organización *</label>
    <input type="text" id="company" name="company" required placeholder="Nombre de su empresa" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
  </div>

  <div class="form-group">
    <label for="email">Correo Electrónico *</label>
    <input type="email" id="email" name="email" required placeholder="juan@ejemplo.com" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Por favor, introduce una dirección de correo válida" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
  </div>

  <div class="form-group">
    <label for="phone">Teléfono (Opcional)</label>
    <input type="tel" id="phone" name="phone" placeholder="600123456" pattern="[0-9]+" title="Por favor, introduce solo números" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
  </div>

  <!-- CHECKBOX RGPD -->
  <div class="form-group" style="margin-bottom: 20px; font-size: 0.9em;">
    <label style="display: flex; align-items: start; gap: 10px;">
      <input type="checkbox" name="gdpr_consent" value="yes" required style="margin-top: 5px;">
      <span>* Acepto el tratamiento de mis datos personales para la gestión del evento de acuerdo con la política de privacidad descrita abajo.</span>
    </label>
  </div>

  <button type="submit" class="btn btn--primary btn--large" style="width: 100%;">Confirmar Asistencia</button>
</form>

<div id="form-message" style="display:none; margin-top: 20px; padding: 15px; border-radius: 4px;"></div>

<!-- TEXTO LEGAL RGPD -->
<hr style="margin-top: 40px;">
<div style="font-size: 0.8em; color: #666;">
    <strong>Información Básica sobre Protección de Datos (RGPD):</strong><br>
    Sus datos serán tratados por los organizadores (Matica Partners y Javier Campos) con la única finalidad de gestionar su asistencia al evento y enviarle información logística relacionada. La legitimación es su consentimiento al enviar este formulario. Sus datos no se cederán a terceros salvo obligación legal o necesidad operativa para el acceso al recinto (Escuela de Ingenieros). Puede ejercitar sus derechos de acceso, rectificación, supresión y oposición enviando un email a los organizadores.
</div>

<script>
  document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var form = e.target;
    var messageDiv = document.getElementById('form-message');
    var submitBtn = form.querySelector('button[type="submit"]');
    
    // Deshabilitar botón para evitar doble envío
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";
    
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
        messageDiv.textContent = "¡Gracias! Tu registro ha sido confirmado correctamente.";
        form.reset();
      } else {
        throw new Error('Fallo en el envío');
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      messageDiv.style.display = 'block';
      messageDiv.style.backgroundColor = '#f8d7da';
      messageDiv.style.color = '#721c24';
      messageDiv.textContent = "¡Ups! Algo salió mal. Por favor, inténtalo de nuevo más tarde.";
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Confirmar Asistencia";
    });
  });
</script>