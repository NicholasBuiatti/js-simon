1) Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

MILESTONE 1
Generate 5 numeri casuali. 
//generare 5 numeri casuali tra 1 e 100
//controllare che i numeri non si ripetano 

Ricordate che questi numeri dovrete ricontrollarli più avanti quindi non "buttateli" ma conservateli da qualche parte
//salvare i numeri estratti in un array con push


2) Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

MILESTONE 2
Impostate un timer a 3 secondi, testatelo con un console.log. Una volta funzionante fate in modo che nasconda i numeri in pagina.
//Usare il setTimeout per far si che dopo 3s i numeri scompaiano assegnanogli una classe di display:none, opacity o cambiando il colore in maniera che sia uguale allo sfondo

MILESTONE 3
Sempre nella funzione temporizzata, mostrate un prompt all'utente finchè non vi ritrovate con 5 numeri salvati. Poi stampate tutto l'array dei numeri utente in console.
//A fine funzione setTimeout far si che si visualizzi un prompt che chieda quali numeri ci fossero prima
//prendere i numeri e pusharli in un array

3) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

MILESTONE 4
Sempre nella funzione temporizzata, ora dovrete confrontare i due array: i numeri estratti e quelli inseriti dall'utente. Da dove partire? Io inizierei a controllare di avere tutto quello che mi serve. Provate con console.log se avete visibilità dei due dati. Poi ragionate su come confrontare gli array e di come generare il risultato, cioè la lista dei numeri indovinati.
//confronterei con un ciclo for ma ci penso dopo! ;)
