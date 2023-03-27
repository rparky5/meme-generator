let memegen = document.getElementById('memegen');
let store = document.getElementById('meme-container');

memegen.addEventListener("submit", createMeme);

function createMeme(event) {
  event.preventDefault();
  let imgContainer = document.createElement('div');
  let newMeme = document.createElement('img');
  let text1 = document.createElement('p');
  let text2 = document.createElement('p');
  let top = document.getElementById('top-text').value;
  let bottom = document.getElementById('bottom-text').value;
  let image = document.getElementById('image-url').value;

  store.appendChild(imgContainer);
  imgContainer.append(text1, text2, newMeme);

  imgContainer.classList.add('imgContainer');
  text1.classList.add('topText');
  text2.classList.add('botText');
  newMeme.src = image;
  text1.innerHTML = top;
  text2.innerHTML = bottom;

  imgContainer.addEventListener('click', function(e) {
    imgContainer.remove();
  })

  memegen.reset();
}
