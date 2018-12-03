/*var manuImg = document.getElementsByClassName("mainImage");



manuImg[0].addEventListener("mouseover",function(){
    manuImg[0].width = "500";
    manuImg[0].height = "500";
    
})*/


window.onload = () => {
    var zoomImage = document.getElementById("mainImage");
    
    zoomImage.addEventListener("mouseover",function(){
        zoomImage.style.height = "500px";
        zoomImage.style.width = "500px";
    });
    
    zoomImage.addEventListener("mouseout",function(){
        zoomImage.style.height = "25%";
        zoomImage.style.width = "25%";
    });
    
   
    
}




