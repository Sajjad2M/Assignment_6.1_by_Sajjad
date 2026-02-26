let fullbody = document.getElementById('fullBody')
let display1 = document.getElementById('allProducts')
let display2 = document.getElementById('threeProducts')
let display3 = document.getElementById('trending')
let display4 = document.getElementById('product1')
let homebtn = document.getElementById('home')
let prodbtn = document.getElementById('prod')
let banner1 = document.getElementById('banner')
let banner2 = document.getElementById('banner2')
//let category1 = document.querySelectorAll('#allbtn1')
//let btn1 = document.getElementById('btn1')


let allPosts = () => {
    fetch('https://raw.githubusercontent.com/Sajjad2M/Assignment_6.1_by_Sajjad/refs/heads/main/api.json')
    .then(res => res.json())
    .then((data) => allPosts2(data))
}
                                                                                                                                                                     
let allPosts2 = (api) =>{
    api.forEach(w =>{
        
    }) 
    //filter [...]
   
    api.forEach(e => {
        let q = e.category
        
        
        // if(q === 'kid'){
        //   api.filter
        // }
    
        let div1 = document.createElement('div')
        div1.innerHTML = `<div class=" bg-white  rounded-[24px] border-[1px] border-b-slate-500/50 shadow-lg relative">
            <div class="px-8" id="">
                <img src="${e.image}" alt="" class="lg:w-[420px] h-[250px] p-5">
            </div>
            <!-- rate -->
            <div class="flex justify-between bg-green-100 px-4 pt-4 " id="">
                <div> <h1 class=" font-semibold text-sm bg-orange-200 px-3 rounded-xl text-center" id="">${e.category}</h1> </div>
                <div class="flex gap-1 items-center">
                   <div> <img src="Assets/images/download.png" class="h-5 w-5"></div>
                   <div> <h1 class="font-semibold text-sm">${e.rating}</h1></div>
                   
                </div>
            </div>
            <!-- Titleeee -->
            <h1 class="bg-green-100 px-4 font-bold text-[16px] pt-3">${e.title}</h1>
            <!-- Priceeee -->
            <h1 class="bg-green-100 px-4 font-extrabold text-[20px] pt-0">$${e.price}</h1>
            <!-- 2 Buttonss -->
            <div class="flex gap-4 bg-green-100 px-4 pb-4 font-bold text-center pt-4 rounded-b-[24px]" id="">
                 <button class=" w-full bg-white shadow-lg lg:py-[5px] lg:px-7 lg:rounded-[5px] " id="btn10">Details</button>

                 <button class="w-full bg-green-500 shadow-lg text-white lg:py-[5px] lg:px-7 lg:rounded-[5px]" id="btn2">Add</button>
             
            </div>
            <div class="absolute top-0 h-auto mx-2 mt-[20px] border-t-8  border-green-400 p-4 bg-white rounded-[16px] box-border shadow-2xl bg-opacity-90 hidden" id="details3">
        <div class="" id="details4"></div>
        </div>
           </div>
           `
        display1.appendChild(div1)
        //let div2 =document.createElement('div')
       
        //<h1 class="p-10 font-bold text-lg absolute pt-1">${e.category}</h1>
        let div5 = document.createElement('div')
        if(e.id === 16 || e.id === 11 || e.id === 9){
            div5.innerHTML = `<div class=" bg-white  rounded-[24px] border-[1px] border-b-slate-500/50 shadow-lg relative">
            <div class="px-8" id="">
                <img src="${e.image}" alt="" class="lg:w-[420px] h-[250px] p-5">
            </div>
            <!-- rate -->
            <div class="flex justify-between bg-green-100 px-4 pt-4 " id="">
                <div> <h1 class=" font-semibold text-sm bg-orange-200 px-3 rounded-xl text-center" id="">${e.category}</h1> </div>
                <div class="flex gap-1 items-center">
                   <div> <img src="Assets/images/download.png" class="h-5 w-5"></div>
                   <div> <h1 class="font-semibold text-sm">${e.rating}</h1></div>
                   
                </div>
            </div>
            <!-- Titleeee -->
            <h1 class="bg-green-100 px-4 font-bold text-[16px] pt-3">${e.title}</h1>
            <!-- Priceeee -->
            <h1 class="bg-green-100 px-4 font-extrabold text-[20px] pt-0">$${e.price}</h1>
            <!-- 2 Buttonss -->
            <div class="flex gap-4 bg-green-100 px-4 pb-4 font-bold text-center pt-4 rounded-b-[24px]" id="">
                 <button class=" w-full bg-white shadow-lg lg:py-[5px] lg:px-7 lg:rounded-[5px] " id="btn1">Details</button>

                 <button class="w-full bg-green-500 shadow-lg text-white lg:py-[5px] lg:px-7 lg:rounded-[5px]" id="btn2">Add</button>
             
            </div>
        <div class="absolute top-0 mx-4 mt-[30px] border-l-8 border-green-500 bg-white rounded-[16px] box-border shadow-2xl hidden bg-opacity-90 " id="details2">
        <div class=" p-5" id="details1"></div>
        </div>
           </div>
           </div>
           `
            display2.appendChild(div5)
            let btn4 = div5.querySelector('#btn1')
            let div6 = div5.querySelector('#details1')
            let div7 = div5.querySelector('#details2')
             let details2 = document.createElement('div') 
           
             let i = 1;
            
            btn4.addEventListener('click', () =>{
                i++
               details2.innerHTML=''
              //div6.classList.remove('hidden')
              if(i % 2 === 0){
                div7.classList.remove('hidden')
               
              }else{
                 div7.classList.add('hidden')
                
              }
              
              details2.innerHTML = `
                <h1 class="text-center text-[22px] font-bold text-green-600 "> ${e.title}</h1>
                <h1 class="text-left text-[20px] font-semibold mt-2">Description: ${e.description}</h1>
                <h1 class="text-left text-[20px] font-bold mt-1"><span class="text-[18px] font-bold">Ratings:</span> ${e.rating}</h1>
                <h1 class="text-left text-[20px] font-bold"><span class="text-[18px] font-bold mt-1 ">Price: </span>$${e.price}</h1>
                `
                 
                div6.appendChild(details2)
              
            
                //console.log(i)
                
             })
          
        }
       
         let btn5 = div1.querySelector('#btn10')
         let div9 = div1.querySelector('#details3')
         let div8 = div1.querySelector('#details4')
         let v = 1;
        let details3 = document.createElement('div') 
         btn5.addEventListener('click', () =>{
                v++
               details3.innerHTML=''
              //div6.classList.remove('hidden')
              if(v % 2 === 0){
             
                div9.classList.remove('hidden')
                //div8.classList.add('bg-red-600')
              }else{
                
                 div9.classList.add('hidden')
              }
              
              details3.innerHTML = `
                <h1 class="text-center text-[20px] font-bold text-green-600 "> ${e.title}</h1>
                <h1 class="text-left text-[20px] font-semibold mt-2">Description: ${e.description}</h1>
                <h1 class="text-left text-[20px] font-bold mt-1"><span class="text-[18px] font-bold">Ratings:</span> ${e.rating}</h1>
                <h1 class="text-left text-[20px] font-bold"><span class="text-[18px] font-bold mt-1 ">Price: </span>$${e.price}</h1>
                `
                 
                div9.appendChild(details3)
            
             console.log(v)
                
             })
      
        
    //    let btn4 = div5.querySelector('#btn1')
    //     //  <div class="absolute top-0 bg-red-300 my-10">
    //     //     <h1>${e.category}</h1>
    //     //  </div>
    //    btn4.addEventListener('click', () =>{
    //     console.log(888)

    //    })
        
       
    });
     
    }



    prodbtn.addEventListener('click', () =>{
            banner1.classList.add('hidden')
            banner2.classList.add('hidden')
            display1.classList.add('grid')
            display1.classList.add('mt-10')
            display1.classList.remove('hidden')
            display2.classList.add('hidden')
            prodbtn.classList.add('text-green-500')
            homebtn.classList.remove('text-green-500')
            display3.classList.add('hidden')
            display4.classList.remove('hidden')


    homebtn.addEventListener('click', () =>{
             banner1.classList.remove('hidden')
            banner2.classList.remove('hidden')
            display1.classList.remove('grid')
            display1.classList.remove('mt-10')
            display1.classList.add('hidden')
            prodbtn.classList.remove('text-green-500')
            homebtn.classList.add('text-green-500')
            display2.classList.remove('hidden')
            display3.classList.remove('hidden')
            display4.classList.add('hidden')


    })
         
        })
 
    
   
 allPosts();
