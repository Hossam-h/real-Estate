/* start Global variables */ 

let myNave=document.getElementById('nav-head'),
myNave_toggle=document.getElementById('nave-toggle'),
my_button=document.querySelector('.more-detail-bt')
my_moreImage=document.querySelectorAll('.more'),
my_moreImage_Array=Array.from(my_moreImage),
myLink=document.querySelectorAll('.nav-toggle .container-span span')
myContain_span=document.querySelector('.container-span')
mycontain_Li=document.querySelector('.ul-head')

/* end Global variables */ 


for(let i=0; i<4; i++){
    let li_item=document.createElement('li')
    let link_item=document.createElement('a')
   link_item.setAttribute('id','link'+i)
    link_item.setAttribute('data-link','section'+i)
    link_item.setAttribute('class','links')
    li_item.appendChild(link_item)
    mycontain_Li.appendChild(li_item)
}

const all_links1=document.querySelectorAll('.links');

// forEach for scroll
all_links1.forEach(item=>{
    item.addEventListener('click',()=>{
        const el=document.getElementById(item.getAttribute('data-link'))

        el.scrollIntoView({
            behavior:"smooth",
        })

    })
})

for(let i=0; i<4; i++){
    let li_ite2=document.createElement('span')
    let link_ite2=document.createElement('a')
    link_ite2.setAttribute('id','lin'+i)
    link_ite2.setAttribute('class','linkes')
    link_ite2.setAttribute('data-link','section'+i)
    li_ite2.appendChild(link_ite2)
    myContain_span.appendChild(li_ite2)  
}
const all_links2=document.querySelectorAll('.linkes');

all_links2.forEach(item2=>{
    item2.addEventListener('click',()=>{
        const el2=document.getElementById(item2.getAttribute('data-link'))

        el2.scrollIntoView({
            behavior:"smooth",
            block:"center"
        })

    })
})

let mylinke_ho=document.getElementById('link0')
     mylinke_cona=document.getElementById('link1')
     mylinke_ser=document.getElementById('link2')
     mylinke_new=document.getElementById('link3')

     mylinke_new.textContent='new'
     mylinke_ser.textContent='connact us'
     mylinke_cona.textContent='services'
     mylinke_ho.textContent='Home'

let mylinke_ho2=document.getElementById('lin0')
     mylinke_cona2=document.getElementById('lin1')
     mylinke_ser2=document.getElementById('lin2')
     mylinke_new2=document.getElementById('lin3')

     mylinke_new2.textContent='new'
     mylinke_ser2.textContent='services'
     mylinke_cona2.textContent='connact us'
     mylinke_ho2.textContent='Home'


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

//--highlite of  icon

all_links1[0].onclick=function(){
    removeall()
    all_links1[0].classList.add('heighlite')
}
all_links1[1].onclick=function(){
    removeall()
    all_links1[1].classList.add('heighlite')
}
all_links1[2].onclick=function(){
    removeall()
    all_links1[2].classList.add('heighlite')
}
all_links1[3].onclick=function(){
    removeall()
    all_links1[3].classList.add('heighlite')
}


   function removeall() { all_links1.forEach(el=>{
        el.classList.remove('heighlite')
    })
}

//--highlite of toggle icon

all_links2[0].onclick=function(){
    removeall2()
    all_links2[0].classList.add('heighlite')
}
all_links2[1].onclick=function(){
    removeall2()
    all_links2[1].classList.add('heighlite')
}
all_links2[2].onclick=function(){
    removeall2()
    all_links2[2].classList.add('heighlite')
}
all_links2[3].onclick=function(){
    removeall2()
    all_links2[3].classList.add('heighlite')
}


   function removeall2() { all_links2.forEach(el=>{
        el.classList.remove('heighlite')
    })
}
  
    