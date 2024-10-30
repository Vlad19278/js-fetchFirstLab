"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function deleteUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  try {
    
    const response = await fetch(url, {
      method: 'DELETE'
    });

    
    return response;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

module.exports = deleteUser;
