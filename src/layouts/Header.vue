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
        <ul>
            <li><router-link to="/login">
                    CONNEXION
                </router-link>
            </li>
            <li><router-link to="/signup">
                    INSCRIPTION
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
    justify-content: space-around;
    align-items: center;
    background-color: #0f172a;
    padding-block: 1.5rem;
    z-index: 10;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

ul {
    display: flex;
    gap: 2.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

li a {
    position: relative;
    color: #94a3b8;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 8px 4px;
    transition: all 0.3s ease;
}

li a:hover {
    color: #ffffff;
}

.router-link-exact-active {
    color: #ffffff;
}

.router-link-exact-active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #3b82f6;
    border-radius: 2px;
    transition: transform 0.3s ease;
}
</style>