import medidas from '../assets/medidas.webp'

const GuiaDeMedidas = () => {
  return (
    <>
      <h1>Guía de Medidas</h1>
      <div className='guiaMedidas'>
        <img src={medidas} alt="tabla de guía de medidas"/>
      </div>
    </>
)
}

export default GuiaDeMedidas