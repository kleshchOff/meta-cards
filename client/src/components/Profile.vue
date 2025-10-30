<template>
  <div class="form-container" v-if="user">
    <h2>Your Profile</h2>
    <img v-if="user.profile_image" :src="user.profile_image" alt="Profile" class="profile-img" />
    <form @submit.prevent="saveChanges">
      <input v-model="first_name" placeholder="First Name" required />
      <input v-model="last_name" placeholder="Last Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="profile_image" placeholder="Profile Image URL" />
      <button type="submit" :disabled="loading">Save</button>
      <div v-if="error" class="error">{{ error }}</div>
    </form>
  </div>
</template>
<script>
import { getUser, updateUser } from '../services/apiService';
export default {
  data() {
    return { user: null, first_name: '', last_name: '', email: '', profile_image: '', error: '', loading: false };
  },
  async mounted() {
    const rawUser = window.localStorage.getItem('user');
    if (!rawUser) { this.$router.push('/login'); return; }
    const userObj = JSON.parse(rawUser);
    const user = await getUser(userObj.id);
    this.user = user;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.profile_image = user.profile_image ?? '';
  },
  methods: {
    async saveChanges() {
      this.loading = true;
      const data = await updateUser(this.user.id, {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        profile_image: this.profile_image
      });
      if (data.error) { this.error = data.error; }
      else {
        this.user = data;
        window.localStorage.setItem('user', JSON.stringify(data));
        this.error = '';
      }
      this.loading = false;
    }
  }
};
</script>
<style scoped>
.profile-img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 17px;
}
.form-container {
  background: rgba(39,42,57,0.85);
  border-radius: 16px;
  margin: 40px auto;
  max-width: 400px;
  padding: 36px 32px;
  color: #fff;
  box-shadow: 0 2px 22px rgba(0,0,0,0.11);
  display: flex; flex-direction: column; align-items: center;
}
h2 { margin-bottom: 28px; }
form { display: flex; flex-direction: column; gap: 18px; width: 100%; }
input {
  border: none; border-radius: 8px;
  padding: 13px 12px; font-size: 1.08rem;
  background: #22232b; color: #fff;
}
input:focus { outline: 2px solid #ff69b4; }
button {
  background: linear-gradient(90deg,#ff69b4,#ff1493);
  color: #fff; border: none; border-radius: 10px;
  padding: 14px 0; font-size: 1.09rem; font-weight: 600; cursor: pointer;
  margin-top: 10px; transition: background 0.2s;
}
button:disabled { opacity: 0.7; }
.error { color: #ff3333; margin-top: 12px; }
a { margin-top: 18px; color: #ff69b4; text-decoration: underline; }
</style>
