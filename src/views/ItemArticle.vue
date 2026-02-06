<script setup>
import { articles } from '@/data/produits';
</script>

<template>
  <div class="articles-container">
    <article v-for="item in articles" :key="item.id" class="article-card">
      <div class="article-content">
        <header>
          <span class="date">{{ item.createdAt }}</span>
          <h2 class="title">{{ item.title }}</h2>
          <p class="author">Par <span>{{ item.author }}</span></p>
        </header>
        
        <p class="excerpt">{{ item.content }}</p>
        
        <router-link :to="`/detail-article/${item.id}`" class="read-more-btn">
          Lire la suite
          <svg xmlns="http://www.w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </router-link>
      </div>
    </article>
  </div>
</template>

<style scoped>
.articles-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  font-family: 'Inter', system-ui, sans-serif;
}

.article-card {
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.article-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.date {
  font-size: 0.85rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.title {
  margin: 0.5rem 0;
  font-size: 1.25rem;
  color: #111827;
  line-height: 1.4;
}

.author {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.author span {
  font-weight: 600;
  color: #374151;
}

.excerpt {
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more-btn {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.read-more-btn:hover {
  color: #1d4ed8;
}

.read-more-btn svg {
  transition: transform 0.2s;
}

.read-more-btn:hover svg {
  transform: translateX(4px);
}
</style>