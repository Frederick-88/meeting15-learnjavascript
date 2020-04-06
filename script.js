// contoh NaN
const nilaiNaN = 5 * 'a';
console.log(`NilaiNaN adalah ${nilaiNaN}`);
const apakahNaN = isNaN(nilaiNaN) ? 'nilainya Nan' : 'Bukan NaN'
console.log(apakahNaN);

// NaN adalah not a number

// contoh undefined
let nilaiUndefined;
console.log(`nilai dari variable ini adalah ${nilaiUndefined}`);
// undefined artinya nilai yang belum diberikan/diisi
const siswa = {}

// contoh null
let nilaiNull = null;
console.log(`nilai dari variable nilaiNull adalah ${nilaiNull}`);

// contoh parseInt
let nilaiKecepatan = "200 km/jam"
let nilainyaAja = parseInt(nilaiKecepatan)
console.log(nilainyaAja);

// contoh parseFloat
let celcius ="penyebab NaN ini 34.6 derajat cc"
let angkaCelcius = parseFloat(celcius);
console.log(angkaCelcius);

// decode uri
const alamatWebsite = "https://www.google.com/"
console.log(`encode uri ${decodeURI(alamatWebsite)}`);


// string object
const nama = "river";
console.log(nama);
console.log(`panjang variable nama adalah ${nama.length}`);
console.log(`karakter kedua adalah ${nama.charAt(1)}`);
console.log(`fungsi charAt dengan -1 adalah ${nama.charAt(-1)}`);
console.log(`fungsi charAt dengan 10 adalah ${nama.charAt(10    )}`);



