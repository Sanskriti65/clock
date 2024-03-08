let scount=0
let mcount=0
let hcount=0
function seconds(){
    scount+=6;
    if(scount>=360)
    {
        scount=0
        if(mcount>=360)
        {
            if(hcount>=360)
            {
                hcount=0;

            }
            hcount+=6;
        }
        mcount+=6;
    }
    let a=document.getElementsByClassName('hand')
    // console.log(a)
    a[0].style.transform='rotate('+scount+'deg)'
    a[1].style.transform='rotate('+mcount+'deg)'
    a[2].style.transform='rotate('+hcount+'deg)'
    setTimeout(seconds,1000);
    // console.log(count)
}; seconds();
function on() {
    document.getElementsByTagName('body')[0].style.backgroundColor='black'
}
function off(){
    document.getElementsByTagName('body')[0].style.backgroundColor='white'
}