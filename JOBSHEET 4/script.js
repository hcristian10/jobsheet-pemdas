console.log("Berkas script.js berhasil terhubung dengan HTML!");

const kkmNilai = 75;
let nilaiUjian = 82;
let selisihSkor = nilaiUjian - kkmNilai;

console.log("Nilai Ujian Masuk:", nilaiUjian);
console.log("Batas Kelulusan (KKM):", kkmNilai);
console.log("Selisih Nilai Ke KKM:", selisihSkor);

function evaluasiSkor(nama, nilai) {
    let skor = Number(nilai); 
    let status = "";
    let grade = "";

    
    if (skor >= 75 && skor <= 100) {
        status = "LULUS";
    } else {
        status = "REMEDIAL";
    }

    
    if (skor > 100 || skor < 0 || isNaN(skor)) {
        grade = "(Grade: Tidak Valid)";
        status = "TIDAK VALID"; 
    } else if (skor >= 90) {
        grade = "(Grade: A - Istimewa)";
    } else if (skor >= 80) {
        grade = "(Grade: B - Baik)";
    } else if (skor >= 75) {
        grade = "(Grade: C - Cukup)";
    } else {
        grade = "(Grade: D - Kurang)";    
    }

    return `Halo ${nama}, nilai Anda ${skor}. Status: ${status} ${grade}`;
}

let tombolProses = document.getElementById("btn-proses");

if (tombolProses) {
    tombolProses.onclick = function () {
        let namaSiswa = document.getElementById("input-nama").value;
        let nilaiSiswa = document.getElementById("input-nilai").value;
        let boxHasil = document.getElementById("box-hasil");

        if (namaSiswa.trim() === "" || nilaiSiswa.trim() === "") {
            boxHasil.innerText = "Mohon isi nama dan nilai terlebih dahulu!";
            boxHasil.style.color = "red";
            return;
        }

        let hasilTeks = evaluasiSkor(namaSiswa, nilaiSiswa);
        boxHasil.innerText = hasilTeks;
        boxHasil.style.color = "black";
    };
}

let tombolTema = document.getElementById("btn-tema");
if (tombolTema) {
    tombolTema.onclick = function () {
        document.body.classList.toggle("dark-mode");
    };
} 