//Images from pexels.com
const $descriptions= document.getElementById('descriptions')
const $container = document.getElementById('container')
const imagedescriptions =[
    'Photo by Anubhaw Anand  from Pexels',
    'Photo by Sarath Giri from Pexels',
    'Photo by Anastasia Kolchina from Pexels',
    'Photo by Warren Bradley from Pexels',
    'Photo by João Cabral  from Pexels',
    'Photo by ROMAN ODINTSOV from Pexels',
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

for (let i = 1 ; i < 16; i++  ){
    images.push(`<img src="./images/${baw.name}${i}.jpg" id='${i}' width="320rem" class="imagesgallery">`)
}

$container.innerHTML = images.join('')

//enables the images to get bigger when clicked
$container.addEventListener('click', function(event) {
    let image = event.target; 
    image.classList.toggle('imagesgallerybig');
  })


$container.addEventListener('mouseover', function(event) {
    $descriptions.textContent = imagedescriptions[event.target.id-1];
})

$container.addEventListener('mouseout', function(event) {
  $descriptions.textContent = '';
})

console.log($container)
  