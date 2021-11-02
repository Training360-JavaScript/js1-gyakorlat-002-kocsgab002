/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/
const array = ['gfd', 34, true, 'fgbfd', 87, false];
const prim = 34;

const checker = (array, prim) => {
    const existsResult = array.includes(prim);
    const indexResult = array.indexOf(prim);
    const allElementsAreNumbersResult =array.every(item => !Number.isNaN(item));
    const someElementsAreNumbersResult =array.some(item => !Number.isNaN(item));

    return { exists: existsResult, index: indexResult, allElementsAreNumbers: allElementsAreNumbersResult, someElementsAreNumbers: someElementsAreNumbersResult }

}

console.log(checker(array, prim));