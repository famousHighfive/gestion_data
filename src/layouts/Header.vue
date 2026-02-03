<script setup>


</script>


<template>

    <nav class="header">
        <ul>
            <li><router-link to="/">
                    Accueil
                </router-link>
            </li>
            <li><router-link to="/about">
                    A Propos
                </router-link>
            </li>
            <li><router-link to="/services">
                    Services
                </router-link>
            </li>
            <li><router-link to="/blog">
                    Blog
                </router-link>
            </li>
            <li><router-link to="/contact">
                    Contact
                </router-link>
            </li>
        </ul>
    </nav>

</template>


<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    padding-block: 1rem;
}

ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
}

li a{
    text-decoration: none;
    font-size: 1.2rem;
    color: black;
}
</style>