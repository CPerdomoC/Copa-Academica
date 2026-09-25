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
    "Aston Birra": "Un equipo clásico de la Copa Académica con una afición incondicional. Con la entrada del partido te dan una rubia de las que no mienten.",
    "Borrachita CF": "Fundado por la generación del 2000, destacan por su juego alegre y su resistencia física, por lo que sea nunca preguntes el resultado, no se acuerdan.",
    "Racing de Litrona": "Velocidad pura por las bandas y una presión asfixiante tras pérdida.",
    "Real Bruggal": "Traídos de República Dominicana, conocidos por su elegancia en el campo y maestría en la mezcla. Un equipo con mucho cuerpo.",
    "Fireball United": "Juego explosivo y remates que queman las manos de los porteros rivales.",
    "Redbull Wiskeynsin": "Corren los 90 minutos sin cansarse; dicen que su bebida secreta les da alas.",
    "At. Jurdis": "La garra del fútbol (judío). Se les prometió la victoria hace 3000 años.",
    "Steua Benimaclet": "De estrellas a estrellados, auténtico fútbol con denominación de origen. El orgullo de l'horta sud.",
    "Internazionale Erasmus": "El ciervo es por el Jagger, no por los cuernos.",
    "Rayo Resacano": "Brillan en los partidos nocturnos, aunque les cuesta ver el balón en los horarios de mañana.",
    "Manchester Piti": "Mucho humo en ataque y una defensa que se deshace como la ceniza.",
    "Vodka Juniors": "Juventud, fuerza y un estilo de juego que deja a los rivales mareados.",
    "Bayern de los Caídos": "Viejas glorias que mantienen la clase. Si se caen, se levantan con una cerveza, no sabemos de dónde se las sacan, mejor no preguntar.",
    "Atlético de Copas": "Su vitrina está llena, aunque no siempre de trofeos deportivos.",
    "Recreativo de Juerga": "El resultado es lo de menos mientras la música no pare en el vestuario.",
    "Nàstic de Botellón": "Táctica pura y reuniones estratégicas que se alargan hasta el amanecer.",
    "Sporting de Gintonic": "En Gijón aún se habla de lo que hacían fuera de los terrenos de juego. Destilan fútbol en cada pase.",
    "UD Resaca": "Capaces de lo mejor y de lo peor, pero siempre dan que hablar."
};

