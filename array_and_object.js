// OBJECT
// Array daftar siswa



let mode = 'tambah'

// CREATE, READ, UPDATE, DELETE


// READ
// arrow function
// Fungsi menampilkan siswa ke tabel
// MENAMPILKAN SISWA
const tampilkanPeserta = () => {
// mengakses dom
const tblPeserta = document.getElementById('tblPeserta');
  tblSiswa.innerHTML = '<tr><th>No</th><th>Nama Lengkap</th><th>Email</th><th>Nomor Telepon</th><th>Jenis Kursus</th><th>Level Kursus</th><th>Durasi Kursus ( Dalam Minggu )</th><th>Tanggal Kursus</th><th>Waktu Kursus</th><th>Edit</th><th>Hapus</th></tr>';
  
for (let idx in daftarPeserta) {
// menambah isinya
  tblPeserta.innerHTML += `
    <tr>
      <td>${parseInt(idx) + 1}</td>
      <td>${daftarSiswa[idx].nama}</td>
      <td>${daftarSiswa[idx].jenKel}</td>
      <td>${daftarSiswa[idx].umur}</td>
      <td>${daftarSiswa[idx].wfavorit}</td>
      <td><button class="btn btn-warning" onclick="editSiswa('${daftarSiswa[idx].nama}')">Edit</button></td>
      <td><button class="btn btn-danger" onclick="hapusSiswa('${daftarSiswa[idx].nama}')">Delete</button></td>
    </tr>`;
  }
};


// CREATE
// Fungsi untuk menambah siswa ke daftar dan memperbarui tabel
// MENAMBAH SISWA
const tambahPeserta = () => {
const nama = document.getElementById('txtNama').value;
const jenKel = document.getElementById('jenKel').value;
const umur = document.getElementById('txtUmur').value;
const warna = document.getElementById('warna').value;

 if (nama && jenKel && umur && warna) {
  const siswaBaru = { nama, jenKel, umur, wfavorit: warna, seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga'] };
  
 if (mode === 'tambah') {
  daftarSiswa.push(siswaBaru)
  } else {
  daftarSiswa[mode] = siswaBaru
  }

// Kosongkan input setelah menambah siswa
 document.getElementById('txtNama').value = "";
 document.getElementById('jenKel').value = "";
 document.getElementById('txtUmur').value = "";
 document.getElementById('warna').value = "";

 mode = 'tambah'

tampilkanSiswa();
  }
};


// MENGEDIT SISWA
const editSiswa = (target) => {

const indexEdit = cariIndex(target);

console.log(target)
console.log(indexEdit)

console.log(daftarSiswa[indexEdit])

const siswaDiedit = daftarSiswa[indexEdit]

 document.getElementById('txtNama').value = daftarSiswa[indexEdit].nama;
 document.getElementById('jenKel').value = daftarSiswa[indexEdit].jenKel;
 document.getElementById('txtUmur').value = daftarSiswa[indexEdit].umur;
 document.getElementById('warna').value = daftarSiswa[indexEdit].wfavorit;

mode = indexEdit

};


// Fungsi untuk mencari indeks siswa berdasarkan nama
// MENCARI INDEX NAMA
const cariIndex = (nama) => {
// tampilkan index jika nama siswa === nama
 for (let i = 0; i < daftarSiswa.length; i++) {
   if (daftarSiswa[i].nama === nama) {
     return i;
    }
  }
};


// Fungsi untuk menghapus siswa berdasarkan nama
// MENGHAPUS SISWA
const hapusSiswa = (targetNama) => {
const indexDihapus = cariIndex(targetNama);
// menghapus element dari dalam array
 daftarSiswa.splice(indexDihapus, 1);
   tampilkanSiswa(); // Memperbarui tabel setelah menghapus siswa 
};


// BATAL EDIT SISWA
const batalSiswa = () => {
  mode = 'tambah'

 document.getElementById('txtNama').value = "";
 document.getElementById('eMail').value = "";
 document.getElementById('').value = "";
 document.getElementById('warna').value = "";

}
// Panggil fungsi untuk menampilkan data awal
tampilkanPeserta();