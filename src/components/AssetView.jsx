import { ChevronLeft, ChevronRight, CircleArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FormatedUtilityTypes } from "./customTypes.tsx";


const AssetView = ({ data }) => {
    const [page, setPage] = useState(1);
    const params = useParams();
    const { assetID, name, assetType, serialNumber, assignedTo, department, status, purchaseDate, warrantyExpiration, lastMaintenance, location, ipAddress, macAddress, licenses } = data["assets"].find((asset) => { return asset.assetID.assetID === params.assetID });

    console.log(licenses);

    return (
        <div className="h-screen bg-neutral-900 text-gray-300 flex flex-col items-center mx-auto">

            <div className="max-w-7xl my-32 px-32 py-16 flex flex-col justify-center rounded-lg shadow-lg bg-neutral-800">

                
                <a href="../../"><button className="rounded-full flex items-center hover:bg-neutral-400/75 p-2"><CircleArrowLeft /></button></a>



                <header className="mb-20">

                    <span className="text-sky-700 text-xl text-bold mb-2">Asset</span>

                    <div>
                        <div className="text-neutral-500 flex flex-row">
                            <FormatedUtilityTypes data={assetType} /><span>·</span>
                            <FormatedUtilityTypes data={assetID} /><span>·</span>
                            <FormatedUtilityTypes data={serialNumber} />
                        </div>
                        <h1 className="text-4xl">{name.name}</h1>
                    </div>
                </header>



                <div>
                    <h4>Further details about the device</h4>

                    <div className="divide-y divide-neutral-700">

                        <div className="flex flex-row justify-between text-sm"><span>Assigned To:</span><FormatedUtilityTypes data={assignedTo} /></div>
                        <div className="flex flex-row justify-between text-sm"><span>Status:</span><FormatedUtilityTypes data={status} /></div>
                        <div className="flex flex-row justify-between text-sm"><span>Purchase Date:</span><FormatedUtilityTypes data={purchaseDate} /></div>
                        <div className="flex flex-row justify-between text-sm"><span>Warranty Expiration:</span><FormatedUtilityTypes data={warrantyExpiration} /></div>
                        <div className="flex flex-row justify-between text-sm"><span>Last Maintenance:</span><FormatedUtilityTypes data={lastMaintenance} /></div>
                        <div className="flex flex-row justify-between text-sm"><span>Location:</span><FormatedUtilityTypes data={location} /></div>
                        <div className="flex flex-row justify-between text-sm"><span>Ip Address:</span><FormatedUtilityTypes data={ipAddress} /></div>
                        <div className="flex flex-row justify-between text-sm"><span>Mac Address:</span><FormatedUtilityTypes data={macAddress} /></div>
                        <div className="flex flex-row justify-between text-sm"><span>Department</span><FormatedUtilityTypes data={department} /></div>
                        <div className="flex flex-row justify-between text-sm"><span>Software Licenses</span><FormatedUtilityTypes data={licenses} /></div>
                    </div>
                </div>


            </div>
        </div>
    );
}


export default AssetView;