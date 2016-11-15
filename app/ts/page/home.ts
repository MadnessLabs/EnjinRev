/// <reference path="../../typings/index.d.ts"/>
declare var ___browserSync___;
module EnjinRev {
    'use strict';

    class HomeController {
        modal: any;
        type: string;
        addForm: any;
        appFrame: any;
        currentUrl: string;

        constructor(
            protected $ionicModal,
            protected $scope
        ) {
            // ON LOAD            
            this.$ionicModal.fromTemplateUrl('html/modal/add.html', {
                scope: this.$scope,
                animation: 'slide-in-up',
                backdropClickToClose: true
            }).then((modal) => {
                this.modal = modal;
            });

            this.appFrame = document.getElementById('appFrame');
            this.appFrame.addEventListener('load', () => {
                this.appFrame.contentWindow.postMessage({type: 'init'}, `http://localhost:3000`);
            });
            
            window.addEventListener('message', this.receiveMessage.bind(this), false);
        }
        
        changeUrl(hash) {
            this.appFrame.contentWindow.postMessage({type: 'url', hash: hash}, `http://localhost:3000`);
        }

        receiveMessage(event) {
            this.currentUrl = event.data.hash;
            this.$scope.$apply();
        }

        closeForm() {
            this.modal.hide();
        }

        add(type) {
            this.broadcast('add-' + type.toLowerCase(), this.addForm);
            this.closeForm();
            this.addForm = {};
        }

        openForm(type) {
            this.type = type;
            this.modal.show();
        }

        broadcast(name, data) {
            console.log(name, data);
            ___browserSync___.socket.emit(`enjin-${name}`, data);
        }
    }

    angular.module('EnjinRev')
           .controller('EnjinRev.HomeController', HomeController);
}