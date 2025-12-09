// EmailJS

 (function () {
    emailjs.init("2K2BGVoL8cY8fUmvT"); // replace with your EmailJS public key
})();

const form = document.getElementById("contactForm");
let box = document.getElementById("msgBox");
let btn = document.getElementById("subBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    // Disable button and show sending text
    btn.disabled = true;
    btn.textContent = "Sending...";

    // Collect form values
    const gname = document.getElementById("gname").value.trim();
    const gmail = document.getElementById("gmail").value.trim();
    const cname = document.getElementById("cname").value.trim();
    const cage = document.getElementById("cage").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!gname || !gmail || !cname || !cage || !message) {
        showMessage("Please fill all required fields.", "error");
        resetButton();
        return;
    }

    const params = {
        gname,
        gmail,
        cname,
        cage,
        message,
        time: new Date().toLocaleString()
    };

    console.log('Params',params);

    // Send EmailJS
    emailjs.send("service_rbryiam","template_j6iuk6q", params)
        .then(() => {
            showMessage("Your message has been sent successfully!", "success");
            form.reset();
            hideMsgBox();
        })
        .catch(() => {
            showMessage("Failed to send message. Please try again later.", "error");
            hideMsgBox();
        })
        .finally(() => {
            resetButton();
        });
});

// Reset submit button after sending
function resetButton() {
    btn.disabled = false;
    btn.textContent = "Submit";
}

// Auto-hide message box after 3s
function hideMsgBox() {
    setTimeout(() => {
        if (box) box.style.display = "none";
    }, 5000);
}

// Create / Show message box
function showMessage(text, type) {
    box = document.getElementById("msgBox");

    // Create box if not exists
    if (!box) {
        box = document.createElement("div");
        box.id = "msgBox";
        box.style.marginTop = "15px";
        box.style.padding = "12px";
        box.style.borderRadius = "6px";
        box.style.fontSize = "15px";
        box.style.fontWeight = "500";
        document.getElementById("msgBoxHolder").appendChild(box);
    }

    box.style.display = "block";
    box.textContent = text;

    if (type === "success") {
        box.style.background = "#d4edda";
        box.style.color = "#155724";
        box.style.border = "1px solid #c3e6cb";
    } else {
        box.style.background = "#f8d7da";
        box.style.color = "#721c24";
        box.style.border = "1px solid #f5c6cb";
    }
}