# Cumple Mauro · Dale U

Página web de cumpleaños estática y móvil-first, con temática de Universitario (crema y guinda).

## Tecnologías
- HTML5, CSS3 y JavaScript puro
- Sin XAMPP, sin base de datos, sin frameworks

## Abrir
Abre `index.html` directamente en el navegador.

## Modo prueba
Agrega `?test=1` al final para simular que ya llegó el cumpleaños:
`index.html?test=1`

## Servidor local recomendado (PowerShell, dentro de esta carpeta)

```powershell
python -m http.server 8080
```

Luego abre `http://localhost:8080/?test=1`

## Personalización
Casi todo se edita en `js/contenido.js`:
- nombre, edad y fecha del cumpleaños (16-10-2026)
- fecha desde que son amigos (`fechaInicio`, el mes empieza en 0)
- etapas de su vida, familia y recuerdos juntos
- tarjetas y foto de la sección "La U"
- carta, firma y sorpresa final

## Fotos y audio
- `fotos/ninez/`, `fotos/familia/`, `fotos/nosotros/`, `fotos/la-u/`
- `audio/cancion.mp3` (música de fondo; ponla con ese nombre)

Luego escribe las rutas en `contenido.js`, por ejemplo `foto: "fotos/ninez/bebe.jpg"`.

## Publicación
Listo para hosting estático como Cloudflare Pages.
