const form = document.getElementById('userInfoForm');
const displayDataButton = document.getElementById('retrieveData');
const displayDataDiv = document.getElementById('displayData');
const userDataBody = document.getElementById('userDataBody');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  // Store data in local storage
  const userData = { name, age };
  localStorage.setItem('userData', JSON.stringify(userData));

  // Clear the form
  form.reset();
});

displayDataButton.addEventListener('click', function() {
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (userData) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${userData.name}</td><td>${userData.age}</td>`;
    userDataBody.innerHTML = '';
    userDataBody.appendChild(newRow);
    displayDataDiv.style.display = 'block';
  } else {
    alert('No user data found.');
  }
});
