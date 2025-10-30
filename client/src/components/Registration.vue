<template>
  <div class="form-container">
    <h2>Registration</h2>
    <form @submit.prevent="submitForm">
      <input v-model="first_name" placeholder="First Name" required />
      <input v-model="last_name" placeholder="Last Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <input v-model="profile_image" type="text" placeholder="Profile image URL (optional)" />
      <button type="submit" :disabled="loading">Register</button>
      <div v-if="error" class="error">{{ error }}</div>
    </form>
    <router-link to="/login">Already have an account? Login</router-link>
  </div>
</template>
<script>
import { registerUser } from '../services/apiService';
export default {
  data() {
    return { first_name: '', last_name: '', email: '', password: '', profile_image: '', error: '', loading: false };
  },
  methods: {
    async submitForm() {
      this.loading = true;
      this.error = '';
      try {
        const user = await registerUser({
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          profile_image: this.profile_image
        });
        if (user.error) { this.error = user.error; } else { this.$router.push('/login'); }
      } finally { this.loading = false; }
    }
  }
};
</script>
<style scoped>
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
