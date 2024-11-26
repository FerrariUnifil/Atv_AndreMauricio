function areaRetangulo() {
    const base = parseFloat(document.getElementById("retBase").value);
    const altura = parseFloat(document.getElementById("retAltura").value);

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        document.getElementById("retResulado").textContent = "Por favor, insira valores válidos.";
    } else {
        const area = base * altura;
        document.getElementById("retResultado").textContent = `Área do retângulo: ${area.toFixed(2)} unidades².`;
    }
}

function calculateCircleArea() {
    const raio = parseFloat(document.getElementById("circleRadius").value);

    if (isNaN(raio) || raio <= 0) {
        document.getElementById("circuloResultado").textContent = "Por favor, insira um valor válido.";
    } else {
        const area = Math.PI * Math.pow(raio, 2);
        document.getElementById("circuloResultado").textContent = `Área do círculo: ${area.toFixed(2)} unidades².`;
    }
}

function calculateTriangleArea() {
    const base = parseFloat(document.getElementById("trianguloBase").value);
    const altura = parseFloat(document.getElementById("trianguloAltura").value);

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        document.getElementById("trianguloResultado").textContent = "Por favor, insira valores válidos.";
    } else {
        const area = (base * altura) / 2;
        document.getElementById("trianguloResultado").textContent = `Área do triângulo: ${area.toFixed(2)} unidades².`;
    }
}
