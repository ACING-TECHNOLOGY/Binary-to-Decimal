const result = document.getElementById("result");
const binary = document.getElementById("binary");
const convert = document.getElementById("convert");


//functions

const converter = (bit,bitIndex,lastIndex) => {
    if(bit == 1) return 2 ** (lastIndex -bitIndex);
    return 0;
}


const inputParser = input =>{
    let arr = [];
    for(let i =0; i < input.length ; i++)arr.push(parseInt(input[i]));
    return arr;
}

binary.addEventListener("change",e =>{
    let array = [];
    let decimal = 0;
    array = inputParser(e.target.value);
    for (let i = 0; i <= (array.length -1); i++) {
        if (array[i] === 1 || array[i] === 0) {
            decimal += converter(array[i], i, (array.length - 1));
        }else{
            result.innerHTML = `${array[i]} is not a bit.Try Again`;
            break;
        }

    }
    (!(decimal === -1))?
    result.innerHTML = decimal:
    result.innerHTML = `Enter a valid binary`
    ;
});

convert.addEventListener("click",e =>{
    let array = [];
    let decimal = 0;
    if(binary.value.length > 0) array = inputParser(binary.value);
    for (let i = 0; i <= (array.length - 1) ; i++) {
        if (array[i] === 1 || array[i] === 0) {
            decimal += converter(array[i], i, (array.length - 1));
        } else {
            result.innerHTML = `${array[i]} is not a bit.Try Again`;
            break;
        }

    }
    (!(decimal === -1))?
    result.innerHTML = decimal:
    result.innerHTML = `Enter a valid binary`
    ;
});