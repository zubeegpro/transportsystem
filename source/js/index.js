
const logform = document.getElementById('logform');
        
let count = 0;

function hide(){
    count++;
    if (count <= 1){
        logform.style.display="block"
    }else if(count==2){
        logform.style.display="none"
        count=0
    }
}

const hide2 = () =>{
    logform.style.display='none' 
}


let logform1 = document.getElementById('dispform');
        
let count1 = 0;
let ticketform = document.getElementsByClassName('ticket-form');

const selectedpkp= document.querySelector('.select2pick');


const selecteddpp = document.querySelector('.selectDrop');

const bookdate = document.querySelector('.bookdate');

function hide2(){
    
    thselected = selectedpkp.options[selectedpkp.selectedIndex].text;
    thselected2 = selecteddpp.options[selectedpkp.selectedIndex].text;
    thselected3 = bookdate.value;
    if(thselected == thselected2 & thselected=='Pickup Point' & thselected2=='Dropping Point'){
        window.alert('You have same location or no location')
    }else{
        document.querySelector('.pickupdata').innerHTML=thselected;
        document.querySelector('.dropdata').innerHTML=thselected2;
        document.querySelector('.bookdate').innerHTML=thselected3;
    
    
        count1++;
        if (count1 <= 1){
            logform1.style.display='block';
        }else if(count1==2){
            logform1.style.display="none";
            count1=0;
        }
    }
    }
let hide3 =()=>{
    logform1.style.display='none';
    }

let payment=document.querySelector('#paymt');
let cardsec =document.querySelector('.cardsection');
let tansfersec =document.querySelector('.transfersection');
let cardno =document.querySelector('.cardnum'); 


payment.addEventListener('change', (event)=>{
 let paymentmthd = event.target.value;
 if(paymentmthd =='card'){
    cardsec.style.display='block';
    tansfersec.style.display='none'
    
 }else if(paymentmthd =='transfer'){
    tansfersec.style.display='block';
    cardsec.style.display='none'
    
 }

})
check = 1
cardno.addEventListener('input', (event)=>{
    let cardnov = cardno.value
    
    let patt = /^4/;
    
    let patt1 = /^5/;
    let resmaster = patt1.test(cardnov);
    let patt2= /^6/;
    let resdiscover= patt2.test(cardnov);
    let patt3= /^3/;
    let restravel= patt3.test(cardnov);
    if(check=1){
        // let resvisa = patt.test(cardnov);
        if(cardnov.match(patt)){
        cardno.style.color='red'
        console.log(event.inputType)
        removeEventListener('input',event)   
        }
    }else{
        console.log('false')
    }


})


function addwidth(){
    document.getElementById('navin').style.display='block';
    document.getElementById('navin').style.backgroundColor='rgba(0,0,0,0.7)';
    document.getElementById('navin').style.visibility='visible';
    
}
function subwidth(){
    document.getElementById('navin').style.visibility='hidden';
    
}




    // console.log(selectedpkp.options[selectedpkp.selectedIndex].text);
   
