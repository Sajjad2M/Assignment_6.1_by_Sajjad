let a = document.getElementById('allProducts')


let allPosts = () => {
    fetch('https://raw.githubusercontent.com/Sajjad2M/Assignment_6.1_by_Sajjad/refs/heads/main/api.json')
    .then(res => res.json())
    .then((data) => console.log(data))
}

allPosts();