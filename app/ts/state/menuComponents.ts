/// <reference path="../../typings/index.d.ts"/>
module EnjinRev {
    'use strict';

    class MenuComponentsController {
        components:any = [];
        constructor(
            protected enjin
        ) {
            // ON LOAD     
            if (this.enjin.json && this.enjin.json.components) {
                this.components = this.enjin.json.components;
            }
            
        }
    }

    angular.module('EnjinRev')
           .controller('EnjinRev.MenuComponentsController', MenuComponentsController);
}