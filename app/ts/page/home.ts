/// <reference path="../../typings/index.d.ts"/>
declare var bs;
module EnjinRev {
    'use strict';

    class HomeController {
        constructor(
            
        ) {
            // ON LOAD       
        }

        addPage(name) {
            bs.sockets.emit('enjin-add-page', {});
        }
    }

    angular.module('EnjinRev')
           .controller('EnjinRev.HomeController', HomeController);
}