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
   
    api.forEach(e => {
       
        let div1 = document.createElement('div')
        div1.innerHTML = `<div class=" bg-white  rounded-[24px] border-[1px] border-b-slate-500/50 shadow-lg">
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
        
           </div>
           `
        display1.appendChild(div1)
        //let div2 =document.createElement('div')
       
        //<h1 class="p-10 font-bold text-lg absolute pt-1">${e.category}</h1>
        let div5 = document.createElement('div')
        if(e.id === 16 || e.id === 11 || e.id === 9){
            div5.innerHTML = `<div class=" bg-white  rounded-[24px] border-[1px] border-b-slate-500/50 shadow-lg relative ">
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
       
           </div>
           
           `
            display2.appendChild(div5)
            
        }
       
    

       
        
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
