<template>
  <div id="app">
    <Header />
    <main>
      <CardDisplay />
    </main>
  </div>
</template>

<script>
import CardDisplay from './components/CardDisplay.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    CardDisplay,
    Header
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background: url('@/assets/background.jpg') no-repeat center center fixed;
  background-size: cover;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>