import React from "react";
import ReactDOM from "react-dom";

/**
 * utilizzo di una contante all'interno di tag html nel render
 * per visualizzare corretamente la mia costante ho bisogno di inglobarla all'interdo di delle parentesi graffe, altrimenti verrebbe considerata come una stringa
 * all'interno delle parentesi graffe posso utilizzare operatori matematici
 * possiamo inoltre utilizzare espressioni js
 * all'interno delle parentesi graffe non possiamo scrivere dichiarazioni js, come i condizionali (if), non funziona perchè si tratta di un'affermazione inveche che di un'espressione
 <p>Your lucky number is 
  {
   if(name === "Angela"){
     return 5;
    }else if(name === "Jack"){
      return 8;
    }
  }
  (if)
 </p>
 * differenza tra espressioni e dichiarazioni:
  - un'espressine verrà valutata su un valore che finisce dopo che tutto il codice è stato eseguito;
  - una dichiarazione sta chiedendo al computer di fare un po' di lavoro per valutare questa affermaizone e elaborare qualcosa.
 */

const fname = "Angela Caterina";
const lname = "Gallo";

const num = 5;
ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);

/**Strig
  - concatenazione: {fname + " " + lname}
  - 2 const: {fname} {lname}
  - ES6 interpolazione: {` ${fname} ${lname} `}
 */

/**Number
  - const: {num}
  - concatenazione: {3 + 9}
  - espressione: {Math.floor(Math.random() * 10)}
 */
