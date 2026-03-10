function openSection(type) {
    if (type === "takrar") {
        document.getElementById("content").innerHTML =
        "<h2>तक्रार</h2><p>तक्रार माहिती...</p>";
    }
}

// Navigation function
function openPage(pageName) {
    window.location.href = pageName + ".html";
}

// Print function
function printPage() {
    window.print();
}

// Page navigation helper
function goToPage(pageName) {
    window.location.href = pageName + ".html";
}