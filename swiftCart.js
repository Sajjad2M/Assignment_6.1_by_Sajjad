let display1 = document.getElementById('allProducts')
let btn1 = document.getElementById('btn1')


let allPosts = () => {
    fetch('https://raw.githubusercontent.com/Sajjad2M/Assignment_6.1_by_Sajjad/refs/heads/main/api.json')
    .then(res => res.json())
    .then((data) => allPosts2(data))
}

let allPosts2 = (api) =>{
    api.forEach(e => {
        let div1 = document.createElement('div')
        div1.innerHTML = `<div class=" bg-white shadow-xl">
            <div class="px-8" id="">
                <img src="${e.image}" alt="" class="lg:w-[420px] h-[250px] p-5">
            </div>
            <!-- rate -->
            <div class="flex justify-between bg-green-100 px-4 pt-4 " id="">
                    <h1 class=" font-semibold text-sm bg-rose-100 px-3 rounded-xl text-center" id="">${e.category}</h1>
                <div class="flex gap-1 items-center">
                    <img src="Assets/images/download.png" class="h-5 w-5">
                    <span class="font-semibold text-sm">${e.rating}</span>
                </div>
            </div>
            <!-- Titleeee -->
            <h1 class="bg-green-100 px-4 font-bold text-[16px] pt-2">${e.title}</h1>
            <!-- Priceeee -->
            <h1 class="bg-green-100 px-4 font-extrabold text-[20px]">$${e.price}</h1>
            <!-- 2 Buttonss -->
            <div class="flex gap-4 bg-green-100 px-4 pb-4 font-bold text-center pt-4" id="">
                 <button class=" w-full bg-white shadow-xl lg:py-[5px] lg:px-7 lg:rounded-[5px] " id="btn1">Details</button>

                 <button class="w-full bg-green-500 shadow-xl text-white lg:py-[5px] lg:px-7 lg:rounded-[5px]" id="btn2">Add</button>
             
            </div>

           </div>`

    
        display1.appendChild(div1)
    });

}




allPosts();