let memegen = document.getElementById('memegen');
let store = document.getElementById('memes');

memegen.addEventListener("submit", createMeme);

function createMeme(event) {
  event.preventDefault();
  let imgContainer = document.createElement('div');
  imgContainer.classList.add('memeContainer');
  let newDiv = document.createElement('div');
  newDiv.classList.add('imgDiv');
  newDiv.style.width = '500px';
  newDiv.style.height = '375px';
  imgContainer.appendChild(newDiv);
  let top = document.getElementById('top-text').value;
  let bottom = document.getElementById('bottom-text').value;
  let image = document.getElementById('image-url').value;
  let newMeme = document.createElement('img');
  newMeme.src = image;
  newMeme.style.width = '500px';
  newMeme.style.height = '375px';
  newDiv.appendChild(newMeme);
  let text1 = document.createElement('div');
  text1.classList.add('topText');
  text1.innerHTML = top;
  let text2 = document.createElement('div');
  text2.classList.add('botText');
  text2.innerHTML = bottom;
  newDiv.appendChild(text1);
  newDiv.appendChild(text2);
  text1.style.position = 'absolute';
  text1.style.top = '10%';
  text1.style.fontSize = '2rem';
  text1.style.color = 'white';
  text1.style.textAlign = 'center';
  text1.style.webkitTextStroke = '1.5px black';
  text1.style.textTransform = 'uppercase';
  text1.style.fontFamily = 'Impact, sans-serif';
  text2.style.position = 'absolute';
  text2.style.bottom = '10%';
  text2.style.fontSize = '2rem';
  text2.style.color = 'white';
  text2.style.textAlign = 'center';
  text2.style.webkitTextStroke = '1.5px black';
  text2.style.textTransform = 'uppercase';
  text2.style.fontFamily = 'Impact, sans-serif';
  store.appendChild(imgContainer);
  memegen.reset();
}

