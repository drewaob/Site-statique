// identifier le btn
const btn = document.getElementById("btn")
const st = document.getElementById("st")
const main_section = document.querySelector(".main_section")
// definir une function
function handleClick(e) {
	// e.target.innerText = "clicke le btn"
	// selectioner le titre
    st.innerText = "Formlulaire envoyé !   !!"
    // rajout une classe
	st.classList.add("red-text")

}

btn.addEventListener("click", handleClick)

// log pour tester
console.log("test ...", btn)