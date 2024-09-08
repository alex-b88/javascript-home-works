fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((res) => {

        for (const element of res.recipes) {
            let recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            let img = document.createElement('img');
            img.src = `${element.image}`;
            img.alt = element.name;
            recipeCard.appendChild(img);
            let div = document.createElement('div');
            div.classList.add('full-info');
            let blockAfterImg = document.createElement('div');
            blockAfterImg.classList.add('under-img');

            let levelLeft = document.createElement('div');
            levelLeft.classList.add('level-left');

            levelLeft.innerHTML = `<img src="./imgs/cals-icon.png"> ${element.caloriesPerServing}cal`
            blockAfterImg.appendChild(levelLeft);

            let levelRight = document.createElement('div');
            levelRight.classList.add('level-right');
            let prepTime = element.prepTimeMinutes+element.cookTimeMinutes;
            levelRight.innerHTML = `<img src="./imgs/time-icon.png"> ${prepTime}min`;
            blockAfterImg.appendChild(levelRight);


            div.appendChild(blockAfterImg);
            // create and add title
            let title = document.createElement('h2');
            title.innerText=`${element.name}`;
            div.appendChild(title);

            //create and add "cuisine" and "difficulty"
            let cuisAndDiffBlock = document.createElement('div');
            cuisAndDiffBlock.classList.add('cuisine-difficulty');
            cuisAndDiffBlock.innerHTML = `<b>Cuisine:</b> <span>${element.cuisine}</span>, <b>Difficulty:</b> <span>${element.difficulty}</span>`;
            div.appendChild(cuisAndDiffBlock);

            //create and add ingredients
            let ul = document.createElement('ul');
            for (const ingredient of element.ingredients) {
                let li = document.createElement('li');
                li.innerText = ingredient;
                ul.appendChild(li);
            }
            let ingredientsBlock = document.createElement('div');
            ingredientsBlock.classList.add('ingredients-block');
            ingredientsBlock.appendChild(ul);
            div.appendChild(ingredientsBlock);

            //create and add instructions
            let instructions = document.createElement('div');
            instructions.classList.add('instructions-block');
            for (const instruction of element.instructions) {
                let span = document.createElement('span');
                span.innerText = instruction;
                instructions.appendChild(span);
            }
            div.appendChild(instructions);

            //adding tags
            let tags = document.createElement('div');
            tags.classList.add('tags');
            tags.innerText = `tags: `;
            for (const tag of element.tags) {
                let tagSpan = document.createElement('span');
                tagSpan.innerText = tag;
                tags.appendChild(tagSpan);
            }
            div.appendChild(tags);

            //reviews and ratings
            let revAndRating = document.createElement('div');
            revAndRating.classList.add('reviews-ratings-block');
            let revDiv = document.createElement('div');
            revDiv.classList.add('reviews');
            revDiv.innerHTML = `<img src="./imgs/review-icon.png"> ${element.reviewCount}`;
            revAndRating.appendChild(revDiv);

            let ratDiv = document.createElement('div');
            ratDiv.classList.add('rating');
            ratDiv.innerHTML = `<img src="./imgs/rating-icon.png"> ${element.rating}`;
            revAndRating.appendChild(ratDiv);

            div.appendChild(revAndRating);

            //add div to card
            recipeCard.appendChild(div);
            //add to body
            document.body.appendChild(recipeCard);
        }
    });