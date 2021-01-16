const form = document.querySelector(".form");
const input = document.querySelectorAll(".input");

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    for(let i = 0; i < input.length ; i++){

        const inputEl = input[i];
        const inputParentEl = inputEl.parentElement;
        const errorMsgEl = inputParentEl.querySelector(".error-msg");
        function ValidateEmail(mail) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value)
            };


        if (inputEl.value ==""){
            inputEl.classList.add("error");
            errorMsgEl.style.display = "block";
        }else if(inputEl.id =="email-address"){
            if(!ValidateEmail(inputEl)){
                inputEl.classList.add("error");
                errorMsgEl.innerHTML ="Looks like this is not an email";
                errorMsgEl.style.display = "block";
            }else{
                inputEl.classList.remove("error");
                errorMsgEl.style.display = "none";
            }
        }else{
            inputEl.classList.remove("error");
            errorMsgEl.style.display = "none";
        }
    }
});
