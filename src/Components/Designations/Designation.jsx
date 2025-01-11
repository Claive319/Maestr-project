import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Designation = ({ desgn, handleDeleteDesignationBtn }) => {
  const { designation_id, title } = desgn;
  return (
    <div className="card card-compact bg-white/30  backdrop-blur-sm w-96 shadow-xl transition duration-7000 hover:scale-110 hover:shadow-2xl">
      <div className="card-body">
        <h1 className="text-center font-semibold text-2xl">
          Designation Id : {designation_id}
        </h1>
        <h1 className="text-center font-black  text-[rgb(19,19,19)] text-5xl">
          Designation Title : {title}{" "}
        </h1>
        <div className="flex container justify-center">
          <Link to={`/designations/${designation_id}`}>
            <button className="btn btn-ghost">Update</button>
          </Link>
          <button onClick={() => handleDeleteDesignationBtn(designation_id)}>
            <FaTrashCan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Designation;
