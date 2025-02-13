// Get elements
const magnifySelect = document.getElementById("magnifyOptions");
const deviceSelect = document.getElementById("deviceOptions");
const selectedMagnify = document.getElementById("selectedMagnify");
const selectedDevice = document.getElementById("selectedDevice");

// Event listeners for changing magnification and device options
magnifySelect.addEventListener("change", function() {
    selectedMagnify.textContent = magnifySelect.value === "1.0" ? "Normal" : magnifySelect.value + "x";
});

deviceSelect.addEventListener("change", function() {
    selectedDevice.textContent = deviceSelect.options[deviceSelect.selectedIndex].text;
});
