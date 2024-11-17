import React from "react";
import { useParams } from "react-router-dom";
import { FormatedUtilityTypes } from "./customTypes.tsx";
import employeeImage from '../assets/undraw_personal_information_re_vw8a.svg';


const EmployeeView = ({ data }) => {


    const params = useParams();



    const { employeeID, name, department, position, email, phone, location, assetsAssigned } = data["employees"].find((employee) => { return employee.employeeID.employeeID === params.employeeID });
    // = data["assets"].find((asset) => { return asset.assetID.assetID === params.assetID });

    return (
        <div className="h-screen bg-neutral-900 text-gray-300 flex flex-col items-center mx-auto">

            <div className="max-w-7xl my-32 px-32 py-16 flex flex-row items-center rounded-lg shadow-lg bg-neutral-800">

                <img src={employeeImage} alt="Employee Image" />


                <div>
                    <header>
                        <span>Employee</span>
                        <div className="flex flex-row">
                            <span className="text-neutral-500 flex flex-row items-center"><FormatedUtilityTypes data={employeeID} />·{
                                <a className="hover:text-sky-700" href={`mailto:${email}`}><FormatedUtilityTypes data={email} /></a>
                            }·{
                                <a href=""></a>
                            }</span>
                            <h1 className="text-4xl"><FormatedUtilityTypes data={name} /></h1>
                        </div>
                    </header>

                    <div>
                        <h4>Details about the employee</h4>

                        <div className="divide-y divide-neutral-700">
                            
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}


export default EmployeeView;