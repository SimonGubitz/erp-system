import { useEffect, useState } from "react";
import ContextMenu from './ContextMenu.tsx'
import { RotateCcw, ArrowDownAZ, ArrowUpAZ, ArrowDown01, ArrowUp01, ArrowLeftRight, ChevronLeft, ChevronRight } from "lucide-react";

const utilityTypes = require("../assets/utilityTypes.json");


function Table({ data }) {

    const tables = Object.keys(data);

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
    const sortByColumn = (columnIndex) => {
        // console.log(rows[Object.keys(rows)[columnIndex]]);

        // setRows(
        //     rows.sort()
        // );
    }


    // store the sizes in cookies
    const resizeColumn = (column) => {

    }


    const PaginationSelector = ({pages}) => {

        const [currentPage, setCurrentPage] = useState(1);

        const handlePageChange = (modifier) => {
            const newPage = currentPage + modifier;
            if (newPage > 0 && newPage <= pages.length) {
                setCurrentPage(newPage);
            }
        };

        return (
            <div className="flex flex-row">
                <button onClick={() => handlePageChange(-1)}><ChevronLeft size={20} /></button>
                <span>{currentPage}</span>
                <button onClick={() => handlePageChange(1)}><ChevronRight size={20} /></button>
            </div>
        );
    }

    const processNestedObject = (obj) => {
        let renderableArray = [];
        
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
    
                if (value) {
                    // Check if the type of the current value matches one of the utilityTypes
                    if (utilityTypes.types.includes(typeof value)) {
                        switch (typeof value) {
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
                                    // If it's an object, recursively process it
                                    renderableArray.push(...processNestedObject(value, utilityTypes));
                                }
                                break;
                            case 'boolean':
                                renderableArray.push(`Boolean: ${value}`);
                                break;
                            // Add other cases as necessary
                            default:
                                renderableArray.push(`Unknown type: ${value}`);
                                break;
                        }
                    }
                }
            }
        }
    
        return renderableArray;
    };


    return (
        <div className="max-w-7xl">

            <div className="flex flex-col items-start">
                <label>Select an option:</label>
                <select value={currentTable} onChange={(event) => setCurrentTable(event.target.value)} className="rounded-md bg-black">
                    {tables.map(key => {
                        return <option className="py-0 px-5 w-80 max-w-80" value={key}>{key[0].toUpperCase() + key.substring(1)}</option>;
                    })}
                </select>
            </div>

            <div className="w-full rounded-lg border-solid border boder-slate-500 mt-3 overflow-hidden">
                <div className="overflow-x-auto scrollbar-custom">
                    <table className="max-w-full min-w-[500px] overflow-x-auto scrollbar-custom">


                        <thead>
                            <tr className="divide-x divide-solid bg-black text-center max-h-4">{headers.map((key, index) => {
                                return <th className="w-80 max-w-80 max-h-inherit overflow-x-auto scrollbar-custom" key={key}><ContextMenu className="w-full py-0 px-5"
                                    menuGroups={[{
                                        groupName: "Sort",
                                        items: [
                                            {
                                                icon: <ArrowDownAZ size={16} />,
                                                label: "Sort Alphabetically",
                                                action: sortByColumn(index),
                                            }, {
                                                icon: <ArrowUpAZ size={16} />,
                                                label: "Sort Alphabetically Reverse",
                                                action: sortByColumn(index),
                                            }, {
                                                icon: <ArrowDown01 size={16} />,
                                                label: "Sort Numerically",
                                                action: sortByColumn(index),
                                            }, {
                                                icon: <ArrowUp01 size={16} />,
                                                label: "Sort Numerical Reverse",
                                                action: sortByColumn(index),
                                            },
                                        ],
                                    }, {
                                        groupName: "Resize",
                                        items: [
                                            {
                                                icon: <RotateCcw size={16} />,
                                                label: "Return to default sizing",
                                                action: resizeColumn(index),
                                            }, {
                                                icon: <ArrowLeftRight size={16} />,
                                                label: "Resize to fitting",
                                                action: resizeColumn(index),
                                            }
                                        ]
                                    }]}>
                                    {key[0].toUpperCase() + key.substring(1)}
                                </ContextMenu></th>
                            })}
                            </tr>
                        </thead>





                        <tbody>
                            {rows.map((row, index) => {
                                return (<tr className="divide-x divide-solid max-h-4 border-t" key={`row${index}`}>
                                    {Object.keys(row).map((cell, cellIndex) => {
                                        switch (row[cell]) {
                                            case "object":

                                                // if there is a cross reference ID to another "table"
                                                // Object.keys(row[cell]).find((cell) => {
                                                //     // if it is the ID
                                                //     index
                                                //     cell.s === ""
                                                // });

                                                console.log(`Cell has a type of: ${typeof row[cell]}`);

                                                let renderableArray = [];

                                                for (const key in row[cell]) {
                                                    if (row[cell].hasOwnProperty(key)) {
                                                        const value = row[cell][key];
                                                        // If the value is an object, recursively process it
                                                        if (typeof value === 'object') {
                                                            renderableArray.push(...processNestedObject(value, utilityTypes));
                                                        } else {
                                                            renderableArray.push(value);
                                                        }
                                                    }
                                                }


                                                return (
                                                    <td className="py-2 text-center text-clip overflow-x-auto scrollbar-custom" key={`cell${cellIndex}`}>
                                                        {(Array.isArray(row[cell])) && <PaginationSelector pages={row[cell].length} />}
                                                        {renderableArray.map((object) => {
                                                            return (<></>)
                                                        })}
                                                    </td>
                                                );
                                            default:
                                                return (
                                                    <td className="py-2 text-center text-clip overflow-x-auto scrollbar-custom" key={`cell${cellIndex}`}>
                                                        {row[cell]}
                                                    </td>
                                                );
                                        }
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
