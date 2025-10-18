import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export function Footer() {
    return (
        <>
            <footer className='bottom-0 position-fixed w-100'>
                <div id="footer" className='container-fluid bg-dark text-white text-center p-3'>
                    <small className='text-white-50'>&copy; 2025 Copyright by Mesmer's Muse. All rights reserved.</small>
                </div>
            </footer>
        </>
    )
}
