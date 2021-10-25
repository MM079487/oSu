var score = 0;

function changePosition(){
    score++
    const b = document.getElementById('b')//获取按钮id
    const scoreEl = document.getElementById('score')
    let num = Math.floor((Math.random() * 50) + 30);//随机生成30 - 80的号码
    let num2 = Math.floor((Math.random() * 50) + 30);
    b.style.top=`${num}%`;
    b.style.left=`${num2}%`
    
    scoreEl.innerText=`Score : ${score}`;
}
