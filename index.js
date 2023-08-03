const inp = document.querySelectorAll("input");
const login_btn = document.querySelector("a");
const message =  document.getElementById("message");

console.log(message)
const username = "Rahulpuja";
const password = "rp2023";

function login(){
    const uname = inp[0].value;
    const pwd = inp[1].value;
    if(username === uname && password === pwd){
        console.log("Yes");
        message.innerHTML = `**Username and Password match please wait...`;
        message.style.color = "green";
        setTimeout(()=>{
            window.location.href = "./RahulBirthday.html";
        },4000);
    }
    else{
        console.log("No");
        message.innerHTML = `**Username and Password not matched please try agian!`;
        message.style.color = "red";
        setTimeout(()=>{
            window.location.href = "./pnf.html";
        },4000);
    }
}

login_btn.addEventListener("click",()=>{
    login();
});