import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import Designation from "./Designation";
const Designations = () => {
    const showDesignations = useLoaderData();
    const [designation, setDesignation] = useState(showDesignations);
    const handleDeleteDesignationBtn = _id =>{
        fetch(`http://localhost:30001/designations/${_id}`,{
            method: "DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                const remainingData = designation.filter(currentdata=>currentdata._id==_id);
                setDesignation(remainingData);
                Swal.fire({
                    title: 'Success!',
                    text: 'Visa has been Deleted from list successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                
            }
        })
    }
    return (
        <div>
            <h1>Total Designations :{designation.length}</h1>
            <div className="card grid md:grid-cols-3  gap-12">
                {
                    designation.map(desgn=><Designation key={desgn._id} handleDeleteDesignationBtn={handleDeleteDesignationBtn} desgn={desgn}></Designation>)
                }
            </div>
            
        </div>
    );
};

export default Designations;