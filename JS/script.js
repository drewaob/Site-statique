// identifier le btn
const btn = document.getElementById("btn");
const st = document.getElementById("st");

// définir une fonction
function handleClick(e) {
    e.preventDefault();  
    st.innerText = "Formulaire envoyé !";
    st.classList.add("red-text");

    setTimeout(() => {
 }, 10000);  
} 

btn.addEventListener("click", handleClick);

// log pour tester
console.log("test ...", btn);
