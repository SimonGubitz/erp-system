import { useEffect, useState } from "react";
import { TailSpin } from 'react-loader-spinner'
import ContextMenu from './ContextMenu.tsx'
import { FolderSymlink, RotateCcw, ArrowDownAZ, ArrowUpAZ, ArrowDown01, ArrowUp01, ArrowLeftRight, Ellipsis, Pencil, PenOff } from "lucide-react";
import { validateDate, validateIDLink } from "../utility/safetyLayer.ts";
import { FormatedUtilityTypes } from './customTypes.tsx';

// const utilityTypes = require("../assets/utilityTypes.json");


function Table({ data }) {

    const tables = Object.keys(data);

    const [editable, setEditable] = useState(false);
    const [currentlyAutosaving, setCurrentlyAutosaving] = useState(true); // true for testing
    const [currentTable, setCurrentTable] = useState(tables[0]);

    const dataKeys = Object.keys(data[currentTable]);
    const headers = Object.keys(data[currentTable][dataKeys[0]]);
    const columns = [...Object.keys(data[currentTable][dataKeys[0]])];

    const body = [...Object.keys(data[currentTable])];

    // search for assetId in other tables
    const links = body.find(key => { });




    const [rows, setRows] = useState(data[currentTable]); useEffect(() => { setRows(data[currentTable]) }, [data, currentTable]);

    // const tableIdIndex = [];
    // rows.forEach(row => {
    //     row.forEach((cell, index) => {
    //         console.log(JSON.stringify(cell));
    //         Object.keys(cell);
    //     });
    // });


    // do this by modifing the "data[currentTable]" which is an Array and should be change to a React State type variable
    // TODO: Add the sort symbol next to the header
    const sortByColumn = (columnIndex) => {

        console.log("sortByColumn");

        // console.log(rows[Object.keys(rows)[columnIndex]]);

        // setRows(
        //     rows.sort()
        // );
    }


    // store the sizes in cookies
    const resizeColumn = (column) => {

        console.log("resizeColumn");

    }


    // Keyboard Navigation on the Cells
    useEffect(() => {

    }, []);



    const processNestedObject = (obj, utilityTypes, referenceData) => {
        let renderableArray = [];

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];

                if (value) {
                    const type = typeof value;

                    if (type === 'object' && !Array.isArray(value)) {
                        // If it's a nested object, process it recursively
                        renderableArray.push(...processNestedObject(value, utilityTypes, referenceData));
                    } else {
                        // Handle different data types and validate
                        switch (type) {
                            case 'string':
                                renderableArray.push(`String: ${value}`);
                                break;

                            case 'number':
                                renderableArray.push(`Number: ${value}`);
                                break;

                            case 'object':
                                if (Array.isArray(value)) {
                                    renderableArray.push(`Array of length: ${value.length}`);
                                } else {
                                    renderableArray.push(`Object: ${JSON.stringify(value)}`);
                                }
                                break;

                            case 'boolean':
                                renderableArray.push(`Boolean: ${value}`);
                                break;
                        }

                        // Custom validations based on JSON structure
                        if (obj.type === 'ID' && obj.linkTo) {
                            // For fields with type "ID", validate if the linked ID exists
                            const isValidLink = validateIDLink(value, referenceData[obj.linkTo]);
                            if (!isValidLink) {
                                renderableArray.push(`Invalid link ID: ${value}`);
                            }
                        } else if (obj.type === 'date' && !validateDate(value)) {
                            // For date fields, check if the date format is valid
                            renderableArray.push(`Invalid date format: ${value}`);
                        }
                    }
                }
            }
        }

        return renderableArray;
    };


    return (
        <div className="max-w-7xl mt-6">

            <div className="flex flex-row justify-between items-end">
                <div className="flex flex-col items-start">
                    {tables.length > 1 &&
                        <><label className="text-sm">Select a Table:</label><select value={currentTable} onChange={(event) => setCurrentTable(event.target.value)} className="text-sm rounded-md bg-black">
                            {tables.map(key => {
                                return <option className="py-0 px-5 w-96 max-w-96" key={key} value={key}>{key[0].toUpperCase() + key.substring(1)}</option>;
                            })}
                        </select></>}
                </div>


                <div className="rounded-md border border-solid h-full cursor-pointer pointer-events-auto hover:bg-neutral-700">
                    {/* children, menuGroups, submenuVisible, setSubmenuVisible, className, onLeftClick? */}

                    <button>
                        <ContextMenu
                            menuGroups={[{
                                groupName: "Sort",
                                items: [
                                    {
                                        icon: <Pencil size={16} />,
                                        label: "Edit",
                                        action: () => {
                                            setEditable(true);
                                        },
                                    }
                                ]
                            }]}
                            onLeftClick={true}
                        >
                            <Ellipsis />
                        </ContextMenu>
                    </button>
                </div>

            </div>

            <div className="w-full rounded-lg border-solid border border-slate-500 mt-3 overflow-hidden">
                <div className="overflow-x-auto scrollbar-custom">

                    {editable && <div className="flex justify-center items-center bg-green-800 h-6 w-full text-sm font-semibold relative">
                        <p className="mr-4">Now editing</p>
                        <button onClick={() => setEditable(false)} className="border rounded ml-4 flex flex-row items-center text-xs px-2 py-0.5 bg-blend-overlay hover:bg-red-400">
                            <PenOff size={12} strokeWidth={2} /> Stop Editing
                        </button>

                        {currentlyAutosaving && <div className="absolute right-2 flex flex-row items-center">
                            <TailSpin visible={true} width="12" color="#fff" strokeWidth={3} ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass="" />
                            <span className="ml-1">Saving...</span>
                        </div>}

                    </div>}
                    <table className="max-w-full min-w-[500px] overflow-x-auto scrollbar-custom">
                        <thead>
                            <tr className="divide-x divide-solid bg-black text-center max-h-4">{headers.map((key, index) => {
                                return <th className="w-96 max-w-96 max-h-inherit overflow-x-auto scrollbar-custom" key={index}><ContextMenu className="w-full py-0 px-5 text-sm"
                                    menuGroups={[{
                                        groupName: "Sort",
                                        items: [
                                            {
                                                icon: <ArrowDownAZ size={16} />,
                                                label: "Sort Alphabetically",
                                                action: () => { sortByColumn(index) },
                                            }, {
                                                icon: <ArrowUpAZ size={16} />,
                                                label: "Sort Alphabetically Reverse",
                                                action: () => { sortByColumn(index) },
                                            }, {
                                                icon: <ArrowDown01 size={16} />,
                                                label: "Sort Numerically",
                                                action: () => { sortByColumn(index) },
                                            }, {
                                                icon: <ArrowUp01 size={16} />,
                                                label: "Sort Numerical Reverse",
                                                action: () => { sortByColumn(index) },
                                            },
                                        ],
                                    }, {
                                        groupName: "Resize",
                                        items: [
                                            {
                                                icon: <RotateCcw size={16} />,
                                                label: "Return to default sizing",
                                                action: () => { resizeColumn(index) },
                                            }, {
                                                icon: <ArrowLeftRight size={16} />,
                                                label: "Resize to fitting",
                                                action: () => { resizeColumn(index) },
                                            }
                                        ]
                                    }, /*{
                                        // only show this if there is a table with that name
                                        // would only work with more consistent header naming
                                        // Object.keys(data).includes(key.split(" ").join(""));
                                        // 
                                        // const tableKey = (key[0].toLowerCase() + key.substring(1)) + "s";
                                        // Object.keys(data).includes() ? setCurrentTable(tables[tableKey]);
                                        groupName: "View",
                                        items: [
                                            {
                                                icon: <FolderSymlink size={16} />,
                                                label: "Go to this Table",
                                                action: () => 
                                                    {setCurrentTable()},
                                            }
                                        ]
                                    }*/]}>
                                    {(key[0].toUpperCase() + key.substring(1)).match(/[A-Z][a-z]+/g).join(" ")}
                                </ContextMenu></th>
                            })}
                            </tr>
                        </thead>





                        <tbody>
                            {rows.map((row, index) => {
                                return (<tr className="divide-x divide-solid max-h-4 border-t" key={`row${index}`}>
                                    {Object.keys(row).map((cell, cellIndex) => {
                                        return (
                                            <td className="py-2 text-center text-clip overflow-x-auto scrollbar-custom" key={`cell${cellIndex}`}>
                                                <FormatedUtilityTypes data={row[cell]} editable={editable} />
                                            </td>
                                        );
                                    })}
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


export default Table;