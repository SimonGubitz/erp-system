import { useState } from "react";
import ContextMenu from './ContextMenu.tsx'
import { RotateCcw, ArrowDownAZ, ArrowUpAZ, ArrowDown01, ArrowUp01, ArrowLeftRight } from "lucide-react";


function Table({ data }) {

    const tables = Object.keys(data);

    const [currentTable, setCurrentTable] = useState(tables[0]);

    const dataKeys = Object.keys(data[currentTable]);
    const headers = Object.keys(data[currentTable][dataKeys[0]]);
    const columns = [...Object.keys(data[currentTable][dataKeys[0]])];

    const body = [...Object.keys(data[currentTable])];

    // search for assetId in other tables
    const links = body.find(key => { });


    const [rows, setRows] = useState(data[currentTable]); // why is this not 
    console.log(rows);


    // do this by modifing the "data[currentTable]" which is an Array and should be change to a React State type variable
    const sortByColumn = (columnIndex) => {
        // console.log(rows[Object.keys(rows)[columnIndex]]);

        // setRows(
        //     rows.sort()
        // );
    }
    const resizeColumn = (column) => {

    }

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
                <div className="overflow-x-auto scrollbar-custom"> {/* Added wrapper div with overflow-x-auto */}
                    {/* The Table should be scrollable x-wise */}
                    <table className="max-w-full min-w-[500px] overflow-x-scroll scrollbar-custom">
                        <thead>
                            <tr className="divide-x divide-solid bg-black text-left max-h-4">{headers.map((key, index) => {
                                return <th className="w-80 max-w-80 max-h-inherit  overflow-x-scroll scrollbar-custom" key={key}><ContextMenu className="w-full py-0 px-5"
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
                                return (<tr className="divide-x divide-solid max-h-4" key={`row${index}`}>
                                    {Object.keys(row).map((cell, cellIndex) => {

                                        // add the custom Types here


                                        switch (typeof row[cell]) {
                                            case "object":
                                            case "array":
                                                console.log(`Cell has a type of: ${typeof row[cell]}`);
                                                // You could render this more appropriately depending on the structure
                                                return (
                                                    <td className="max-h-8 w-80 max-w-80 max-h-inherit overflow-x-scroll scrollbar-custom" key={`cell${cellIndex}`}>
                                                        {JSON.stringify(row[cell])}
                                                    </td>
                                                );
                                            default:
                                                return (
                                                    <td className="max-h-8 w-80 max-w-80 max-h-inherit overflow-x-scroll scrollbar-custom" key={`cell${cellIndex}`}>
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