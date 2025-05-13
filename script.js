
document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const L = parseFloat(document.getElementById('span').value);
    const b = parseFloat(document.getElementById('width').value) / 1000;
    const h = parseFloat(document.getElementById('height').value) / 1000;
    const q = parseFloat(document.getElementById('load').value);

    const Mmax = q * Math.pow(L, 2) / 8;
    const I = (b * Math.pow(h, 3)) / 12;
    const W = I / (h / 2);
    const sigma = (Mmax * 1e6) / (W * 1e9);

    const fmd = 17.0;
    const result = document.getElementById('result');
    const status = sigma <= fmd ? "VYHOVUJE" : "NEVYHOVUJE";

    result.innerHTML = `
        <strong>Výsledky výpočtu:</strong><br>
        Max. ohybový moment: ${Mmax.toFixed(2)} kNm<br>
        Napätie v ohybe: ${sigma.toFixed(2)} MPa<br>
        Stav: <strong>${status}</strong>
    `;
});
