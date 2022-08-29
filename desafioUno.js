let cantIceCream,typeTaste,price,discount,iceCream,totalIceCream;
totalIceCream = "";
iceCream = "";
price = 0;

cantIceCream = parseInt(prompt("BIENVENIDO\ningrese la cantidad de helados que quiere, por favor:"));

function typesOfFlavor(taste){
        switch(taste){
            case 1:
                price += 45;//acumulador de precio
                iceCream += " Vainilla($45) ";
                break;
            case 2:
                price += 100;//acumulador de precio
                iceCream += " Chocolate($100) ";
                break;
            case 3:
                price += 40;
                iceCream += " Menta($40) ";
                break;
            case 4:
                price += 90;
                iceCream += " Dulce De Leche($90) ";
                break;
            default:
                break;
        }
}


for(let i=1;i<=cantIceCream;i++){
    let cantTaste = parseInt(prompt(`ìngrese la cantidad de sabores del helado ${i}`));
    let x = 1;
    while(x <= cantTaste){
        typeTaste = parseInt(prompt("ELIJA UN NUMERO POR FAVOR\n1-*************** Vainilla($45)\n2-*************** Chocolate($100)\n3-*************** Menta($40)\n4-*************** Dulce De Leche($90)\n"));
        while(isNaN(typeTaste) || typeTaste > 4){
            typeTaste = parseInt(prompt("ELIJA UN NUMERO POR FAVOR\n1-*************** Vainilla($45)\n2-*************** Chocolate($100)\n3-*************** Menta($40)\n4-*************** Dulce De Leche($90)\n"));
        }
        typesOfFlavor(typeTaste);
        x++;     
    }
    totalIceCream += `Helado N°${i} de ${cantTaste} sabores (${iceCream})\n`;
    iceCream = "";
}

alert(`${totalIceCream}\ntotal a apagar = $${price}\nMuchas Gracias`);