const origenesEquipos = {
    "Real Bétera": "espana",
    "Caipiriña Rovers": "brasil",
    "Aston Birra": "uk",
    "Borrachita CF": "colombia",
    "Racing de Litrona": "espana",
    "Real Bruggal": "republicadominicana",
    "Fireball United": "canada",
    "Redbull Wiskeynsin": "estadosunidos",
    "At. Jurdis": "israel",
    "Steua Benimaclet": "espana",
    "Internazionale Erasmus": "europa",
    "Rayo Resacano": "gitano",
    "Manchester Piti": "uk",
    "Vodka Juniors": "argentina",
    "Bayern de los Caídos": "alemania",
    "Atlético de Copas": "espana",
    "Recreativo de Juerga": "espana",
    "Nàstic de Botellón": "espana",
    "Sporting de Gintonic": "asturias",
    "UD Resaca": "uruguay"
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
let plantillasCarrera = {};
let historialJornadasCarrera = [];

function copiarPlantillasParaCarrera() {
    const plantillasBase = obtenerPlantillas();
    return Object.fromEntries(nombresEquiposBase.map(nombre => [
        nombre,
        (plantillasBase[nombre] || []).map(jugador => ({
            ...jugador,
            estadisticasCarrera: { partidos: 0, goles: 0 }
        }))
    ]));
}

function pesoGoleador(jugador) {
    if (jugador.posicion === "Portero") return 0.05;
    if (["Defensa central", "Lateral derecho", "Lateral izquierdo"].includes(jugador.posicion)) return 0.8;
    if (["Pivote", "Centrocampista", "Mediapunta"].includes(jugador.posicion)) return 3;
    return 5;
}

function elegirGoleador(plantilla) {
    const pesoTotal = plantilla.reduce((total, jugador) => total + pesoGoleador(jugador), 0);
    let objetivo = Math.random() * pesoTotal;
    return plantilla.find(jugador => {
        objetivo -= pesoGoleador(jugador);
        return objetivo <= 0;
    }) || plantilla[plantilla.length - 1];
}

// Se ejecuta al cargar la página si estamos en carrera.html
function inicializarCarrera() {
    const selector = document.getElementById("filtro-estadisticas-equipo");
    if (selector) selector.insertAdjacentHTML("beforeend", nombresEquiposBase.map(equipo => `<option value="${equipo}">${equipo}</option>`).join(""));
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

    jornadaActual = 0;
    registroGoleadores = {};
    indicesRotacion = [];
    historialJornadasCarrera = [];
    plantillasCarrera = copiarPlantillasParaCarrera();
    equipos = nombresEquiposBase.map(nombre => {
        const esHumano = mapeo[nombre] || null;
        const plantilla = plantillasCarrera[nombre];
        if (esHumano) {
            plantilla.push({
                id: `carrera-${obtenerNombreEscudo(nombre)}-${Date.now()}-${plantilla.length}`,
                nombre: esHumano,
                nacionalidad: "España",
                edad: 18,
                posicion: "Delantero",
                imagen: "",
                esUsuario: true,
                temporalCarrera: true,
                estadisticasCarrera: { partidos: 0, goles: 0 }
            });
        }
        plantilla.forEach(jugador => {
            jugador.estadisticasCarrera = jugador.estadisticasCarrera || { partidos: 0, goles: 0 };
            registroGoleadores[jugador.id] = { jugador, goles: jugador.estadisticasCarrera.goles, equipo: nombre };
        });
        
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
    document.getElementById('historial-resultados').classList.add('hidden');
    document.getElementById('selector-jornada-anterior').innerHTML = '<option value="">Selecciona una jornada</option>';
    document.getElementById('lista-jornada-anterior').innerHTML = "";
    renderizarTodo();
}

function simularSiguienteJornada() {
    if (jornadaActual >= 38) return alert("Fin de liga");
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
            const minutos = new Set();
            const minutoUnico = () => {
                let minuto = Math.floor(Math.random() * 90) + 1;
                while (minutos.has(minuto)) minuto = minuto === 90 ? 1 : minuto + 1;
                minutos.add(minuto);
                return minuto;
            };
            for(let g=0; g<g1; g++) todosGoles.push({ min: minutoUnico(), autor: elegirGoleador(eq1.plantilla), lado: 'L', eq: eq1 });
            for(let g=0; g<g2; g++) todosGoles.push({ min: minutoUnico(), autor: elegirGoleador(eq2.plantilla), lado: 'V', eq: eq2 });
            todosGoles.sort((a, b) => a.min - b.min);

            let htmlL = "", htmlV = "";
            todosGoles.forEach(gol => {
                gol.autor.estadisticasCarrera.goles++;
                registroGoleadores[gol.autor.id].goles = gol.autor.estadisticasCarrera.goles;
                gol.eq.golesEquipo++;
                let txt = `<div class="evento">${gol.min}' ⚽ <strong>${gol.autor.nombre}</strong></div>`;
                if(gol.lado === 'L') htmlL += txt; else htmlV += txt;
            });

            eq1.pj++; eq2.pj++;
            eq1.plantilla.forEach(jugador => jugador.estadisticasCarrera.partidos++);
            eq2.plantilla.forEach(jugador => jugador.estadisticasCarrera.partidos++);
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
        historialJornadasCarrera.push({ jornada: jornadaActual, html: listaDetalles.innerHTML });
        renderizarHistorialJornadas();
        indicesRotacion.splice(1, 0, indicesRotacion.pop());
        renderizarTodo();
        btn.innerText = "Simular Jornada";
        document.getElementById('game-section').classList.remove('loading');
        renderizarEstadisticasCarrera();
    }, 600);
}

function renderizarHistorialJornadas() {
    const historial = document.getElementById("historial-resultados");
    const selector = document.getElementById("selector-jornada-anterior");
    if (!historial || !selector) return;
    historial.classList.toggle("hidden", historialJornadasCarrera.length < 2);
    selector.innerHTML = '<option value="">Selecciona una jornada</option>' +
        historialJornadasCarrera.slice(0, -1).reverse()
            .map(acta => `<option value="${acta.jornada}">Jornada ${acta.jornada}</option>`)
            .join("");
}

function mostrarJornadaAnterior(jornada) {
    const contenedor = document.getElementById("lista-jornada-anterior");
    if (!contenedor) return;
    const acta = historialJornadasCarrera.find(item => String(item.jornada) === String(jornada));
    contenedor.innerHTML = acta ? acta.html : "";
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
    let rank = Object.keys(registroGoleadores).map(id => ({ nombre: registroGoleadores[id].jugador.nombre, goles: registroGoleadores[id].goles, eq: registroGoleadores[id].equipo })).sort((a, b) => b.goles - a.goles).slice(0, 10);
    rank.forEach(j => { pichichiUl.innerHTML += `<li class="goleador-item"><div><strong>${j.nombre}</strong><br><small style="color:#888">${j.eq}</small></div><span class="pts">${j.goles}</span></li>`; });
    document.getElementById('display-jornada').innerText = `Jornada ${jornadaActual}`;
}

function renderizarEstadisticasCarrera() {
    const tabla = document.getElementById("tabla-estadisticas-carrera");
    if (!tabla) return;
    const selector = document.getElementById("filtro-estadisticas-equipo");
    const equipoSeleccionado = selector?.value || "todos";
    const jugadores = Object.values(registroGoleadores)
        .map(registro => ({ nombre: registro.jugador.nombre, equipo: registro.equipo, partidos: registro.jugador.estadisticasCarrera.partidos, goles: registro.jugador.estadisticasCarrera.goles }))
        .filter(jugador => equipoSeleccionado === "todos" || jugador.equipo === equipoSeleccionado)
        .sort((a, b) => b.goles - a.goles || b.partidos - a.partidos)
        .slice(0, equipoSeleccionado === "todos" ? 30 : 18);
    tabla.innerHTML = jugadores.map((jugador, indice) => `<tr><td>${indice + 1}</td><td>${jugador.nombre}</td><td>${jugador.equipo}</td><td>${jugador.partidos}</td><td><strong>${jugador.goles}</strong></td></tr>`).join("");
    const final = document.getElementById("resumen-final-carrera");
    if (final) {
        final.classList.toggle("hidden", jornadaActual < 38);
        if (jornadaActual >= 38 && jugadores[0]) final.innerText = `Pichichi de la temporada: ${jugadores[0].nombre} (${jugadores[0].goles} goles)`;
    }
}

/* ==========================================================
   LIGA EN TIEMPO REAL (calendario.html y equipos.html)
   ========================================================== */
const CLAVE_TEMPORADA = "copa-academica-temporada-v7";
const CLAVE_PLANTILLAS = "copa-academica-plantillas-v1";
const CLAVE_DEVELOPER = "copa-academica-developer";
const CLAVE_EQUIPOS = "copa-academica-equipos-v1";
const CLAVE_BASE_DATOS = "copa-academica-base-datos-v1";
const ICONO_JUGADOR = "https://cdn-icons-png.flaticon.com/512/1077/1077114.png";
const coloresEquipoBase = ["#17226B", "#FFD600"];
const banderasDisponibles = ["espana", "brasil", "uk", "colombia", "republicadominicana", "canada", "estadosunidos", "israel", "europa", "gitano", "argentina", "alemania", "asturias", "uruguay"];

function rutaBandera(bandera) {
    return bandera && (bandera.startsWith("http://") || bandera.startsWith("https://") || bandera.startsWith("Assets/"))
        ? bandera
        : `Assets/${bandera || "espana"}.png`;
}

const codigosPais = {
    "Afganistán": "af", "Albania": "al", "Alemania": "de", "Andorra": "ad", "Angola": "ao",
    "Arabia Saudí": "sa", "Argelia": "dz", "Argentina": "ar", "Armenia": "am", "Australia": "au",
    "Austria": "at", "Azerbaiyán": "az", "Bahamas": "bs", "Bangladés": "bd", "Barbados": "bb",
    "Bélgica": "be", "Belice": "bz", "Benín": "bj", "Bielorrusia": "by", "Bolivia": "bo",
    "Bosnia y Herzegovina": "ba", "Botsuana": "bw", "Brasil": "br", "Bulgaria": "bg",
    "Burkina Faso": "bf", "Cabo Verde": "cv", "Camboya": "kh", "Camerún": "cm", "Canadá": "ca",
    "Catar": "qa", "Chile": "cl", "China": "cn", "Chipre": "cy", "Colombia": "co",
    "Corea del Sur": "kr", "Costa Rica": "cr", "Croacia": "hr", "Cuba": "cu", "Dinamarca": "dk",
    "Ecuador": "ec", "Egipto": "eg", "El Salvador": "sv", "Emiratos Árabes Unidos": "ae",
    "Eslovaquia": "sk", "Eslovenia": "si", "España": "es", "Estados Unidos": "us", "Estonia": "ee",
    "Etiopía": "et", "Filipinas": "ph", "Finlandia": "fi", "Fiyi": "fj", "Francia": "fr",
    "Gabón": "ga", "Gambia": "gm", "Georgia": "ge", "Ghana": "gh", "Grecia": "gr",
    "Guatemala": "gt", "Guinea": "gn", "Haití": "ht", "Honduras": "hn", "Hungría": "hu",
    "India": "in", "Indonesia": "id", "Inglaterra": "gb-eng", "Irak": "iq", "Irán": "ir",
    "Irlanda": "ie", "Islandia": "is", "Israel": "il", "Italia": "it", "Jamaica": "jm",
    "Japón": "jp", "Jordania": "jo", "Kenia": "ke", "Kuwait": "kw", "Letonia": "lv",
    "Líbano": "lb", "Liberia": "lr", "Libia": "ly", "Lituania": "lt", "Luxemburgo": "lu",
    "Malasia": "my", "Malta": "mt", "Marruecos": "ma", "Mauricio": "mu", "México": "mx",
    "Moldavia": "md", "Mónaco": "mc", "Mongolia": "mn", "Montenegro": "me", "Mozambique": "mz",
    "Namibia": "na", "Nepal": "np", "Nicaragua": "ni", "Níger": "ne", "Nigeria": "ng",
    "Noruega": "no", "Nueva Zelanda": "nz", "Omán": "om", "Países Bajos": "nl", "Pakistán": "pk",
    "Panamá": "pa", "Papúa Nueva Guinea": "pg", "Paraguay": "py", "Perú": "pe", "Polonia": "pl",
    "Portugal": "pt", "Puerto Rico": "pr", "Reino Unido": "gb", "República Checa": "cz",
    "República Dominicana": "do", "Rumanía": "ro", "Rusia": "ru", "Senegal": "sn", "Serbia": "rs",
    "Singapur": "sg", "Siria": "sy", "Sudáfrica": "za", "Suecia": "se", "Suiza": "ch",
    "Tailandia": "th", "Taiwán": "tw", "Tanzania": "tz", "Túnez": "tn", "Turquía": "tr",
    "Ucrania": "ua", "Uganda": "ug", "Uruguay": "uy", "Uzbekistán": "uz", "Venezuela": "ve",
    "Vietnam": "vn", "Zambia": "zm", "Zimbabue": "zw"
};

function rutaBanderaJugador(nacionalidad) {
    const nombre = String(nacionalidad || "").trim();
    const codigo = codigosPais[nombre]
        || codigosPais[Object.keys(codigosPais).find(pais => pais.toLowerCase() === nombre.toLowerCase())];
    return codigo ? `https://flagcdn.com/w40/${codigo}.png` : ICONO_JUGADOR;
}

function guardarBaseDatos(plantillas, datosEquipos) {
    const base = { plantillas, equipos: datosEquipos };
    localStorage.setItem(CLAVE_BASE_DATOS, JSON.stringify(base));
    localStorage.setItem(CLAVE_PLANTILLAS, JSON.stringify(plantillas));
    localStorage.setItem(CLAVE_EQUIPOS, JSON.stringify(datosEquipos));
}
const nombresInternacionales = [
    "Pablo", "Javi", "Dani", "Sergio", "Iker", "Borja", "Gerard", "Iago", "Santi",
    "Mateo", "Hugo", "Lucas", "Samuel", "David", "Álvaro", "Nicolás", "Amir", "Liam",
    "Noah", "Youssef", "Milan", "André", "Thiago", "Enzo", "Mamadou", "Kenji"
];
const apellidosInternacionales = [
    "García", "López", "Martínez", "Castro", "Ramos", "Moreno", "Sánchez", "Torres",
    "Navarro", "Romero", "Costa", "Pereira", "Silva", "Rossi", "Kowalski", "Nielsen",
    "Diallo", "Haddad", "Okafor", "Kobayashi", "Petrov", "Van Dijk", "Williams"
];
const posicionesPlantilla = ["Portero", "Defensa central", "Lateral derecho", "Lateral izquierdo", "Pivote", "Centrocampista", "Mediapunta", "Extremo derecho", "Extremo izquierdo", "Delantero"];

function fechaISO(fecha) {
    return fecha.toISOString().slice(0, 10);
}

function aleatorioEstable(texto) {
    let valor = 0;
    for (let i = 0; i < texto.length; i++) valor = (valor * 31 + texto.charCodeAt(i)) >>> 0;
    return valor;
}

function obtenerTemporadaActual(hoy = new Date()) {
    const inicio = hoy.getMonth() >= 8 ? hoy.getFullYear() : hoy.getFullYear() - 1;
    return { inicio, fin: inicio + 1, clave: `${inicio}/${String(inicio + 1).slice(-2)}` };
}

function crearPlantillaBase(nombreEquipo) {
    const jugadores = [];
    const esErasmus = nombreEquipo === "Internazionale Erasmus";
    const nacionalidades = esErasmus
        ? ["España", "Italia", "Francia", "Portugal", "Inglaterra", "Argentina", "Alemania"]
        : ["España", "España", "España", "España", "España", "Portugal", "Francia", "Italia", "Argentina", "Inglaterra", "Marruecos"];
    for (let i = 0; i < 18; i++) {
        const semilla = aleatorioEstable(`${nombreEquipo}-${i}`);
        jugadores.push({
            id: `${obtenerNombreEscudo(nombreEquipo)}-${i}`,
            nombre: `${nombresInternacionales[semilla % nombresInternacionales.length]} ${apellidosInternacionales[(semilla * 7) % apellidosInternacionales.length]}`,
            nacionalidad: nacionalidades[semilla % nacionalidades.length],
            edad: 18 + (semilla % 13),
            posicion: posicionesPlantilla[i % posicionesPlantilla.length],
            imagen: ""
        });
    }
    return jugadores;
}

function obtenerPlantillas() {
    const baseGuardada = localStorage.getItem(CLAVE_BASE_DATOS);
    const guardado = baseGuardada ? JSON.parse(baseGuardada).plantillas : (localStorage.getItem(CLAVE_PLANTILLAS) ? JSON.parse(localStorage.getItem(CLAVE_PLANTILLAS)) : null);
    if (guardado) {
        const plantillas = guardado;
        nombresEquiposBase.forEach(nombreEquipo => {
            const nacionalidades = nombreEquipo === "Internazionale Erasmus"
                ? ["España", "Italia", "Francia", "Portugal", "Inglaterra", "Argentina", "Alemania"]
                : ["España", "España", "España", "España", "España", "Portugal", "Francia", "Italia", "Argentina", "Inglaterra", "Marruecos"];
            (plantillas[nombreEquipo] || []).forEach((jugador, indice) => {
                if (!Number.isInteger(jugador.edad) || jugador.edad < 18 || jugador.edad > 30) jugador.edad = 18 + (aleatorioEstable(`${nombreEquipo}-${indice}`) % 13);
            });
        });
        const datosEquipos = obtenerDatosEquipos();
        guardarBaseDatos(plantillas, datosEquipos);
        return plantillas;
    }

    const plantillas = {};
    nombresEquiposBase.forEach(nombre => { plantillas[nombre] = crearPlantillaBase(nombre); });
    guardarBaseDatos(plantillas, obtenerDatosEquipos());
    return plantillas;
}

function obtenerDatosEquipos() {
    const baseGuardada = localStorage.getItem(CLAVE_BASE_DATOS);
    const guardado = baseGuardada ? JSON.stringify(JSON.parse(baseGuardada).equipos) : localStorage.getItem(CLAVE_EQUIPOS);
    const datos = guardado ? JSON.parse(guardado) : {};
    nombresEquiposBase.forEach((nombre, indice) => {
        if (!datos[nombre]) datos[nombre] = { colores: [coloresEquipoBase[indice % 2], coloresEquipoBase[(indice + 1) % 2]] };
        if (!Array.isArray(datos[nombre].colores) || datos[nombre].colores.length < 2) datos[nombre].colores = [...coloresEquipoBase];
        if (!datos[nombre].bandera) datos[nombre].bandera = origenesEquipos[nombre] || "espana";
    });
    localStorage.setItem(CLAVE_EQUIPOS, JSON.stringify(datos));
    const base = baseGuardada ? JSON.parse(baseGuardada) : { plantillas: null };
    if (base.plantillas) localStorage.setItem(CLAVE_BASE_DATOS, JSON.stringify({ plantillas: base.plantillas, equipos: datos }));
    return datos;
}

function fechaDeJornada(inicio, numero, total) {
    const primerDia = new Date(inicio, 8, 15, 20, 0, 0);
    const ultimoDia = new Date(inicio + 1, 4, 23, 20, 0, 0);
    const fecha = new Date(primerDia.getTime() + ((ultimoDia - primerDia) * numero / (total - 1)));
    fecha.setHours(17, 0, 0, 0);
    return fecha;
}

function esPeriodoVacaciones(fecha) {
    const mes = fecha.getMonth();
    const dia = fecha.getDate();
    return (mes === 11 && dia >= 21) || (mes === 0 && dia <= 7);
}

function avanzarDiaDeLiga(fecha) {
    const resultado = new Date(fecha);
    while (esPeriodoVacaciones(resultado)) resultado.setDate(resultado.getDate() + 1);
    return resultado;
}

function claveFechaLocal(fecha) {
    return `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;
}

function reservarFechaLiga(fecha, ocupacion) {
    const resultado = new Date(fecha);
    while (esPeriodoVacaciones(resultado) || (ocupacion[claveFechaLocal(resultado)] || 0) >= 2) {
        resultado.setDate(resultado.getDate() + 1);
    }
    ocupacion[claveFechaLocal(resultado)] = (ocupacion[claveFechaLocal(resultado)] || 0) + 1;
    return resultado;
}

function generarCalendarioLiga() {
    const temporada = obtenerTemporadaActual();
    const equiposCalendario = [...nombresEquiposBase];
    const vueltas = [];
    for (let vuelta = 0; vuelta < 2; vuelta++) {
        const rotacion = [...equiposCalendario];
        for (let jornada = 0; jornada < equiposCalendario.length - 1; jornada++) {
            const partidos = [];
            for (let i = 0; i < rotacion.length / 2; i++) {
                let local = rotacion[i];
                let visitante = rotacion[rotacion.length - 1 - i];
                if ((jornada + vuelta) % 2 === 1) [local, visitante] = [visitante, local];
                partidos.push({ local, visitante });
            }
            vueltas.push({ jornada, vuelta, partidos });
            rotacion.splice(1, 0, rotacion.pop());
        }
    }
    const calendario = [];
    const ocupacion = {};
    const fechaUltimaJornada = fechaDeJornada(temporada.inicio, vueltas.length - 1, vueltas.length);
    ocupacion[claveFechaLocal(fechaUltimaJornada)] = 10;
    vueltas.forEach((jornada, indice) => {
        const fecha = fechaDeJornada(temporada.inicio, indice, vueltas.length);
        jornada.partidos.forEach((partido, indicePartido) => {
            let inicio;
            if (jornada.jornada === equiposCalendario.length - 2 && jornada.vuelta === 1) {
                inicio = new Date(fecha);
                const horariosFinal = [16, 16, 19, 19, 21, 21, 21, 21, 21, 21];
                inicio.setHours(horariosFinal[indicePartido], 0, 0, 0);
            } else {
                const desplazamientosDias = [0, 1, 2, 3, 6];
                const fechaDeseada = new Date(fecha);
                fechaDeseada.setDate(fecha.getDate() + desplazamientosDias[Math.floor(indicePartido / 2)]);
                inicio = reservarFechaLiga(fechaDeseada, ocupacion);
                const finDeSemana = inicio.getDay() === 0 || inicio.getDay() === 6;
                const horarios = finDeSemana ? [16, 19, 21] : [17, 20];
                inicio.setHours(horarios[indicePartido % horarios.length], 0, 0, 0);
            }
            calendario.push({
                id: `${temporada.clave}-${indice + 1}-${indicePartido}`,
                jornada: indice + 1,
                inicio: inicio.toISOString(),
                local: partido.local,
                visitante: partido.visitante
            });
        });
    });
    return { temporada, calendario };
}

function obtenerEstadoLiga() {
    const generado = generarCalendarioLiga();
    const guardado = localStorage.getItem(CLAVE_TEMPORADA);
    if (!guardado || JSON.parse(guardado).temporada.clave !== generado.temporada.clave) {
        const nuevo = { temporada: generado.temporada, calendario: generado.calendario };
        localStorage.setItem(CLAVE_TEMPORADA, JSON.stringify(nuevo));
        return nuevo;
    }
    return JSON.parse(guardado);
}

function resultadoPartido(partido, plantillas) {
    const semilla = aleatorioEstable(partido.id);
    const golesLocal = semilla % 4;
    const golesVisitante = Math.floor(semilla / 11) % 4;
    const locales = plantillas[partido.local] || [];
    const visitantes = plantillas[partido.visitante] || [];
    const eventos = [];
    const minutosUsados = new Set();
    const siguienteMinuto = candidato => {
        let minuto = candidato;
        while (minutosUsados.has(minuto)) minuto = minuto >= 87 ? 4 : minuto + 1;
        minutosUsados.add(minuto);
        return minuto;
    };
    for (let i = 0; i < golesLocal; i++) eventos.push({ minuto: siguienteMinuto(4 + ((semilla + i * 17) % 84)), equipo: partido.local, jugador: locales[(semilla + i) % Math.max(locales.length, 1)]?.nombre || "Jugador local", autogol: false });
    for (let i = 0; i < golesVisitante; i++) eventos.push({ minuto: siguienteMinuto(4 + ((semilla + i * 23) % 84)), equipo: partido.visitante, jugador: visitantes[(semilla + i) % Math.max(visitantes.length, 1)]?.nombre || "Jugador visitante", autogol: false });
    if (semilla % 97 === 0 && eventos.length) {
        eventos[0].autogol = true;
        eventos[0].jugador = "En propia puerta";
    }

    return { golesLocal, golesVisitante, eventos: eventos.sort((a, b) => a.minuto - b.minuto) };
}

function obtenerCampo(partido) {
    return ["Campo Río Turia", "Campo Académico Norte", "Campo del Campus"][aleatorioEstable(partido.id) % 3];
}

function obtenerHistorialEquipo(equipo, partidoActual, calendario) {
    return calendario
        .filter(partido => partido.inicio <= partidoActual.inicio && (partido.local === equipo || partido.visitante === equipo))
        .sort((a, b) => new Date(b.inicio) - new Date(a.inicio))
        .slice(0, 5)
        .reverse()
        .map(partido => {
            const final = new Date(partido.inicio).getTime() + 90 * 60000;
            const estado = Date.now() >= final ? estadoPartido(partido, new Date(final)) : { estado: "Próximo" };
            if (estado.estado !== "Finalizado") return { color: "gris", simbolo: "-" };
            const local = partido.local === equipo;
            const aFavor = local ? estado.resultado.golesLocal : estado.resultado.golesVisitante;
            const enContra = local ? estado.resultado.golesVisitante : estado.resultado.golesLocal;
            return aFavor > enContra ? { color: "verde", simbolo: "V" } : aFavor === enContra ? { color: "amarillo", simbolo: "E" } : { color: "rojo", simbolo: "D" };
        });
}

function obtenerEstadisticasJugador(jugador, equipo, calendario, plantillas) {
    const partidosJugados = calendario.filter(partido => {
        const pertenece = partido.local === equipo || partido.visitante === equipo;
        return pertenece && estadoPartido(partido).estado === "Finalizado";
    });
    let goles = 0;
    partidosJugados.forEach(partido => {
        const resultado = resultadoPartido(partido, plantillas);
        goles += resultado.eventos.filter(evento => evento.jugador === jugador.nombre && !evento.autogol).length;
    });
    return { partidos: partidosJugados.length, goles };
}

function renderizarHistorial(equipo, partido, calendario) {
    const historial = obtenerHistorialEquipo(equipo, partido, calendario);
    while (historial.length < 5) historial.unshift({ color: "gris", simbolo: "-" });
    return historial.map(item => `<span class="forma-circulo forma-${item.color}" title="${item.simbolo}">${item.simbolo}</span>`).join("");
}

function renderizarAlineacion(equipo, partido, plantillas) {
    const plantilla = plantillas[equipo] || [];
    if (!plantilla.length) return { titulares: [], suplentes: [] };
    const orden = aleatorioEstable(`${partido.id}-${equipo}`) % plantilla.length;
    const rotada = plantilla.slice(orden).concat(plantilla.slice(0, orden));
    const grupos = {
        porteros: jugador => jugador.posicion === "Portero",
        defensas: jugador => ["Defensa central", "Lateral derecho", "Lateral izquierdo"].includes(jugador.posicion),
        centrocampistas: jugador => ["Pivote", "Centrocampista", "Mediapunta"].includes(jugador.posicion),
        delanteros: jugador => ["Extremo derecho", "Extremo izquierdo", "Delantero"].includes(jugador.posicion)
    };
    const titulares = [];
    const usados = new Set();
    const añadirGrupo = (filtro, limite) => rotada.filter(jugador => filtro(jugador) && !usados.has(jugador.id)).slice(0, limite).forEach(jugador => {
        titulares.push(jugador);
        usados.add(jugador.id);
    });
    añadirGrupo(grupos.porteros, 1);
    añadirGrupo(grupos.defensas, 4);
    añadirGrupo(grupos.centrocampistas, 4);
    añadirGrupo(grupos.delanteros, 2);
    rotada.forEach(jugador => {
        if (titulares.length < 11 && !usados.has(jugador.id)) {
            titulares.push(jugador);
            usados.add(jugador.id);
        }
    });
    const ordenPosicional = jugador => grupos.porteros(jugador) ? 0
        : grupos.defensas(jugador) ? 1
        : grupos.centrocampistas(jugador) ? 2
        : grupos.delanteros(jugador) ? 3
        : 4;
    const ordenarPorLinea = jugadores => jugadores
        .map((jugador, indice) => ({ jugador, indice }))
        .sort((a, b) => ordenPosicional(a.jugador) - ordenPosicional(b.jugador) || a.indice - b.indice)
        .map(item => item.jugador);
    return { titulares: ordenarPorLinea(titulares), suplentes: ordenarPorLinea(rotada.filter(jugador => !usados.has(jugador.id))) };
}

function estadoPartido(partido, ahora = new Date(), plantillas = obtenerPlantillas()) {
    const inicio = new Date(partido.inicio);
    const fin = new Date(inicio.getTime() + 90 * 60000);
    const resultado = resultadoPartido(partido, plantillas);
    if (ahora < inicio) return { estado: "Próximo", resultado: null, minuto: 0 };
    const minuto = Math.min(90, Math.max(0, Math.floor((ahora - inicio) / 60000)));
    if (ahora >= fin) return { estado: "Finalizado", resultado, minuto: 90 };
    return { estado: "En directo", resultado: { ...resultado, eventos: resultado.eventos.filter(evento => evento.minuto <= minuto) }, minuto };
}

function obtenerEstacionCalendario(fecha) {
    const mes = fecha.getMonth();
    const dia = fecha.getDate();
    if ((mes === 8 && dia >= 15) || mes === 9 || (mes === 10 && dia === 1)) return "verano";
    if (mes === 10 || (mes === 11 && dia <= 20)) return "otono";
    if ((mes === 11 && dia >= 21) || mes === 0 || mes === 1 || (mes === 2 && dia <= 19)) return "invierno";
    if ((mes === 2 && dia >= 20) || mes === 3 || (mes === 4 && dia <= 22)) return "primavera";
    return "verano";
}

function nombreEstacionCalendario(estacion) {
    return { verano: "Verano", otono: "Otoño", invierno: "Invierno", primavera: "Primavera" }[estacion];
}

function renderizarCalendarioLiga() {
    const grid = document.getElementById("calendario-grid-mensual");
    if (!grid) return;
    const estadoLiga = obtenerEstadoLiga();
    const fechaVista = window.fechaCalendario || new Date();
    const mes = fechaVista.getMonth();
    const anio = fechaVista.getFullYear();
    const titulo = document.getElementById("mes-anio-titulo");
    const estacion = obtenerEstacionCalendario(fechaVista);
    const calendarioMain = document.querySelector(".calendario-main");
    if (calendarioMain) {
        calendarioMain.dataset.estacion = estacion;
        calendarioMain.style.setProperty("--nombre-estacion", `"${nombreEstacionCalendario(estacion)}"`);
    }
    titulo.dataset.estacion = nombreEstacionCalendario(estacion);
    titulo.innerText = `${new Intl.DateTimeFormat("es-ES", { month: "long" }).format(fechaVista).toUpperCase()} ${anio}`;
    grid.innerHTML = "";
    const primerDia = new Date(anio, mes, 1).getDay();
    const espacios = primerDia === 0 ? 6 : primerDia - 1;
    for (let i = 0; i < espacios; i++) grid.innerHTML += '<div class="dia-celda fuera-mes"></div>';
    const partidos = estadoLiga.calendario.filter(partido => {
        const fecha = new Date(partido.inicio);
        return fecha.getMonth() === mes && fecha.getFullYear() === anio;
    });
    const datosEquipos = obtenerDatosEquipos();
    for (let dia = 1; dia <= new Date(anio, mes + 1, 0).getDate(); dia++) {
        const delDia = partidos.filter(partido => new Date(partido.inicio).getDate() === dia);
        const contenido = delDia.map(partido => {
            const estado = estadoPartido(partido);
            const marcador = estado.resultado ? `<strong>${estado.resultado.golesLocal} - ${estado.resultado.golesVisitante}</strong>` : "";
            const colorPrimario = datosEquipos[partido.local]?.colores?.[0] || "#17226B";
            return `<div class="partido-evento ${estado.estado === "En directo" ? "partido-directo" : ""}" style="--color-partido:${colorPrimario}" title="${estado.estado}" onclick="mostrarPartido('${partido.id}')">
                <small>${new Date(partido.inicio).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })} · ${estado.estado}</small>
                <div class="partido-resumen-cal">
                    <div class="equipos-escudos-cal" aria-label="${partido.local} contra ${partido.visitante}">
                        <img src="Assets/${obtenerNombreEscudo(partido.local)}" alt="${partido.local}" title="${partido.local}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/5323/5323982.png'">
                        <span class="versus-cal">vs</span>
                        <img src="Assets/${obtenerNombreEscudo(partido.visitante)}" alt="${partido.visitante}" title="${partido.visitante}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/5323/5323982.png'">
                    </div>
                    <div class="marcador-cal">${marcador || "—"}</div>
                </div>
            </div>`;
        }).join("");
        grid.innerHTML += `<div class="dia-celda"><span class="dia-numero">${dia}</span>${contenido}</div>`;
    }
    renderizarClasificacion(estadoLiga);
    window.clearTimeout(window.calendarioTimer);
    window.calendarioTimer = window.setTimeout(renderizarCalendarioLiga, 60000);
}

function renderizarClasificacion(estadoLiga) {
    const tabla = document.getElementById("clasificacion-calendario");
    if (!tabla) return;
    const plantillas = obtenerPlantillas();
    const clasificacion = nombresEquiposBase.map(nombre => ({ nombre, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0 }));
    const porNombre = Object.fromEntries(clasificacion.map(equipo => [equipo.nombre, equipo]));
    estadoLiga.calendario.forEach(partido => {
        const estado = estadoPartido(partido, new Date(), plantillas);
        if (estado.estado !== "Finalizado") return;
        const local = porNombre[partido.local];
        const visitante = porNombre[partido.visitante];
        const { golesLocal, golesVisitante } = estado.resultado;
        local.pj++; visitante.pj++; local.gf += golesLocal; local.gc += golesVisitante; visitante.gf += golesVisitante; visitante.gc += golesLocal;
        if (golesLocal > golesVisitante) { local.g++; local.pts += 3; visitante.p++; }
        else if (golesVisitante > golesLocal) { visitante.g++; visitante.pts += 3; local.p++; }
        else { local.e++; visitante.e++; local.pts++; visitante.pts++; }
    });
    tabla.innerHTML = [...clasificacion].sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc) || b.gf - a.gf).map((equipo, indice) => {
        const clase = indice === 0 ? "lider" : indice < 4 ? "playoff" : indice >= 17 ? "descenso" : "";
        return `<tr class="${clase}" title="${indice === 0 ? "Campeón de liga" : indice < 4 ? "Clasificado al play off nacional" : indice >= 17 ? "Zona de descenso simbólico" : ""}"><td>${indice + 1}</td><td>${equipo.nombre}</td><td>${equipo.pj}</td><td>${equipo.g}</td><td>${equipo.e}</td><td>${equipo.p}</td><td>${equipo.gf}</td><td>${equipo.gc}</td><td><strong>${equipo.pts}</strong></td></tr>`;
    }).join("");
}

function mostrarPartido(id) {
    const liga = obtenerEstadoLiga();
    const partido = liga.calendario.find(item => item.id === id);
    if (!partido) return;
    const estado = estadoPartido(partido);
    const plantillas = obtenerPlantillas();
    const alineacionLocal = renderizarAlineacion(partido.local, partido, plantillas);
    const alineacionVisitante = renderizarAlineacion(partido.visitante, partido, plantillas);
    const datosEquipos = obtenerDatosEquipos();
    const listaJugadores = jugadores => jugadores.map(jugador => `<li><img src="${jugador.imagen || ICONO_JUGADOR}" class="foto-jugador-mini"><span>${jugador.nombre}</span><small>${jugador.posicion}</small></li>`).join("");
    const panel = document.getElementById("detalle-partido");
    if (!panel) return;
    panel.classList.remove("hidden");
    panel.innerHTML = `<div class="detalle-cabecera" style="--color-local-1:${datosEquipos[partido.local].colores[0]};--color-local-2:${datosEquipos[partido.local].colores[1]};--color-visitante-1:${datosEquipos[partido.visitante].colores[0]};--color-visitante-2:${datosEquipos[partido.visitante].colores[1]}">
            <div class="detalle-equipo"><img src="Assets/${obtenerNombreEscudo(partido.local)}" class="escudo-detalle"><strong>${partido.local}</strong><div class="forma-historial">${renderizarHistorial(partido.local, partido, liga.calendario)}</div></div>
            <div class="detalle-marcador"><h3>${estado.resultado ? `${estado.resultado.golesLocal} - ${estado.resultado.golesVisitante}` : "vs"}</h3><p class="estado-directo">${estado.estado}${estado.estado === "En directo" ? ` · minuto ${estado.minuto}` : ""}</p></div>
            <div class="detalle-equipo"><img src="Assets/${obtenerNombreEscudo(partido.visitante)}" class="escudo-detalle"><strong>${partido.visitante}</strong><div class="forma-historial">${renderizarHistorial(partido.visitante, partido, liga.calendario)}</div></div>
        </div>
        <div class="detalle-meta"><strong>Jornada:</strong> ${partido.jornada} · <strong>Fecha:</strong> ${new Date(partido.inicio).toLocaleDateString("es-ES")} · <strong>Hora:</strong> ${new Date(partido.inicio).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })} · <strong>Campo:</strong> ${obtenerCampo(partido)}</div>
        <div class="eventos-detalle">
            <div class="eventos-columna eventos-local" style="--color-equipo:${datosEquipos[partido.local].colores[0]}">${(estado.resultado?.eventos || []).filter(evento => evento.equipo === partido.local).map(evento => `<p>${evento.minuto}' ⚽ <strong>${evento.jugador}</strong>${evento.autogol ? " (pp)" : ""}</p>`).join("") || "Sin goles"}</div>
            <div class="eventos-columna eventos-visitante" style="--color-equipo:${datosEquipos[partido.visitante].colores[0]}">${(estado.resultado?.eventos || []).filter(evento => evento.equipo === partido.visitante).map(evento => `<p><strong>${evento.jugador}</strong> ⚽ ${evento.minuto}'${evento.autogol ? " (pp)" : ""}</p>`).join("") || "Sin goles"}</div>
        </div>
        <div class="alineaciones-grid">
            <div><h4>${partido.local} · Once inicial</h4><ul class="lista-alineacion">${listaJugadores(alineacionLocal.titulares)}</ul><h4>Suplentes</h4><ul class="lista-alineacion">${listaJugadores(alineacionLocal.suplentes)}</ul></div>
            <div><h4>${partido.visitante} · Once inicial</h4><ul class="lista-alineacion">${listaJugadores(alineacionVisitante.titulares)}</ul><h4>Suplentes</h4><ul class="lista-alineacion">${listaJugadores(alineacionVisitante.suplentes)}</ul></div>
        </div>`;
}

function mostrarJugador(nombre, equipo) {
    const jugador = obtenerPlantillas()[equipo]?.find(item => item.nombre === nombre);
    const panel = document.getElementById("detalle-jugador");
    if (!jugador || !panel) return;
    const estadisticas = obtenerEstadisticasJugador(jugador, equipo, obtenerEstadoLiga().calendario, obtenerPlantillas());
    panel.classList.remove("hidden");
    panel.innerHTML = `<div class="jugador-detalle-cabecera"><img src="${jugador.imagen || ICONO_JUGADOR}" class="foto-jugador-detalle"><div><h3><img src="${rutaBanderaJugador(jugador.nacionalidad)}" class="bandera-jugador bandera-detalle" alt="${jugador.nacionalidad}">${jugador.nombre}</h3><p>${equipo} · ${jugador.posicion}</p><p>${jugador.nacionalidad} · ${jugador.edad} años</p></div></div><div class="jugador-estadisticas"><strong>${estadisticas.partidos}</strong><span>Partidos</span><strong>${estadisticas.goles}</strong><span>Goles</span></div>`;
    panel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cambiarMes(delta) {
    window.fechaCalendario = new Date(window.fechaCalendario || new Date());
    window.fechaCalendario.setMonth(window.fechaCalendario.getMonth() + delta);
    renderizarCalendarioLiga();
}