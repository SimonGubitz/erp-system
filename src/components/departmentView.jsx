import { ChevronLeft, ChevronRight, CircleArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FormatedUtilityTypes } from "./customTypes.tsx";


const DepartmentView = ({ data }) => {

    const [page, setPage] = useState(1);

    const params = useParams();


    
    
    
    
    
    const { departmentId, name, location, budget, headOfDepartment, employees } = data["departments"].find((department) => { return department.departmentId.departmentId === params.departmentID });

    return (
        <div className="h-screen bg-neutral-900 text-gray-300 flex flex-col items-center mx-auto">

            <div className="max-w-7xl my-32 px-32 py-16 flex flex-col justify-center rounded-lg shadow-lg bg-neutral-800">


                <a href="../../"><button className="rounded-full flex items-center hover:bg-neutral-400/75 p-2"><CircleArrowLeft /></button></a>



                <header className="mb-20">

                    <span className="text-sky-700 text-xl text-bold mb-2">Department</span>

                    <div>
                        <h1 className="text-4xl">{name.name}</h1>
                    </div>
                </header>



                <div>
                    <h4>Further details about the department</h4>

                    <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Department Id: </span><FormatedUtilityTypes data={departmentId} /></div>
                    <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Name: </span><FormatedUtilityTypes data={name} /></div>
                    <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Location: </span><FormatedUtilityTypes data={location} /></div>
                    <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Budget: </span><FormatedUtilityTypes data={budget} /></div>
                    <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Head Of Department: </span><FormatedUtilityTypes data={headOfDepartment} /></div>
                    <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Employees: </span><FormatedUtilityTypes data={employees} /></div>
                    
                </div>


            </div>
        </div>
    );
}


export default DepartmentView;