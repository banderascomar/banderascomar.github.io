export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <h2>Contacto</h2>
        </div>
        <div className='container'>
          <div className='col-md-3 contact-info'>
          <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}</p>
                <a href = "mailto:festilandiaargentina@hotmail.com">{props.data ? props.data.email2 : 'loading'}</a>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Teléfono
                </span>{' '}</p>
                <a href="tel:4777-7584">{props.data ? props.data.phone2 : 'loading'}</a>
                <a href="tel:+54-911-3444-0777">{props.data ? props.data.phone3 : 'loading'}
              </a>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Oficina
                </span></p>
                <p>{props.data ? props.data.address : 'loading'}</p>
                <p>{props.data ? props.data.address2 : 'loading'}</p>
              <b>Coordinar cita previa.
              </b>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='section-title'>
                <div className="map-responsive">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.4318988434766!2d-58.43852038482738!3d-34.56793668046876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5bdf096ebf7%3A0x9b3551bb10524e94!2sBanderas.com.ar!5e0!3m2!1ses!2sar!4v1674514986970!5m2!1ses!2sar" title="Google Map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <h5>Hacemos ventas por mayor y menor. Envios a todo el país.</h5>
        </div>
      </div>
    </div>
  )
}
