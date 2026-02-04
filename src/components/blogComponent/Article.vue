<script setup>
import { ref } from 'vue';

const props = defineProps({
    post: {
        type: Object,
        required: true
    }
})

const isModalOpen = ref(false)

function openModal(){
    isModalOpen.value = true;
}
</script>

<template>
    <article class="item" >
        <div class="card-content">
            <h2>{{ post.title }}</h2>
            <!-- <p>{{ post.body.substr(0, 100) }}...</p> -->
            <p>{{ post.body.split(" ").slice(0, 20).join(" ") }}...</p>
        </div>
        <div class="card-footer">
            <div>
                <p class="view">Vu par : {{ post.views }}</p>
            <p>Likes: {{ post.reactions.likes }} - Dislikes: {{ post.reactions.dislikes }}</p>
            </div>
            <button @click="openModal">Read More</button>
        </div>
    </article>
    <!-- Modal -->
    <Teleport to="body">
        <div v-if="isModalOpen" class="modal-overlay" @click="isModalOpen = false">
            <div class="modal-content" @click.stop>
                <h2>{{ post.title }}</h2>
                <p>{{ post.body }}</p>
                <button @click="isModalOpen = false">Fermer</button>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.item {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid #f1f5f9;
    max-width: 400px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.card-content {
    padding: 1.5rem;
    flex-grow: 1;
}

h2 {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
    color: #1e293b;
    font-weight: 700;
    line-height: 1.4;
}

p {
    color: #64748b;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    background-color: #f8fafc;
    border-top: 1px solid #f1f5f9;
}

.card-footer > button{
    background-color: #3b82f6;
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}

.view {
    color: #3b82f6;
    font-weight: 600;
    font-size: 0.875rem;
    transition: color 0.2s;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); 
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    width: 90%; 
    max-width: 500px;      
    min-height: 200px;     
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.modal-content > button{
    cursor: pointer;
    width: 50%;
    margin: auto;
    border-radius: 8px;
    color: white;
    background-color: #3b82f6;
    border: 1px solid gray;
    padding: 0.3rem;
}
</style>
