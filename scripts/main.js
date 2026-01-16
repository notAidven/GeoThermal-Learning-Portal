window.onscroll = function() { updateProgress() };

function updateProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
}

// 1. Progress Bar Logic
window.onscroll = function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

// 2. Reference Hub Logic
const references = {
    'vermont-leaflet': 'https://outside.vermont.gov/agency/energy/MovingHeat.pdf',
    'doe-flyer': 'https://www.energy.gov/sites/default/files/2024-03/geothermal-heat-pump-flyer.pdf',
    'decision-timeline': '#', // Placeholder for internal doc
    'site-selection': '#',
    'geo-database': 'https://heet.org/neighborhood-geo-database/'
};

function openRef(id) {
    const url = references[id];
    if (url && url !== '#') {
        window.open(url, '_blank');
    } else {
        alert("This reference material will be linked in the final version!");
    }
}