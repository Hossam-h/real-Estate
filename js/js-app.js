let myNave=document.getElementById('nav-head'),
myLogo=document.getElementById('logo'),
myLinks=document.querySelectorAll('.ul-head li a'),
myLinks_Array=Array.from(myLinks),
myNave_toggle=document.getElementById('nave-toggle'),
my_button=document.querySelector('.more-detail-bt')
my_moreImage=document.querySelectorAll('.more'),
my_moreImage_Array=Array.from(my_moreImage),

myLink=document.querySelectorAll('.nav-toggle .container-span span')
console.log(myLink[1].children)

myContain_span=document.querySelectorAll('.container-span span')
mycontain_Li=document.querySelectorAll('.ul-head li')



/* dynamic links  */
let firstLinkli=document.createElement('a')
firstLinkli.setAttribute('href','#')
firstLinkli.textContent="Home"

let scondeLinkli=document.createElement('a')
scondeLinkli.setAttribute('href','#our-servecis')
scondeLinkli.textContent="servecis"

let thirdlinkli=document.createElement('a')
thirdlinkli.setAttribute('href','#connecting')
thirdlinkli.textContent="Conuct us"

let fourthLinkli=document.createElement('a')
fourthLinkli.setAttribute('href','#ournews')
fourthLinkli.textContent="news"
/* dynamic links  */

/* dynamic links  */
let firstLink=document.createElement('a')
firstLink.setAttribute('href','#')
firstLink.textContent="Home"

let scondeLink=document.createElement('a')
scondeLink.setAttribute('href','#our-servecis')
scondeLink.textContent="servecis"

let thirdlink=document.createElement('a')
thirdlink.setAttribute('href','#connecting')
thirdlink.textContent="Conuct us"

let fourthLink=document.createElement('a')
fourthLink.setAttribute('href','#ournews')
fourthLink.textContent="news"
/* dynamic links  */


/*appendchild dynamic links */
mycontain_Li[0].appendChild(firstLinkli); 
mycontain_Li[1].appendChild(scondeLinkli); 
mycontain_Li[2].appendChild(thirdlinkli); 
mycontain_Li[3].appendChild(fourthLinkli); 

myContain_span[0].appendChild(firstLink); 
myContain_span[1].appendChild(scondeLink); 
myContain_span[2].appendChild(thirdlink); 
myContain_span[3].appendChild(fourthLink); 
/*appendchild dynamic links */


my_button.addEventListener('click',function(){
   for(let i=0; i<4; i++){
    my_moreImage_Array[i].classList.toggle('display-block')
 }
})

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
