/* ==========================================================
   DATOS GLOBALES (Para usar en toda la web)
   ========================================================== */
const nombresEquiposBase = [
    "Real Bétera", "Caipiriña Rovers", "Aston Birra", "Borrachita CF", 
    "Racing de Litrona", "Real Bruggal", "Fireball United", "Redbull Wiskeynsin", 
    "At. Jurdis", "Steua Benimaclet", "Internazionale Erasmus", "Rayo Resacano", 
    "Manchester Piti", "Vodka Juniors", "Bayern de los Caídos", "Atlético de Copas", 
    "Recreativo de Juerga", "Nàstic de Botellón", "Sporting de Gintonic", "UD Resaca"
];

const historiasEquipos = {
    "Real Bétera": "El club más laureado de la región, fundado en las gradas del polideportivo local.",
    "Caipiriña Rovers": "Expertos en el tercer tiempo. Su fútbol es tan refrescante como su nombre.",
    "Aston Birra": "Un equipo clásico de la Copa Académica con una afición incondicional.",
    "Borrachita CF": "Fundado en 2010, destacan por su juego alegre y su resistencia física.",
    "Racing de Litrona": "Velocidad pura por las bandas y una presión asfixiante tras pérdida.",
    "Real Bruggal":"",
    "Fireball United":"",
    "Redbull Wiskeynsin":"",
    "At. Jurdis":"",
    "Steua Benimaclet":"",
    "Internazionale Erasmus":"El ciervo es por el Jagger, no por los cuernos.",
    "Rayo Resacano":"",
    "Manchester Piti":"",
    "Vodka Juniors":"",
    "Bayern de los Caídos":"",
    "Atlético de Copas":"",
    "Recreativo de Juerga":"",
    "Nàstic de Botellón":"",
    "Sporting de Gintonic":"",
    "Unión Deportiva Resaca":"",
};

// Función auxiliar para generar nombres de archivo de escudos (ej: "Real Bétera" -> "escudo-realbetera.png")
function obtenerNombreEscudo(nombreEquipo) {
    return "escudo-" + nombreEquipo.toLowerCase()
        .replace(/\s+/g, '')       // Quitar espacios
        .replace(/[áäà]/g, 'a')    // Quitar tildes
        .replace(/[éëè]/g, 'e')
        .replace(/[íïì]/g, 'i')
        .replace(/[óöò]/g, 'o')
        .replace(/[úüù]/g, 'u')
        .replace(/ñ/g, 'n') + ".png";
}

/* ==========================================================
   LÓGICA DE MODO CARRERA (Antiguo script de carrera.html)
   ========================================================== */
const nombresPila = ["Paco", "Javi", "Dani", "Rubén", "Sergio", "Iker", "Borja", "Gerard", "Iago", "Santi", "Joaquín", "Ferran", "Marcos", "Lamine", "Mikel", "Raúl", "Gavi", "Ibai", "Álvaro", "Pablo", "Miguel", "Antonio", "Carlos", "Alejandro", "Adrián", "Mario", "Diego", "Lucas", "Óscar", "Víctor", "Nacho", "Fran", "Pedro", "José", "Luis", "Andrés", "Mateo", "Hugo", "Samuel", "David", "Iván", "Jesús", "Alberto", "Roberto", "Tomás", "Fernando", "Enrique", "Guillermo", "Aitor", "Unai"];
const apellidosBase = ["González", "López", "Martínez", "Castro", "Ramos", "Casillas", "Iglesias", "Moreno", "Aspas", "Sánchez", "Torres", "Llorente", "García", "Ruiz", "Fernández", "Pérez", "Gómez", "Díaz", "Vázquez", "Muñoz", "Hernández", "Álvarez", "Romero", "Navarro", "Domínguez", "Gil", "Ortega", "Molina", "Delgado", "Cruz", "Flores", "Serrano", "Suárez", "Rey", "Vidal", "Ferrer", "Pujol", "Riera", "Costa", "Soler", "Puig", "Miró", "Balaguer", "Fàbregas", "Aramburu", "Etxeberria", "Zubizarreta", "Urrutia", "Landa", "Otero"];

