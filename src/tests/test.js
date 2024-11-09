
const data = require("../assets/sample.json");


function fillTableIds() {
    try {
        const tables = Object.keys(data); const currentTable = tables[0]; const dataKeys = Object.keys(data[currentTable]);// const headers = Object.keys(data[currentTable][dataKeys[0]]);
        // const columns = [...Object.keys(data[currentTable][dataKeys[0]])];

        const body = [...Object.keys(data[currentTable])];

        // search for assetId in other tables
        // const links = body.find(key => { });




        rows = data[currentTable]
        const tableIdIndex = []; // fill this up
        tables.forEach((table, tableIndex) => {
            rows.forEach(row => {

                for (const key in row) {
                    if (key.substring(key.length - 2, key.length) === "ID") {

                        const ref = {
                            tableIndex: tableIndex,

                        }

                        tableIdIndex.push(ref);
                    }
                }
            });
        });

        /**
         * {
                assetID: 'A001',
                name: 'Dell Latitude 7400',
                type: 'Laptop',
                serialNumber: 'DLT-7400-ABC123',
                assignedTo: 'John Doe',
                department: 'Sales',
                status: 'Active',
                purchaseDate: '2022-01-15',
                warrantyExpiration: '2025-01-15',
                lastMaintenance: '2023-08-10',
                location: 'Head Office',
                ipAddress: '192.168.1.10',
                macAddress: '00:1A:2B:3C:4D:5E',
                softwareLicenses: [
                    {
                    softwareName: 'Microsoft Office',
                    licenseKey: 'XXXXX-XXXXX-XXXXX-XXXXX',
                    expirationDate: '2024-12-01',
                    licenseID: 'L001'
                    },
                    {
                    softwareName: 'Adobe Photoshop',
                    licenseKey: 'AAAAA-BBBBB-CCCCC-DDDDD',
                    expirationDate: '2025-03-15',
                    licenseID: 'L002'
                    }
                ]
            }
         */
    } catch (error) {
        console.log(error);
    }
}


function findAssetId() {
    const assets = data["assets"];

    console.log(assets);


}


// what to test ↓
findAssetId();