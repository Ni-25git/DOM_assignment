let fetchUsersButton = document.getElementById('fetchUsers');
let userDataDiv = document.getElementById('userData');

fetchUsersButton.addEventListener('click', async () => {
  try {
    let response = await fetch('https://reqres.in/api/users');
    let data = await response.json();
    displayUsers(data.data);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
});

function displayUsers(users) {
  userDataDiv.innerHTML = '';

  users.forEach(user => {
    let userCard = document.createElement('div');
    userCard.classList.add('user-card');

    userCard.innerHTML = `
      <img src="${user.avatar}" alt="${user.first_name} ${user.last_name} Avatar">
      <p>${user.first_name} ${user.last_name}</p>
      <p>${user.email}</p>
    `;

    userDataDiv.appendChild(userCard);
  });
}
