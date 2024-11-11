import React from "react";
import { useParams } from "react-router-dom";


const EmployeeView = ({ data }) => {


    const params = useParams();

    const { employeeID, name, department, position, email, phone, location, assetsAssigned } = data["employees"].find((asset) => { return asset.employeeID === params.employeeID });

    return (
        <div className="h-screen bg-neutral-900 text-gray-300 flex flex-col items-center mx-auto">

            <div className="max-w-7xl flex flex-row justify-center">

                <img src="" alt="" />


                <div className="h-full flex flex-col">
                    <header>
                        <span>Employee</span>
                        <div>
                            <span className="text-neutral-500">{employeeID}·{
                                <a className="hover:text-sky-700" href={`mailto:${email}`}>{email}</a>
                            }·{
                                <a href=""></a>
                            }</span>
                            <h1>{name}</h1>
                        </div>
                    </header>

                    <div>
                        <h4>Details about the device</h4>

                        <div className="divide-y divide-neutral-700">{

                        }</div>
                    </div>
                </div>


            </div>

        </div>
    );
}


export default EmployeeView;