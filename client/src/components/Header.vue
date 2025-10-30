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
  name: 'Header'
};
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 56px;
  background: rgba(24, 26, 31, 0.89);
  backdrop-filter: blur(8px);
  z-index: 10;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}
nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  gap: 28px;
  list-style: none;
}
nav a {
  color: #fff;
  font-weight: 500;
  font-size: 1.08rem;
  text-decoration: none;
  padding: 12px 21px;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
}
nav a:hover,
.router-link-exact-active {
  background: linear-gradient(90deg, #ff69b4, #ff1493);
  color: #fff;
  font-weight: 600;
}

@media (max-width: 600px) {
  .app-header {
    min-height: 46px;
  }
  nav ul {
    gap: 12px;
  }
  nav a {
    font-size: 1rem;
    padding: 8px 10px;
  }
}
</style>
