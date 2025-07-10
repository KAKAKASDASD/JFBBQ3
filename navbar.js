// navbar.js
document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
      <nav style="
        background: linear-gradient(135deg, #FF4E50, #FF7E5F);
        padding: 15px;
        text-align: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      ">
        <a href="index.html" style="color: white; margin: 0 15px; text-decoration: none; font-weight: bold;">Inicio</a>
        <a href="entradas.html" style="color: white; margin: 0 15px; text-decoration: none; font-weight: bold;">Entradas</a>
        <a href="comidasrapidas.html" style="color: white; margin: 0 15px; text-decoration: none; font-weight: bold;">Comidas Rápidas</a>
        <a href="almuerzos.html" style="color: white; margin: 0 15px; text-decoration: none; font-weight: bold;">Almuerzos</a>
        <a href="promos.html" style="color: white; margin: 0 15px; text-decoration: none; font-weight: bold;">Promociones</a>
      </nav>
    `;
    
    // Inserta el nav al inicio del body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  });