import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'> 

                <h4 className='mt-5 mb-3'>Open a Zerodha account</h4>

                <p className='mt-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

                <Link to="/signup" className='p-2 fs-5 mb-5 mt-4 btn btn-primary text-white text-decoration-none' style={{width:"20%", margin:"0 auto"}}>Sign up for free</Link>
            </div>

        </div>
     );
}

export default OpenAccount;