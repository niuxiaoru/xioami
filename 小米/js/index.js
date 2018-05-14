window.onload =function () {
    let picBan =document.querySelectorAll('.picBan');
    let dot2=document.querySelectorAll('.dotDot');
    let bigBox =document.querySelector('.bigBox ');
    let leftBtn =document.querySelector('.leftBtn');
    let rightBtn =document.querySelector('.rightBtn')
    // console.log(bigBox );
    // console.log(dot3);
    // console.log(picBan12.length==dot3.length);
    for(let i=0;i<dot2.length;i++){
        dot2[i].onclick = function () {
            for(let j=0;j<dot2.length;j++){
                dot2[j].classList.remove('active');
                picBan[j].style.display='none';
            }
            dot2[i].classList.add('active');
            picBan[i].style.display='block';
            index1=i;
        }
    }
    //    提示   移入显示  移出 隐藏
    let listBox = document.getElementsByClassName('listBox')
    let lists = document.getElementsByClassName('lists');
    //记录当前显示的是哪个
    let index = 0;
    let flag=true;
    // console.log(listBox);
    // console.log(lists);
    for (i=0;i<listBox.length;i++){
        listBox.onmouseenter = function () {
            lists[index].style.display = 'none';
            lists[i].style.display = 'block';
            index = i;
        }
        listBox[i].onmouseleave =function () {
            lists[index].style.display = 'none';
        }
    }
//    banner
    bigBox.onmouseenter=function(){
        clearInterval(t);
    };
    bigBox.onmouseleave=function(){
        t = setInterval(move,5000);
    };
    rightBtn.onclick =function () {
        if(!flag){
            return;
        }
        move();
        flag=false;
    }
    leftBtn.onclick =function () {
        moveL();
    }
    function moveL() {
        index1--;
        if(index1<0){
            index1 =picBan.length-1;
        }
        picBan.forEach(function (element) {
            element.style.display ='none';
        });
        dot2.forEach(element => element.className ='dotDot');
        picBan[index1].style.display='block';
        dot2[index1].classList.add('active');
    }
    let index1=0;
    let t = setInterval(move,4000);
    function move() {
        index1++;
        if(index1===picBan.length){
            index1 =0;
        }
        for(let i=0;i<picBan.length;i++){
            // picBan[i].style.display ='none';
            animate(picBan[i],{opacity:0});
            dot2[i].classList.remove('active');
        }
        // picBan[index1].style.display='block';
        dot2[index1].classList.add('active');
        animate(picBan[index1],{opacity:1},function () {
            flag=true;
        })
    }
};
