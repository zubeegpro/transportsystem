let im=document.querySelectorAll('.cd');
let im2 = document.querySelectorAll('.cd2');
let tle = ["Discover innovative ways to decorate ","Manufactured with the best materials","We are available all across the globe"
]
let content = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
," Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
" With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
]
let slideshow = 0;
Show();
Show2();
function forwd(n){
    slideshow=+n;

    Show();
    
}

function Show2(m){
    for (x= 0; x < im2.length; x++){
    // console.log(x); 
        im2[x].style.display='none'; 
    }
    slideshow++;
    // console.log(slideshow)
   let gb= slideshow-1 ;
 
   if(gb == im2.length || gb > im2.length){
        gb=0;
        slideshow=1;
    }
    im2[gb].style.display='block';
    setTimeout(Show2, 4000);
   
}

function Show(n){
    for (x= 0; x < im.length; x++){
    // console.log(x); 
        im[x].style.display='none'; 
    }
    
    slideshow++;
    // console.log(slideshow)
    let gb= slideshow-1 ;

    if(gb == im.length || gb > im.length){
        gb=0;
        slideshow=1;
        
    }

    for(t=0; t<tle.length; t++){
        document.getElementById('titl').innerHTML=tle[gb];
            
    }

    for(w=0; w<content.length; w++){
        document.getElementById('pgrh').innerHTML=content[gb];
    }

    im[gb].style.display='block';
    setTimeout(Show, 4000);
}
let widttth =window.matchMedia('(max-width:400px)');

function addwidth(){
    document.getElementById('navin').style.display='block';
    document.getElementById('navin').style.backgroundColor='rgba(0,0,0,0.7)';
    document.getElementById('navin').style.visibility='visible';
    
}
function subwidth(){
    document.getElementById('navin').style.visibility='hidden';
    
}

function hideform(){
    // document.getElementById('backfm').style.width='0';
    document.getElementById('backfm').style.display='none';

}
function dispform(){
    // document.getElementById('backfm').style.width='100%';
    document.getElementById('backfm').style.display='block';
    
}
const theas=document.getElementById('assid');
const theart = document.getElementById('shopn');
 
// let topic= document.getElementsByClassName('dd')
// let cont = document.getElementById

// function displyform(){
//     document.querySelector('#backfm').style.width='100%'
// }


