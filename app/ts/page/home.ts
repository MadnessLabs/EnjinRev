/// <reference path="../../typings/index.d.ts"/>
declare var ___browserSync___;
module EnjinRev {
    'use strict';

    class HomeController {
        constructor(
            
        ) {
            // ON LOAD       
        }

        addPage(name) {
            ___browserSync___.socket.emit('enjin-add-page', {
                name: name
            });
        }
    }

    angular.module('EnjinRev')
           .controller('EnjinRev.HomeController', HomeController);
}