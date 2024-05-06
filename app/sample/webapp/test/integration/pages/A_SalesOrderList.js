sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sample',
            componentId: 'A_SalesOrderList',
            contextPath: '/A_SalesOrder'
        },
        CustomPageDefinitions
    );
});