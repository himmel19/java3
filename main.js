let banana = +prompt('Введите число бананов')
for (let i = 1; i <= banana; i++) {
    if (i == 1) {
        console.log(i + ' banana');
    }
    else{
        console.log(i + ' bananas');
    }
}

let num = +prompt('Введите число') 
let answer = 0
for (let i = 1; i <= num; i++) {
    if(i % 2 == 0){
        answer += i
    }
}
console.log(answer);


let num = +prompt('Введите число')
let stepen = +prompt('Введите степень')
let answer = 1


for (let i = 0; i < stepen; i++) {
    answer = answer * num
}

console.log(answer);


