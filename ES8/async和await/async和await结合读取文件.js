//1.引入 fs 模块
const fs = require("fs");

//读取hello world
function helloWorld() {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/hello world.md", (err, data) => {
            //如果失败
            if (err) reject(err);
            //如果成功
            resolve(data);
        })
    })
}

//读取hello es
function helloEs() {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/hello es.md", (err, data) => {
            //如果失败
            if (err) reject(err);
            //如果成功
            resolve(data);
        })
    })
}

//声明一个 async 函数
async function main() {
    //获取 hello world 内容
    let world = await helloWorld();
    //获取 hello es 内容
    let es = await helloEs();

    console.log(world.toString());
    console.log(es.toString());
}