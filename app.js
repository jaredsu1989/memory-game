document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
    ];

    cardArray.sort((a, b) => 0.5 - Math.random());

    let cardChosen = [];
    let cardChosenID= [];
    let result = 0;
    const grid = document.querySelector(".grid");


    //create game board
    let createBoard = () => {
        for (let i = 0; i < 12; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('setid', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    //check for match
    function checkForMatch() {
        const imgSelect = document.querySelectorAll("img");
        let cardID1 = cardChosenID[0], cardID2 = cardChosenID[1];
        if (cardID1 == cardID2) {
            alert("You have clicked on the same card twice");
            cardChosen.pop();
            cardChosenID.pop();
        } else if (cardChosen[0] === cardChosen[1]){
            alert("You have found a match");
            imgSelect[cardID1].setAttribute('src', 'images/white.png');
            imgSelect[cardID2].setAttribute('src', 'images/white.png');
            imgSelect[cardID1].removeEventListener('click', flipcard);
            imgSelect[cardID2].removeEventListener('click', flipcard);
            cardChosen = [];
            cardChosenID = [];
            result++;
        } else {
            alert("Nice try! Take another guess");
            imgSelect[cardID1].setAttribute('src', 'images/blank.png');
            imgSelect[cardID2].setAttribute('src', 'images/blank.png');
            cardChosen = [];
            cardChosenID = [];
        }

        if (result === 6){
            alert("Congratulations, you have won the Memory Game");
        } 

       document.getElementById("result").innerHTML = result;
       
        
    }

    //flip your card
    function flipcard() {        
        let cardId = this.getAttribute("setid");
        this.setAttribute('src', cardArray[cardId].img);
        cardChosen.push(cardArray[cardId].name);        
        cardChosenID.push(cardId)
        if (cardChosen.length == 2) {
            setTimeout(checkForMatch, 400);
        }
    }

    createBoard();
});

