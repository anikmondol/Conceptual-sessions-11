const btnAll = document.getElementsByClassName('add-btn');
let count = 0;

for (const btn of btnAll) {
    btn.addEventListener('click', function (event) {
        count = count += 1;
        setInnerText('cart-count', count);

        const placesName = event.target.parentNode.childNodes[1].innerText;
        event.target.setAttribute("disabled", true);

        const priceText = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const price = parseInt(priceText);

        const selectedPlaceContainer = getText('selected-place-container');
        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = placesName;

        const p1 = document.createElement('p');
        p1.innerText = priceText;
        event.target.classList.add('disable')


        event.target.parentNode.parentNode.style.backgroundColor = 'gray'

        li.appendChild(p);
        li.appendChild(p1);


        const budget = getText('budget').innerText;
        const budgetNumber = parseInt(budget);
        if(budgetNumber - price < 0){
            alert('low budget');
            return;
        }
        getText('budget').innerText = budgetNumber - price;


        selectedPlaceContainer.appendChild(li);



        totalCost('total-cost', price);
        grandTotal('other')

        // ----------------------------------------

        // const totalCost = getInnerElementNumber('total-cost');
        // setInnerText('total-cost', price+totalCost);

        // const grandTotal = getInnerElementNumber('grand-total');
        // setInnerText('grand-total', grandTotal+price);


    })
}

// --------------------------------------
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

// -----------------------------

function getText(id) {
    const selectedPlaceContainer = document.getElementById(id);
    return selectedPlaceContainer;
}
// --------------------------------------

function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;

    const ConvertedTotalCost = parseInt(totalCost);

    setInnerText(id, value + ConvertedTotalCost)

}

// ------------------------
function grandTotal(category) {
    const totalCost = getText('total-cost').innerText;

    const ConvertedTotalCost = parseInt(totalCost);

    if (category === 'bus') {
        setInnerText('grand-total', ConvertedTotalCost + 100);
    }
    else if (category === 'train') {
        setInnerText('grand-total', ConvertedTotalCost - 200);
    }
    else if (category === 'flight') {
        setInnerText('grand-total', ConvertedTotalCost + 500);
    } else {
        setInnerText('grand-total', ConvertedTotalCost);

    }




}



// ---------------------------------

// function getInnerElementNumber(id) {
//     const element = document.getElementById(id).innerText;
//     const elementNumber = parseInt(element)
//     return elementNumber;
// }
