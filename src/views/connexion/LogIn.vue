<script setup>
import { reactive, ref } from 'vue';


const currentUser = ref('')
// Données des utilisateurs
const users = JSON.parse(localStorage.getItem('users'));

// données de connexion current
const currentForm = reactive({
    email: '',
    password: ''
})


const login = () => {
     currentUser.value = users.find(item => item.email === currentForm.email)
     
     if(currentUser.value && currentUser.value.password === currentForm.password){
        window.location = '/blog'
     }else{
        alert('Vos infos de connexion ne sont pas valide !')
     }
     currentForm.email = ''
     currentForm.password = ''
}

</script>


<template>

<section class="login">
    <h1>Log in</h1>
    <div class="form-login">
        <form @submit.prevent="login">
        <input type="email" v-model="currentForm.email" placeholder="Email">
        <input type="password" v-model="currentForm.password" placeholder="Password">
        <button type="submit">Se connecter</button>
    </form>
    <p>Pas de compte ? <router-link :to="{name: 'signup'}">Inscription</router-link></p>
    </div>
</section>

</template>


<style scoped>
.login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    max-width: 400px;
    margin: auto;
}

.form-login form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.form-login input, button{
    padding: 0.6rem;
}

</style>