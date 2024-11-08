import Cookie from 'js-cookie';
import { LaptopMinimal, Mouse } from 'lucide-react'
import Popup from './components/Popup';
import Table from './components/table';



function Main() {


    // Firebase Setup
    const tableData = require("./assets/sample.json");


    return (
        <div className="w-screen min-h-screen bg-neutral-900 text-gray-300 flex flex-col items-center">

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



            <Table data={tableData} />

        </div>
    );
}


export default Main;