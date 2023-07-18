fetch('store.json')
  .then(response => response.json())
  .then(data => {
	const container = document.getElementById('container');

	data.forEach(product => {
		const card = document.createElement('div');
		card.classList.add('product');

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
		price.textContent = product.price.toFixed(2) + '€';
		card.appendChild(price);

		const category = document.createElement('p');
		category.classList.add('product-category');
		category.textContent = product.category;
		card.appendChild(category);

		const details = document.createElement('details');
		const summary = document.createElement('summary');
		summary.textContent = 'Mostra descrizione';
		details.appendChild(summary);

		const description = document.createElement('p');
		description.classList.add('product-description');
		description.textContent = product.description;
		details.appendChild(description);

		card.appendChild(details);
		

		container.appendChild(card);
	});
  })
  .catch(error => {
	console.log('Si è verificato un errore:', error);
  });


function Change_layout() {
	let container = document.getElementById('container');

	if (container.classList.contains('card-layout')) {
		container.classList.remove('card-layout');
		container.classList.add('list-layout');
	}
	else {
		container.classList.remove('list-layout');
		container.classList.add('card-layout');
	}
}
