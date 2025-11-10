
// Declarar 'root' e 'icon' fuera de la función de inicialización
// para que el event listener (la función del click) pueda acceder a ellas.

const root = document.documentElement; // ¡Ahora 'root' es accesible!
const modeToggle = document.getElementById('modeToggle');
const icon = modeToggle.querySelector('.icon');  

// Envuelve el código dentro de una función de inicialización si es necesario, 
// o simplemente ejecuta el código secuencialmente.
(function initDarkToggle(){
    
    const saved = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 1. Aplicar el tema inicial (guardado o del sistema)
    if(saved === 'dark' || (!saved && systemDark)){
      root.classList.add('dark-mode');
      icon.textContent = '☀️';
    }
    
    // 2. Definir el event listener para el click
    modeToggle.addEventListener('click', () => {
      // ✅ 'root' es accesible aquí ahora.
      root.classList.toggle('dark-mode'); 
      
      const active = root.classList.contains('dark-mode');
      localStorage.setItem('theme', active ? 'dark' : 'light');
      
      // Animar icono
      icon.style.opacity = '0';
      setTimeout(()=>{ 
          icon.textContent = active ? '☀️' : '🌙'; 
          icon.style.opacity = '1'; 
      }, 160);
    });
    
})(); // Asegúrate de que tu función IIFE esté correctamente cerrada si la usas

//generar fecha actual
// Obtener la fecha y hora actual
        const fecha = new Date();

        // Obtener el elemento span por su ID
        const contenedorFecha = document.getElementById('fechaActual');
        const contenedorFechah = document.getElementById('fechaActualh');
        // Formatear la fecha para mostrarla según la configuración local del usuario
        // 'es-ES' especifica el formato para España, puedes cambiarlo si necesitas otro.
        // Las opciones { dateStyle: 'full' } dan un formato completo (ej: lunes, 10 de noviembre de 2025)
        const fechaFormateada = fecha.toLocaleDateString('es-ES', { dateStyle: 'full' });

        // Insertar la fecha formateada en el elemento HTML
        contenedorFecha.textContent = fechaFormateada;
        contenedorFechah.textContent = fechaFormateada;