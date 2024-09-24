<template>
  <div class="card-display">
    <button @click="fetchRandomCard" class="fetch-button">Вытянуть карту</button>
    <div v-if="loading" class="loader">Loading...</div>
    <div v-if="card && !loading" class="card-block">
      <h2>{{ card.title }}</h2>
      <p>{{ card.description }}</p>
      <img :src="card.image_url" alt="Card image" v-if="card.image_url">
    </div>
  </div>
</template>

<script>
import { fetchRandomCard } from '../services/apiService.js';

export default {
  data() {
    return {
      card: null,
      loading: false,
      error: null
    };
  },
  methods: {
    async fetchRandomCard() {
      this.loading = true;
      this.error = null;
      try {
        this.card = await fetchRandomCard();
      } catch (error) {
        this.error = 'Failed to fetch card.';
        console.error('Error fetching random card:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.card-display {
  text-align: center;
  color: white; /* белый цвет, чтобы выделяться на фоне */
}
.fetch-button {
  background-color: #ff69b4; /* красивый розовый цвет */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 12px;
}
.fetch-button:hover {
  background-color: #ff1493; /* меняем цвет при наведении */
}
.loader {
  margin-top: 20px;
}
.card-block {
  margin-top: 20px;
  animation: fadeIn 1s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}
</style>