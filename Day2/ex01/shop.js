fetch('store.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('product_container');

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
