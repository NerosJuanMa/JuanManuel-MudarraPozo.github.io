const events = [
{date:"JUN. 2024 - AGO. 2024", text:"Diseñador gráfico de preprensa en LUMAPRINT · Contrato de prácticas 80h. Preprensa y formación práctica. Duración: 3 meses."},
{date:"JUN. 2023 - JUL. 2023", text:"Desarrollo de diseño web en LAYBET · Contrato prácticas 80h. Manejo de WordPress. Duración: 2 meses."},
{date:"DIC. 2021", text:"Auxiliar administrativo contable en AVICARS · Contrato de formación 80h. Registros contables. Duración: 1 mes."},
{date:"JUL. 2015 - AGO. 2018", text:"Técnico de laboratorio y Administrativo en MAC PUAR SA. Diseño de sistemas de control eléctrico. Duración: 3,1 años."},
{date:"MAY. 2008 - SEP. 2010", text:"Gestor telefónico en SITEL IBERICA. Soporte técnico a YA.COM. Duración: 2,5 años."},
{date:"MAY. 2007 - NOV. 2007", text:"Encargado de bar en Abacería de Baños. Gestión de stock, cocina y 3 personas. Duración: 7 meses."},
{date:"OCT. 2006 - MAR. 2007", text:"Dependiente encargado en FOTOSHERRY. Control total de tienda. Duración: 6 meses."},
{date:"AGO. 2006 - SEP. 2006", text:"Camarero en El Barrilito. Duración: 2 meses."},
{date:"FEB. 2006 - ABR. 2006", text:"Instalador de ONO · Cableado exterior e interior. Duración: 3 meses."},
{date:"JUN. 2005 - SEP. 2005", text:"Encargado de barra en Pizzería O NONNA MÍA. Duración: 4 meses."},
{date:"JUL. 2004 - AGO. 2004", text:"Auxiliar de cafetería en O NONNA MÍA. Duración: 2 meses."},
{date:"ENE. 2003 - SEP. 2003", text:"Responsable de montaje de equipo informático en Cala Componentes S.A. Duración: 9 meses."},
{date:"JUL. 2001 - DIC. 2002", text:"Técnico en equipo informático en Instituto Informático Hispalense. Duración: 1,5 años."},
{date:"DIC. 2000 - MAR. 2001", text:"Dependiente en GONZÁLEZ GALLURT S.A. Duración: 5 meses."},
{date:"JUN. 2000 - JUL. 2000", text:"Grabador de datos Sevilla 99. Duración: 2 meses."},
{date:"FEB. 2000 - MAR. 2000", text:"Promotor para Difusora Andaluza de Cultura. Duración: 2 meses."},
{date:"SEP. 1995 - OCT. 1995", text:"Mozo de almacén en LAGODIS S.L. Duración: 2 meses."}
];


const timeline = document.getElementById("timeline");


events.forEach(ev => {
const wrapper = document.createElement("div");
wrapper.className = "event";


const dot = document.createElement("div");
dot.className = "dot";


const label = document.createElement("div");
label.className = "label";
label.textContent = ev.date;


const info = document.createElement("div");
info.className = "info-box";
info.textContent = ev.text;


dot.addEventListener("mouseover", () => info.style.display = "block");
dot.addEventListener("mouseout", () => info.style.display = "none");


wrapper.appendChild(dot);
wrapper.appendChild(label);
wrapper.appendChild(info);
timeline.appendChild(wrapper);
});