import { createRouter, createWebHistory } from 'vue-router';
import CardDisplay from './components/CardDisplay.vue';
import DeckView from './components/DeckView.vue';

const routes = [
  { path: '/', component: CardDisplay },
  { path: '/deck-view', component: DeckView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;