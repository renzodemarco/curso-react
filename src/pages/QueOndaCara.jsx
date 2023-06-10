import clothes from '../assets/clothing.webp'

const QueOndaCara = () => {
  return (
    <>
      <h1>¿Qué onda CARA®?</h1>
      <div className='queOndaContainer'>
        <div className='queOnda'>
          <p>
            👋 Buenas 👋 soy <b>Angelina</b>, la persona detrás de <b>CARA® | moda circular</b>. La idea principal de esta marca es <b>transmitir la misma emoción que siento cada vez que voy a una feria</b> en la que no sé con qué me voy a encontrar.
          </p>
          <p>
            Las prendas que elegimos envían un mensaje y, por lo tanto, <b>la ropa constituye un medio de expresión</b>. Qué usamos está influenciado por nuestros sentimientos. Cómo nos sentimos, qué nos gusta, lo que nos hace sentir cómodxs y qué queremos transmitir tiene un efecto sobre qué elegimos ponernos y cómo lo llevamos. El proceso de elección de prendas no es igual si pensamos estar todo el día en nuestras casas que si vamos a salir, y ni hablar de la carga personal de cada unx. Nuestra historia, la información que recibimos, nuestro lugar y época son aspectos que también influyen sobre nuestra forma de vestir. 
          </p>
          <p>
            A partir de un proceso de búsqueda personal <b>logré encontrar en la moda circular muchísimas opciones que hoy me permiten vestir dándole valor solo a mi opinión y pecepción, y haciendo que la elección diaria sea un acto propio y divertido</b>. Pocas cosas son tan gratificantes como el empoderamiento que me genera estar segura de que lo que uso, es mío. A través de CARA®, un proyecto que surgió en mayo de 2020, busco facilitar el encuentro entre gente que anda buscando prendas y joyitas que van apareciendo mientras intento compartir las emociones que la moda me genera.
          </p>
          <p>
            <b>Todas las prendas publicadas en esta página fueron encontradas en diferentes lugares y momentos</b>, convirtiéndolas en artículos únicos que luego de un meticuloso proceso de reacondicionamiento, están listos para encontrar un nuevx dueñx. 
            Si te genera curiosidad la moda con una mirada más cercana, pensando en qué nos es accesible, funcional y entretenido, entrá a chusmear mi página de <a href='https://www.instagram.com/cara.arg/' target='_blank' rel="noreferrer"> Instagram</a>.
          </p>
        </div>
        <img src={clothes} alt="chica mirando ropa para comprar" className='queOndaImg'/>
        </div>
    </>
  )
}


export default QueOndaCara