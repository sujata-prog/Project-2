import { useState } from "react";

//Function Component
function FormCourtesyPhone({ passDataToParent }) {
    //states
    const [phoneBorrow, setPhoneBorrow] = useState(0); //0 = 'none'
    const [chargerBorrow, setChargerBorrow] = useState(0); //0 = 'none'
    
    let courtesyList = [
        {id: 0, type: 'none', name: 'none', bond: 0},
        {id: 1, type: 'phone' , name: 'iPhone', bond: 275},
        {id: 2, type: 'phone' , name: 'Samsung Galaxy', bond: 100},
        {id: 3, type: 'phone' , name: 'Nokia', bond: 100},
        {id: 4, type: 'charger' , name: 'iPhone Charger', bond: 30},
        {id: 5, type: 'charger' , name: 'Samsung Charger', bond: 30},
        {id: 6, type: 'charger' , name: 'Nokia Charger', bond: 30},
    ];

    let addPhone = (selectedOption) => {
        let p = selectedOption === 'none' ? 0 : Number(selectedOption);
        setPhoneBorrow(p);
        
        let updateBond = 0;
        if (p !== 0) updateBond += courtesyList.find(item => item.id === p).bond;
        if (chargerBorrow !== 0) updateBond += courtesyList.find(item => item.id === chargerBorrow).bond;
        
        passDataToParent(updateBond);
    }

    let addCharger = (selectedOption) => {
        let c = selectedOption === 'none' ? 0 : Number(selectedOption);
        setChargerBorrow(c);
        
        let updateBond = 0;
        if (phoneBorrow !== 0) updateBond += courtesyList.find(item => item.id === phoneBorrow).bond;
        if (c !== 0) updateBond += courtesyList.find(item => item.id === c).bond;
        
        passDataToParent(updateBond);
    }

    //Component UI: HTML Rendering
    return(<>
        <h2>Courtesy Phone</h2>
        <h4 className='ms-4 mt-2'>Choose a phone</h4>
        <div className="row mt-2 ms-3">
            <label className="col-12 col-md-12 col-lg-4">Item Type </label>
            <select className="col-12 col-md-12 col-lg-7" onChange={ (e) => addPhone(e.target.value)}>
                <option value="none">None</option>
                <option value="1">iPhone</option>
                <option value="2">Samsung Galaxy</option>
                <option value="3">Nokia</option>
            </select> 
        </div>
        <h4 className='ms-4 mt-2'>Choose a charger</h4>
        <div className="row mt-2 ms-3">
            <label className="col-12 col-md-12 col-lg-4">Item Type </label>
            <select className="col-12 col-md-12 col-lg-7" onChange={ (e) => addCharger(e.target.value)} >
                <option value="none">None</option>
                <option value="4">iPhone Charger</option>
                <option value="5">Samsung Charger</option>
                <option value="6">Nokia Charger</option>
            </select>
        </div>
        <div className="row mt-2 ms-3 me-3 bg-white">
            <table className="table table-bordered" >
                <tbody>
                    <tr>
                        <td>Item</td>
                        <td>Cost</td>
                    </tr>
                    {/* Display phone */}
                    {phoneBorrow === 0 ? (null) : (
                        <tr>
                            <td>{courtesyList.find(item => item.id === phoneBorrow).name}</td>
                            <td>{courtesyList.find(item => item.id === phoneBorrow).bond}</td>
                        </tr>
                    )}
                    {/* Display charger */}
                    {chargerBorrow === 0 ? (null) : (
                        <tr>
                            <td>{courtesyList.find(item => item.id === chargerBorrow).name}</td>
                            <td>{courtesyList.find(item => item.id === chargerBorrow).bond}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
 </>);
}
export default FormCourtesyPhone;