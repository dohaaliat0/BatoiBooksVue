<template>
  <div id="about" class="about">
    <div class="about-content">
      <h1>Acerca de BatoiBooks</h1>
      <p>
        BatoiBooks es una plataforma dedicada a facilitar la compra y venta de libros de texto y apuntes entre estudiantes. Nuestro objetivo es crear una comunidad donde los estudiantes puedan acceder a materiales educativos de manera sencilla y económica.
      </p>
      <p>
        Con una interfaz amigable y fácil de usar, los usuarios pueden buscar, vender y comprar libros y apuntes de diversas materias. Además, ofrecemos herramientas para que los usuarios puedan gestionar sus libros y hacer un seguimiento de sus transacciones.
      </p>
      <p>
        ¡Únete a BatoiBooks y comienza a vender o comprar tus libros ahora mismo!
      </p>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
    padding: 20px;
  }

  .about-content {
    max-width: 800px;
    text-align: center;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .about h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
  }

  .about p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 15px;
  }
}
</style>
