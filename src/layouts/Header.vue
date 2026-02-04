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
            <li><router-link to="/article">
                    Article
                </router-link>
            </li>
        </ul>
    </nav>

</template>


<style scoped>
.header {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
     background-color: #0f172a;
    padding-block: 1rem;
    z-index: 2;
}

ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
}

li a{
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
}
</style>