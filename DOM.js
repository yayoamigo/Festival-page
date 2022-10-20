//HAMBURGER-MENU
function mobileMenu() {
 const window = document.querySelector('.hambu-wind');
 window.classList.replace('not-active', 'active');
}

function closeMenu() {
 const window = document.querySelector('.hambu-wind');
 window.classList.replace('active', 'not-active');
}

document.getElementById('ham-link').addEventListener('click', mobileMenu);
document.getElementById('close').addEventListener('click', closeMenu);
const anchorElm = document.querySelectorAll('.pop-window');

for (let i = 0; i < anchorElm.length; i += 1) {
 anchorElm[i].addEventListener('click', closeMenu);
}

//CARDS 

//DATA

let bandsData = [
 {name: 'blink',
  genre: 'punk-rock',
  bio: 'Blink-182 is an American rock band formed in Poway, California, in 1992.  consists Mark Hoppus, Tom DeLonge,  Travis Barker',
  img: '/bg-img/blink.jpg',
},
{name: 'Paramore',
  genre: 'indie-rock',
  bio: 'Paramore is an American rock band formed in Poway, California, in 1992.  consists Luna Hoppus, Tom DeLonge,  Travis Barker',
  img: '/bg-img/paramore.jpg',
},
{name: 'Linkin-park',
  genre: 'heavy-punk',
  bio: 'Linkin-park is an American rock band formed in Poway, California, in 1992.  consists Mark Hoppus, Tom DeLonge,  Travis Barker',
  img: '/bg-img/linkin.jpg',
},
{name: 'Mana',
  genre: 'soft-rock',
  bio: 'Mana is a Mexican rock band formed in Poway, California, in 1992.  consists Mark Hoppus, Tom DeLonge,  Travis Barker',
  img: '/bg-img/mana2.jpg',
},
{name: 'Slipknot',
  genre: 'heavy-metal',
  bio: 'Slipknot is an American rock band formed in Poway, California, in 1992.  consists Mark Hoppus, Tom DeLonge,  Travis Barker',
  img: '/bg-img/slipknot.jpg',
},
{name: 'QUEEN',
  genre: 'indie-metal',
  bio: 'QUEEN is an American rock band formed in Poway, California, in 1992.  consists Mark Hoppus, Tom DeLonge,  Travis Barker',
  img: '/bg-img/queen.jpg',
},
];


//FUNCTIONALITY
const bodyDiv = document.getElementById('bands');
const artistDiv = document.createElement('div');
artistDiv.classList.add('feature-bands');
bodyDiv.appendChild(artistDiv);
const divContent = `<div id="bands-title"> 
<h1>Feature artists <div id="program-separator-line" class="guide-bar"></div> </h1>
</div>
<div class="band-row active">
<div class="artist-cards">
  <img src="${bandsData[0].img}" alt="artist">
  <div class="artist-text">
    <h3>${bandsData[0].name}</h3>
    <h6>${bandsData[0].genre}</h6>
    <p>${bandsData[0].bio}
    </p>
  </div>
</div>
<div class="artist-cards">
<img src="${bandsData[1].img}" alt="artist">
<div class="artist-text">
  <h3>${bandsData[1].name}</h3>
  <h6>${bandsData[1].genre}</h6>
  <p>${bandsData[1].bio}
  </p>
  </div>
</div>
</div>
<button class="show" id="show-more-btn" >MORE <i class="fa-solid fa-angle-down"></i> </button>
<div class="not-active" id="hide1">
 <div class="artist-cards">
 <img src="${bandsData[2].img}" alt="artist">
 <div class="artist-text">
   <h3>${bandsData[2].name}</h3>
   <h6>${bandsData[2].genre}</h6>
   <p>${bandsData[2].bio}
   </p>
   </div>
 </div>
 <div class="artist-cards">
 <img src="${bandsData[3].img}" alt="artist">
 <div class="artist-text">
   <h3>${bandsData[3].name}</h3>
   <h6>${bandsData[3].genre}</h6>
   <p>${bandsData[3].bio}
   </p>
   </div>
 </div>
</div>
<div class="not-active" id="hide2">
<div class="artist-cards">
<img src="${bandsData[4].img}" alt="artist">
<div class="artist-text">
  <h3>${bandsData[4].name}</h3>
  <h6>${bandsData[4].genre}</h6>
  <p>${bandsData[4].bio}
  </p>
  </div>
</div>
<div class="artist-cards">
<img src="${bandsData[5].img}" alt="artist">
<div class="artist-text">
  <h3>${bandsData[5].name}</h3>
  <h6>${bandsData[5].genre}</h6>
  <p>${bandsData[5].bio}
  </p>
  </div>
</div>
</div>
<button class="not-active" id="less">LESS <i class="fa-sharp fa-solid fa-angle-up"></i></button>
</div>`;


artistDiv.insertAdjacentHTML('beforeend', divContent);

const showBtn = document.querySelector('.show');
const hiddenRow1 = document.getElementById('hide1');
const hiddenRow2 = document.getElementById('hide2');
const hideBtno = document.getElementById('less');

function showCards() {
 showBtn.classList.replace('show', 'not-active');
 hiddenRow1.classList.replace('not-active', 'band-row');
 hiddenRow2.classList.replace('not-active', 'band-row');
 hideBtno.classList.replace('not-active', 'less');
}

function hideCards() {
 showBtn.classList.replace('not-active', 'show', );
 hiddenRow1.classList.replace('band-row', 'not-active');
 hiddenRow2.classList.replace('band-row', 'not-active');
 hideBtno.classList.replace( 'less', 'not-active');
}

showBtn.addEventListener('click', showCards);
hideBtno.addEventListener('click', hideCards);

