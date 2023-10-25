self.addEventListener('install', event => {

    const recursos = caches.open('cacheRecursos').then(cache =>{
        cache.add('/');
        cache.add('../index.html');
        cache.add('app.js');
        cache.add('app3.js');
        cache.add('registroSW.js');
        cache.add('../manifest.json')
    });

    //crea las bovedas 
    const imagenes = caches.open('cacheImagenes').then(cache =>{
        cache.add('/')
        cache.add('../assets/img/apus.webp');
        cache.add('../assets/img/bard.gif');
        cache.add('../assets/img/bard.png');
        cache.add('../assets/img/bard1.jpg');
        cache.add('../assets/img/barney.png');
        cache.add('../assets/img/casa.webp');
        cache.add('../assets/img/flanders.gif');
        cache.add('../assets/img/fondo1.jpg');
        cache.add('../assets/img/fondo2.jpg');
        cache.add('../assets/img/fondo3.jpg');
        cache.add('../assets/img/fondo4.jpg');
        cache.add('../assets/img/fondo5.jpg');
        cache.add('../assets/img/homero.gif');
        cache.add('../assets/img/homeroCorre.gif');
        cache.add('../assets/img/liza.gif');
        cache.add('../assets/img/logo.webp');
        cache.add('../assets/img/magi.png');
        cache.add('../assets/img/marge.png');
        cache.add('../assets/img/moe.gif');
        cache.add('../assets/img/MontgomeryBurns.gif');
        cache.add('../assets/img/moe.gif');
        cache.add('../assets/img/nuves.jpg');
        cache.add('../assets/img/per.webp');
        cache.add('../assets/img/skiner.webp');
        cache.add('../assets/img/per.webp');
      });
    //crea las bovedas2
    const css = caches.open('cacheCSS').then(cache =>{
        cache.add('/')
        cache.add('../styles/styles.css');
        cache.add('../styles/styles2.css');
        cache.add('../styles/styles3.css');
    });

    event.waitUntil(recursos); 

})

//esta es la estrategia 1 que hace lo de la cache
// self.addEventListener('fetch', event => {
//     event.respondWith(caches.match(event.request))
// })

//estrategia 0 only net 
// estrategi 1 only cache depende del cache 
// estrategi 2 first cache then network  la segundo mas rapida es un poco infunsional esta desfasada 
// estrategia 3 first network then cache le damos prioridad a internet y luego al cache es mas lenta que la 2

//sin internet lo vuela pero cuando retorna el internet recupere todos los archivos

// APARTIR DE AQUI LA 3
const CACHE_NAME ="BOVEDA 3-Almacén de todos los recursos";
self.addEventListener('fetch', event => {
    const respuesta = fetch (event.request).then((newResp) =>{
        caches.open(CACHE_NAME).then((cache)=>{
            cache.put(event.request, newResp);
        });

        return newResp.clone();

    }).catch(err=>{
        return caches.match(event.request);
    })
    event.respondWith(respuesta);

});



// 1 sin inter borra estilos 
// regreso a inter 
// regresa el interal final regreso a cache y veo que lo tenga guardado
// .ico 
//descargar iconos de cine diversos tamaños 24*24 48*48 128*128 256*256