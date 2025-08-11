// Linear search.

let arr = [1, 2, 41, 24, 5, 12, 26];
let target = 26;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        return console.log(`Found at: ${i}`);
    }
}
console.log(`Not Found`);
