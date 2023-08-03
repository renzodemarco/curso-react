import medidasHombre from '../assets/medidas-hombre.jpg'
import medidasMujer from '../assets/medidas-mujer.jpg'

const GuiaDeMedidas = () => {
  return (
    <>
      <h1>Guía de Medidas</h1>
      <div className='guiaMedidas'>
        <img src={medidasMujer} alt="tabla de guía de medidas de mujeres"/>
        <img src={medidasHombre} alt="tabla de guía de medidas de hombres"/>
      </div>
    </>
)
}

export default GuiaDeMedidas