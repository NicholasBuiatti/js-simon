//creo una funzione che mi crei 5 numeri random
function randomNumberGenerator(quantiNum, MaxNum, arrayBox) {
    //genero numeri finchè non sono 5
    let i = 1;
    while (arrayBox.length <= quantiNum - 1) {
        //genero dei numeri casuali da 1 a 100
        let randomNum = Math.floor(Math.random() * MaxNum + 1);
        //controllo che il numero generato non sia un doppione
        if (!arrayBox.includes(randomNum)) {
            arrayBox.push(randomNum)
        }
        i++;
    }
}
//creo una funzione che mi permetta di creare div con una classe che scelgo io
function createDiv(classCss, text) {
    let div = document.createElement('div');
    div.classList.add(classCss);
    div.innerHTML = `<h2> ${text} </h2>`;
    // console.log('questa è la funzione', div);
    return div
}
