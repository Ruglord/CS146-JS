function change() {
if (window.localStorage.getItem("signedUp") == "true")
{
   var whatHaveIDone = prompt("GO CRAY-Z", document.body.innerHTML);
   if (whatHaveIDone != null) {
    document.body.innerHTML=whatHaveIDone;
    }
}
else
{
    alert("Please log in to edit!");
}

}

function foo()
{
    window.localStorage.setItem("signedUp","false");
location.reload();
}
window.onload = () => {

var form = document.getElementsByTagName("form")[0];
if (window.localStorage.getItem("signedUp") == "true")
{
    form.innerHTML = "You are logged in";
    var logOut = document.createElement("button");
    logOut.innerHTML = "log out";
    logOut.setAttribute("onclick", "foo()")
form.appendChild(logOut);
}


var newB = document.createElement("input");
newB.setAttribute("type","button");
newB.setAttribute("onclick","change()");
newB.value="edit";
document.getElementsByTagName("h1")[0].appendChild(newB);


var lst = document.getElementsByClassName("detailImage");
for (var i = 0; i < lst.length; i ++)
{
    lst[i].addEventListener("mouseover",function(e){
    e.target.style.height = "500px";
    e.target.style.width = "500px";
});
lst[i].addEventListener("mouseout",function(e){
    e.target.style.height = "25%";
    e.target.style.width = "25%";
});
};


var zoomImage = document.getElementsByClassName("mainImage")[0];

zoomImage.addEventListener("mouseover",function(){
    zoomImage.style.height = "500px";
    zoomImage.style.width = "500px";
});
    
zoomImage.addEventListener("mouseout",function(){
    zoomImage.style.height = "25%";
    zoomImage.style.width = "25%";
});
};




