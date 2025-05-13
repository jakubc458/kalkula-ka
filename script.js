
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
function odporucanyPrierez(rozpon) {
    // orientačne podľa tabuliek pre smrek C24, pre zaťaženie do 5,2kN/m
    if (rozpon <= 3) return "100 × 160 mm";
    if (rozpon <= 4) return "100 × 200 mm";
    if (rozpon <= 5) return "120 × 240 mm";
    if (rozpon <= 6) return "140 × 280 mm";
    return "Navrhnite individuálne – kontaktujte statika.";
}

// ... v rámci výpočtovej funkcie:
document.getElementById("suggestedSection").innerText = 
  "Odporúčaný prierez (smrek C24): " + odporucanyPrierez(rozpon) + 
  " (pri zaťažení 5,2 kN/m)";
