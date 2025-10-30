<template>
  <div id="app">
    <div class="bg"></div>
    <Header />
    <main class="main-content">
      <CardDisplay />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import CardDisplay from './components/CardDisplay.vue';

export default {
  name: 'App',
  components: { Header, CardDisplay }
};
</script>

<style scoped>
/* Сброс отступов, гарантируем отсутствие скролла */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  font-family: 'Inter', Avenir, Helvetica, Arial, sans-serif;
}

/* Фоновая картинка — фиксированная, растягивается, не двигается со скроллом */
.bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/background.jpg') no-repeat center center;
  background-size: cover;
  pointer-events: none;
}

/* Полупрозрачный overlay для контраста */
#app::after {
  content: "";
  position: fixed;
  inset: 0;
  background: rgba(40, 48, 60, 0.33);
  pointer-events: none;
  z-index: 1;
}

/* Контент всегда по центру над фоном */
.main-content {
  position: relative;
  z-index: 2;
  padding-top: 56px; /* высота header, поменяйте если она у вас другая */
  min-height: calc(100vh - 56px);
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
}
@media (max-width: 600px) {
  .main-content {
    padding-top: 46px;
    min-height: calc(100vh - 46px);
  }
}

</style>
