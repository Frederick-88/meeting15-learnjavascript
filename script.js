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
console.log(`fungsi charAt dengan 10 adalah ${nama.charAt(10)}`);

let namaPanjang = `${nama} Huang`;
console.log(namaPanjang);
console.log(namaPanjang.toUpperCase());

// contoh searching for a substring
const kalimat ="Saya ingin jago koding supaya masuk perusahaan singapore"
const cariKata = "perusahaan singapore";
const kataDidapat = kalimat.indexOf(cariKata)
if (kataDidapat >= 0){
    console.log(`kata ${cariKata} ditemukan bro`);
}
else{
    console.log(`kata ${cariKata} tidak ditemukan`);
}

// contoh special character untuk enter dengan backslash
console.log('newline \n \n \n second newline');
console.log('dia berkata: "memang benar itu :)" \n yang lain i can\'t stop on this ');

// LEARN NUMBER
const num = 3.14;
console.log(num.toFixed(1));

// LEARN ARRAY - BUAT ARRAY
const namaSiswaImpactByte = ['Frederick','Ozy','Indra'];
// const arrayKosong= [];
let namaTambahan = "Evan"
let fungsiTambah = namaSiswaImpactByte.push(namaTambahan);
console.log(namaSiswaImpactByte);

// PANGGIL ISI
for(let index in namaSiswaImpactByte){
    console.log(namaSiswaImpactByte[index]);
}
// PANGGIL NOMOR
for(let nomor in namaSiswaImpactByte){
    console.log(nomor);
}

// LEARN ARRAY METHOD
const namaSiswaUIB = ['Agnes','Alvi','Vincent','Bill'];
const namaSiswaGlints = [namaSiswaUIB,namaSiswaImpactByte]










