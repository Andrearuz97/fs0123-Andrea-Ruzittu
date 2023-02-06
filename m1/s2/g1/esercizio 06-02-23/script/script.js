var anni = prompt('Inserisci la tua età:');

if(!(isNaN(anni))){
    if(anni>=18 && anni <=100){
        document.write('<p>Sei maggiorenne.</p>');
    }else if(anni>100){
        document.write('<p>Non mentire!! Inserisci la tua vera età</p>');
    }else{
        document.write('<p>Sei ancora minorenne!</p>');
    }
    }else{
    document.write("<p>Non hai inserito numeri! Devi inserire solo cifre in questo prompt.</p>");
}