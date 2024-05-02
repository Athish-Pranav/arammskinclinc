import React , {useEffect} from 'react'
import '../assets/style.css';
import { useMediaQuery } from 'react-responsive';
import Aos from 'aos';
import 'aos/dist/aos.css'

function ConsultationSection() {
    useEffect(()=>{
        Aos.init({duration:1500})
    })
  return (
    <div data-aos='fade-up'>
    <div className='consult-section py-5'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-3'>
                    <p className='header-text-custom1 display-center my-1 p-1'>Request for Your</p>
                    <p className='header-text-custom2 display-center' >Consultation</p>
                </div>
                <div className='col-sm-3 pt-3'>
                    <input id='userName' className='form-control mb-3' defaultValue={'username'} />
                    <input id='emailField'type='mail' className='form-control' defaultValue={'example@123.com'} />
                </div>
                <div className='col-sm-3 pt-3'>
                    <input id='contactNumber' type='tel' defaultValue={'+91 9876543210'} className='form-control mb-3'/>
                    <input id='preferedDate'type='date' defaultValue={'date'} className='form-control mb-3'/>
                </div>
                <div className='col-sm-3 pt-3'>
                    <select className="form-select mb-3" aria-label="Default select example">
                        <option defaultChecked>Select type of treatment</option>
                        <option value="hair">hair</option>
                        <option value="skin">skin</option>
                        <option value="therapy">therapy</option>
                    </select>
                    <button className='btn-hover text-wrap'>Book Appointment</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultationSection
