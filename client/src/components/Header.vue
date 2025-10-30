<template>
  <header class="app-header">
    <nav>
      <ul>
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/deck-view">Обзор колоды</router-link></li>
      </ul>
      <!-- Иконка профиля строго в правом краю -->
      <router-link to="/profile" class="profile-link">
        <img v-if="profileImage" :src="profileImage" alt="Me" class="profile-icon" />
        <span v-else class="profile-icon-default">👤</span>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    profileImage() {
      const u = window.localStorage.getItem('user');
      if (!u) return null;
      try { return JSON.parse(u).profile_image; }
      catch { return null; }
    }
  }
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
nav {
  width: 100vw;
  display: flex;
  align-items: center;
}
nav ul {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 28px;
  list-style: none;
  flex: 1 1 auto;
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

/* Иконка профиля -- маленькая, строго справа */
.profile-link {
  margin-left: auto;
  margin-right: 24px;
  display: flex;
  align-items: center;
  height: 100%;
  transition: box-shadow 0.2s;
}
.profile-icon, .profile-icon-default {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff1fd;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.45rem;
  box-shadow: 0 1px 6px rgba(0,0,0,0.09);
  cursor: pointer;
  border: 2px solid #ff69b4;
}
.profile-link:hover .profile-icon,
.profile-link:hover .profile-icon-default {
  box-shadow: 0 2px 12px rgba(255,20,147,0.17);
  border-color: #ff1493;
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
  .profile-link {
    margin-right: 10px;
  }
  .profile-icon, .profile-icon-default {
    width: 26px;
    height: 26px;
    font-size: 1.05rem;
  }
}
</style>
