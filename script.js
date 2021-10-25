function changePosition(){
    const b = document.getElementById('b')//获取按钮id
    let num = Math.floor((Math.random() * 90) + 10);//随机生成10 - 90的号码
    let num2 = Math.floor((Math.random() * 50) + 30);
    b.style.top=`${num}%`;
    b.style.left=`${num2}%`
}