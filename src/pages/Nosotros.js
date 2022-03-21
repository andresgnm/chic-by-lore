import React from 'react'

export const Nosotros = () => {
  return (
    <div> 
        <section className='nosotros'>
        
          
            <div className='main'>
              <img src={require('../images/nails1.JPG') }  ></img>
            
            <div className='nosotros-text'>
              <h1>Nosotros</h1>
              <h5>Nails <span>& Lashes</span></h5>
              <p>Ofrecemos las técnicas:
                Gel-X Apres original
                Techgel moldeado con Esmaltado Semipermanente
                Esmaltado Semipermanente sobre uña natural
                Diseños en 3D, mano alzada, stamping, etc.
                Encapsulado
              </p>
              <button type='button'>Hablemos</button>
            </div>
          {/* <h2><span>Conoce más</span> sobre nosotros</h2>
          <div className="contenido-nosotros" >
              <div className="imagen">
                  <picture>
                        <source
                            srcset="build/img/nosotros_sidebar.avif" 
                            type="image/avif"/>
                        <source
                            srcset="build/img/nosotros_sidebar.webp" 
                            type="image/webp"/>
                        <source
                            srcset="build/img/nosotros_sidebar.jpg" 
                            type="image/jpeg"/>
                        <img loading="lazy" decoding="async" src="build/img/nosotros_sidebar.jpg" lazyalt="imagen" width="500" height="300"/>
                    </picture>
              </div>
              <div className="texto">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ducimus, quos quo, laudantium temporibus ratione odit officia labore incidunt vitae repellat beatae corrupti nam. Quis dolor possimus illum unde! Excepturi?</p>

                <blockquote>Excelente Sabor!</blockquote>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ducimus, quos quo, laudantium temporibus ratione odit officia labore incidunt vitae repellat beatae corrupti nam. Quis dolor possimus illum unde! Excepturi?</p>
            </div>
          </div> */}
        </div>
      </section>

    </div>
  )
}
