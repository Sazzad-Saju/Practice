const prompt = require("prompt-sync")({ sigint: true });

const { encrypt, decrypt } = require('cipher-bsk')

while (1) {
    console.log('\n****Encryption Tool****')
    console.log('\n0.Encryption')
    console.log('\n1.Decryption')
    console.log('\n*Any.Exit\n')
    let choice = prompt('Enter Choice: ')
    console.log('\n')
    if (choice == 0) {
        let M = prompt('Message: ')
        let K = prompt('Key: ')
        console.log(encrypt(M, K))
    } else if (choice == 1) {
        let C = prompt('Code: ')
        let K = prompt('Key: ')
        console.log(decrypt(C, K))
    } else {
        console.log('Thanks for using!')
        break;
    }
}