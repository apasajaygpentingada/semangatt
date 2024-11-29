// Mendapatkan elemen button dan greeting message
const changeMessageBtn = document.getElementById('changeMessageBtn');
const greeting = document.getElementById('greeting');
const message = document.getElementById('message');

// Fungsi untuk mengubah ucapan
function changeMessage() {
    greeting.textContent = "Keren deh";
    message.textContent = "Semoga tahun ini gak turun leaderboard yaa semangat ulangan nya :)";
    changeMessageBtn.textContent = "Kembali";
    changeMessageBtn.removeEventListener('click', changeMessage); // Menghapus event listener sebelumnya
    changeMessageBtn.addEventListener('click', resetMessage); // Menambahkan event listener baru
}

// Fungsi untuk mengatur ulang ucapan
function resetMessage() {
    greeting.textContent = "Selamat!";
    message.textContent = "Anda telah berhasil mencapai tujuan Anda. Semangat terus!";
    changeMessageBtn.textContent = "Ubah Ucapan";
    changeMessageBtn.removeEventListener('click', resetMessage); // Menghapus event listener sebelumnya
    changeMessageBtn.addEventListener('click', changeMessage); // Menambahkan event listener baru
}

// Menambahkan event listener pada button
changeMessageBtn.addEventListener('click', changeMessage);
