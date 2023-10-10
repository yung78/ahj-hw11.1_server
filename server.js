const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body').default;
const cors = require('@koa/cors');
const Router = require('koa-router');
const data = require('./db/db');
const messageBakery = require('./bakery/messageBakery.js');

const app = new Koa();
const router = new Router();

messageBakery();

app.use(koaBody({
  urlencoded: true,
  multipart: true,
}));

app.use(cors());

router.get('/messages/unread', async (ctx) => {
  ctx.response.body = {
    status: 'ok',
    timestamp: Date.now(),
    messages: data.messages,
  };

  console.log(ctx.response.body);
});

app.use(router.routes()).use(router.allowedMethods());

const port = 7070;
const server = http.createServer(app.callback());

server.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('WORK');
});
