const urlLogin = "https://datadik.kemdikbud.go.id/acc/login";
const urlManage = "https://datadik.kemdikbud.go.id/manage";
const urlSp = "https://datadik.kemdikbud.go.id/ma74/rekapsp";

fetch(urlLogin, {
    method: "POST",
    headers: {
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': 'https://datadik.kemdikbud.go.id/acc/login'
    },
    body: 'user=titinsalma0176%40gmail.com&pass=Titin123%40'
}).then(res => {
    console.log(res.headers.get('set-cookie'))
    return res.text()
}).then(resp => {
    // console.log(resp)
    // console.log(document.cookie)
    // fetch(urlManage)
    //     .then(res => {
    //         return res.text()
    //     })
    //     .then(resp => {
    //         // console.log(resp)
    //         fetch(urlSp, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //             },
    //             body: 'postkolom=yes&sp_nama=on&sp_npsn=on&sp_bentuk=on&sp_status=on&sp_koreg=on&sp_alamat=on&sp_desa=on&sp_kecamatan=on&sp_kab=on&sp_propinsi=on&sp_pos=on&sp_koordinat=on&sp_telepon=on&sp_npwp=on&r1_nama=on&r1_nip=on&r1_hp=on&r1_email=on&r1_plt=on&r16_nama=on&r2_semester_id=on&r13_akreditasi=on&r3_nama=on&r3_email=on&r3_handphone=on&r4_last_sync=on&r6_pertingkat=on&r6_total=on&r9_jumlah=on&r10_jumlah=on&r11_jumlah=on&r12_jumlah=on&r7_pertingkat=on&r7_total=on&r7_usia=on&r7_agama=on&r7_keluar=on&r8_kelas_rusak=on&r8_kelas_total=on&r8_perpus_rusak=on&r8_perpus_total=on&r8_labkom_rusak=on&r8_labkom_total=on&r8_labbahasa_rusak=on&r8_labbahasa_total=on&r8_labipa_rusak=on&r8_labipa_total=on&r8_labfisika_rusak=on&r8_labfisika_total=on&r8_labbiologi_rusak=on&r8_labbiologi_total=on&r8_kepsek_rusak=on&r8_kepsek_total=on&r8_guru_rusak=on&r8_guru_total=on&r8_tu_rusak=on&r8_tu_total=on&r8_wc_guru_laki_rusak=on&r8_wc_guru_laki_total=on&r8_wc_guru_perempuan_rusak=on&r8_wc_guru_perempuan_total=on&r8_wc_siswa_laki_rusak=on&r8_wc_siswa_laki_total=on&r8_wc_siswa_perempuan_rusak=on&r8_wc_siswa_perempuan_total=on&r14_meja_siswa=on&r14_kursi_siswa=on&r14_papan_tulis=on&r14_komputer=on&r15_guru=on&r15_tendik=on&sp_id=on&bentukpendidikan=0&statussekolah=0'
    //         }).then(res => {
    //             return res.text()
    //         }).then(resp => {
    //             // console.log(resp)
    //         }).catch(err => {
    //             console.log('err')
    //         })
    //     })
}).catch(err => {
    alert(err)
})


function fiprn() {
    (new Fingerprint2).get(function (bexley, octabio) {
      document.cookie = "x-bni-fpc=" + bexley + "; expires=Thu, 01 Jan 2037 00:00:00 UTC; path=/;", document.cookie = "x-bni-rncf=1651598997582; expires=Thu, 01 Jan 2037 00:00:00 UTC; path=/;";
    });
  }
//   fiprn();

// const fprn = FingerprintJS.load()
// fprn.then(fp => fp.get()).then(res => console.log('id kamu : ' + res.visitorId))