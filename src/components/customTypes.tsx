/**
 * Basically just scripts to recognize custom formats such as Dates and Times, Names, Emails, Phone Numbers and IDs, 
 * all in the context of their nesting
 * 
 * 
 */


import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { SquareArrowOutUpRight, ChevronLeft, ChevronRight, SpaceIcon } from "lucide-react";
import Switch from './switch.jsx';
// import utilityTypes from '../assets/utilityTypes.json';

type FieldType = "phoneNumber" |
    "email" |
    "string" |
    "number" |
    "object" |
    "array" |
    "date" |
    "structuredField" |
    "id";

type Field<T extends FieldType> = {
    type: T;
    value: string | number | object | Date; // Adjusting to handle all values as per type
};


type ReferenceItem = { id: string, name: string };
const validateIDLink = (id: string, referenceArray: ReferenceItem[]): boolean => {
    return referenceArray.some(item => item.id === id);
};


const validateDate = (dateString: string) => {
    return !isNaN(Date.parse(dateString));
};

const stringToBoolean = (stringValue: string) => {
    switch (stringValue?.toLowerCase()?.trim()) {
        case "true":
        case "yes":
        case "1":
            return true;

        case "false":
        case "no":
        case "0":
        case null:
        case undefined:
            return false;

        default:
            return JSON.parse(stringValue);
    }
}

const renderLink = ({link, content} : {link: string, content: string}) : React.ReactNode => {
        return <Link to={link} className="flex flex-row justify-evenly items-center">
        {content}
        <SquareArrowOutUpRight size={16} />
    </Link>
}



const FormatedUtilityTypes = ({ data, editable, isNestedArray = false }: { data: Field<any>, editable: boolean, isNestedArray: boolean }): React.ReactNode => {
    const boolState = useRef(true);
    const [currentPage, setCurrentPage] = useState(1);
    const cellName = data[Object.keys(data)[0].toString()];
    const cellType = Array.isArray(data) ? "array" : typeof data["type"] === "object" ? data["type"]["type"] : data["type"]; // either array or the customTypes


    let returnValue: React.ReactNode = <></>;

    switch (cellType) {
        case 'id':
            returnValue = <div className="text-sm text-sky-700 hover:text-blue-800 hover:underline">
                <Link to={"./" + data["type"]["linkTo"].split("/")[0] + "/" + cellName} className="flex flex-row justify-evenly items-center">
                    {cellName}
                    <SquareArrowOutUpRight size={16} />
                </Link>
            </div>
            break;
        case 'date':
            returnValue = <div className="text-sm">{cellName}<CalendarSelectionNode data={cellName} /></div>
            break;
        case 'string':
            returnValue = <div className="text-sm">{cellName}</div>
            break;
        case 'structuredField':
            let values = [{}];
            const wrapperValues = Object.values(data).slice(0, Object.values(data).length - 1).forEach((e) => {
                const newValue = {};
                const firstKey = Object.keys(e)[0];
                newValue[firstKey] = e[firstKey];
                values.push(newValue);
            });

            returnValue = <div>
                {values.map((element, index : number) : React.ReactNode => {
                    return <div className="flex flex-row items-center justify-between text-xs" key={index}>
                        <span>{JSON.stringify(element)}</span>
                        <div className="text-xs"></div>
                    </div>;
                })}
            </div>
        case 'array':
            if (Array.isArray(data)) { // semantics
                if (isNestedArray) {
                    console.log("isNestedArray in structuredField");
                    returnValue = <button className="rounded border">See Array</button>
                    break;
                }
                returnValue = <div className="flex flex-col">
                    <PaginationSelector className="text-xs" pages={data.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />

                    {/* ↓ Send it in again, but check if it is not just another Array */}
                    <FormatedUtilityTypes data={data[currentPage - 1]} editable={editable} isNestedArray={true} />
                </div>
            }
            break;
        case 'boolean':
            boolState.current = stringToBoolean(data["type"]["boolValue"].toString()); // set the state to the cell specific data
            // console.log(`boolState.current: ${boolState.current}`);
            // console.log(`boolState type: ${typeof boolState.current}`);
            returnValue = <div className="text-sm flex flex-row justify-evenly items-center">
                {cellName}
                <Switch locked={editable} dataState={boolState.current} />
            </div>
            break;
        case 'number':
            returnValue = <div className="text-sm">{cellName.toLocaleString()}</div>
            break;
        default:
            returnValue = <>{cellName}</>
    }

    // add a switch toggle if it is a boolean
    // add the calendar if it is a date
    // add a hover popup over it with a link if it is a mail or a phone number


    return returnValue;
}


export { FormatedUtilityTypes };










const PaginationSelector = ({ pages, className = "", currentPage, setCurrentPage }) => {

    const handlePageChange = (modifier) => {
        const newPage = currentPage + modifier;
        if (newPage > 0 && newPage <= pages.length) {
            setCurrentPage(newPage);
        }
    };

    const styleDescriptor = `flex flex-row justify-end ${className ?? ""}`;

    return (
        <div className={styleDescriptor}>
            <button onClick={() => handlePageChange(-1)} className={currentPage === 1 ? "text-gray-600" : "text-gray-300"}><ChevronLeft size={15} /></button>
            <span className={className ?? ""}>{currentPage}</span>
            <button onClick={() => handlePageChange(1)} className={currentPage - 1 === pages.length ? "text-gray-600" : "text-gray-300"}><ChevronRight size={15} /></button>
        </div>
    );
}


const CalendarSelectionNode: React.FC<{ data: Field<any> }> = (data) => {

    const [showCalendar, setShowCalendar] = useState(false);

    return (showCalendar && <div className="rounder-md border-slate-500 flex flex-col divide-y">
        <h4>Calendar</h4>
        <div>
            <div className="flex flex-row">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
            </div>
        </div>
    </div>);
};

