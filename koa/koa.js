'use strict';
const Koa = require('koa');
const router = require('koa-router')();
var app = new Koa();
app.use(async(ctx,next)=>{
    console.log(`${ctx.request.method} ${ctx.request.path}`);
    await next();
});
router.get('/',async(ctx,next)=>{
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>this is index</h1>';
});
router.get('/hello/:name',async(ctx,next)=>{
    let name = ctx.params.name;
    ctx.response.body = `<h1>hello ${name}`;
});
app.use(router.routes());
app.listen(3001);
console.log('ok ,it works on port 3001');

