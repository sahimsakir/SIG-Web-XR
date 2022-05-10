window.document.onkeydown = function (e) {
    if (!e) {
        e = event;
    }
    if (e.keyCode == 27) {
        lightbox_close();
    }
}

function lightbox_open() {
    var lightBoxVideo = document.getElementById("VideoPopUP");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.querySelector('.vpop-container').style.display = 'flex';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
}

function lightbox_close() {
    var lightBoxVideo = document.getElementById("VideoPopUP");
    document.getElementById('light').style.display = 'none';
    document.querySelector('.vpop-container').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
}

function market_open() {
    var marketImage = document.getElementById("ImagePopUP");
    window.scrollTo(0, 0);
    document.getElementById('shop').style.display = 'block';
}

function market_close() {
    var marketImage = document.getElementById("ImagePopUP");
    window.scrollTo(0, 0);
    document.getElementById('shop').style.display = 'none';
}