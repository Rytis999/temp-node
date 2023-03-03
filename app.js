// const amount = 12;

// if (amount < 10) {
//     console.log('small number');
// } else {
//     console.log('large number')
// }


// console.log('AHHHHHHHHHHHHH')


// console.log(__dirname)
// setInterval(() => {
//     console.log('hello world')
// }, 1000)


// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// const names = require('./names');
// const sayHi = require('./utils');
// const data = require('./alternative')

// require('./grenade')


// sayHi('susan')
// sayHi(names.johnn);
// sayHi(names.peter);


// const os = require('os');

// // info about cureent user
// const user = os.userInfo()

// console.log(user)


// // method returns the system uptime in seconds


// console.log(`The System Uptime is ${os.uptime()} seconds`);


// const cureentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }


// console.log(cureentOS)

// 

// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('/content/', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute)


// const { readFileSync, writeFileSync } = require('fs');

// const first = readFileSync('/content/first.txt', 'utf8');
// const second = readFileSync('/content/second.txt', 'utf8');

// console.log(first, second);

// writeFileSync('/content/result-sync.txt', `Here is the result : ${first} ${second}`);

// = = = = = == = = = = = = = = = = = = = = == = = = = = = = = = = = = = = = = = =  = = = =
//SIMPLE SERVER


// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Welcome to our home page')
//     }
//     if (req.ulr === '/about') {
//         res.end('Here is short history ')
//     }
//     res.end(`
//     <h1>Opps</h1>
//     <p>No page was found</p>
//     `)
// });

// server.listen(5000)




const _ = require('lodash');

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems);