# Landing Page (Sailor Moon) 
Este proyecto es una Landing Page dedicada a Sailor Moon, creada como parte de la evaluación de habilidades en CSS y HTML. La página contiene información sobre Sailor Moon, incluyendo su historia, personajes principales y otros detalles relevantes del universo de Sailor Moon.
## Información general 
### Semántica (HTML) 
- **home.html:** la pagina esta dividida principalmente en dos secciones:
  - **header**: se encuentra el logo de la página y el menú de navegación.
  - **main**: se encuentra el contenido principal de la página, se divide en dos partes, en la sección de la izquierda se encuentra el título y una breve descripción de la página, y en la sección derecha una imagen de las Sailor Scouts.
- **historia.html:** esta página muestra una línea de tiempo acerca de la historia de Sailor Moon. Se dividio en dos secciones, y en cada sección hay tres div que indican cada uno una parte de la línea de tiempo. 
- **personajes.html**: en esta página se muestran a los principales personajes, en cada imagen se puede acceder a un enlace que lleva a la página en Wiki del mismo, donde se puede conseguir información más detallada. Cada personaje se guardo dentro de una etiqueta article.
- **creadora.html**: está página tiene información acerca de la escritora del manga. Esta dividida en dos secciones, en la seccion superior tiene una imagen de la creadora junto con su nombre. Y en la sección inferior se encuentra una pequeña biografía, y sobre el estilo y la obra de la autora, cada uno dentro de una etiqueta article.
- **galería.html**: en esta página se encuentra algunas fotos y videos de la serie animada. Cada imagen (o video) se encuentra dentro de un div todos de clase imagen. 
### Apariencia (CSS) 
- **fondo.css:** define la apariencia del fondo de todas las páginas web con una fuente personalizada "Sensei" y la importación de la familia de fuentes "Libre Franklin" desde Google Fonts. Establece un fondo de cuerpo con una imagen ajustada para cubrir la pantalla y utiliza flexbox para centrar el contenido vertical y horizontalmente. El contenedor principal tiene un fondo semitransparente y esquinas redondeadas, adaptándose a diferentes tamaños de pantalla.Además, incluye una media query para dispositivos móviles que oculta el cuerpo y muestra una imagen de error como fondo cuando la pantalla es igual o menor a 480px de ancho.

  (Pantalla error)
  ![error](/recursos/no-disponible.png)
  
- **home.css**: la clase .header establece un encabezado con un diseño flexbox que alinea los elementos a la derecha, incluyendo un logo que rota al pasar el cursor sobre él. El menú de navegación (nav) presenta enlaces con estilos interactivos, como cambios de tamaño al pasar el cursor y transiciones de color y fondo. El contenido principal (main) y sus contenedores (container-izquierdo y container-derecho) utilizan flexbox para centrar y distribuir elementos de manera uniforme. Los estilos de texto (titulo y descripcion) y botones (boton) están diseñados con transiciones suaves y efectos de sombra al interactuar. Además, la sección de redes sociales (redes) se posiciona fija en el lado derecho de la pantalla, con íconos que aumentan de tamaño al pasar el cursor. Se incluyen también media queries para ajustar el diseño en dispositivos con pantallas más pequeñas.

  (Diseño original)
  
   ![home](/imagenes-readme/home-can.png)
  
  (Página web)
  
  ![home](/imagenes-readme/home-pag.png)
  
- **personajes.css:** el encabezado (h1) tiene una fuente "Libre Franklin", un tamaño de fuente adaptable, y efectos de sombra que se intensifican al pasar el cursor. El contenedor secundario utiliza un diseño de cuadrícula (grid) para organizar elementos en filas y columnas. Las tarjetas tienen un diseño centrado, con esquinas redondeadas y sombras, y su imagen se agranda al pasar el cursor. La superposición en las tarjetas se expande para mostrar más contenido al pasar el cursor, incluyendo un título con la fuente "Petit" y un enlace estilizado. Un botón de inicio (#home) se posiciona en la esquina superior derecha y aumenta de tamaño al interactuar. La hoja de estilos también incluye ajustes para pantallas más pequeñas, reduciendo el tamaño de las tarjetas y el botón de inicio para mejorar la adaptabilidad y la experiencia del usuario.

  (Diseño original)
  
  ![personajes](/imagenes-readme/personajes-can.png)
  
  (Página web)
  
  ![personajes](/imagenes-readme/personajes-pag.png)
  
- **creadora.css:** los contenedores principales se estructuraron usando flexbox y grid, y las tarjetas tienen una animación de volteo en el hover, mostrando diferentes caras con contenido distinto. Además, hay estilos específicos para una imagen con transición de escala, y ajustes para dispositivos móviles mediante media queries, asegurando una presentación adecuada en diferentes tamaños de pantalla.
   
  (Diseño original)
  
  ![creadora](/imagenes-readme/creadora-can.png)
  
  (Página web)
  
  ![creadora](/imagenes-readme/creadora-pag.png)
  
- **galeria.css:** la clase .container-secundario organiza un diseño de cuadrícula para imágenes y videos, con transiciones de escala en hover y configuraciones específicas para ciertos elementos de la cuadrícula. Un icono con el identificador #home en la esquina superior derecha también se escala al pasar el cursor sobre él. Se incluyen reglas de medios para ajustar el tamaño y la posición del icono en pantallas más pequeñas.
   
  (Diseño original)
  
  ![galeria](/imagenes-readme/galeria-can.png)
  
  (Página web)
  
  ![galeria](/imagenes-readme/galeria-pag.png)
  
## Tecnologías 
- **HTML5:** utilizado para estructurar y organizar el contenido de la página web, asegurando que sea semánticamente correcta y accesible. 
- **CSS3:** utilizado para dar estilo y diseño a la página web. Con CSS3, se aplicaron estilos avanzados como transiciones, animaciones, y efectos de transformación. También se implementaron reglas de medios para asegurar que el diseño sea responsive y se adapte a diferentes tamaños de pantalla y dispositivos, proporcionando una experiencia de usuario consistente y atractiva.
