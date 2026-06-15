if (sessionStorage.getItem('isLoggedIn') !== 'true') {
    alert("Anda harus login terlebih dahulu!");
    window.location.href = 'index.html';
}

function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

function checkAdmin() {
    if (sessionStorage.getItem('role') !== 'admin') {
        alert("Akses ditolak! Hanya untuk Admin.");
        window.location.href = 'dashboard.html';
    }
}