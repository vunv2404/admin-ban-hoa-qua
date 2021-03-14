import CategoryRequest from './CategoryRequest';
import ProductRequest from './ProductRequest';
import AdminRequest from './AdminRequest';
import AccountRequest from './AccountRequests';
import OrderRequest from './OrderRequest';
import ImportRequest from './ImportRequest';
import VendorsRequest from './VendorsRequest';


const requestMap = {
    CategoryRequest,
    ProductRequest,
    AdminRequest,
    AccountRequest,
    OrderRequest,
    ImportRequest,
    VendorsRequest,
};

const instances = {};

export default class RequestFactory {
    static getRequest(classname) {
        const RequestClass = requestMap[classname];
        if (!RequestClass) {
            throw new Error(`Invalid request class name: ${classname}`);
        }

        let requestInstance = instances[classname];
        if (!requestInstance) {
            requestInstance = new RequestClass();
            instances[classname] = requestInstance;
        }
        return requestInstance;
    }
    
}