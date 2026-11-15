// IMPORT
import { Link } from "react-router-dom";

//COMPONENT FUNCTION 
function Header() {
    //Data
    const headerStyle = {
        minHeight: '15vh',
        backgroundColor: '#2C3E50',
    };
    const taglineStyle = {
        minHeight: '15vh',
        fontSize: '2em'     
    };
    
    // Updated button style to match the blue color in the wireframe
    const linkStyle = {
        textDecoration: 'none',
        backgroundColor: '#3498DB', 
        border: '1px solid black',
        color: 'white',
        textAlign: 'center'
    };

    //UI render
    return (
        <>
           <header className='row' style={headerStyle}>
            <div className='col-12 col-lg-8 text-center text-white d-flex justify-content-center align-items-center' 
                                style={taglineStyle}>Phone Fix Booking System</div>
            <div className='col-12 col-lg-4'>
                <div className='row'>
                    <Link to="/" className='col-12 col-md-6 p-0 m-0' style={linkStyle}>HOME</Link>
                    <Link to="/advancedjs" className='col-12 col-md-6 p-0 m-0' style={linkStyle}>EXTENSION</Link>
                </div>
            </div>
           </header>
        </>
    );
}

// EXPORT
export default Header;