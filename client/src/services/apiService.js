export async function fetchRandomCard() {
  const response = await fetch('http://localhost:3000/api/random-card');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}