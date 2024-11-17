import Cookie from 'js-cookie';
import { LaptopMinimal, Mouse } from 'lucide-react'
// import Popup from './components/popup';
import Table from './components/table.jsx';



function Main({ data }) {
    return (
        <div className="w-screen bg-neutral-900 text-gray-300 flex flex-col items-center">

            {/* <Popup>
                <h2 className="text-2xl font-semibold mb-2 text-white">Welcome!</h2>

                <div className="flex flex-row justify-center align-center">
                    <LaptopMinimal size={20} />
                    <p className="max-w-prose w-11/12 mb-6">For the best experience, please use this app on a desktop computer, as it's not optimized for mobile devices.</p>
                </div>
                <div className="flex flex-row justify-center align-center">
                    <Mouse size={20} />
                    <p className="max-w-prose w-11/12 mb-6">Right-click to start adding markers and measuring distances.</p>
                </div>
                <div className="flex flex-row justify-center align-center">
                    <Cookie size={20} />
                    <p className="max-w-prose w-11/12 mb-6">This app uses cookies to remember your settings.</p>
                </div>
            </Popup> */}



            <Table data={data} />



            <p className="text-sm text-zinc-400 mt-20">
                The table has cells, which are keyboard controllable, and the headers / header-row has a custom contextMenu/dropdown. Furthermore, the Data is dynamically rendered based on only this data: 
                <a className="text-sky-700 hover:text-blue-800 hover:underline" href="https://github.com/SimonGubitz/erp-system/blob/main/src/assets/sample.json">JSON</a>
                <br/>
                Each ID is detected, and has links to a custom page with more details about the thing that was clicked on.
            </p>

        </div>
    );
}


export default Main;