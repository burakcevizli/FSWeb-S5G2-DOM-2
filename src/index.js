import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!



const firstNavItem = document.querySelectorAll("nav a")

for(let i = 0; i< firstNavItem.length;i++){
    firstNavItem[i].addEventListener("mouseover", (e) => {
        e.target.style.color = "red"
        e.target.style.fontSize = "2rem"
    })
    firstNavItem[i].addEventListener("mouseout", (e) => {
        e.target.style.color = "black"
        e.target.style.fontSize = "1.6rem"
    })
}


const firstImg = document.querySelector(".intro img")

firstImg.addEventListener("wheel",(e)=>{
    e.target.style.transform = "scale(1.25)"
})
firstImg.addEventListener("mouseout",(e)=>{
    e.target.style.transform="scale(1)"
})