document.addEventListener('DOMContentLoaded', function() {
  const toggleViewButton = document.querySelector('.toggle-view-button');
  const productContainer = document.getElementById('product-card-container');
  const productList = document.createElement('ul');
  productList.classList.add('product-list');

  const products = [
    {
      "id": 1,
      "title": "God of War Ragnarok",
      "price": 79.98,
      "description": "Kratos e Atreus intraprendono un mitico viaggio alla ricerca di risposte e alleati prima che sopraggiunga il Ragnarök. È in arrivo dagli sviluppatori di Santa Monica Studio il sequel dell'apprezzatissimo God of War (2018). Kratos e Atreus devono esplorare ognuno dei nove regni, alla ricerca di risposte mentre si preparano all'annunciata battaglia che segnerà la fine del mondo.",
      "category": "Videogames",
      "image": "https://static-it.gamestop.it/images/products/311553/3max.jpg"
    }, {
      "id": 2,
      "title": "Fifa23",
      "price": 39.98,
      "description": "EA SPORTS™ FIFA 23 porta l'azione e il realismo del gioco più bello del mondo a un nuovo livello, grazie ai progressi della tecnologia HyperMotion2 che può contare ora sul doppio delle movenze di atleti reali per offrire animazioni ancora più realistiche in ogni partita. Gioca i più importanti tornei calcistici, con la FIFA World Cup™ maschile e femminile in arrivo su FIFA 23 durante la stagione, scendi in campo per la prima volta con i club femminili, con animazioni dedicate ottenute tramite la tecnologia HyperMotion2, e sfrutta le funzionalità cross-play per rendere ancora più semplice giocare con gli amici.",
      "category": "Videogames",
      "image": "https://static-it.gamestop.it/images/products/308404/3max.jpg"
    }, {
      "id": 3,
      "title": "Nintendo Switch OLED Color Neon",
      "price": 349.98,
      "description": "Divertiti con i tuoi giochi preferiti dove e quando vuoi, con la nuova Nintendo Switch OLED color Neon. Dotata di uno schermo OLED da 7 pollici, ti catturerà con i suoi colori intensi e il contrasto elevato. Cosa aspetti? Acquistala subito!",
      "category": "Console",
      "image": "https://static-it.gamestop.it/images/products/295437/3max.jpg"
    }, {
      "id": 4,
      "title": "Tappetino Nacon - MM400",
      "price": 15.98,
      "description": "NACON PC MM400. Colore del prodotto: Nero, Colorazione superficie: Monocromatico, Materiali: Neoprene. Larghezza: 900 mm, Profondità: 315 mm, Spessore: 5 mm.",
      "category": "Accessories",
      "image": "https://static-it.gamestop.it/images/products/292583/3max.jpg"
    }, {
      "id": 5,
      "title": "Funko Pop! - Balrog",
      "price": 29.98,
      "description": "FUNKO Pop! Lord Of the Rings, collezionali tutti! Realizzate in PVC (Vinile), queste miniature sono resistenti e curate nei minimi dettagli. Una versione stilizzata – e ironica – dei tuoi personaggi preferiti: film, cartoni animati, libri, fumetti, programmi televisivi e molto altro! Un oggetto da collezione moderno e simpatico, dallo stile inconfondibile.",
      "category": "Collectibles",
      "image": "https://static-it.gamestop.it/images/products/279320/3max.jpg"
    }
  ];
  
  toggleViewButton.addEventListener('click', function() {
    if (productContainer.classList.contains('product-container-list')) {
      // Cambia da vista lista a vista cards
      productContainer.classList.remove('product-container-list');
      toggleViewButton.textContent = 'Change layout';
      productContainer.style.display = 'flex';
      productList.style.display = 'none';
    } else {
      // Cambia da vista cards a vista lista
      productContainer.classList.add('product-container-list');
      toggleViewButton.textContent = 'Change layout';
      productContainer.style.display = 'none';
      productList.style.display = 'block';

      // Crea elementi della lista dei prodotti
      products.forEach(function(card) {
        const listItem = document.createElement('li');
        listItem.classList.add('product-list-item');

        listItem.innerHTML = `
        <div class="product-card">
          <img class="product-image" src="${product.image}" alt="${product.title}">
          <h2 class="product-title">${productTitle}</h2>
          <p class="product-price">${productPrice}</p>
          <p class="product-description">${productDescription}</p>
          <p class="product-category">${productCategory}</p>
        `;
        productList.appendChild(listItem);
      });
    }
  });
  productContainer.appendChild(productList);
});

fetch('store.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('product-card-container');

    data.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const image = document.createElement('img');
        image.classList.add('product-image');
        image.src = product.image;
        card.appendChild(image);

        const title = document.createElement('h2');
        title.classList.add('product-title');
        title.textContent = product.title;
        card.appendChild(title);

        const price = document.createElement('p');
        price.classList.add('product-price');
        price.textContent = 'Prezzo: €' + product.price.toFixed(2);
        card.appendChild(price);

        const description = document.createElement('p');
        description.classList.add('product-description');
        description.textContent = product.description;
        card.appendChild(description);

        const category = document.createElement('p');
        category.classList.add('product-category');
        category.textContent = 'Categoria: ' + product.category;
        card.appendChild(category);

        container.appendChild(card);
    });
  })
  .catch(error => {
    console.log('Si è verificato un errore:', error);
  });
