//Images from pexels.com
//The two events I chose were a hover that would show off the image description and the ability to click the images
//to make them bigger
const $descriptions= document.getElementById('descriptions')
const $container = document.getElementById('container')
const imagedescriptions =[
    'Photo by Darina Belonogova from Pexels',
    'Photo by Евгений Качин from Pexels',
    'Photo by Anastasia Kolchina from Pexels',
    'Photo by Elianne from Pexels',
    'Photo by João Cabral  from Pexels',
    'Photo by Heloisa from Pexels',
    'Photo by Julissa Helmuth from Pexels',
    'Photo by Nothing A head from Pexels',
    'Photo by Hidden Couple from Pexels',
    'Photo by Rapheal Brasileiro from Pexels',
    'Photo by Janet Serham from Pexels',
    'Photo by Sami Anas from Pexels'
];

let baw = {
    name: 'baw-',
}

let images = []

for (let i = 1 ; i <= 12; i++  ){
    images.push(`<img src="./images/${baw.name}${i}.jpg" id='${i}' width="350" class="imagesgallery">`)
}

$container.innerHTML = images.join('')

//enables the images to get bigger when clicked
$container.addEventListener('click', function(event) {
    let image = event.target; 
    image.classList.toggle('imagesgallerybig');
  })

//displays the image description while you hover over an image on the top of the browser
$container.addEventListener('mouseover', function(event) {
    $descriptions.textContent = imagedescriptions[event.target.id-1];//adds the descriptions to the hover
})
//makes the description disapear when the mouse isn't on the image
$container.addEventListener('mouseout', function(event) {
  $descriptions.textContent = '';//removes the descriptions from the top of the browser
})

  