//Function Component
function FormCost(props) {
    // Calculate values based on props
    const bond = props.sharedPropBond || 0;
    const serviceFee = props.sharedPropWarranty ? 0 : 85;
    const total = bond + serviceFee;
    const gst = total * 0.15;
    const totalGst = total * 1.15;

    //Component UI: HTML Rendering
    return(<>
        <h2>Cost</h2>
        <div className="row mt-2 ms-3">
            <label className="col-12 col-md-12 col-lg-4">Bond ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" value={bond.toFixed(2)} readOnly />
        </div>
        <div className="row mt-1 ms-3">
            <label className="col-12 col-md-12 col-lg-4">Service Fee ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" value={serviceFee.toFixed(2)} readOnly/>
        </div>
        <div className="row mt-1 ms-3">
            <label className="col-12 col-md-12 col-lg-4">Total ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" value={total.toFixed(2)} readOnly />
        </div>
        
        {/* GST and Total (+GST) explicitly added here */}
        <div className="row mt-1 ms-3">
            <label className="col-12 col-md-12 col-lg-4">GST ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" value={gst.toFixed(2)} readOnly />
        </div>
        <div className="row mt-1 ms-3">
            <label className="col-12 col-md-12 col-lg-4">Total (+GST) ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" value={totalGst.toFixed(2)} readOnly />
        </div>
 </>);
}
export default FormCost;