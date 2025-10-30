<template>
  <div class="deck-view">
    <h1>Обзор колоды</h1>
    <div class="deck-grid">
      <div
          v-for="card in cards"
          :key="card.id"
          class="card-item"
          @mouseenter="card.flipped = true"
          @mouseleave="card.flipped = false"
          :class="{ flipped: card.flipped }"
      >
        <div class="card-inner">
          <div class="card-face card-back">
            <img :src="cardBackImage" alt="Card back" />
          </div>
          <div class="card-face card-front">
            <img v-if="card.image_url" :src="card.image_url" :alt="card.title" />
            <div class="no-image" v-else>?</div>
          </div>
        </div>
        <div class="card-title">{{ card.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchAllCards } from '../services/apiService';

export default {
  name: 'DeckView',
  data() {
    return {
      cards: [],
      cardBackImage: require('@/assets/card-back.jpg'),
    };
  },
  async mounted() {
    const data = await fetchAllCards();
    // Добавим флаг для анимации
    this.cards = data.map(card => ({ ...card, flipped: false }));
  },
};
</script>

<style scoped>
.deck-view {
  color: white;
  text-align: center;
  margin-top: 24px;
}
.deck-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 32px;
  justify-items: center;
  margin-top: 28px;
  padding: 0 16px;
  width: 100%;
  max-width: 1100px; /* можно варьировать по вкусу */
  margin-left: auto;
  margin-right: auto;
}

.card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1200px;
  user-select: none;
}
.card-inner {
  width: 155px;
  height: 216px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.62s cubic-bezier(.41,1.8,.47,.98);
}

.card-item.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 14px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.17);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #181a1f;
  overflow: hidden;
}

.card-back {
  background: #181a1f;
}

.card-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-front {
  background: #fff;
  transform: rotateY(180deg);
}

.card-front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
}
.no-image {
  font-size: 2.5rem;
  color: #888;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title {
  color: #fff;
  margin-top: 12px;
  font-weight: 600;
  font-size: 1.08rem;
  text-align: center;
  word-break: break-word;
}

@media (max-width: 700px) {
  .deck-grid {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 16px;
  }
  .card-inner {
    width: 120px;
    height: 166px;
  }
  .card-title {
    font-size: .96rem;
  }
}
</style>
