interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    category: string;
    description: string;
  }
  
  fetch('store.json')
    .then(response => response.json())
    .then((data: Product[]) => {
      const container = document.getElementById('container');
  
      data.forEach((product: Product) => {
        const card = document.createElement('div');
        card.classList.add('product');
  
        const id = document.createElement('div');
        id.classList.add('product-id');
        id.textContent = product.id.toString();
        card.appendChild(id);
  
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
  
        const buy_button = document.createElement('button');
        let yes_but = document.getElementById('yes_button') as HTMLButtonElement;
        let no_but = document.getElementById('no_button') as HTMLButtonElement;
        buy_button.addEventListener('click', show_modal);
        yes_but.addEventListener('click', add_to_cart);
        no_but.addEventListener('click', go_back);
        buy_button.classList.add('cart-button');
        buy_button.textContent = 'Aggiungi al carrello';
        card.appendChild(buy_button);
  
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.log('Si è verificato un errore:', error);
    });
  
  let counter: number = 0;
  
  function show_modal() {
    let modal = document.getElementById('modal') as HTMLElement;
    modal.style.display = "block";
  }
  
  function add_to_cart() {
    counter++;
    updateCounter();
  }
  
  function go_back() {
    let modal = document.getElementById('modal') as HTMLElement;
    modal.style.display = "none";
  }
  
  function updateCounter() {
    const cart_counter = document.getElementById('cart-counter');
    if (cart_counter) {
      cart_counter.textContent = counter.toString();
    }
  }
  
  function Change_layout() {
    let container = document.getElementById('container');
  
    if (container?.classList.contains('card-layout')) {
      container.classList.remove('card-layout');
      container.classList.add('list-layout');
    } else {
      container?.classList.remove('list-layout');
      container?.classList.add('card-layout');
    }
  }