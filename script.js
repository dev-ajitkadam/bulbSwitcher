
let imgs = document.getElementById("img")


let btn= document.getElementById("btn-center")
btn.addEventListener("click", fin1);

function fin1(e){
    if(btn.textContent.includes("ON")){
        imgs.src ="./img/on-bulb.jpg";
        btn.textContent="Turn OFF"
    }else{
        imgs.src ="./img/off-bulb.jpeg";
        btn.textContent="Turn ON"
    }
}