let equipos = [];
let jornadaActual = 0;
let registroGoleadores = {};
let indicesRotacion = [];

// Se ejecuta al cargar la página si estamos en carrera.html
function inicializarCarrera() {
    dibujarFormulario();
}

function dibujarFormulario() {
    const inputNum = document.getElementById('num-jugadores');
    if(!inputNum) return; // Si no existe el elemento, no hacemos nada (por si importas esto en otro html)
    
    const num = inputNum.value;
    const container = document.getElementById('formulario-jugadores');
    container.innerHTML = "";
    for(let i=1; i<=num; i++) {
        let options = nombresEquiposBase.map(e => `<option value="${e}">${e}</option>`).join('');
        container.innerHTML += `
            <div class="jugador-row">
                <div class="input-group">
                    <label>Nombre Amigo ${i}</label>
                    <input type="text" class="human-name" placeholder="Ej: Javi">
                </div>
                <div class="input-group">
                    <label>Equipo</label>
                    <select class="human-team">${options}</select>
                </div>
            </div>`;
    }
}

function validarEIniciar() {
    const hNames = document.querySelectorAll('.human-name');
    const hTeams = document.querySelectorAll('.human-team');
    let seleccionados = [];
    let mapeo = {};

    for(let i=0; i<hNames.length; i++) {
        let nom = hNames[i].value || `Jugador ${i+1}`;
        let eq = hTeams[i].value;
        if(seleccionados.includes(eq)) return alert(`El equipo ${eq} ya está pillado.`);
        seleccionados.push(eq);
        mapeo[eq] = nom;
    }

    equipos = nombresEquiposBase.map(nombre => {
        const esHumano = mapeo[nombre] || null;
        let plantilla = esHumano ? [esHumano] : [];
        while(plantilla.length < 5) {
            let n = nombresPila[Math.floor(Math.random()*nombresPila.length)] + " " + apellidosBase[Math.floor(Math.random()*apellidosBase.length)];
            if(!plantilla.includes(n)) plantilla.push(n);
        }
        plantilla.forEach(j => { registroGoleadores[j] = { goles: 0, equipo: nombre }; });
        
        // AQUI USAMOS LA NUEVA FUNCIÓN DE ESCUDOS
        return { 
            nombre, 
            propietario: esHumano, 
            plantilla, 
            pj: 0, g: 0, e: 0, p: 0, pts: 0, golesEquipo: 0, 
            img: `Assets/${obtenerNombreEscudo(nombre)}` 
        };
    });

    indicesRotacion = equipos.map((_, i) => i);
    document.getElementById('setup-section').classList.add('hidden');
    document.getElementById('game-section').classList.remove('hidden');
    renderizarTodo();
}

