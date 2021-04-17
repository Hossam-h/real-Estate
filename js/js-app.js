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


myContain_span=document.querySelector('.container-span')
mycontain_Li=document.querySelector('.ul-head')


for(var i=0; i<4; i++){
    let li_item=document.createElement('li')
    let link_item=document.createElement('a')
    link_item.setAttribute('id','link'+i)
    li_item.appendChild(link_item)
    mycontain_Li.appendChild(li_item)

    //--------------------------------------
   
}


for(var i=0; i<4; i++){
    let li_ite2=document.createElement('span')
    let link_ite2=document.createElement('a')
    link_ite2.setAttribute('id','lin'+i)
    li_ite2.appendChild(link_ite2)
    myContain_span.appendChild(li_ite2)  
}
let mylinke_ho=document.getElementById('link0')
     mylinke_cona=document.getElementById('link1')
     mylinke_ser=document.getElementById('link2')
     mylinke_new=document.getElementById('link3')

     mylinke_new.textContent='new'
     mylinke_ser.textContent='services'
     mylinke_cona.textContent='connact us'
     mylinke_ho.textContent='Home'

     mylinke_new.setAttribute('href','#3')
     mylinke_ser.setAttribute('href','#1')
     mylinke_cona.setAttribute('href','#2')
     mylinke_ho.setAttribute('href','#0')



//--------------------------------------------------------
let mylinke_ho2=document.getElementById('lin0')
     mylinke_cona2=document.getElementById('lin1')
     mylinke_ser2=document.getElementById('lin2')
     mylinke_new2=document.getElementById('lin3')

     mylinke_new2.textContent='new'
     mylinke_ser2.textContent='services'
     mylinke_cona2.textContent='connact us'
     mylinke_ho2.textContent='Home'

     mylinke_new2.setAttribute('href','#3')
     mylinke_ser2.setAttribute('href','#1')
     mylinke_cona2.setAttribute('href','#2')
     mylinke_ho2.setAttribute('href','#0')


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

/*function of to add active  */  
mylinke_ho.onclick=function(){

removeAll()
mylinke_ho.classList.add('heighlite')
}
mylinke_ser.onclick=function(){
    
    removeAll()
    mylinke_ser.classList.add('heighlite')
}
mylinke_cona.onclick=function(){
    removeAll()
    mylinke_cona.classList.add('heighlite')

}
mylinke_new.onclick=function(){
    removeAll()
    mylinke_new.classList.add('heighlite')

}

/*function of to remove active  */  
function removeAll(){
    mylinke_ho.classList.remove('heighlite')
    mylinke_ser.classList.remove('heighlite')
    mylinke_cona.classList.remove('heighlite')
    mylinke_new.classList.remove('heighlite')
}
/*function of to remove active in toggle_icon  */  
function removeAll2(){
    mylinke_ho2.classList.remove('heighlite')
    mylinke_ser2.classList.remove('heighlite')
    mylinke_cona2.classList.remove('heighlite')
    mylinke_new2.classList.remove('heighlite')
}


//-----------------------------------------------------------------------------

/*function of to add active in toggle icon  */  
mylinke_ho2.onclick=function(){
 
    removeAll()
    mylinke_ho2.classList.add('heighlite')
    }
    mylinke_ser2.onclick=function(){
        
        removeAll()
        mylinke_ser2.classList.add('heighlite')
    }
    mylinke_cona2.onclick=function(){
        removeAll()
        mylinke_cona2.classList.add('heighlite')
  
    }
    mylinke_new2.onclick=function(){
        removeAll()
        mylinke_new2.classList.add('heighlite')
 
    }
    

   