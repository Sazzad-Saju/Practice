/** Extremely Basic: JS */
/** Practice: node prac01.js */
const num1 = 017;
console.log('Octal 017 = ', num1); //convert octal to decimal

let pow = 2 ** 3;
console.log('Power: 2 ** 3 = ', pow) //get the power value of 2

let mod = 11 % 3;
console.log('Modular operator: 11 % 3 = ', mod); //modular operator %

/** Pre-post increment */
console.log('Pre-Post Increment: ')
var a = 5;
var c, d;
c = a++;
console.log(c);
console.log(a);
d = ++a;
console.log(d);

/** Arithmetic Calculation */
console.log('Arithmetic Calculation: ')
var a = 20 + 80 / 2 ** 4 * 2 - 15;
20 + 5 - 15
console.log('var a = 20 + 80 / 2 ** 4 * 2 - 15; a = ', a);

/** Comparison */
console.log("Comparison: ")
console.log(4 == "4")
console.log(4 === "4")
console.log(4 != '4')
console.log(4 !== '4')
console.log(true == 1)
console.log(true === 1)
console.log('store the following: ')
a = 5 > 4
console.log(`a = ${a}`);

/** Data Types */
console.log("Data Types")
console.log(45 * 2 * "2");
console.log(("180" / "90") * "2")
console.log(("180" / "90") * "2" + "2")
var y = 25 / 0;
console.log(y)
    /** conversion */
    /**
     * 1. decimal to hexa: 65 to 41
     * 2. Hexa string to decimal: 0xBB to 187
     * 3. String to Hexa: saju to 73616A75
     * 4. Hexa to string: 73616A75 to saju
     * 5. convert 111 to string('111'), binary(1101111), octal(157), hexadecimal(6f)
     * 6. Fixed floating point: 3.141592645 to 3.142
     * 7. Cur all white spaces a = "   Sazzad Saju      " to a="Sazzad"
     * 8. string replace: mala to minar
     */
console.log("Conversion: ")
    // decimal to hexa:
var a = 65;
var hex_a = a.toString(16)
console.log(hex_a)
    /** hexa string to decimal */
hex_a = '0xBB'
console.log(parseInt(hex_a, 16)) //or without 16 mentioned
    // String to Hexa
let myStr = "saju"
let temp = ""
for (let i = 0; i < myStr.length; i++) {
    temp += myStr.charCodeAt(i).toString(16)
}
let hexStr = temp.toUpperCase();
console.log(hexStr)
    // Hexa to Str
hexStr = hexStr.toString() //or hexStr='53616a75'
console.log(hexStr)
temp = "";
for (let i = 0; i <= hexStr.length; i += 2) {
    temp += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16))
}
console.log(temp)
console.log('dec num to hex, bin, oct')
let num = 111;
console.log(num.toString())
console.log(num.toString(2))
console.log(num.toString(8))
console.log(num.toString(16))

console.log('Fixed decimal point')
var number = 3.14159265358979323
console.log(number.toFixed(3))
console.log(number.toPrecision(3))

console.log('isNaN')
console.log(isNaN('24'))
console.log(isNaN(24))
console.log(isNaN('6f'))
console.log(isNaN(0x6f))

console.log("\"Legal\"")
console.log('"hello"')
console.log("'hello'")
console.log('\\Legal\\')

console.log('Case conversion: ')
myStr = "sHaM3r"
console.log(myStr.toUpperCase())
console.log(myStr.toLocaleLowerCase())

/* trim() */
console.log('Tream: ')
a = "   Sazzad Saju      "
console.log(a.length)
console.log(a.trim())
console.log(a.trim().length)

/* slice() */
myStr = "The Rest of the Heaven was blue"
    /** the Heaven was blue */
console.log(myStr.slice(-19))
console.log(myStr.slice(12))
console.log(myStr.slice(16, 22))
console.log(myStr.slice(-15, -9))
console.log(myStr.slice(0, 9))

/** substr() */
myStr = "Bornomala Cipher"
console.log(myStr.substr(0, 5)) //Borno
console.log(myStr.substr(5, 4)) //mala
console.log(myStr.substr(10)) //cipher

/** replace() */
myStr = "mala"
console.log(myStr.replace('al', 'in')) //mina
console.log(myStr.replace('ala', 'inar')) //minar

/** concate */
let t2 = "bsk"
let t3 = "cipher"
let t1 = t3.concat("-", t2, ".npm.", 1.02)
console.log(t1)

myStr = "To Be or Not to Be"
console.log(myStr.slice(3, 12))
console.log(myStr.substr(3, 12))