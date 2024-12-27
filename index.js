function countchar(input) {

    const pureinput = input.replace(/\s+/g, '')
    const charsCount = {};
    const result = []


    for (const char of pureinput) {
        charsCount[char] = (charsCount[char] || 0) + 1;
    }

    const seen = new Set();
    for (const char of pureinput) {
        if (!seen.has(char)) {
            result.push(`${char}: ${charsCount[char]}`);
            seen.add(char)
        }
    }
    return result.join(', ')
}


const input = "I am a programmer:"
const output = countchar(input)
console.log(output);
