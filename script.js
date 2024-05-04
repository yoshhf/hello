function blowOutCandle() {
    var candle = document.getElementById('candle');
    candle.src = 'imgfolder/candle-off.png'; // Ganti gambar lilin dengan lilin mati
    candle.onclick = null; // Hapus event onclick agar lilin tidak bisa dinyalakan kembali
}

var audio = document.getElementById('myAudio');

function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    
}
function openGift() {
    var giftBox = document.getElementById('gift-box');
    giftBox.src = 'imgfolder/kadoterbuka.png';

    // Tampilkan pop-up pesan
    alert('ada hadiah?');
    alert('cek di bawah meja bundar')
}
