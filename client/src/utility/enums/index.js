
///Base Url
const {
    REACT_APP_BASE_URL_SERVER_API,
    REACT_APP_BASE_URL_LOCAL_API,
    REACT_APP_BASE_URL_LOCAL_HOST,
    REACT_APP_BASE_URL_SERVER_LOCAL_HOST,
    REACT_APP_BASE_URL_LOCAL_API_TEST
} = process.env;

const mode = "production";

export const baseUrl = process.env.NODE_ENV === mode ? REACT_APP_BASE_URL_SERVER_API : REACT_APP_BASE_URL_LOCAL_API; // Exact API
//export const baseUrl = process.env.NODE_ENV === mode ? REACT_APP_BASE_URL_SERVER_API : REACT_APP_BASE_URL_LOCAL_API_TEST; // Exact API
export const localUrl = process.env.NODE_ENV === mode ? REACT_APP_BASE_URL_SERVER_LOCAL_HOST : REACT_APP_BASE_URL_LOCAL_HOST; ///For Default Photo or Files
// process.env.NODE_ENV === 'development' || !process.env.NODE_ENV === 'production'

export const defaultUnitId = process.env.NODE_ENV === mode ? 3 : 1;

export const authCredential = {
    userName: '',
    password: '',
    grant_type: 'password',
    client_id: 'quadrion.client',
    client_secret: 'secret',
    scope: 'quadrionErpAPI openid profile'
};
export const cookieName = "auth-q-cookie";

const baseModule = localStorage.getItem( 'module' );
export const baseRoute = baseModule === "Merchandising" ? "/merchandising" : baseModule === "Inventory" ? "/inventory" : baseModule === "Users" ? "/auth" : "";
// export const navRoutePermission = {
//     style: {
//         list: "Style.List"
//     },
//     purchaseOrder: {
//         list: "PurchaseOrder.List"
//     },
//     costing: {
//         list: "Costing.List"
//     },
//     consumption: {
//         list: "Consumption.List"
//     },
//     bom: {
//         list: "Bom.List"
//     },
//     budget: {
//         list: "Budget.List"
//     },
//     packaging: {
//         list: "Packaging.List"
//     },
//     ipo: {
//         list: "IPO.List"
//     },
//     ipi: {
//         list: "IPI.List"
//     },
//     buyer: {
//         list: "Buyer.List"
//     },
//     buyerAgent: {
//         list: "Agent.List"
//     },
//     buyerDepartment: {
//         list: "BuyerDepartment.List"
//     },
//     buyerProductDeveloper: {
//         list: "ProductDeveloper.List"
//     },
//     color: {
//         list: "GarmentColor.List"
//     },
//     size: {
//         list: "GarmentSize.List"
//     },
//     sizeGroup: {
//         list: "GarmentSizeGroup.List"
//     },
//     season: {
//         list: "Season.List"
//     },
//     styleCategory: {
//         list: "StyleCategory.List"
//     },
//     styleDepartment: {
//         list: "StyleDepartment.List"
//     },
//     styleDivision: {
//         list: "StyleDivision.List"
//     },
//     styleProductCategory: {
//         list: "StyleProductCategory.List"
//     },
//     media: {
//         list: "Media.List"
//     },
//     role: {
//         list: "Role.List"
//     },
//     user: {
//         list: "User.List"
//     },
//     antonymous: 'antonymous'
// };

///Style Status
export const userStatus = [
    { value: 'WaitingForConfirmation', label: 'WaitingForConfirmation' },
    { value: 'Confirmed', label: 'Confirmed' }

];
///Style Status
export const isYesNo = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }

];
export const source = [
    { value: 'Foreign LC', label: 'Foreign LC' },
    { value: 'InLand LC', label: 'InLand LC' },
    { value: 'Non LC', label: 'Non LC' },
    { value: 'FDD Local', label: 'FDD Local' },
    { value: 'TT', label: 'TT' }

];
export const styleStatus = [
    { value: 'Inquiry', label: 'Inquiry' },
    { value: 'Confirmed PO', label: 'Confirmed PO' },
    { value: 'Shipped', label: 'Shipped' },
    { value: 'Closed', label: 'Closed' },
    { value: 'In Production', label: 'In Production' }
];

export const itemGroupType = [
    { value: 'Fabric', label: 'Fabric' },
    { value: 'Accessories', label: 'Accessories' }
    // { value: 'Packaging', label: 'Packaging' }
];
///Costing Status
export const costingStatus = [
    { value: 'Draft', label: 'Draft' },
    { value: 'Approved', label: 'Approved' },
    { value: 'Submitted', label: 'Submitted' },
    { value: 'Pre-Costing', label: 'Pre-Costing' }
];

///Procurement Status
export const procurementStatus = [
    { value: 'Draft', label: 'Draft' },
    { value: 'Approved', label: 'Approved' }
];
///Procurement Status
export const budgetStatus = [
    { value: 'Draft', label: 'Draft' },
    { value: 'Approved', label: 'Approved' }
];
///Costing Status
export const orderStatus = [{ value: 'Approved', label: 'Approved' }];
//export const defaultUnitId = 1;
///Costing Methods
export const selectCostingMethod = [
    { value: 'LIFO', label: 'LIFO' },
    { value: 'FIFO', label: 'FIFO' },
    { value: 'WEIGHTED_AVERAGE', label: 'WEIGHTED AVERAGE' }
];

