const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    const { A_SalesOrder } = this.entities;
    const service = await cds.connect.to('API_SALES_ORDER_SRV');
    this.on('READ', A_SalesOrder, request => {
        return service.tx(request).run(request.query);
    });
});
