/* Global variables */ 

let myNave=document.getElementById('nav-head'),
myLogo=document.getElementById('logo'),
myLinks=document.querySelectorAll('.ul-head li a'),
myLinks_Array=Array.from(myLinks),
myNave_toggle=document.getElementById('nave-toggle'),
my_button=document.querySelector('.more-detail-bt')
my_moreImage=document.querySelectorAll('.more'),
my_moreImage_Array=Array.from(my_moreImage),

myLink=document.querySelectorAll('.nav-toggle .container-span span')


myContain_span=document.querySelectorAll('.container-span span')
mycontain_Li=document.querySelectorAll('.ul-head li')

for(var i=0; i<4;  i++){

    let firstLinkli=document.createElement('a')
    let firstLink=document.createElement('a')

   
    mycontain_Li[1].appendChild(firstLinkli);
//----------------------------------------
   
    myContain_span[i].appendChild(firstLink);
    
    if(i==0){
    firstLinkli.setAttribute('href','#0')
    firstLinkli.textContent='Home'
    mycontain_Li[i].appendChild(firstLinkli);
    myContain_span[i].appendChild(firstLink);
    firstLink.textContent='Home'
    firstLink.setAttribute('href','#0')
    }
    if(i==1){
        firstLinkli.setAttribute('href','#1')
        firstLinkli.textContent='servecis'
    mycontain_Li[i].appendChild(firstLinkli);
    myContain_span[i].appendChild(firstLink);
    firstLink.textContent='servecis'
    firstLink.setAttribute('href','#1')
    }
    if(i==2){
        firstLinkli.setAttribute('href','#2')
    firstLinkli.textContent='Conuct us'
    mycontain_Li[i].appendChild(firstLinkli);
    myContain_span[i].appendChild(firstLink);
    firstLink.textContent='Conuct us'
    firstLink.setAttribute('href','#2')

    }
    if(i==3){
        firstLinkli.setAttribute('href','#3')
        firstLinkli.textContent='news'
    mycontain_Li[i].appendChild(firstLinkli);
    myContain_span[i].appendChild(firstLink);
    firstLink.textContent='news'
    firstLink.setAttribute('href','#3')
    }
    
}




my_button.addEventListener('click',function(){
   for(let i=0; i<4; i++){
    my_moreImage_Array[i].classList.toggle('display-block')
 }
})

/*start the function of scroll */
function myscroll(){
    if(window.scrollY>0){
        myNave.style.position='fixed'
    }else{
        myNave.style.position='static' 
    }
}

setInterval(myscroll,100)
/*End the function of scroll */
 
let myToggle=document.getElementById('toggle')
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

function removeAll(){
    firstLinkli.classList.remove('heighlite')
    scondeLinkli.classList.remove('heighlite')
    thirdlinkli.classList.remove('heighlite')
    fourthLinkli.classList.remove('heighlite')
}
