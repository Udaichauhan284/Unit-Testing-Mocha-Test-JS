//fahrenheit to celcius
//[23,140,212,41] => [-5,60,100,5]
//(32⁰F-32)*5/9=0⁰C

function getCelcius(fahrenheit){
    return fahrenheit.map(value => (value-32)*5/9);
}