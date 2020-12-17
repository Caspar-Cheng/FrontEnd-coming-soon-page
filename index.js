
function ToSubmit(){
    const input = document.querySelector(".email");
    const success = document.querySelector(".success");
    const error = document.querySelector(".error");
    const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (input.value.length === ""){
        input.style.border = "1px solid rgb(206, 34, 34)";
        error.style.display = "block";
    } else if (input.value.match(format)){
        error.style.display = "none";
        input.style.border = "1px solid rgb(103, 185, 117)";
        success.style.display = "block";
        input.value = "";
    } else {
        input.style.border = "1px solid rgb(206, 34, 34)";
        error.style.display = "block";
    }
    
}