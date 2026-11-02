const pembeli = "Rizky";

const barang = [
    {
        nama: "Keyboard",
        harga: 35000,
        jumlah: 1
    },
    {
        nama: "Mouse",
        harga: 21000,
        jumlah: 1
    }
];

barang.forEach(item => {
    item.subtotal = item.harga * item.jumlah;
});

const totalBelanja = barang.reduce(
    (total, item) => total + item.subtotal, 0
);

let diskon = 0;

if (totalBelanja >= 50000) {
    diskon = totalBelanja * 0.10;
}

const totalBayar = totalBelanja - diskon;

const rupiah = angka =>
    new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka);

let daftarBarang = "";

barang.forEach(item => {
    daftarBarang += `
        <div class="item">
            <b>${item.nama}</b><br>
            Harga: ${rupiah(item.harga)}<br>
            Jumlah: ${item.jumlah}<br>
            Subtotal: ${rupiah(item.subtotal)}
        </div>
    `;
});

document.getElementById("hasil").innerHTML = `
    <h3>Pembeli: ${pembeli}</h3>

    <h3>Daftar Belanja</h3>
    ${daftarBarang}

    <div class="total">
        <p>Total Belanja: ${rupiah(totalBelanja)}</p>
        <p>Diskon 10%: ${rupiah(diskon)}</p>
        <hr>
        <h2>Total Bayar: ${rupiah(totalBayar)}</h2>
        <h3>Status: BERHASIL</h3>
    </div>
`;

document.getElementById("tanggal").innerHTML =
    "Tanggal: " + new Date().toLocaleDateString("id-ID");

console.log("===== INVOICE BELANJA =====");
console.log("Pembeli:", pembeli);

barang.forEach(item => {
    console.log(item.nama, "-", rupiah(item.subtotal));
});

console.log("Total Belanja:", rupiah(totalBelanja));
console.log("Diskon:", rupiah(diskon));
console.log("Total Bayar:", rupiah(totalBayar));