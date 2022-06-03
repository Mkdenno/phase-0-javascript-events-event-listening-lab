const inputEl=document.getElementById("input");
function addingEventListener() {
    inputEl.addEventListener("click",addingEventListener );

    alert("I was clicked");
}
