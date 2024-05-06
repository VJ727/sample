using { API_SALES_ORDER_SRV as salesOrder } from './external/API_SALES_ORDER_SRV';
service sampleCap {
    entity A_SalesOrder as projection on salesOrder.A_SalesOrder {
        A_SalesOrder.SalesOrder,
        A_SalesOrder.SalesOrderType,
        A_SalesOrder.CreationDate,
        A_SalesOrder.TotalNetAmount
    }; 
}
