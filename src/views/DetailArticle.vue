<script setup>
import { articles } from '@/data/produits';
import { useRoute } from 'vue-router';

const route = useRoute()

const userID = articles.find(user => user.id === Number(route.params.id))

</script>


<template>

<article>
    <h2>Les details du contenu de ce id '{{ userID.id }}' est:</h2>
    <h2>{{ userID.title }}</h2>
    <p>{{ userID.content }}</p>
    <p>L'auteur de cette publication est: {{ userID.author }} et cela a été publié le {{ userID.createdAt }}</p>
</article>

</template>


<style scoped>


</style>