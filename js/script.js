//creo array per contenere i numeri casuali
const boxNumber = [];
//genero i numeri casuali e li metto nell'array
randomNumberGenerator(5, 100, boxNumber)

console.log(boxNumber);


const boxAnswer = [];

let starBtn = document.querySelector('#numberGenerator');
starBtn.addEventListener('click', function() {
    //Imposto un timer che ogni secondo, aggiorna il contatore (3.. 2.. 1...)
let seconds = 5;
let ilMioTimer = setInterval(function () {
    //seleziono il tag dove inserire i numeri
    const printZone = document.querySelector('#printNumber');
    //se i secondi sono 5 allora stampali su pagina
    if (seconds == 5) {
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
        seconds--;
    } else if (seconds == 2) {
        //nascondi i numeri randomici
        printZone.classList.add('d-none');
        seconds--;
    } else if (seconds == 1) {
        
        const page = document.querySelector('body')
        const finalScore = document.createElement('h1');
        finalScore.classList.add('text-white');
        page.append(finalScore)
        
        while (boxAnswer.length < 5) {
            let answer = prompt('inserisci il numero')
            boxAnswer.push(answer)

        }
        let score = 0;
        for (let i = 0; i < boxNumber.length; i++) {
            const answer = parseInt(boxAnswer[i]);
            console.log(answer);
            if (boxNumber.includes(answer)) {
                score++
                finalScore.innerHTML = `Il tuo punteggio è di: ${score}`;
            }
            finalScore.innerHTML = `Il tuo punteggio è di: ${score}`;
        }
        clearInterval(ilMioTimer)
    }
    else {
        seconds--;
    }


}, 500);
})


console.log('array risposte', boxAnswer);










// //seleziono il bottone delle risposte
// let btnAnswer = document.querySelector('#btnAnswer');
//         btnAnswer.addEventListener('click', function () {
//             let answer = document.querySelectorAll('input').value;
//             console.log('la mia risposta', answer);
//             boxAnswer.push(answer)
//             console.log(boxAnswer);
//         })


