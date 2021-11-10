//Images from pexels.com
const $container = document.getElementById('container');
const $title = document.getElementById('title')
const $image = ['images/branch.jpg',
                 'images/flower.jpg',
                 'images/shadow.jpg',
                 'images/hands.jpg',
                 'images/pathway.jpg',
                 'images/hair.jpg', 
                 'images/cat.jpg', 
                 'images/veil.jpg',
                 'images/staircase.jpg',
                 'images/tinyflower.jpg',
                 'images/feather.jpg',
                 'images/umbrella.jpg'];
const $imageinfo = [
                   'Photo by Anubhaw Anand from Pexels',
                   'Photo by Sharath Giri from Pexels', 
                   'Photo by Anastasia Kolchina from Pexels',
                   'Photo by Warren Bradley from Pexels',
                   'Photo by João Cabral from Pexels',
                   'Photo by ROMAN ODINTSOV from Pexels', 
                   'Photo Julissa Helmuth from Pexels',
                   'Photo by Pixabay from Pexels', 
                   'Photo by Hidden Couple from Pexels',
                   'Photo Rapheal Brasileiro from Pexels',
                   'Photo by Janet Serhan from Pexels',
                   'Photo by Sami Anas from Pexels'];

 $title.innerHTML = '<h1>Pexels.com Image Gallery<h1>'
 const newElements = []
let text = '';
for (let i=0; i < $image.length; i++) {
  text += '<div class=imageContainer>'
  text += '<img src="' + $image[i] + '"></img>';
  text += '<button class="button" data-additionalinfo="' + $imageinfo[i] + '">View Details</button>';
  text += '</div>'

  console.log($image[i]);
  console.log($imageinfo[i])
}
document.getElementById('container').innerHTML = text;


const container = document.querySelectorAll('.button')

for (const button of container){
  button.addEventListener('click', popUp)
}
//creates pop-up to display info
function popUp (p){
  const button = p.target
 alert (button.dataset.additionalinfo);
}
const images = document.querySelectorAll('img')

for (const img of images){
  img.addEventListener('mouseover', borderColor)
}

function borderColor (p){
  const img = p.target
  p.target.style.border="5px solid gray";
  setTimeout(function(){
    p.target.style.border = "";
  }, 500);
}



