import { ChevronLeft, ChevronRight, CircleArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";


const AssetView = ({ data }) => {

    const [page, setPage] = useState(1);

    const params = useParams();

    const { assetID, name, type, serialNumber, assignedTo, department, status, purchaseDate, warrantyExpiration, lastMaintenance, location, ipAddress, macAddress, softwareLicenses } = data["assets"].find((asset) => { return asset.assetID === params.assetID });

    return (
        <div className="w-screen h-screen bg-neutral-900 text-gray-300 flex flex-col items-center mx-auto">

            <div className="max-w-7xl my-32 px-32 py-16 flex flex-col justify-center rounded-lg shadow-lg bg-neutral-800">

                
                <a href="../../"><button className="rounded-full flex items-center hover:bg-neutral-400/75 p-2"><CircleArrowLeft /></button></a>



                <header className="mb-20">

                    <span className="text-sky-700 text-xl text-bold mb-2">Asset</span>

                    <div>
                        <div className="text-neutral-500">
                            <span className="mr-1">{type}</span><span>·</span>
                            <span className="mx-1">{assetID}</span><span>·</span>
                            <span className="ml-1">{serialNumber}</span>
                        </div>
                        <h1 className="text-4xl">{name}</h1>
                    </div>
                </header>



                <div>
                    <h4>Further details about the device</h4>

                    <div className="divide-y divide-neutral-700">
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Assigned To</span><span className="text-gray-400">{assignedTo}</span></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Status</span><span className="text-gray-400">{status}</span></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Purchase Date</span><span className="text-gray-400">{purchaseDate}</span></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Warranty Expiration</span><span className="text-gray-400">{warrantyExpiration}</span></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Last Maintenance</span><span className="text-gray-400">{lastMaintenance}</span></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Location</span><span className="text-gray-400">{location}</span></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">IP Address</span><span className="text-gray-400">{ipAddress}</span></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Mac Address</span><span className="text-gray-400">{macAddress}</span></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Department</span><div>
                            <span className="text-gray-200">{department.sofwareName}</span>
                            <a href="../../" className="hover:text-sky-700"><span className="text-gray-200">{department.licenseKey}</span></a>
                        </div></div>
                        <div className="flex flex-row justify-between text-xs"><span className="text-gray-200">Software Licenses</span>
                        <div>

                            <div className="flex flex-row items-center justify-end">
                                <button onClick={() => {setPage(1)}} className="rounded-full flex items-center hover:bg-neutral-400/75"><ChevronLeft size={20} /></button>
                                <span>{page}</span>
                                <button onClick={() => {setPage(2)}} className="rounded-full flex items-center hover:bg-neutral-400/75"><ChevronRight size={20} /></button>
                            </div>

                            <div className="flex flex-row justify-between"><span className="text-gray-200">Name: </span><span className="text-gray-200">{softwareLicenses[page-1].softwareName}</span></div>
                            <div className="flex flex-row justify-between"><span className="text-gray-200">License Key: </span><span className="text-gray-200">{softwareLicenses[page-1].licenseKey}</span></div>
                            <div className="flex flex-row justify-between"><span className="text-gray-200">Experation Date: </span><span className="text-gray-200">{softwareLicenses[page-1].experationDate}</span></div>
                        </div></div>
                    </div>
                </div>


            </div>
        </div>
    );
}


export default AssetView;