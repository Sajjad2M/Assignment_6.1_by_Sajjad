let display1 = document.getElementById('allProducts')


let allPosts = () => {
    fetch('https://raw.githubusercontent.com/Sajjad2M/Assignment_6.1_by_Sajjad/refs/heads/main/api.json')
    .then(res => res.json())
    .then((data) => allPosts2(data))
}

let allPosts2 = (api) =>{
    api.forEach(e => {
        let div1 = document.createElement('div')
        div1.innerHTML = `<div class="bg-yellow-100">
            <div class="" id="">
                <img src="${e.image}" alt="" class="">
            </div>
            <!-- rate -->
            <div class="flex justify-between" id="">
                    <h1 class="" id="">${e.category}</h1>
                <div class="flex gap-2">
                    <img src="Assets/images/download.png" class="h-5 w-5">
                    <h2 class="">${e.rating}</h2>
                </div>
            </div>
            <!-- Titleeee -->
            <h1 class="">${e.title}</h1>
            <!-- Priceeee -->
            <h1 class="">${e.price}</h1>
            <!-- 2 Buttonss -->
            <div class="flex gap-3" id="">
                 <button class=" border-1 bg-neutral-200 shadow-md lg:py-[10px] lg:px-7 lg:rounded-[5px] mt-4" id="btn1">Details</button>
                 <button class="bg-green-500 border-1 shadow-md text-white lg:py-[10px] lg:px-7 lg:rounded-[5px] mt-4" id="btn2">Add</button>
             
            </div>

           </div>`


        display1.appendChild(div1)
    });

}




allPosts();