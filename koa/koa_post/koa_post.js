'use strict';
const koa = require('koa');
const bodyParesr = require('koa-bodyparser');
const router = require('koa-router')();
var app = new koa();
app.use(async(ctx,next)=>{
    console.log(`${ctx.request.method}`);
    await next();
});
router.get('/',async(ctx,next)=>{
    ctx.response.body = `<h1>this is index page</h1>
    <form action="/signin" method="post">
        <p><input name="name" value="koa_post"></p>
        <p><input name="password" type="password"></p>
        <p><input type="submit" value="submit"></p>
    </form>`;
});
router.post('/signin',async(ctx,next)=>{
    var name = ctx.request.body.name,
        password = ctx.request.body.password;
    if(name==='koa'&&password==='123'){
        ctx.response.body = `<h1>Welcome!${name}</h1>`;
    }else{
        ctx.response.body = `<h1>login fail</h1><p><a href='/'>try again</a></p>`;
    }
});
app.use(bodyParesr());
app.use(router.routes());
app.listen(3002);
console.log('it works on port 3002');
