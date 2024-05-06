sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sample/test/integration/FirstJourney',
		'sample/test/integration/pages/A_SalesOrderList',
		'sample/test/integration/pages/A_SalesOrderObjectPage'
    ],
    function(JourneyRunner, opaJourney, A_SalesOrderList, A_SalesOrderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sample') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheA_SalesOrderList: A_SalesOrderList,
					onTheA_SalesOrderObjectPage: A_SalesOrderObjectPage
                }
            },
            opaJourney.run
        );
    }
);