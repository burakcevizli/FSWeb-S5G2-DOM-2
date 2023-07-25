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

firstNavItem[3].addEventListener("dblclick",(e)=>{
    alert("Ankara Yenimahalle Batıkent")
})


const firstImg = document.querySelectorAll("img")
console.log(firstImg)

for(let i = 0; i<firstImg.length;i++){
    firstImg[i].addEventListener("wheel",(e)=>{
        e.target.style.transform = "scale(1.25)"
    })

    firstImg[i].addEventListener("mouseout",(e)=>{
        e.target.style.transform="scale(1)"
    })
}

//Buraya input yapmak için kullandım


const footer = document.querySelector(".footer")

const input = document.createElement("input")

const inputsecond = document.createElement("input")

const inputthird = document.createElement("input")


inputsecond.setAttribute("type","text")

inputsecond.setAttribute("placeholder","Lütfen mailinizi giriniz.")

input.setAttribute("type","submit")

inputthird.setAttribute("type","submit")



inputthird.value= "Temizle"

footer.prepend(inputthird)
footer.prepend(input)
footer.prepend(inputsecond)


// Buraya Kadar

inputsecond.addEventListener("focus",(e)=>{
    e.target.style.background="pink"
})


