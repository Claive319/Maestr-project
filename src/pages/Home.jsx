import { LuEyeClosed } from "react-icons/lu";
import Swal from 'sweetalert2'
const Home = () => {
    const handleSubmitbtn = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const username = form.username.value;
        const password = form.password.value;
        const designation = form.designation.value;
        const dept = form.dept.value;
        const createDate = form.cdate.value;
        const updateDate = form.udate.value;
        const addEmployee = {
            name, username, password, designation, dept, createDate, updateDate
        }
        fetch("http://localhost:3001/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addEmployee)
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Employee Data Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }

            })
    }
    const handleSubmitDesignationbtn = (event) => {
        event.preventDefault();
        const form2 = event.target;
        const dTitle = form2.dtitle.value;
        const addDesignation = {
            dTitle
        }
        // console.log(dTitle)
        fetch("http://localhost:3001/saveDesig", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addDesignation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId != 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Designation Data Added Successfully',
                        icon: 'success',
                        showCloseButton: true,

                        confirmButtonText: 'Cool'
                    })
                    form2.reset();

                }
            })

    }
    const handleSubmitDeptbtn = event =>{
        event.preventDefault();
        const form = event.target;
        const deptTitle = form.depttitle.value;
        const addDept = {
            deptTitle
        }
        fetch("http://localhost:3001/addDept", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addDept)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId!=0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Department Data Added Successfully',
                    icon: 'success',
                    showCloseButton: true,
                    showCancelButton: true,

                    confirmButtonText: 'Cool'
                })
                form.reset();
            }
        })
    }
    return (
        <div className="pb-20 grid grid-cols-2   gap-8">
            <div className="card border-2">
                <h1 className="font-extrabold text-3xl text-center">Employees</h1>
                <form onSubmit={handleSubmitbtn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>

                        <input type="text" placeholder="Please put your name here" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Please type your username here" name="username" className="input input-bordered" required />


                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="flex items-center">
                            <input type="password" placeholder="Please type your Password here" name="password" className="input input-bordered" required />
                            <span className="-ml-[2rem]" ><LuEyeClosed /></span>

                        </div>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Designation</span>
                        </label>
                        input

                        <input type="number" className="input input-bordered" name="designation" placeholder="Please select your Designation" id="" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Department</span>
                        </label>

                        <input type="text" className="input input-bordered" name="dept" placeholder="Please type your Department" id="" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Create Date</span>
                        </label>

                        <input type="date" className="input input-bordered" name="cdate" placeholder="Please enter your Create Date ; EG :'2012-07-14'" id="" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Update Date</span>
                        </label>


                        <input type="date" className="input input-bordered" name="udate" placeholder="Please enter your Update Date ; EG :'2012-07-14'" id="" required />
                    </div>
                    <div className="form-control mt-6">
                        <input
                            className="btn  hover:btn-secondary mx-auto w-[300px]  mb-8 font-extrabold text-2xl -transform transform hover:scale-110 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white"
                            type="submit"
                            value="Submit"
                        />
                    </div>
                </form>

            </div>
            <div className="card border-2">
                <h1 className="font-extrabold text-3xl text-center">Designation</h1>
                <form onSubmit={handleSubmitDesignationbtn} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Designation TITLE</span>
                        </label>
                        <input type="text" placeholder="Please type your title here" name="dtitle" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <input
                            className="btn btn-success mx-auto w-[300px]  mb-8 font-extrabold text-2xl"
                            type="submit"
                            value="Submit Designation"
                        />
                    </div>
                </form>

            </div>
            <div className="card border-2">
                <h1 className="font-extrabold text-3xl text-center">Department</h1>
                <form onSubmit={handleSubmitDeptbtn} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Department Title</span>
                        </label>
                        <input type="text" placeholder="Please type your Department Title here" name="depttitle" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <input
                            className="btn btn-success mx-auto w-[300px]  mb-8 font-extrabold text-2xl"
                            type="submit"
                            value="Submit Depratment info"
                        />
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Home;