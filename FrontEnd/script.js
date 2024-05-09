//l’appel à l’API avec fetch afin de récupérer dynamiquement les projets de l’architecte//
const apiUrl = "http://localhost:5678/api/works";
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Erreur de réseau ou de serveur: " + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('OK');
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données:", error);
  });

const projectsData = [
  { imageUrl: 'http://localhost:5678/images/abajour-tahina1651286843956.png', caption: 'Abajour Tahina', category: 'Objets' },
  { imageUrl: 'http://localhost:5678/images/appartement-paris-v1651287270508.png', caption: 'Appartement Paris V', category: 'Appartements' },
  { imageUrl: 'http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png', caption: 'Restaurant Sushisen - Londres', category: 'Hotels & restaurants' },
  { imageUrl: 'http://localhost:5678/images/la-balisiere1651287350102.png', caption: 'Villa “La Balisiere” - Port Louis', category: 'Appartements' },
  { imageUrl: 'http://localhost:5678/images/structures-thermopolis1651287380258.png', caption: 'Structures Thermopolis', category: 'Objets' },
  { imageUrl: 'http://localhost:5678/images/appartement-paris-x1651287435459.png', caption: 'Appartement Paris X', category: 'Appartements' },
  { imageUrl: 'http://localhost:5678/images/le-coteau-cassis1651287469876.png', caption: 'Pavillon “Le coteau” - Cassis', category: 'Appartements' },
  { imageUrl: 'http://localhost:5678/images/villa-ferneze1651287511604.png', caption: 'Villa Ferneze - Isola d’Elba', category: 'Appartements' },
  { imageUrl: 'http://localhost:5678/images/appartement-paris-xviii1651287541053.png', caption: 'Appartement Paris XVIII', category: 'Appartements' },
  { imageUrl: 'http://localhost:5678/images/bar-lullaby-paris1651287567130.png', caption: 'Bar “Lullaby” - Paris', category: 'Hotels & restaurants' },
  { imageUrl: 'http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png', caption: 'Hotel First Arte - New Delhi', category: 'Hotels & restaurants' },

];

// Filtration des images par categories
function filterImages(category) {
  var gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';


  var filteredImages = projectsData.filter(project => {
    return category === 'all' || project.category === category;
  });


  filteredImages.forEach(project => {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = project.imageUrl;

    const figCaption = document.createElement('figcaption');
    figCaption.textContent = project.caption;
    

    figure.appendChild(img);
    figure.appendChild(figCaption);

    gallery.appendChild(figure);
  });
}

document.addEventListener('DOMContentLoaded', function () {

  const gallery = document.querySelector('.gallery');

  projectsData.forEach(project => {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = project.imageUrl;

    const figCaption = document.createElement('figcaption');
    figCaption.textContent = project.caption;

    figure.appendChild(img);
    figure.appendChild(figCaption);
    gallery.appendChild(figure);
  });
  
  

  filterImages('all'); // 
});