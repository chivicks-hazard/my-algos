let letters = [];

let word = "racecars";
let rword = "";

for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

for(let i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log(rword + "is a palindrome.");
} else {
    console.log(rword + "is not a palindrome.");
}