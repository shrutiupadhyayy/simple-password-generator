const pwEl =  document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];

}

function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];

}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];

}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];

}

//alert(getLowercase());

function generatePassword() {
    const len = lenEl.value;

    let password = "";

    for(let i =0; i < len; i++) {
        const x = generateX();
        password += x;
    }
    pwEl.innerText = password; // text content of an element
}

function generateX() {
    const xs = [];
    if(upperEl.checked){
        xs.push(getUppercase())
    }
    if(lowerEl.checked){
        xs.push(getLowercase())
    }
    if(numberEl.checked){
        xs.push(getNumber())
    }
    if(symbolEl.checked){
        xs.push(getSymbol())
    }
    if (xs.length === 0) return "";
    return xs[Math.floor(Math.random() * xs.length)];
}


generateEl.addEventListener('click',generatePassword);



copyEl.addEventListener('click', ()=> {
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;

    if(!password) { return; }

    textarea.value = password;
    document.body.appendChild(textarea); //method used to insert required content at position end of the specific selected elements, APPENDCHILD -->  method of the Node interface adds a node to the end of the list of children of a specified parent node
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    //alert('Password copied to clipboard');
});

//we created the text area and put the password result in the text, we need to get a password, if not we return, otherwise we put the value of password in the textarea, appen it to body












