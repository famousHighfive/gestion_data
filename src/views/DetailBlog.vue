<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const data = JSON.parse(localStorage.getItem('myDatas'))

// recuperation de lid 
const currentId = route.params.id;

// trouver lobjet 
let article = data.find(item => item.id === Number(currentId))

const goBlog = () => {
    router.push('/blog')
}


</script>


<template>
  <div class="detail-wrapper">
    <article v-if="article" class="detail-card">
      <header class="detail-header">
        <button class="back-btn" @click="goBlog">
          <span class="icon">←</span> Retour au blog
        </button>
        <h1 class="title">{{ article.title }}</h1>
        <div class="meta">Likes: {{ article.reactions.likes }} • Dislike: {{ article.reactions.dislikes }}</div>
      </header>

      <section class="content">
        <p>{{ article.body }}</p>
      </section>

      <footer class="detail-footer">
        <div class="tags">
          <span v-for="tag in article.tags" :key="tag">{{ tag }}</span>
        </div>
      </footer>
    </article>

    <div v-else class="error-state">
      <p>Oups ! Cet article n'existe pas.</p>
      <button @click="goBlog">Retour à l'accueil</button>
    </div>
  </div>
</template>

<style scoped>
.detail-wrapper {
  min-height: 100vh;
  background-color: #f8fafc;
  padding: 40px 20px;
  font-family: 'Inter', system-ui, sans-serif;
  color: #1e293b;
}

.detail-card {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 48px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.detail-header {
  margin-bottom: 32px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 24px;
}

.back-btn {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  transition: color 0.2s;
}

.back-btn:hover {
  color: #3b82f6;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: #0f172a;
  margin-bottom: 12px;
}

.meta {
  color: #94a3b8;
  font-size: 0.875rem;
}

.content {
  line-height: 1.8;
  font-size: 1.125rem;
  color: #334155;
}

.content p {
  margin-bottom: 20px;
}

.detail-footer {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid #e2e8f0;
}

.tags {
  display: flex;
  gap: 8px;
}

.tags span {
  background: #eff6ff;
  color: #3b82f6;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
}

@media (max-width: 640px) {
  .detail-card {
    padding: 24px;
  }
  .title {
    font-size: 1.75rem;
  }
}
</style>