export const selectPayTerm = [
    { value: 'CFO', label: 'CFO' },
    { value: 'TT', label: 'TT' },
    { value: 'DD', label: 'DD' },
    { value: 'At-Sight', label: 'At-Sight' },
    { value: 'Usance', label: 'Usance' }
];

export const selectTerm = [
    { value: 1, label: 'FOB' },
    { value: 2, label: 'CFR' },
    { value: 3, label: 'CIF' },
    { value: 4, label: 'EXW' }
];
export const selectPurchaseTerm = [
    { value: 1, label: 'Pre-Procurement' },
    { value: 2, label: 'Post-Procurement' }
];


export const selectGroupType = [
    { value: 1, label: 'Fabric' },
    { value: 2, label: 'Accessories' },
    { value: 3, label: 'Packaging' }
];


export const selectPurchaseType = [
    {
        value: 'IMPORT',
        label: 'IMPORT'
    },
    {
        value: 'LOCAL',
        label: 'LOCAL'
    }
];


export const selectSupplier = [
    {
        value: 1,
        label: 'Milon'
    },
    {
        value: 2,
        label: 'Devid'
    }
];
///Accessories Type

export const selectAccessoriesType = [
    { value: 'Poly', label: 'Poly' },
    { value: 'Box', label: 'Box' }
];


// Currency
export const selectCurrency = [
    { value: 1, label: 'BDT' },
    { value: 2, label: 'USD' },
    { value: 3, label: 'EURO' },
    { value: 4, label: 'JPY' },
    { value: 5, label: 'INR' },
    { value: 6, label: 'GBP' },
    { value: 7, label: 'AUD' },
    { value: 8, label: 'CAD' }
];

///Year
export const selectYear = [
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' }
];
export const selectStyleNo = [
    { value: '4369SMS32-1', label: '4369SMS32-1' },
    { value: '4369SMS32-2', label: '4369SMS32-2' },
    { value: '4369SMS32-3', label: '4369SMS32-3' }

];
///Destination
export const selectDestination = [
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'Australia', label: 'Australia' },
    { value: 'China', label: 'China' },
    { value: 'Japan', label: 'Japan' },
    { value: 'India', label: 'India' }
];
///Unit

export const selectUnit = [
    {
        value: 'PCS',
        label: 'PCS'
    },
    {
        value: 'DZN',
        label: 'DZN'
    },
    {
        value: 'Pair',
        label: 'Pair'
    }
];

export const selectExporter = [
    {
        value: 'RDM',
        label: 'RDM'
    },
    {
        value: 'YOUNG ONE',
        label: 'YOUNG ONE'
    }
];

export const selectShipmentMode = [
    {
        value: 'AIR',
        label: 'AIR'
    },
    {
        value: 'SEA',
        label: 'SEA'
    },
    {
        value: 'ROAD',
        label: 'ROAD'
    }
];

export const selectActionStatus = [
    {
        value: 'APPROVED',
        label: 'APPROVED'
    },
    {
        value: 'PENDING',
        label: 'PENDING'
    },
    {
        value: 'CONFIRMED',
        label: 'CONFIRMED'
    }
];
export const status = {
    success: 200,
    badRequest: 400,
    notFound: 404,
    severError: 500,
    conflict: 409,
    methodNotAllow: 405
};

//Country Array Demo
export const selectedCountry = [
    { value: 'bangladesh', label: 'Bangladesh' },
    { value: 'india', label: 'India' },
    { value: 'pakistan', label: 'pakistan' },
    { value: 'nepal', label: 'Nepal' }
];

export const consoleType = {
    normal: 'normal',
    stringify: 'stringify'
};
//State Array Demo
export const selectedState = [
    { value: 'bangladesh', label: 'Bangladesh' },
    { value: 'india', label: 'India' },
    { value: 'pakistan', label: 'pakistan' },
    { value: 'nepal', label: 'Nepal' }
];


//Country Array Demo
export const selectedCity = [
    { value: 'chittagong', label: 'Chittagong' },
    { value: 'dhaka', label: 'Dhaka' },
    { value: 'rajshahi', label: 'Rajshahi' },
    { value: 'feni', label: 'Feni' }
];
//Country Array Demo
export const selectColor = [
    { value: 'BLUE', label: 'BLUE' },
    { value: 'RED', label: 'RED' },
    { value: 'GREEN', label: 'GREEN' }
];
//Country Array Demo
export const selectSize = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XLL', label: 'XLL' }
];
//Country Array Demo
export const selectSetStyles = [
    { value: 'SF21MW5504-A', label: 'F21MW5504-A' },
    { value: 'F21MW5504-B', label: 'F21MW5504-B' },
    { value: 'F21MW5504-C', label: 'F21MW5504-C' },
    { value: 'F21MW5504-D', label: 'F21MW5504-D' },
    { value: 'S21MW1504-A', label: 'S21MW1504-A' }
];
export const selectStyles = [
    { value: 'SF21MW5501', label: 'F21MW5501' },
    { value: 'F21MW5502', label: 'F21MW5502' },
    { value: 'F21MW5503', label: 'F21MW5503' },
    { value: 'F21MW5504', label: 'F21MW5504' },
    { value: 'S21MW1505', label: 'S21MW1505' }
];

