import { useState } from 'react';

function FormRepairDetail({ passDataToParent }) {
    const [warrantyDisabled, setWarrantyDisabled] = useState(true);
    const [warrantyChecked, setWarrantyChecked] = useState(false);
    // State to hold the minimum valid repair date
    const [minRepairDate, setMinRepairDate] = useState(new Date().toISOString().split("T")[0]);

    const handlePurchaseDateChange = (e) => {
        const value = e.target.value;
        if (!value) return;
        
        // Update minimum repair date to be the purchase date
        setMinRepairDate(value);

        let diffMonths = Math.ceil(Math.abs(new Date() - new Date(value)) / (1000*60*60*24*30));
        const outOfWarranty = diffMonths > 24;
        setWarrantyDisabled(outOfWarranty);
        setWarrantyChecked(!outOfWarranty);
        passDataToParent(!outOfWarranty); 
    }

    const updateWarranty = (event) => {
        setWarrantyChecked(event.target.checked);
        passDataToParent(event.target.checked); 
    }

    return(<>
        <h2>Repair Details</h2>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Purchase Date *</label>
            <input className="col-12 col-md-12 col-lg-7" type="date" id='purchaseDate'
                max={new Date().toISOString().split("T")[0]}
                onChange={handlePurchaseDateChange} required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Repair Date *</label>
            {/* Added min attribute to validate repair date */}
            <input className="col-12 col-md-12 col-lg-7" type="date" id='repairDate'
                min={minRepairDate} required/>
        </div>
        <div className="row">
            <fieldset className="border border-primary col-12 col-lg-11 ms-1 me-4 mb-3">
                <legend className="col-11 float-none w-auto">Under Warranty</legend>
                <div>
                    <label className="col-12 col-md-12 col-lg-4">Warranty</label>
                    <input type="checkbox" id='warrantyCheck'
                        disabled={warrantyDisabled} checked={warrantyChecked}
                        onChange={updateWarranty}/>
                </div>
            </fieldset>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">IMEI Number *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" inputMode="numeric"
                pattern="\d{15}" maxLength="15" title="IMEI must be exactly 15 numbers"
                onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 15)}
                required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Make *</label>
            <select className="col-12 col-md-12 col-lg-7" defaultValue="Apple" required>
                <option value="Apple">Apple</option><option value="LG">LG</option>
                <option value="Motorola">Motorola</option><option value="Nokia">Nokia</option>
                <option value="Samsung">Samsung</option><option value="Sony">Sony</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Model Number</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" />
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Fault Category *</label>
            <select className="col-12 col-md-12 col-lg-7" defaultValue="Screen" required>
                <option value="Battery">Battery</option><option value="Charging">Charging</option>
                <option value="Screen">Screen</option><option value="SD-storage">SD-storage</option>
                <option value="Software">Software</option><option value="Other">Other</option>
            </select>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Description *</label>
            <textarea className="col-12 col-md-12 col-lg-7" rows="4" required></textarea>
        </div>
 </>);
}
export default FormRepairDetail;