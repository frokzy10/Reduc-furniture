const fs = require('fs');
const path = require('path');

const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 300);
    });
    next();
});
//
server.use(router);

// запуск сервера
server.listen(5000, () => {
    console.log('server is running on 5000 port');
});
