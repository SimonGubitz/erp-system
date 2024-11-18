import { ChevronLeft, ChevronRight, CircleArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FormatedUtilityTypes } from "./customTypes.tsx";


const MaintenanceView = ({ data }) => {

    const [page, setPage] = useState(1);

    const params = useParams();

    
    const {maintenanceId, assetId, date, performedBy, details } = data["maintenanceLogs"].find((maintenance) => { return maintenance.maintenanceId.maintenanceId === params.maintenanceID });

    return (
        <div className="h-screen bg-neutral-900 text-gray-300 flex flex-col items-center mx-auto">

            <div className="max-w-7xl my-32 px-32 py-16 flex flex-col justify-center rounded-lg shadow-lg bg-neutral-800">

                
                <a href="../../"><button className="rounded-full flex items-center hover:bg-neutral-400/75 p-2"><CircleArrowLeft /></button></a>



                <header className="mb-20">

                    <span className="text-sky-700 text-xl text-bold mb-2">Maintenance</span>

                    <h1 className="text-4xl">{maintenanceId.maintenanceId}</h1>
                </header>



                <div>
                    <h4>Further details about the device</h4>

                    <div className="divide-y divide-neutral-700">
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Maintenance Id</span><FormatedUtilityTypes data={maintenanceId}/></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Asset Id</span><FormatedUtilityTypes data={assetId}/></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Date</span><FormatedUtilityTypes data={date}/></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Performed By</span><FormatedUtilityTypes data={performedBy}/></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Details</span><FormatedUtilityTypes data={details}/></div>
                    </div>
                </div>


            </div>
        </div>
    );
}


export default MaintenanceView;