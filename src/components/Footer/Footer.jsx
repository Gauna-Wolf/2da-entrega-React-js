import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="ft py-0" id='footer'>
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-3 mb-2 contentFooter" >
            <h3 className="text-light contentFooter">Nosotros <div className="hrFooter"> </div></h3>
            <p className="text-dark pt-2 contentFooter"> 
            Ofrecemos una amplia gama de tecnologia 
            de última generación
            </p>
          </div>
          <div className="col-lg-3 mb-2 contentFooter" >
            <h3 className="text-light contentFooter">Contacto  <div className="hrFooter"> </div></h3>
            <ul className="list-unstyled text-dark pt-2 contentFooter">
              <li>Dirección: Cañas 854, Ciudad Ficticia</li>
              <li>Teléfono: (954) 666-1234</li>
              <li>Email: compumundo@.com</li>
            </ul>
          </div>
           <div className="col-lg-3 mb-2  contentFooter">
              <h3 className="text-light contentFooter">Síguenos  <div className="hrFooter"> </div></h3>
              <ul className="list-unstyled contentFooter">
                <li className="me-3 pt-2"><FontAwesomeIcon className='iconoInsta' icon={faInstagram} style={{ fontSize: '1.5rem' }} /> Instagram</li>
                <li className="me-3 pt-2"><FontAwesomeIcon className='iconoFace' icon={faFacebook} style={{ fontSize: '1.5rem' }} /> Facebook</li>
                <li className="me-3 pt-2"><FontAwesomeIcon className='iconoWsp' icon={faWhatsapp} style={{ fontSize: '1.5rem' }} /> WhatsApp</li>
              </ul>
          </div> 
        </div>
      </div>
      <div className='footerLine container-fluid text-center'>
        <p className='pt-1'>Creador Web @Viejito</p>
      </div>
    </footer>
  );
}

export default Footer;
