<template>
  <header class="app-header">
    <nav>
      <ul>
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/deck-view">Обзор колоды</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header'
};
</script>

<style scoped>
.app-header {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px 0;
}
nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}
nav a {
  color: white;
  text-decoration: none;
  padding: 0 15px;
  transition: color 0.3s ease;
}
nav a:hover {
  color: #ff69b4;
}
</style>