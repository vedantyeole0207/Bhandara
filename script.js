let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

document.getElementById('prevBtn').onclick = function() {
    slideIndex -= 2; // adjust because showSlides increments it
    showSlides();
};

document.getElementById('nextBtn').onclick = function() {
    showSlides();
};

// Login popup functionality
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = 'none';
});

// Close the login popup when clicking outside of the form
window.onclick = function(event) {
    const popup = document.getElementById('loginPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}

// Donor popup functionality
document.getElementById('bookNowBtn').addEventListener('click', function() {
    document.getElementById('donorPopup').style.display = 'flex';
});

document.getElementById('closeDonorPopup').addEventListener('click', function() {
    document.getElementById('donorPopup').style.display = 'none';
});

// Close the donor popup when clicking outside of the form
window.onclick = function(event) {
    const donorPopup = document.getElementById('donorPopup');
    if (event.target === donorPopup) {
        donorPopup.style.display = 'none';
    }
}
// Volunteer popup functionality
document.getElementById('volunteerBtn').addEventListener('click', function() {
    document.getElementById('volunteerPopup').style.display = 'flex';
});

document.getElementById('closeVolunteerPopup').addEventListener('click', function() {
    document.getElementById('volunteerPopup').style.display = 'none';
});

// Close the volunteer popup when clicking outside of the form
window.onclick = function(event) {
    const volunteerPopup = document.getElementById('volunteerPopup');
    if (event.target === volunteerPopup) {
        volunteerPopup.style.display = 'none';
    }
}

// Optional: JavaScript can be used for future interactive features
document.addEventListener('DOMContentLoaded', function() {
    console.log('Our Core Values section loaded successfully.');
});

// You can add more scripts here for interactivity in the future
function showLinks() {
    const links = [
        'https://maps.app.goo.gl/QsBcwUsQuMCTsqm38',
        'https://maps.app.goo.gl/duyy859vw1QFsjWP8',
        'https://maps.app.goo.gl/GzZpXggVyrQU2TKd6'
    ];
    
    const linksContainer = document.getElementById('map-links');
    linksContainer.innerHTML = '<h3>Google Map Links:</h3>' + 
        '<ul>' + 
        links.map(link => `<li><a href="${link}" target="_blank">${link}</a></li>`).join('') + 
        '</ul>';
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("output").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    document.getElementById("output").innerHTML = 
        "Latitude: " + latitude + "<br>Longitude: " + longitude;

    // You can add logic here to search for nearby locations using the coordinates
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("output").innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("output").innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("output").innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("output").innerHTML = "An unknown error occurred.";
            break;
    }
}
