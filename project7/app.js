const url = "https://api.github.com/users/tarun-102"


async function getuserdata(){
   const data = await fetch(url, 
    method: "POST"
    
   )

    const res = await data.json()
   
    return res
} 

getuserdata().then(res =>{
    document.querySelector("#username").innerText = res.name;

    document.querySelector("#img").setAttribute("src", res.avatar_url)
})


