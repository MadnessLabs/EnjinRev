/// <reference path="../../typings/index.d.ts"/>
module EnjinRev {
    'use strict';

    class LoginController {
        constructor(
            protected enjin,
            protected $state
        ) {
            // ON LOAD       
        }

        login(type) {
            this.enjin.auth.withSocial(type, () => {
                this.$state.go('menu.add');
            });
        }
    }

    angular.module('EnjinRev')
           .controller('EnjinRev.LoginController', LoginController);
}