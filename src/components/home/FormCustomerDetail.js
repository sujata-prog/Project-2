import { useState, useEffect } from 'react';

//Function Component
function FormCustomerDetail({ passDataToParent, sendCustomerDetails }) {
    
    //Customer type state
    const [type, setType] = useState({ customer: true, business: false });
    const updateCustomerType = (event) => {
        if (event.target.value === "customer") {
            passDataToParent(true);
            setType({ customer: true, business: false });
        } else {
            passDataToParent(false);
            setType({ customer: false, business: true });
        }
    };

    //Customer details state
    const [customerDetails, setCustomerDetails] = useState({ title: "Mr", firstname: "", lastname: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCustomerDetails({ ...customerDetails, [name]: value });
    };

    useEffect(() => {
        // Call back function to parent
        sendCustomerDetails(customerDetails);
    }, [customerDetails, sendCustomerDetails]); // Added sendCustomerDetails here
    //Component UI: HTML Rendering
    return(<>
        <h2>Customer Details</h2>
        <div className="row">
            <fieldset className="border border-primary col-12 col-lg-11 ms-2 me-4">
                <legend className="col-11 float-none w-auto">Customer type *</legend>
                <div>
                    <label className="col-12 col-md-12 col-lg-4">Customer</label>
                    <input type="radio" name="customer-type" value="customer" checked={type.customer} onChange={updateCustomerType} required />
                </div>
                <div>
                    <label className="col-12 col-md-12 col-lg-4">Business</label>
                    <input type="radio" name="customer-type" value="business" checked={type.business} onChange={updateCustomerType} />
                </div>
            </fieldset>
        </div>

        {/*Details*/}
        <div className="row mt-2">
            <label className="col-12 col-md-12 col-lg-4">Title *</label>
            <select className="col-12 col-md-12 col-lg-7" name="title" defaultValue="Mr" onChange={handleChange} required>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>
        </div>

        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">First Name *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" name="firstname"
                pattern="^[A-Za-z\s-]+$" title="Only letters, spaces and hyphens are allowed"
                onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z\s-]/g, '')}
                onChange={handleChange} required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Last Name *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" name="lastname"
                pattern="^[A-Za-z\s-]+$" title="Only letters, spaces and hyphens are allowed"
                onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z\s-]/g, '')}
                onChange={handleChange} required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Street *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Suburb</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" />
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">City *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Post Code *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" inputMode="numeric"
                pattern="\d{4}" maxLength="4" title="Post code must be exactly 4 numbers"
                onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4)}
                required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Phone Number *</label>
            <input className="col-12 col-md-12 col-lg-7" type="tel"
                pattern="^[0-9\s()+-]+$" title="Only numbers, spaces and ( ) + - symbols are allowed"
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9\s()+-]/g, '')}
                required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Email *</label>
            <input className="col-12 col-md-12 col-lg-7" type="email" required/>
        </div>
 </>);
}
export default FormCustomerDetail;