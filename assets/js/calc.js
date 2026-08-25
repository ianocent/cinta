/*
 * calc.js — adapter tipis kalkulator cicilan (Cinta/Salsa).
 * Logika hitung ada di calc-core.js (hitungKredit, fmtRp).
 */
function fmt(n) {
    return fmtRp(n);
}

function setModel(val) {
    if (val) {
        document.getElementById('cOtr').value = val;
        hitung();
    }
}

function hitung() {
    var otr = parseFloat(document.getElementById('cOtr').value) || 0;
    var dp = parseFloat(document.getElementById('cDp').value) || 0;
    var bunga = parseFloat(document.getElementById('cBunga').value) || 0;
    var tenor = parseInt(document.getElementById('cTenor').value, 10) || 12;
    var h = hitungKredit(otr, dp, bunga, tenor);
    var out = document.getElementById('cOut');
    if (!out) return;
    out.innerHTML =
        'Harga OTR: <b>Rp ' + fmt(otr) + '</b><br>' +
        'DP: <b>Rp ' + fmt(dp) + '</b><br>' +
        'Pokok kredit: Rp ' + fmt(h.pokok) + '<br>' +
        'Estimasi cicilan: <b>&plusmn; Rp ' + fmt(h.cicilan) + '</b>/bulan &times; ' + tenor + ' bulan' +
        '<br><small>Simulasi kasar, bunga flat. Penawaran akurat via WhatsApp ke sales.</small>';
}
