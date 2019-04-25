'use strict';
const Koa = require('koa');
const router = require('koa-router')();
var app = new Koa();
app.use(async(ctx,next)=>{
    console.log(`Process${ctx.request.method}${ctx.request.path}`);
    await next();
});
router.get('/',async(ctx,next)=>{
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>this is index/</h1>';
});
router.get('/hello',async(ctx,next)=>{
    ctx.response.body = '<h1>this is hello page</h2>';
});
router.get('/hello/:name',async(ctx,next)=>{
    let name = ctx.params.name;
    ctx.response.body = `<h1>this is name page!hello,${name}`;
});
app.use(router.routes());
app.listen(3001);
console.log('work on port 3001..');
let d = new Date();
console.log(d);
