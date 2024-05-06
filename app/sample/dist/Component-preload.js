//@ui5-bundle sample/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"sample/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("sample.Component",{metadata:{manifest:"json"}})});
},
	"sample/i18n/i18n.properties":'# This is the resource bundle for sample\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=sales order\n\n#YDES: Application description\nappDescription=An SAP Fiori application.',
	"sample/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"sample","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.3","toolsId":"116f3fbf-b229-443a-b17a-af050177103f"},"dataSources":{"mainService":{"uri":"odata/v4/sample-cap/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.123.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"sample.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"routes":[{"pattern":":?query:","name":"A_SalesOrderList","target":"A_SalesOrderList"},{"pattern":"A_SalesOrder({key}):?query:","name":"A_SalesOrderObjectPage","target":"A_SalesOrderObjectPage"}],"targets":{"A_SalesOrderList":{"type":"Component","id":"A_SalesOrderList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/A_SalesOrder","variantManagement":"Page","navigation":{"A_SalesOrder":{"detail":{"route":"A_SalesOrderObjectPage"}}},"defaultTemplateAnnotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView"}}},"A_SalesOrderObjectPage":{"type":"Component","id":"A_SalesOrderObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/A_SalesOrder"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"sample.service"}}'
}});
