/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

const items = [21, 212, 4, 312, 345, 54]

const brutto = (integerArray) => {
    const bruttoIntegerArray = integerArray.map(item => item * 1.27);
    sumOfBruttoIntegerArray = bruttoIntegerArray.reduce((preValue, currValue) => preValue + currValue);
    return Math.round(sumOfBruttoIntegerArray);


}
brutto(items);