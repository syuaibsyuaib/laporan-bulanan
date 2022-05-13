function bulanId(val) {
    let arrBln = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    return arrBln[val]
}

//fungsi untuk mengubah format tanggal lahir dari 
function TglLahir(e, format) {
    try {
        let d = new Date(e)
        let tgl = d.getDate().toString()
        if (tgl.length <= 1) {
            tgl = '0' + tgl
        }

        let bln = (d.getMonth() + 1).toString()
        if (bln.length <= 1) {
            bln = '0' + bln
        }

        let thn = d.getFullYear()

        switch (format) {
            case 'dd mmmm yyyy':
                bln = bulanId(d.getMonth())
                return `${tgl} ${bln} ${thn}`
            case 'dd-mm-yyyy':
                return `${thn}-${bln}-${tgl}`
            case 'array':
                if(isNaN(thn) || isNaN(bln)){
                    let skrg = new Date()
                    thn = skrg.getFullYear(); bln = skrg.getMonth() + 1
                }
                return [Math.abs(thn), Math.abs(bln)]
            default:
                return 'format tanggal tidak ditemukan';
        }
    }catch(err){
        return 0
    }
}


//fungsi ubah jadi kebab case
function FirstProper(txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1)
}

//fungsi membuat array dalam array
function chunk(array, length) {
    let result = [];
    for (let i = 0; i < array.length / length; i++) {
        result.push(array.slice(i * length, i * length + length));
    }
    return result;
}

//template list guru
function ListGuru(namaGuru, nip, tugas, no, id) {
    return `<tr>
            <td>${no}</td>
            <td class="d-none">${id}</td>
            <td>${namaGuru}</td>
            <td>${nip}</td>
            <td>${tugas}</td>
            <td>
                <button type="button" class="btn btn-info list-guru" data-toggle="modal" data-target="#modal_keadaan_guru">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                </button>
            </td>
            </tr>`
}

//fungsi hitung masa kerja tahun dan bulan
function HitungMasaKerja(tmt, mk = [0, 0]) {
    //FIXME
    let tglSaatIni = TglLahir(Date.now(), 'array')
    //tmt = [thn, bln]; mk = [thn, bln]
    let isiSk = { "tmt sk": TglLahir(tmt, "array"), "masa kerja": mk }
    let selisihThn = tglSaatIni[0] - isiSk["tmt sk"][0] * 1
    let selisihBln = tglSaatIni[1] - isiSk["tmt sk"][1] * 1

    if (selisihBln > 0) {
        selisihThn += selisihBln
    }

    //jumlahkan masa kerja yang sudah ada dengan selisih thn dan bulan
    let masaKerjaThn = isiSk["masa kerja"][0] * 1 + selisihThn
    let masaKerjaBln = Math.abs(isiSk["masa kerja"][1] * 1 + selisihBln)
    return [masaKerjaThn, masaKerjaBln]
}

//fungsi kirim ke server
async function KirimPost(url, data) {
    let kirimPost = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })

    return kirimPost.json();
}
