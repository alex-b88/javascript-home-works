//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((res) => {
        for (const obj of res.carts) {
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<h4>Order number: ${obj.id}</h4>`;
            let table = document.createElement('table');
            card.appendChild(table);

            for (const product of obj.products) {
                let newRow = table.insertRow();
                let img = document.createElement('img');
                img.src = `${product.thumbnail}`;
                img.alt = `${product.title}`;

                let imgCell = newRow.insertCell();
                imgCell.appendChild(img);
                let titleCell = newRow.insertCell();
                titleCell.innerHTML = `${product.title}`;
                let priceCell = newRow.insertCell();
                priceCell.innerHTML = `${product.price}`;
                let quantityCell = newRow.insertCell();
                quantityCell.innerHTML = `${product.quantity}`;
                let totalPriceCell = newRow.insertCell();
                totalPriceCell.innerHTML = `${product.total.toFixed(2)}`;
            }
            let pTotal = document.createElement('p');
            pTotal.classList.add('total-price-info');
            pTotal.innerHTML = `
            <span><b>Products:</b> ${obj.totalProducts}</span>
            <span><b>Items:</b> ${obj.totalQuantity}</span>
            <span><b>Total price:</b> ${obj.total.toFixed(2)}</span>`;
            card.appendChild(pTotal);
            document.body.appendChild(card);
        }
    });

//- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(console.log);