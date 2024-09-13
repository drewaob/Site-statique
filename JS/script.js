// identifier le btn
const btn = document.getElementById("btn")
const st = document.getElementById("st")
const main_section = document.querySelector(".main_section")
// definir une function
function handleClick(e) {
	// e.target.innerText = "clicke le btn"
	// selectioner le titre
    st.innerText = "BOUTON CLIQUÉ  !!"
    // rajout une classe
	st.classList.add("red-text")

	// changer son innerText
}

// rachouter une click event
btn.addEventListener("click", handleClick)

// log pour tester
console.log("test ...", btn)