function simularSiguienteJornada() {
    if (jornadaActual >= 19) return alert("Fin de liga");
    const btn = document.getElementById('btn-jornada');
    btn.innerText = "Simulando...";
    document.getElementById('game-section').classList.add('loading');

    setTimeout(() => {
        jornadaActual++;
        document.getElementById('num-acta').innerText = jornadaActual;
        const listaDetalles = document.getElementById('lista-partidos-detallados');
        document.getElementById('panel-resultados').classList.remove('hidden');
        listaDetalles.innerHTML = "";

        let locales = indicesRotacion.slice(0, indicesRotacion.length / 2);
        let visitantes = indicesRotacion.slice(indicesRotacion.length / 2).reverse();

        for (let i = 0; i < locales.length; i++) {
            const eq1 = equipos[locales[i]];
            const eq2 = equipos[visitantes[i]];
            const g1 = Math.floor(Math.random() * 4);
            const g2 = Math.floor(Math.random() * 4);
            
            let todosGoles = [];
            for(let g=0; g<g1; g++) todosGoles.push({ min: Math.floor(Math.random()*90)+1, autor: eq1.plantilla[Math.floor(Math.random()*eq1.plantilla.length)], lado: 'L', eq: eq1 });
            for(let g=0; g<g2; g++) todosGoles.push({ min: Math.floor(Math.random()*90)+1, autor: eq2.plantilla[Math.floor(Math.random()*eq2.plantilla.length)], lado: 'V', eq: eq2 });
            todosGoles.sort((a, b) => a.min - b.min);

            let htmlL = "", htmlV = "";
            todosGoles.forEach(gol => {
                registroGoleadores[gol.autor].goles++;
                gol.eq.golesEquipo++;
                let txt = `<div class="evento">${gol.min}' ⚽ <strong>${gol.autor}</strong></div>`;
                if(gol.lado === 'L') htmlL += txt; else htmlV += txt;
            });

            eq1.pj++; eq2.pj++;
            if(g1 > g2) { eq1.g++; eq1.pts += 3; eq2.p++; }
            else if(g2 > g1) { eq2.g++; eq2.pts += 3; eq1.p++; }
            else { eq1.e++; eq1.pts++; eq2.e++; eq2.pts++; }

            listaDetalles.innerHTML += `
                <div class="partido-detallado">
                    <div class="marcador-contenedor">
                        <div class="equipo-bloque local">
                            <span>${eq1.nombre}</span>
                            <img src="${eq1.img}" class="escudo-marcador" onerror="this.src='https://cdn-icons-png.flaticon.com/512/5323/5323982.png'">
                        </div>
                        <div class="score-box">${g1}</div>
                        <div class="separador-marcador">|</div>
                        <div class="score-box">${g2}</div>
                        <div class="equipo-bloque visitante">
                            <img src="${eq2.img}" class="escudo-marcador" onerror="this.src='https://cdn-icons-png.flaticon.com/512/5323/5323982.png'">
                            <span>${eq2.nombre}</span>
                        </div>
                    </div>
                    <div class="eventos-container">
                        <div class="col-goles gol-local">${htmlL}</div>
                        <div class="col-goles gol-visitante">${htmlV}</div>
                    </div>
                </div>`;
        }
        indicesRotacion.splice(1, 0, indicesRotacion.pop());
        renderizarTodo();
        btn.innerText = "Simular Jornada";
        document.getElementById('game-section').classList.remove('loading');
    }, 600);
}

function renderizarTodo() {
    const tabla = document.getElementById('tabla-carrera');
    tabla.innerHTML = "";
    let ord = [...equipos].sort((a, b) => b.pts - a.pts || b.golesEquipo - a.golesEquipo);
    ord.forEach((eq, idx) => {
        let clase = idx === 0 ? "lider" : (idx < 4 ? "champions" : (idx > 15 ? "descenso" : ""));
        tabla.innerHTML += `<li class="equipo ${clase}"><span class="pos">${idx + 1}</span><div class="equipo-info"><img src="${eq.img}" class="img-escudo" onerror="this.src='https://cdn-icons-png.flaticon.com/512/5323/5323982.png'"><span class="nombre">${eq.nombre} ${eq.propietario ? `<span class="badge-user">${eq.propietario}</span>` : ""}</span></div><span>${eq.pj}</span><span>${eq.g}</span><span>${eq.e}</span><span>${eq.p}</span><span class="pts">${eq.pts}</span></li>`;
    });
    const pichichiUl = document.getElementById('lista-goleadores');
    pichichiUl.innerHTML = "";
    let rank = Object.keys(registroGoleadores).map(n => ({ nombre: n, goles: registroGoleadores[n].goles, eq: registroGoleadores[n].equipo })).sort((a, b) => b.goles - a.goles).slice(0, 10);
    rank.forEach(j => { pichichiUl.innerHTML += `<li class="goleador-item"><div><strong>${j.nombre}</strong><br><small style="color:#888">${j.eq}</small></div><span class="pts">${j.goles}</span></li>`; });
    document.getElementById('display-jornada').innerText = `Jornada ${jornadaActual}`;
}