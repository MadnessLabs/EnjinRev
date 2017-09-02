/// <reference path="../../typings/index.d.ts"/>
module EnjinRev {
    'use strict';

    class MenuRoutesController {
        routes:any = [];
        
        constructor(
            protected enjin
        ) {
            // ON LOAD     
            if (this.enjin.json) {
                this.routes = this.enjin.json.routes;
            }  
        }
    }

    angular.module('EnjinRev')
           .controller('EnjinRev.MenuRoutesController', MenuRoutesController);
}