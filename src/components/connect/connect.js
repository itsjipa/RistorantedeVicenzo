import React from 'react'
import './Connects.css'
import icon_ig from '../../assets/Instagram.png';
import icon_fb from '../../assets/Facebook.png';
import icon_wa from '../../assets/Whatsapp.png';
import icon_email from '../../assets/email.png';


const Connect = () => {
  return (
    <div>
        <div className='connect'><span>Connect Closer</span>
            <div className='icon'>
                <div className='icon-instagram'>
                <img src={icon_ig} alt='' className='icon-instagram'/>
                </div>
                <div className='icon-facebook'>
                <img src={icon_fb} alt='' className='icon-facebook'/>
                </div>
                <div className='icon-whatsApp'>
                <img src={icon_wa} alt='' className='icon-whatsApp'/>
                </div>
                <div className='icon-email'>
                <img src={icon_email} alt='' className='icon-email'/>
                </div>
            </div>
        </div>
        {/* Tambahkan teks Terima Kasih di bawah Connect Closer */}
        <div className='thank-you'>
            <p>Terima Kasih</p>
        </div>
        {/* Tambahkan footer di bawah Connect Closer */}
        <div className='footer'>
            <p>@Ristorante de Vicenzo2024</p>
        </div>
    </div>
    
  )
}

export default Connect
