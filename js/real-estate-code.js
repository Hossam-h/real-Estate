let myNave=document.getElementById('nav-head')

let myLogo=document.getElementById('logo'),
myLinks=document.querySelectorAll('.ul-head li a'),
myLinks_Array=Array.from(myLinks),
myNave_toggle=document.getElementById('nave-toggle');
console.log(myNave_toggle)
function scroll(){
if(window.scrollY>0){
    myNave.style.backgroundColor='white'
    myLogo.style.color='black'
    myNave.style.transition='all .5s'
    myToggle.style.color='black'
    
    
    myLinks_Array.forEach(element => {
        element.classList.add('active-pink')
        element.classList.add('black')
  });
    myNave.style.height='90px'
}
 
 else{
    myNave.style.backgroundColor='transparent'
    myLogo.style.color='white'
    myToggle.style.color='rgb(189, 189, 189)'
    myLinks_Array.forEach(element => {
       
        element.classList.remove('active-pink')
        element.classList.remove('black')
        myNave.style.height='90px'
    });
    
 }
}
window.onload=function(){
   
}

function more_scroll(){
    if (window.scrollY>100){
        myNave.style.backgroundColor='white'
        myLogo.style.color='black'
        myLogo.style.paddingBottom='0px'
        myNave.style.transition='all .5s'
        myNave.style.height='70px'
        
    
    }
}
 setInterval(scroll,100),
 setInterval(more_scroll,100)

let myToggle=document.getElementById('toggle'),
 myLink_span=document.querySelectorAll('.nav-toggle span'),
 myClose_icon=document.getElementById('close-icon');

myToggle.onclick=function(){
    myLink_span.forEach(spans=>{

        spans.classList.add('block')
        spans.classList.remove('none')
        
    })
    myToggle.style.visibility='hidden'
    myClose_icon.style.visibility='visible'
    myNave_toggle.style.backgroundColor='white'
    myClose_icon.style.color='black'
}

myClose_icon.onclick=function(){
    myLink_span.forEach(spans=>{
      spans.classList.add('none')
        
    })
    myToggle.style.visibility='visible'
    myClose_icon.style.visibility='hidden'
    myNave_toggle.style.backgroundColor='transparent'
    
}


/*--------------------------------------------------------------------------------------- */
