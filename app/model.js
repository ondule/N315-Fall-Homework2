//model handles service calls


  var homeContent= `<section class="homeContenido">
 <img src="assets/jugando-loteria.jpg" alt="">
 <h2>¿Qué es La Lotería Mexicana?</h2>
 <section class="homeDescription">
     <p>Lotería is the Spanish word for lottery, a traditional game of chance, similar to bingo. One by one, the caller picks a card from the deck and announces it to the players by its name, sometimes using a verse before reading the card name. Each player locates the matching pictogram of the card just announced on their board and marks it off with a chip or other kind of marker. In Mexico, it is traditional to use small rocks, crown corks or pinto beans as markers. The winner is the first player that shouts “¡Buena!” right after completing a tabla or a previous agreed pattern.</p>
     <p>The origin of lotería can be traced far back in history. The game originated in Italy in the 15th century and was brought to New Spain (modern Mexico) in 1769. The current images have become iconic in Mexican culture, as well as gaining popularity in the US and some European countries.</p>
 </section>
</section> `;  

var cartasContent = `<section class="cards">
<div class="cardHolder"><img src="assets/elGallo.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/elDiablito.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/laDama.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/elCatrin.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/elParaguas.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/laSirena.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/laEscalera.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/laBotella.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/elBarril.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/elArbol.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/elMelon.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/elValiente.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/elGorrito.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/14laMuerte.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/laPera.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/laBandera.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/elBandolon.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/elVioloncello.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/19garza.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/21laMano.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/22labota.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/23laLuna.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/24elCotorro.jpg" alt=""></div>
<div class="cardHolder"><img src="assets/25elBorracho.jpg" alt=""></div> 


</section> `; 

var historiaContent = ` <section class="history">
<img src="" alt="">
<h2>¿Cuál es la historia de La Lotería Mexicana?</h2>
<div class="historyDescription">
    <p>La lotería tradicional tiene sus raíces en la Italia del siglo XV, de donde se trasladó a España. Los españoles trajeron el juego a México en el Siglo XVIII, alrededor de 1769.

        Inicialmente jugada por la élite, la popularidad de La Lotería Mexicana aumentó en los siglos XIX y XX gracias a las ferias itinerantes. Estas ferias reunían a agricultores y familias, y algunos juegos de La Lotería se hicieron populares en los eventos. Los cantores recitaban su descripción o adivinanza respecto a la carta extraída de la baraja. Una vez que la multitud había identificado la carta, el juego continuaba.
        
        Las primeras tablas estaban hechas de cartón u hojalata, sobre las que estaban pintados los personajes. Estos temas artísticos de influencia renacentista italiana como el sol, la luna y las estrellas se conocen hoy como el conjunto campechano. La iconografía fue cambiando a lo largo de los años de acuerdo con las modas y los contextos sociales hasta finales del siglo XIX.
        
        La litografía y la imprenta revolucionaron las posibilidades de distribución del juego. Clemente Jacques, un inmigrante francés que vivía en México, jugó un papel decisivo en el surgimiento de La Lotería Mexicana.</p>
        <p></p>
</div>

</section>`; 

var reglasContent = `<section class="rules">
<img src="assets/jugando-loteria2.jpg" alt="">
<h2>¿Cómo se juega a la Lotería Mexicana?</h2>
<div class="rulesDescription">
    <p>
        La Lotería Mexicana no debe confundirse con La Lotería. Cuando la gente habla de La Lotería Mexicana, se refiere a un juego similar al bingo que se juega en países como Estados Unidos y el Reino Unido.
        
        Artículos requeridos:
        
        Jugadores
        Un paquete especial de 54 cartas de lotería
        Un tablero de juego para cada jugador, llamado tabla.
        Un cantor que lea las cartas seleccionadas
        De forma similar al bingo, los jugadores reciben un tablero de juego, en una cuadrícula de 4×4, con un total de 16 cuadrados. Los cartones de bingo están llenos de números, pero los tableros de La Lotería Mexicana, llamados tablas, presentan imágenes vibrantes de animales, objetos y personajes.
        
        Una vez que cada jugador tiene sus tablas, el juego puede comenzar. En lugar de la coincidencia de números como en el bingo, los jugadores de La Lotería esperan que salgan imágenes que coincidan en sus tablas. Un cantor, que literalmente significa “cantante”, pero en realidad es más un gritón, tiene una baraja de 54 cartas. Cada carta tiene un dibujo diferente que corresponde a las imágenes de las tablas. Las cartas y tablas modernas a menudo presentan el nombre de la imagen representada y también un número.
        
        El cantor baraja y luego elige una carta al azar, tal como se sacan los números de una tómbola en el bingo. La diferencia con La Lotería Mexicana es que al cantor a menudo se le ocurre una forma original, incluso poética, de describir la carta que ha sacado.
        
        Los jugadores hacen coincidir la descripción con su tabla, colocando una piedra o un frijol en las imágenes mencionadas. Hay un ganador una vez que alguien completa el objetivo acordado, como una fila, una columna, una diagonal, las cuatro esquinas o un pozo, un grupo de imágenes en un cuadrado. El jugador que completa su tabla tiene que gritar “¡lotería!”
        
        El cantor varía su lenguaje para describir las cartas dependiendo de dónde se juegue el juego. Usará un lenguaje más poético y ligero en un entorno familiar y quizás una versión más atrevida en un entorno de adultos. La verdadera diversión del juego radica en la habilidad del cantor.</p>
        
</div>

</section>`;

export function setCurrentPageContent(pageID) {
    let contentName = pageID + "Content";
    $("#app").html(eval(contentName));
}





