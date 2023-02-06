var anni = prompt('Inserisci la tua età:');

if(!(isNaN(anni))){
    if(anni>=18 && anni <=100){
        document.write('Sei maggiorenne.');
    }else if(anni>100){
        document.write('Non mentire!! Inserisci l eta corretta');
    }else{
        document.write('Sei ancora minorenne!');
    }
    }else{
    document.write("<p>Non hai inserito numeri! Devi inserire solo cifre in questo prompt.</p>");
}