let cantIceCream,typeTaste,price,discount,iceCream,totalIceCream;
totalIceCream = "";
iceCream = "";
price = 0;

cantIceCream = parseInt(prompt("ingrese la cantidad de helados que quiere:"));

function typesOfFlavor(taste){
    switch(taste){
        case 1:
            price += 45;//acumulador de precio
            iceCream += " vainilla ";
            break;
        case 2:
            price += 100;//acumulador de precio
            iceCream += " chocolate ";
            break;
    }
}


for(let i=1;i<=cantIceCream;i++){
    let cantTaste = parseInt(prompt(`ìngrese la cantidad de sabores del helado ${i}`));
    let x = 1;
    while(x <= cantTaste){
        typeTaste = parseInt(prompt("ELIJA UN NUMERO POR FAVOR\n1-*************** vainilla\n2-*************** chocolate\n"));
        typesOfFlavor(typeTaste);
        x++;     
    }
    totalIceCream += `helado numero ${i} de sabor (${iceCream})\n`;
    iceCream = "";
}

alert(`${totalIceCream}\ntotal a apagar = $${price}`);
