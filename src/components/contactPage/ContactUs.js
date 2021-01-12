import React from 'react'
import Title from '../Title'
export default function ContactUs() {
    return (
        <div className='row'>
            <div className="col-10 col-md-6 py-5 m-auto">
                <Title text='contact us' />
                <form action="https://formspree.io/f/xjvpjpyw" method="POST" className='my-5'>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        name='first name'
                        placeholder='ex.john'
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        name='last name'
                        placeholder='ex.smith'
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email" 
                        className="form-control"
                        name='email'
                        placeholder='ex.john@mmm.com'
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        name='subject'
                        placeholder='important'
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                        name="message" 
                        className='form-control' 
                        rows="5"
                        placeholder='type your notes'></textarea>
                    </div>
                    <div className="form-group">
                        <input 
                        type="submit" 
                        className="form-control text-capitalize text-white bg-primary"
                        name='submit'
                        value='sent'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
