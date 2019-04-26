'use strict';
var fn_index = async(ctx,next)=>{
    ctx.response.body=`<h1>this is index</h1>
    <form action="/signin" method="post">
        <p><input placeholder="请输入账号" name="counter"></p>
        <p><input placeholder="请输入密码" name="password" type="password"></p>
        <p><input type="submit" value="提交"></p>
    </form>`;
};
var fn_signin = async(ctx,next)=>{
    var name = ctx.request.body.counter,
        password = ctx.request.body.password;
    if(name==='rest'&&password==='1234'){
        ctx.response.body = `<h1>hello,${name}</h1>`;
    }else{
        ctx.response.body = `<h1>login failed</h1>
        <p><a href='/'>请输入正确的账号密码</a></p>`;
    }
};
module.exports = {
    'GET/':fn_index,
    'POST/signin':fn_signin
};