// ** Season Status filter options: Demo Array
export const statusOptions = [
    { value: true, label: 'Active', number: 1 },
    { value: false, label: 'Inactive', number: 2 }
];

export const statusFor = [
    { value: 'Buyer', label: 'Buyer' },
    { value: 'Buyer Agent', label: 'Buyer Agent' }
];

const selectDivision = [
    {
        value: 'knit',
        label: 'Knit',
        styleDepartment: [
            {
                value: 'man',
                label: 'Man',
                productCategory: [
                    {
                        value: 'top',
                        label: 'Top',
                        styleCategory: [{ value: 't-shirt', label: 'T-Shirt' }]
                    },
                    {
                        value: 'bottom',
                        label: 'Bottom',
                        styleCategory: [{ value: 'short', label: 'Short' }]
                    }
                ]
            },
            {
                value: 'ladies',
                label: 'Ladies',
                productCategory: [
                    { value: 'top', label: 'Top Ladies', styleCategory: [{ value: 'bra', label: 'Bra' }] },
                    { value: 'bottom', label: 'Bottom Ladies', styleCategory: [{ value: 'capri', label: 'Capri' }] }
                ]
            },
            {
                value: 'kid',
                label: 'Kid',
                productCategory: [
                    { value: 'top', label: 'Top Kids', styleCategory: [{ value: 't-shirt', label: 'T-shirt' }] },
                    { value: 'bottom', label: 'Bottom Kids', styleCategory: [{ value: 'pants', label: 'Pants' }] }
                ]
            }

        ]
    }
];


const selectBuyer = [
    {
        value: 'youngLimited',
        label: 'Young Ltd',
        buyerAgent: [{ value: 'youngagent', label: 'Young Agent' }],
        buyerDepartment: [{ value: 'wildfox', label: 'Wild Fox' }],
        buyerProductdeveloper: [{ value: 'abdulKarim', label: 'Abdul Karim' }]
    }
];

export const selectSizeGroups = [
    { value: 'S-M', label: 'S-M' },
    { value: 'S-X', label: 'S-X' },
    { value: 'S-XXL', label: 'S-XXK' },
    { value: 'M-XLL', label: 'M-XLL' }
];


export const selectStatus = [
    { value: 'Approved', label: 'Approved' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Cancel', label: 'Cancel' }
];
export const selectPurpose = [
    { value: 'Material', label: 'Material' },
    { value: 'Service', label: 'Service' }
];
export const selectPurchaser = [{ value: 'RDM APPARELS LTD.', label: 'RDM APPARELS LTD.' }];


export const selectSampleAssignee = [
    { value: 'SohagAbdullah', label: 'Sohag Abdullah' },
    { value: 'MilonMahmud', label: 'Milon Mahmud' }
];
export const selectProductionProcess = [
    { value: 'CSF', label: 'CSF(Cutting, Swing, Finishing)' },
    { value: 'CSDF', label: 'CSDF(Cutting, Swing,Dyeing, Finishing)' }
];


export const selectDocCategory = [
    { value: 'ApprovalLetter', label: 'Approval Letter' },
    { value: 'StyleArtwork', label: 'Style Artwork' },
    { value: 'StyleSampleDoc', label: 'Style Sample Doc' }
];
export const confirmObj = {
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    html: 'You can use <b>bold text</b>',
    confirmButtonText: 'Yes !',
    cancelButtonText: 'No'
};

export const costingConsumptionBodyParts = [
    { value: 'Body', label: 'Body' },
    { value: 'Contrast-1', label: 'Contrast-1' },
    { value: 'Contrast-2', label: 'Contrast-2' },
    { value: 'Contrast-3', label: 'Contrast-3' },
    { value: 'Contrast-4', label: 'Contrast-4' }
];


///For Size  Combination of Set Packaging
export const selectSizeType = [
    { label: 'Solid Size', value: 1 },
    { label: 'Assort Size', value: 2 }
];
export const sizeTypeEnumObj = {
    SolidSize: 'Solid Size',
    assortSize: 'Assort Size'
};

///For Size Color Combination  of Solid Packaging
export const selectSizeColorType = [
    { label: 'Solid Color and Solid Size', value: 1 },
    { label: 'Solid Color and Assort Size', value: 2 },
    { label: 'Assort Color and Solid Size', value: 3 },
    { label: 'Assort Color and Assort Size', value: 4 }
];
export const sizeColorTypeEnumObj = {
    solidColorAndAssortSize: 'Solid Color and Assort Size',
    solidColorAndSolidSize: 'Solid Color and Solid Size',
    assortColorAndSolidSize: 'Assort Color and Solid Size',
    assortColorAndAssortSize: 'Assort Color and Assort Size'
};


// For Amount To In-Word
export const single = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
export const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];