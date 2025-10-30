export async function fetchRandomCard() {
  const response = await fetch('http://localhost:3000/api/random-card');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function fetchAllCards() {
    const response = await fetch('http://localhost:3000/api/cards');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

// Регистрация
export async function registerUser(payload) {
    const res = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    return res.json();
}

// Авторизация
export async function loginUser(payload) {
    const res = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    return res.json();
}

// Получить профиль
export async function getUser(id) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    return res.json();
}

// Обновить профиль
export async function updateUser(id, payload) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    return res.json();
}

