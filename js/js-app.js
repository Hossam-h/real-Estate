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



/* start dynamic links  */
let firstLinkli=document.createElement('a')
firstLinkli.setAttribute('href','#')
firstLinkli.setAttribute('id','firstLinkli_id')
firstLinkli.textContent="Home"
firstLinkli.onclick=function(){
    removeAll()
    firstLinkli.classList.add('heighlite')
}

let scondeLinkli=document.createElement('a')
scondeLinkli.setAttribute('href','#our-servecis')
scondeLinkli.setAttribute('id','scondeLinkli_id')
scondeLinkli.textContent="servecis"
scondeLinkli.onclick=function(){
    removeAll()
    scondeLinkli.classList.add('heighlite')
}

let thirdlinkli=document.createElement('a')
thirdlinkli.setAttribute('href','#connecting')
thirdlinkli.setAttribute('id','thirdlinkli_id')
thirdlinkli.textContent="Conuct us"
thirdlinkli.onclick=function(){
    removeAll()
    thirdlinkli.classList.add('heighlite')
}

let fourthLinkli=document.createElement('a')
fourthLinkli.setAttribute('href','#ournews')
fourthLinkli.setAttribute('id','fourthLinkli_id')
fourthLinkli.textContent="news"
fourthLinkli.onclick=function(){
    removeAll()
    fourthLinkli.classList.add('heighlite')
}

/* End dynamic links  */

/* start dynamic links 2  */
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
/* end dynamic links 2  */


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
