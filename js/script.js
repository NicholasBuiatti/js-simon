//creo array per contenere i numeri casuali
const boxNumber = [];

randomNumberGenerator(5, 100, boxNumber)

console.log(boxNumber);

//seleziono il tag dove inserire i numeri
const printZone = document.querySelector('#printNumber');
//creo un ciclo for che mi itera su tutta l'array dei numeri random e li stampa in pagina
for (let i = 0; i < boxNumber.length; i++) {
    //salvo gli elementi in una costante che posso richiamare
    const element = boxNumber[i];
    console.log(element);
    //uso la funzione creadiv per generare un contenuto box per i miei numeri random
    let box = createDiv(`text-white`, element)
    //aggiungo la classe col al div creato
    box.classList.add('col')
    printZone.append(box)
}

let sec = 3;

setTimeout(function() {
    printZone.classList.add('d-none')
}, sec * 1000);