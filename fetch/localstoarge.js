let form = document.getElementById('userInfoForm');
let displayDataButton = document.getElementById('retrieveData');
let displayDataDiv = document.getElementById('displayData');
let userDataBody = document.getElementById('userDataBody');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;

  let userData = { name, age };
  localStorage.setItem('userData', JSON.stringify(userData));

  form.reset();
});

displayDataButton.addEventListener('click', function() {
  let userData = JSON.parse(localStorage.getItem('userData'));

  if (userData) {
    let newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${userData.name}</td><td>${userData.age}</td>`;
    userDataBody.innerHTML = '';
    userDataBody.appendChild(newRow);
    displayDataDiv.style.display = 'block';
  } else {
    alert('No user data found.');
  }
});
