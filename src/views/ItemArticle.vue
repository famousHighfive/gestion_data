<script setup>
import { articles } from '@/data/produits';

</script>


<template>

<article v-for="item in articles" >
    <p>Title: {{ item.title }}</p>
    <p>Author: {{ item.author }}</p>
    <p>Content: {{ item.content }}</p>
    <p>CreatedAt: {{ item.createdAt }}</p>
    <button><router-link :to="`/detail-article/${item.id}`">Read More</router-link></button>
</article>
</template>


<style scoped>
article{
    margin-block: 1rem;
    border: 1px solid;
    padding: 1rem;
}
button{
    background-color: lightblue;
    border: none;
    padding: 0.3rem;
    cursor: pointer;
}
</style>