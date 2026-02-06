<script setup>
import Notification from '@/components/Notification.vue';
import { reactive, ref } from 'vue';

const users = ref([])
const showNotif = ref(false);
const form = reactive({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
})

const signup = () => {
    if (form.password !== form.passwordConfirm) {
        alert('Vos infos mot de passe ne correspondent pas.')
        form.password = ''
        form.passwordConfirm = ''
        return
    }
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
        alert('Veuillez remplir tous les champs !')
        form.name = ''
        form.email = ''
        form.password = ''
        form.passwordConfirm = ''
        return
    }

    users.value.push({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password.trim(),
    })
    showNotif.value = true;
    // Sauvegarde dans la locale storage
    localStorage.setItem('users', JSON.stringify(users.value))

    // reinitialiser les champs 
    form.name = ''
    form.email = ''
    form.password = ''
    form.passwordConfirm = ''

    window.location = '/login'
}

</script>


<template>
    <Transition name="fade">
        <notification v-if="showNotif" message="Inscription effectuée avec succès ! ✅" @close="showNotif = false" />
    </Transition>
    <section class="singup">
        <h1>Inscription</h1>
        <div class="form-signup">
            <form @submit.prevent="signup">
                <input type="name" v-model="form.name" placeholder="Nom">
                <input type="email" v-model="form.email" placeholder="Email">
                <input type="password" v-model="form.password" placeholder="Password">
                <input type="password" v-model="form.passwordConfirm" placeholder="Confirm Password">
                <button type="submit">S'inscrire</button>
            </form>
            <p>Avez-vous un compte ? <router-link :to="{ name: 'login' }">Se connecter</router-link></p>
        </div>
    </section>

</template>


<style scoped>
.singup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    max-width: 400px;
    margin: auto;
}

.form-signup form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.form-signup input,
button {
    padding: 0.6rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>