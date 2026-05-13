// === DOM References ===

// Extras Controllers (Checkboxes)
const chkCuernos = document.getElementById('toggle-cuernos');
const chkAlas = document.getElementById('toggle-alas');
const chkCola = document.getElementById('toggle-cola');

// Variable Parts Controllers (Selects)
const selBrazos = document.getElementById('select-brazos');
const selPiernas = document.getElementById('select-piernas');

// Color Controller
const rangeColor = document.getElementById('color-base');

// Visual Elements (Images on Canvas)
const imgCuernos = document.getElementById('cuernos');
const imgAlas = document.getElementById('alas-peludas');
const imgCola = document.getElementById('cola-larga');
const imgBrazoIzq = document.getElementById('brazo-izquierdo');
const imgBrazoDer = document.getElementById('brazo-derecho');
const imgPiernas = document.getElementById('piernas');

// Array with all parts that should change color
const partesTintables = document.querySelectorAll('.tintable');

// Button and Message
const btnComprar = document.getElementById('btn-comprar');
const msjAdopcion = document.getElementById('mensaje-adopcion');

// Start Screen Controllers
const pantallaInicio = document.getElementById('pantalla-inicio');
const btnJugar = document.getElementById('btn-jugar');
const appPrincipal = document.getElementById('app-principal');

// === UI Logic ===

// 0. Play Button Transition
btnJugar.addEventListener('click', () => {
    pantallaInicio.classList.add('oculto');      // Oculta la pantalla de inicio
    appPrincipal.classList.remove('oculto');     // Muestra el creador de monstruos
});

// 1. Toggle accessories visibility
chkCuernos.addEventListener('change', (e) => imgCuernos.classList.toggle('oculto', !e.target.checked));
chkAlas.addEventListener('change', (e) => imgAlas.classList.toggle('oculto', !e.target.checked));
chkCola.addEventListener('change', (e) => imgCola.classList.toggle('oculto', !e.target.checked));

// 2. Change Limb Types (Long / Strong / None)
// Note: Ensure images are saved with these exact names in the 'images' folder
selBrazos.addEventListener('change', (e) => {
    const tipo = e.target.value;

    // Clear classes to avoid mixing styles
    imgBrazoIzq.classList.remove('brazos-largos', 'brazos-fuertes');
    imgBrazoDer.classList.remove('brazos-largos', 'brazos-fuertes');

    if (tipo === "") {
        imgBrazoIzq.classList.add('oculto');
        imgBrazoDer.classList.add('oculto');
    } else if (tipo === "Largos") {
        imgBrazoIzq.src = `images/BrazosLargosIzquierdo.png`;
        imgBrazoDer.src = `images/BrazosLargosDerecho.png`;
        imgBrazoIzq.classList.add('brazos-largos');
        imgBrazoDer.classList.add('brazos-largos');
        imgBrazoIzq.classList.remove('oculto');
        imgBrazoDer.classList.remove('oculto');
    } else if (tipo === "Fuertes") {
        imgBrazoIzq.src = `images/BrazosFuertesIzquierdo.png`;
        imgBrazoDer.src = `images/BrazosFuertesDerecho.png`;
        imgBrazoIzq.classList.add('brazos-fuertes');
        imgBrazoDer.classList.add('brazos-fuertes');
        imgBrazoIzq.classList.remove('oculto');
        imgBrazoDer.classList.remove('oculto');
    }
});

selPiernas.addEventListener('change', (e) => {
    const tipo = e.target.value;
    if (tipo === "") {
        imgPiernas.classList.add('oculto');
    } else {
        imgPiernas.src = `images/piernas${tipo}.png`;
        imgPiernas.classList.remove('oculto');
    }
});

// 3. Dynamic Tinting (Maintaining texture)
// We use hue-rotate which alters the hue but keeps shadows, highlights, and furry texture intact.
rangeColor.addEventListener('input', (e) => {
    const grados = e.target.value;
    partesTintables.forEach(parte => {
        parte.style.filter = `hue-rotate(${grados}deg)`;
    });
});

// 4. Purchase Button
btnComprar.addEventListener('click', () => {
    const precioFicticio = Math.floor(Math.random() * (5000 - 1500 + 1) + 1500);
    msjAdopcion.textContent = `¡Transacción completada! Has adoptado este espécimen furry por 🪙 ${precioFicticio} Monedas Estrella. ¡Trátalo bien!`;
    msjAdopcion.classList.remove('oculto');
    setTimeout(() => msjAdopcion.classList.add('oculto'), 5000);
});