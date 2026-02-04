<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="not-found-container">
    <h1>404</h1>
    <p>Oups ! La page que vous recherchez semble introuvable.</p>
    <button @click="goHome">Retour à l'accueil</button>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #333;
}

h1 {
  font-size: 5rem;
  margin-bottom: 0.5rem;
  color: #dc3545;
}

p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
