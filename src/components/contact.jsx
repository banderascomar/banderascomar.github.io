import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
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
                <p>{props.data ? props.data.email : 'loading'}</p>
                <p>{props.data ? props.data.email2 : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Teléfono
                </span>{' '}</p>
                <p>{props.data ? props.data.phone : 'loading'}</p>
                <p>{props.data ? props.data.phone2 : 'loading'}
              </p>
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
                <div class="map-responsive">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.4318988434766!2d-58.43852038482738!3d-34.56793668046876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5bdf096ebf7%3A0x9b3551bb10524e94!2sBanderas.com.ar!5e0!3m2!1ses!2sar!4v1674514986970!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
