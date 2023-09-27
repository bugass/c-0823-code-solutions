const $userList = document.querySelector('#user-list');

function getUserData(user) {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/users');
  request.responseType = 'json';

  request.addEventListener('load', function () {
    console.log(request.status);
    console.log(request.response);
    for (let i = 0; i < request.response; i++) {
      const $li = document.createElement('li');
      $li.textContent = request.response.name[i];
      $userList.appendChild('$li');
    }
  });
  request.send();
}

getUserData();
