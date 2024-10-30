"Ваш код повинен зробити POST-запит до вказаного URL."
"Для створення нового користувача, передайте в запит наступні дані:"
"name: ваше ім’я"
"email: ваш email"
"Поверніть відповідь від сервера після створення користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function createUser(user) {
  const url = 'https://jsonplaceholder.typicode.com/users';

  try {
    // Виконання POST-запиту
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    // Перевірка статусу відповіді
    if (!response.ok) {
      throw new Error('Помилка при створенні користувача');
    }

    // Повернення даних з відповіді
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}



module.exports = createUser;
