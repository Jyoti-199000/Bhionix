function toggleMenu(){

document.querySelector(".nav-links")
.classList.toggle("show")

}
function submitForm() {
    const requiredFields = document.querySelectorAll("input[required], textarea[required], select[required]");
    let allFilled = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            allFilled = false;
            field.style.borderColor = "red";
        } else {
            field.style.borderColor = "";
        }
    });

    if (allFilled) {
        alert("Application Submitted Successfully!");
    } else {
        alert("Please fill all required fields!");
    }
}
// tab active switching

document.querySelectorAll(".tab").forEach(tab=>{

tab.onclick=()=>{

document.querySelectorAll(".tab")
.forEach(t=>t.classList.remove("active"))

tab.classList.add("active")

}

})
// card hover glow effect

document.querySelectorAll(".hall-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 20px rgba(77,163,255,0.4)"

})

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none"

})

})
// university selection effect

document.querySelectorAll(".university-card").forEach(card=>{

card.onclick=()=>{

document.querySelectorAll(".university-card")
.forEach(c=>c.classList.remove("active"))

card.classList.add("active")

}

})
// placement card animation

document.querySelectorAll(".placement-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 10px 25px rgba(30,94,255,0.3)"

})

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 5px 15px rgba(0,0,0,0.1)"

})

})