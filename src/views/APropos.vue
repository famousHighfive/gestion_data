<script setup>
// Tu pourras ajouter tes imports ici plus tard
</script>

<template>
  <div class="home-container">
    <header class="hero">
      <div class="badge">A Propos</div>
      <h1>Bienvenue sur la page <span class="gradient-text">A PROPOS</span></h1>
      <p>Une interface propre, rapide et prête à être personnalisée selon vos envies.</p>

      <div class="actions">
        <button class="btn-primary">Commencer</button>
        <button class="btn-secondary">En savoir plus</button>
      </div>
    </header>
  </div>
</template>

<style scoped>
/* Couleurs & Variables */
.home-container {
  font-family:
    'Inter',
    system-ui,
    sans-serif;
  color: #2d3436;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  line-height: 1.6;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 80px 0;
  animation: fadeIn 0.8s ease-out;
}

.badge {
  display: inline-block;
  background: #f1f2f6;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #220013;
  margin-bottom: 20px;
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.gradient-text {
  background: linear-gradient(135deg, #1e9ee7, #0779ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 1.2rem;
  color: #636e72;
  max-width: 600px;
  margin: 0 auto 40px;
}

/* Boutons */
.actions {
  display: flex;
  justify-content: center;
  gap: 15px;
}

button {
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  border: none;
}

.btn-primary {
  background: #f32929;
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(133, 133, 136, 0.3);
}

.btn-secondary {
  background: #f1f2f6;
  color: #2d3436;
}

/* Grille de Features */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #f1f2f6;
  transition: all 0.3s;
}

.card:hover {
  border-color: #717077;
  transform: translateY(-5px);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

h3 {
  margin-bottom: 10px;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive mobile */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  .actions {
    flex-direction: column;
    align-items: center;
  }
  button {
    width: 100%;
    max-width: 300px;
  }
}
</style>
