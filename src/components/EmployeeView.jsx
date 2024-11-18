import React from "react";
import { useParams } from "react-router-dom";
import { FormatedUtilityTypes } from "./customTypes.tsx";
import employeeImage from '../assets/undraw_personal_information_re_vw8a.svg';
import { CircleArrowLeft } from "lucide-react";


const EmployeeView = ({ data }) => {


    const params = useParams();

    console.log(data["employees"]);


    const { employeeId, name, department, position, email, phone, location, assetsAssigned } = data["employees"].find((employee) => { return employee.employeeId.employeeId === params.employeeID });
    // = data["assets"].find((asset) => { return asset.assetId.assetId === params.assetId });


    console.log(employeeImage);

    return (
        <div className="h-screen bg-neutral-900 text-gray-300 flex flex-col items-center mx-auto">



            <div className="relative max-w-7xl my-32 px-32 py-16 flex flex-row justify-around items-center rounded-lg shadow-lg bg-neutral-800">

                <a href="../../"><button className="absolute left-4 top-4 rounded-full flex items-center hover:bg-neutral-400/75 p-2"><CircleArrowLeft /></button></a>

                <img src={employeeImage} alt="Employee" className="max-w-60 mr-4" />


                <div className="ml-4">
                    <header>
                        <span>Employee</span>
                        <div className="flex flex-row">
                            <span className="text-neutral-500 flex flex-row items-center"><FormatedUtilityTypes data={employeeId} />·{
                                <a className="hover:text-sky-700" href={`mailto:${email.email}`}><FormatedUtilityTypes data={email} /></a>
                            }·{
                                <a href=""></a>
                            }</span>
                            <h1 className="text-4xl"><FormatedUtilityTypes data={name} /></h1>
                        </div>
                    </header>

                    <div>
                        <h4>Details about the employee</h4>
                        <div className="divide-y divide-neutral-700">
                            <div className="flex flex-row justify-between text-sm"><span>Department:</span><FormatedUtilityTypes data={department} /></div>
                            <div className="flex flex-row justify-between text-sm"><span>Position:</span><FormatedUtilityTypes data={position} /></div>
                            <div className="flex flex-row justify-between text-sm"><span>Phone:</span><FormatedUtilityTypes data={phone} /></div>
                            <div className="flex flex-row justify-between text-sm"><span>Location:</span><FormatedUtilityTypes data={location} /></div>
                            <div className="flex flex-row justify-between text-sm"><span>Assets Assigned:</span><FormatedUtilityTypes data={assetsAssigned} /></div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}


export default EmployeeView;