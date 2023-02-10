/*
		Designed by: SELECTO
		Original image: https://dribbble.com/shots/5311359-Diprella-Login
*/




let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}


window.addEventListener("load", mainF);

// let activated_block = document.querySelectorAll('#activated').style.display;


let swicthride = document.getElementById('swicthride');
let newridebook = document.getElementById('newridebook');

swicthride.addEventListener('change', (evnt)=>{
    let ridemode = evnt.target.value;
    if(ridemode =='add ride'){
        newridebook.style.display='block';
    }else if(ridemode =='for me'){
        newridebook.style.display='none'
       
    }
   
   })


let swicthridetype = document.getElementById('swicthridetype');
let oneway = document.getElementById('oneway');
let multipleway = document.getElementById('multipleway');

swicthridetype.addEventListener('change', (event)=>{
    let swicthridetype = event.target.value;
    if(swicthridetype =='one way'){
        oneway.style.display='block';
        multipleway.style.display='none'
    }else if(swicthridetype =='with stops'){
        oneway.style.display='none';
        multipleway.style.display='block'
       
    }
   
   })


// the butoon hidder

// checxk the selection of the ride side 
let locatselect1 = document.querySelector('#onewwayselection1');
let locatselect2 = document.querySelector('#onewwayselection2');
let showvalid = document.querySelector('#showvalid')


locatselect2.addEventListener('change', (event)=>{
    let location= event.target.value;
    if(location ==locatselect1.value){
       
       showvalid.innerHTML='you enterd same location'
    }else{
        showvalid.innerHTML='your order is in process'
    }
})


