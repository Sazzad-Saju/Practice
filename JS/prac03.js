// splice vs slice
console.log('** splice **')
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits)

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);
console.log(fruits)


console.log('** slice **')
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(fruits)
console.log(citrus)


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruits.slice(-3, -1);
console.log(myBest)

// substr : 
//not array, string
//not index
console.log('** substr **')
var fruits = "Jackfruits";
console.log(fruits.substr(4, 5))

/** boolean data type */
console.log('** Boolean **')
var x;
console.log(x)
console.log(Boolean(x))
x = 5
console.log(x)
console.log(Boolean(x))
x = 10 / 's'
console.log(x)
console.log(Boolean(x))
x = 10 / 0
console.log(x)
console.log(Boolean(x))

/** array */
console.log('** Array **')
var country = ["BD", "USA", "UK"]
console.log(country)
country[country.length] = 'DE'
console.log(country)
country.push('JP', 'IN')
console.log(country)
country.pop()
console.log(country)
country.shift()
console.log(country)
country.unshift('AU', 'NO')
console.log(country)
var arr = []
console.log(arr)
arr.push(12, "far-cry")
console.log(arr)
    // split
console.log("* split *")
var str = "far-cry"
console.log(str)
console.log(str.split(''))

console.log(str.split())
console.log(str.split('r'))

var countries = ["RU", "USA", "UK", "BD", "DE", "CN", "JP"]
    // countries.sort()
    // console.log(countries)
    // countries.reverse()
    // console.log(countries)

console.log(countries.reverse(countries.sort()))

/** Object */
console.log('** Object **')
var student = {
    name: 'Aleya',
    age: 23,
}

console.log(student)
    //add new proprty
student.dept = "Math"
console.log(student)
student['dob'] = "11/11/2011"
console.log(student)

console.log('** more on date type **')
var arr = [1, 2, 3]
console.log(arr)
var myarr = arr
arr[0] = 100
console.log(myarr)

console.log("199" + 1)