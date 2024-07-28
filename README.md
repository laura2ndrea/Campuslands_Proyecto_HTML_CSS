# Sailor Moon (landing page) :star:
Este proyecto es una landing page dedicada a Sailor Moon, creada como parte de la evaluación de habilidades en CSS y HTML. La página contiene información sobre Sailor Moon, incluyendo su historia, personajes principales y otros detalles relevantes del universo de Sailor Moon.

## Contenido 
1. [Información general](#info-general)
2. [Tecnologías](#tecno)
3. [Instalación y ejecución](#install)
4. [Autores](#autores)

---
<a name="info-general"></a>
## Información general :speech_balloon:

- **Estado**: completado :white_check_mark:
  
### Semántica (HTML) 

- **home.html:** este documento representa una página de inicio dedicada a Sailor Moon. En el **head**, se especifican los metadatos, incluyendo el juego de caracteres, la configuración de visualización y los enlaces a los recursos como el icono y la hoja de estilos CSS. En el **body**, la estructura principal incluye un contenedor que abarca un encabezado **header** con el logo y la navegación, un **main** dividido en dos secciones: la izquierda con el título y la descripción, y la derecha con una imagen. Además, hay una sección de redes sociales con enlaces a Facebook, Instagram y YouTube.
  
- **historia.html:** este documento se centra en la historia de Sailor Moon. En el **head**, se definen los metadatos, incluyendo el juego de caracteres, la configuración de visualización, el icono de la página y la hoja de estilos CSS. El **body** contiene un contenedor principal con un encabezado **header** que incluye el título "HISTORIA" y un enlace a la página de inicio. El contenido principal está dividido en dos secciones: la izquierda y la derecha, cada una con varios contenedores que presentan imágenes y textos que describen eventos significativos en la historia de Sailor Moon desde su creación en 1991 hasta el estreno de "Sailor Moon Eternal" en 2021.
  
- **personajes.html**: este documento está diseñado para mostrar información sobre los personajes de Sailor Moon. En el **head**, se especifican los metadatos, incluyendo el juego de caracteres, la configuración de visualización, el icono de la página y la hoja de estilos CSS. En el **body**, se encuentra un contenedor principal que incluye un encabezado **header** con el título "PERSONAJES" y un enlace a la página de inicio. El contenido principal consiste en un contenedor de tarjetas, cada una representando a un personaje diferente con una imagen, un título y un enlace que dirige a más información sobre el personaje en el sitio fandom de Sailor Moon.
  
- **creadora.html**: este documento presenta información sobre Naoko Takeuchi, la creadora de Sailor Moon. En el **head**, se incluyen los metadatos esenciales como el juego de caracteres, la configuración de visualización, el icono de la página y la hoja de estilos CSS. En el **body**, hay un contenedor principal que alberga un encabezado **header** con el título "CREADORA" y un enlace a la página de inicio. El contenido está dividido en dos secciones: la izquierda muestra una imagen de Naoko Takeuchi y su nombre, mientras que la derecha contiene tres tarjetas que detallan su biografía, estilo y obra, con imágenes y descripciones en el frente y el reverso de cada tarjeta.
  
- **galería.html**: este documento muestra una galería de Sailor Moon. En el **head**, se definen los metadatos como el juego de caracteres, la configuración de visualización, el icono de la página y la hoja de estilos CSS. En el **body**, hay un contenedor principal que incluye un encabezado **header** con el título "GALERÍA" y un enlace a la página de inicio. La sección de la galería contiene varios elementos que muestran imágenes y un video relacionado con Sailor Moon, cada uno con su respectivo recurso gráfico.
  
### Apariencia (CSS) 
  
- **home.css**: esta hoja de estilos define una apariencia detallada y estructurada para el documento home.html. Importa fuentes de Google y define una fuente personalizada llamada "Sensei". Establece un fondo fijo con una imagen y un contenedor principal con un color de fondo semitransparente y bordes redondeados. El encabezado muestra el título y un enlace a la página de inicio, mientras que la barra de navegación tiene efectos de transformación y cambio de color al pasar el cursor. El main está dividido en secciones izquierda y derecha con contenido centrado. Los títulos y descripciones tienen estilos específicos, incluyendo sombras de texto y animaciones. Las imágenes tienen efectos de animación para aparecer y flotar. También hay un menú de redes sociales con iconos que aumentan de tamaño al pasar el cursor. Se incluyen estilos responsivos para tabletas y teléfonos, donde en teléfonos se muestra una imagen de "no disponible" en lugar de la página.
  
  - **Diseño original:** <br><br>
  
  <img src="/imagenes-readme/home-can.png" width="80%" alt="home">

  - **Página web:** <br><br>
  
  <img src="/imagenes-readme/home-pag.png" width="80%" alt="home">

- **historia.css:** esta hoja de estilos define la apariencia y estructura para el documento historia.html, utiliza las fuentes "Libre Franklin" y "Sensei". El cuerpo de la página tiene un fondo de imagen fija y cubre toda la altura de la ventana. El contenedor principal está organizado en una cuadrícula con un encabezado y dos secciones principales. El encabezado contiene un título estilizado con efectos de sombra y un enlace con imagen que se amplía al pasar el cursor. Las secciones izquierda y derecha están centradas verticalmente y contienen contenedores con textos e imágenes que cambian de tamaño al interactuar. Una animación muestra una línea de tiempo entre las secciones. La hoja también incluye estilos responsivos para tabletas, ajustando tamaños y posiciones, y una pantalla de "no disponible" para dispositivos móviles.
  
  - **Diseño original:** <br><br>
  
  <img src="/imagenes-readme/historia-can.png" width="80%" alt="historia">

  - **Página web:** <br><br>
  
  <img src="/imagenes-readme/historia-pag.png" width="80%" alt="historia">
  
- **personajes.css:** esta hoja de estilos utiliza las fuentes "Libre Franklin", "Sensei" y "Petit", y define un diseño responsivo con un contenedor principal centrado que tiene un fondo con imagen fija. El encabezado incluye un título con efectos de sombra y un enlace a la página principal. Las tarjetas dentro del contenedor principal están dispuestas en una cuadrícula, con imágenes que aumentan de tamaño al pasar el cursor y un overlay que aparece con un título y un enlace. Además, se aplican estilos específicos para tabletas, ajustando el ancho de las tarjetas, y para teléfonos, ocultando el cuerpo de la página y mostrando una imagen de "no disponible".

  - **Diseño original:** <br><br>

  <img src="/imagenes-readme/personajes-can.png" width="80%" alt="personajes">

  - **Página web:** <br><br>
  
  <img src="/imagenes-readme/personajes-pag.png" width="80%" alt="personajes">

- **creadora.css:** esta hoja de estilos define una estructura de diseño responsivo con un contenedor principal centrado, un encabezado con efectos de sombra en el título, y dos secciones: una izquierda que contiene una imagen redonda con un título estilizado y una derecha con una cuadrícula de tarjetas interactivas que giran para mostrar contenido en su parte trasera. Utiliza las fuentes "Libre Franklin", "Sensei" y "Petit", y establece un fondo fijo para la página. Además, incluye estilos específicos para tabletas, ajustando la disposición de las secciones, y para teléfonos, ocultando el contenido y mostrando una imagen de "no disponible".
   
  - **Diseño original:** <br><br>

  <img src="/imagenes-readme/creadora-can.png" width="80%" alt="creadora">

  - **Página web:** <br><br>
  
  <img src="/imagenes-readme/creadora-pag.png" width="80%" alt="creadora">

- **galeria.css:** esta hoja de estilos define un diseño responsivo con un contenedor principal centrado que incluye un encabezado con título animado y una galería de imágenes organizadas en una cuadrícula. Utiliza la fuente "Libre Franklin" para el encabezado y establece un fondo fijo para la página. La galería está estructurada en cuatro columnas y dos filas, con imágenes que ocupan diferentes espacios dentro de la cuadrícula para crear un diseño visualmente dinámico. Además, se proporciona un estilo específico para dispositivos móviles que oculta el contenido y muestra una imagen alternativa cuando la pantalla tiene un ancho máximo de 576px.
   
  - **Diseño original:** <br><br>
  
  <img src="/imagenes-readme/galeria-can.png" width="80%" alt="galeria">

  - **Página web:** <br><br>
  
  <img src="/imagenes-readme/galeria-pag.png" width="80%" alt="galeria">
  
- **pantalla no-disponible:** <br><br>
  
<img src="/recursos/no-disponible.png" width="30%" alt="error">
  
---
<a name="tecno"></a>
## Tecnologías :computer:

- **HTML5:** utilizado para estructurar y organizar el contenido de la página web, asegurando que sea semánticamente correcta y accesible.
- **CSS3:** utilizado para dar estilo y diseño a la página web. Con CSS3, se aplicaron estilos avanzados como transiciones, animaciones, y efectos de transformación. También se implementaron reglas de medios para asegurar que el diseño sea responsive y se adapte a diferentes tamaños de pantalla y dispositivos, proporcionando una experiencia de usuario consistente y atractiva.

---
<a name="install"></a>
## Instalación y ejecución :wrench:

### Requisitos 
- Git. 
- Navegador. 

### Paso a paso 
1. Entra a la carpeta donde deseas clonar el repositorio.
2. Abre el terminal y copia el siguiente código: <br><br>
   ```
   git clone https://github.com/laura2ndrea/Campuslands_Proyecto_HTML_CSS.git
   ```
3. Entra a la carpeta donde has clonado el repositorio.
4. Abre el archivo **home.html** con el navegador de tu preferencia.
---

## Autores :woman:
<a name="autores"></a>

- **Laura Rodríguez**:
   - *Aportes: diseño de la página, construcción del código, documentación.*
   - *Contacto: laura2ndrea12@gmail.com*

---

Hecho con 🫀 por [LauraRodriguez](https://github.com/laura2ndrea)

