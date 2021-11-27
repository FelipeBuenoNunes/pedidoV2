let x = document.body;
console.log(x.style);
let ola = "linear-gradient(to left, ";
for(let i = 200; i > 180; i--){
    if(i === 181){
        ola += "rgb(" + i + ", " + i + ", " + i + "))"
    }else{

        ola += "rgb(" + i + ", " + i + ", " + i + "), "
    }
}
console.log(ola);
x.style.background = ola;