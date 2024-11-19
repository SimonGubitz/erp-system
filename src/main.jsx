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
                Die Daten werden dynamisch nur auf Grundlage dieses Daten gerendert:
                <a className="text-sky-700 hover:text-blue-800 hover:underline" href="https://github.com/SimonGubitz/erp-system/blob/main/src/assets/sample.json">JSON</a><br/>
                Jede ID wird erkannt und enthält Links zu einer benutzerdefinierten Seite mit weiteren Details zu dem angeklickten Element.
            </p>

        </div>
    );
}


export default Main;