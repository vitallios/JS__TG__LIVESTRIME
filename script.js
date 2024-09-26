const navBTN = document.querySelector('#menu-btn');
const menu = document.querySelector('.menu');
const menuListItem = document.querySelector('#menu__list-item');
const menuList = document.querySelector('#menu__list');
let iframeSeaction = document.querySelector('#videoPleer');

const key = '04cf7fba122224318f217fe6344845db'
const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?`

const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", `${key}`);
myHeaders.append("x-rapidapi-host", "v1.rugby.api-sports.io");

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// fetch("https://v1.rugby.api-sports.io/leagues", requestOptions)
//   .then(response => {
//    if (response.status == 200) {
//     response.json()
//     .then(data => {
//       data.response.forEach(item => {
//        console.dir(item);
//        return item;
//       });
//     })
//    }
//   }  )
//   .catch(error => console.log('error', error));

const catalogLinks = [
 {
  id: 1,
  name: 'Regby',
  link: 'https://rutube.ru/play/embed/0369d61bfb8ce126d15fada863cfd08f',
  // link: '2',
 },
 {
  id: 2,
  name: 'Hockey',
  link: 'https://rutube.ru/play/embed/7a485ef5da9fe50ba939f36ca3e6ed96',
  // link: '1',
 },
]

// fetch(`https://v1.${sport}api-sports.io/`, requestOptions)
//   .then(response => {
//    console.dir(response);
//    if (response.status == 200) {
//     response.json()
//     .then(data => {
//      console.dir(data);
//       data.response.forEach(item => {
//       console.dir(item.seasons);
//       const li = document.createElement('li');
//       li.classList.add('menu__list-item');
//       li.innerHTML = `<a class="menu__list-link" id="${item.id}" href="${item.link}" name="${item.name}">${item.name}</a>`;
//       menuList.appendChild(li);
//       }
//       );
//     })
//    }
//   }  )
//   .catch(error => console.log('error', error));



navBTN.addEventListener('click', () => {
 menu.classList.toggle('active');
 navBTN.firstElementChild.children[0].attributes[2].value = menu.classList.contains('active')
 ? 'M6 18L18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5';
});




catalogLinks.forEach(item => {
 const li = document.createElement('li');
 li.classList.add('menu__list-item');
 li.innerHTML = `<button class="menu__list-link" id="${item.id}" name="${item.name}">${item.name}</butt>`;
 menuList.appendChild(li);

 li.firstChild.addEventListener('click', () => {
  if(li.firstChild.id == `${item.id}`) {
   iframeSeaction.src = `${item.link}`;
  }
});


// iframeSeaction.src});
})