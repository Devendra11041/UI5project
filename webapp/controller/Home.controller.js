sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.app.project1.controller.Home", {
            onInit: function () {
                const oPerson = {
                    employee: {
                        EmployeeName: "Dev",
                        EmployeeAge: 22,
                        ContractStarted: new Date(),
                        Email: "devgoud.@gmail.com"
                    }
                }
                const oPerson1 = {
                    employee: {
                        EmployeeName: "Goud",
                        EmployeeAge: 22,
                        ContractStarted: new Date(),
                        Email: "devendragoud.@gmail.com"
                    }
                }
                const oJsonModel = new JSONModel(oPerson);
                const oJsonModel1 = new JSONModel(oPerson1);
                this.getView().setModel(oJsonModel1,"oJsonModel1");


            }
        });
    });
