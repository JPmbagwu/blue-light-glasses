const magnifySelect = document.getElementById("magnifyOptions");
const deviceSelect = document.getElementById("deviceOptions");
const selectedMagnify = document.getElementById("selectedMagnify");
const selectedDevice = document.getElementById("selectedDevice");
const filterStatus = document.getElementById("filterStatus");

// Load saved settings
window.onload = () => {
    magnifySelect.value = localStorage.getItem("magnification") || "1.0";
    deviceSelect.value = localStorage.getItem("device") || "iphone";
    updateUI();
};

// Update selection and save to local storage
function updateUI() {
    selectedMagnify.textContent = magnifySelect.value === "1.0" ? "Normal" : magnifySelect.value + "x";
    selectedDevice.textContent = deviceSelect.options[deviceSelect.selectedIndex].text;
    localStorage.setItem("magnification", magnifySelect.value);
    localStorage.setItem("device", deviceSelect.value);
}

// Simulated invisible blue-light filtering message
setInterval(() => {
    filterStatus.textContent = filterStatus.textContent === "Active" ? "Filtering..." : "Active";
}, 3000);

// Apply real-time effect: Invisible blue light filter via opacity and blur
setInterval(() => {
    const overlay = document.getElementById('blueLightOverlay');
    overlay.style.backgroundColor = "transparent";  // No visible color
    overlay.style.filter = "blur(0px)";  // Optional: Keep it invisible, no blur effect
}, 500);

// PWA Installation
let deferredPrompt;
const installBtn = document.getElementById("installPWA");

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "block";
});

installBtn.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
        installBtn.style.display = "none";
    });
});
