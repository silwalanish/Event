var headerBgVideoPlaying = false;
var headerBgImages = [];
var currentBgImage = 0;
var headerBgVideo;
var playBtn, pauseBtn;

function changeHeaderBg(){
    headerBgImages[currentBgImage].classList.remove("shown");
    currentBgImage ++;
    currentBgImage %= headerBgImages.length;
    headerBgImages[currentBgImage].classList.add("shown");
}

function playHeaderBgVideo(){
    if(!headerBgVideoPlaying){
        headerBgVideo = setInterval(changeHeaderBg, 2000);
        playBtn.classList.remove('shown');
        pauseBtn.classList.add('shown');
        headerBgVideoPlaying = true;
    }
}

function pauseHeaderBgVideo(){
    if(headerBgVideoPlaying){
        clearInterval(headerBgVideo);
        playBtn.classList.add('shown');
        pauseBtn.classList.remove('shown');
        headerBgVideoPlaying = false;
    }
}

headerBgImages = document.getElementsByClassName("header-image");
headerBgImages[currentBgImage].classList.add("shown");

playBtn = document.getElementById("headerBgVideoPlayBtn");
pauseBtn = document.getElementById("headerBgVideoPauseBtn");

playBtn.onclick = playHeaderBgVideo;
pauseBtn.onclick = pauseHeaderBgVideo;

playHeaderBgVideo();


var navbarToggle = document.getElementById("navbarToggler");
var navbarClose = document.getElementById("closeNav");
var navigation = document.getElementById("navigation");
navbarToggle.addEventListener('click', (e) => {
    navigation.classList.toggle('show');
});

navbarClose.addEventListener('click', (e) => {
    navigation.classList.remove('show');
});

var accordionToggles = document.querySelectorAll(".accordion");
accordionToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        toggle.classList.toggle("expanded");
    });
});


var tabLayouts = document.querySelectorAll(".tab-layout");
tabLayouts.forEach(tabLayout => {
    let tabs = tabLayout.querySelectorAll(":scope > .tabs-cont .tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            let visible = tabLayout.querySelector(':scope > .tab-content.show');
            if(visible){
                visible.classList.remove('show');
            }
            let content = tabLayout.querySelector(tab.dataset.target);
            if(content){
                content.classList.add('show');
            }
            let activeTab = tabLayout.querySelector(':scope > .tabs-cont .tab.active');
            if(activeTab){
                activeTab.classList.remove('active');
            }
            tab.classList.add('active');
            e.preventDefault();
        });
    });
    tabs[0].click();
});
