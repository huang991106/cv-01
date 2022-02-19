let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `
/*你好,我叫小黄
 * 接下来我要演示下我的前端功底
 * 首先准备一个div
 */

#div1{
    width: 200px;
    height: 200px; 
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5)
}
/* 接下来我把div变成一个太极图
 * 注意看好了
 * 先把div变成一个圆形
 */

#div1{
    border-radius: 50%;
}
/* 太极由一阴一阳组成
 * 一黑一白
 */

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 中心圆球
 */
#div1::before {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
#div1::after {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}

`;
let string2 = ''; //缓存显示的结果
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        //如果是回车就替换为<br>
        //如果是空格就替换为&nbsp
        //不是回车就照抄
        if (string[n] === '\n') string2 += '<br>';
        else if (string[n] === ' ') string2 += '&nbsp';
        else string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n); //因为CSS中不能出现html,所以使用substring
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            //不是最后一个字符,就继续
            n += 1;
            step();
        }
    }, 75);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
