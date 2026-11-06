
const tombolDarkMode = document.getElementById('darkModeToggle');

tombolDarkMode.addEventListener('click', function() {
    
    const temaSekarang = document.body.getAttribute('data-bs-theme');

    if (temaSekarang === 'dark') {
        
        document.body.setAttribute('data-bs-theme', 'light', 'btn-dark');
        tombolDarkMode.textContent = 'Mode Gelap';
        tombolDarkMode.className = 'btn btn-outline-dark btn-sm ms-lg-3';
    } else {
        
        document.body.setAttribute('data-bs-theme', 'dark');
        tombolDarkMode.textContent = 'Mode Terang';
        tombolDarkMode.className = 'btn btn-outline-light btn-sm ms-lg-3';
    }
});



const formVIP = document.getElementById('contactForm');

formVIP.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    const inputEmail = document.getElementById('inputEmail').value;
    const inputPesan = document.getElementById('inputPesan').value;
    const kotakNotifikasi = document.getElementById('alertNotification');

    
    if (inputEmail.trim() === '' || inputPesan.trim() === '') {
        
        kotakNotifikasi.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Gagal!</strong> Mohon isi email dan pesan Anda terlebih dahulu.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    } else {
        
        kotakNotifikasi.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Sukses!</strong> Terima kasih, pesan VIP dari <b>${inputEmail}</b> berhasil terkirim.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        
        formVIP.reset();
    }
});
