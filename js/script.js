//creo array per contenere i numeri casuali
const boxNumber = [];
//genero numeri finchè non sono 6
let i = 0;
while (boxNumber.length < 5) {
    //genero dei numeri casuali da 0 a 100
    let randomNum = Math.floor(Math.random() * 100 + 1);
    //controllo che il numero generato non sia un doppione
    if (!boxNumber.includes(randomNum)) {
        boxNumber.push(randomNum)
    }
    i++;
}
console.log(boxNumber);