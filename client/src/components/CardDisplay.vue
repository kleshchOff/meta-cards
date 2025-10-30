<template>
  <div class="card-display">
    <button @click="fetchRandomCard" class="fetch-button">
      Вытянуть карту
    </button>
    <div v-if="loading" class="loader">Loading...</div>
    <div v-if="card && !loading" class="card-block card-animate">
      <h2>{{ card.title }}</h2>
      <p>{{ card.description }}</p>
      <img :src="card.image_url" alt="Card image" v-if="card.image_url">
    </div>
    <div v-if="error" class="error">{{ error }}</div>
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
  color: #fff;
  width: 100vw;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fetch-button {
  background: linear-gradient(90deg, #ff69b4 45%, #ff1493 95%);
  border: none;
  color: white;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 20px 48px;
  margin-bottom: 19px;
  border-radius: 18px;
  box-shadow: 0 3px 30px 0 rgba(255, 20, 147, 0.09);
  cursor: pointer;
  transition: background 0.22s;
}
.fetch-button:hover {
  background: linear-gradient(90deg, #ee33aa 45%, #ff69b4 95%);
}
.loader {
  margin-top: 24px;
  font-size: 1.1rem;
}
.card-block {
  margin-top: 22px;
  background: rgba(39, 42, 57, 0.84);
  border-radius: 16px;
  box-shadow: 0 5px 42px 0 rgba(0,0,0,0.18);
  min-width: 280px;
  max-width: 90vw;
  padding: 36px 22px;
  animation: fadeIn 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 1.5rem;
}
p {
  margin-bottom: 18px;
  font-size: 1.12rem;
}

img {
  max-width: 330px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 0 auto;
  box-shadow: 0 2px 16px rgba(0,0,0,0.13);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@media (max-width: 600px) {
  .card-block {
    min-width: 0;
    padding: 17px 8px;
  }
  .fetch-button {
    padding: 12px 17px;
    font-size: 1rem;
    border-radius: 13px;
  }
  img {
    max-width: 97vw;
  }
}
.error {
  margin-top: 12px;
  color: #ff3333;
  font-weight: 600;
}
</style>
