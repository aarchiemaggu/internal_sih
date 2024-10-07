document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Open the Explore sidebar
document.getElementById("exploreBtn").onclick = function() {
    document.getElementById("exploreMenu").style.width = "250px";
    document.body.classList.add("active");  // Optional: Prevent content scroll when sidebar is open
};

// Close the Explore sidebar
function closeExploreMenu() {
    document.getElementById("exploreMenu").style.width = "0";
    document.body.classList.remove("active");  // Restore scroll when sidebar is closed
}
