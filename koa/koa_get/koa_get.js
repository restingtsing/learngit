'use strict';
const koa = require('koa');
const router = require('koa-router')();
var app = new koa();
app.use(async(ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.path}`);
    await next();
});
router.get('/',async(ctx,next)=>{
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>this is index page!</h1>';
});
router.get('/hello/:name',(ctx,next)=>{
    let name = ctx.params.name;
    ctx.response.body = `<h1>this is hello page,hello ${name}!</h1>`;
});
app.use(router.routes());
app.listen(3001);
console.log('it works on port 3001..');
