System.register(['angular2/core', '../Model/EventTemplateData'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, EventTemplateData_1;
    var EventSettingCpn;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (EventTemplateData_1_1) {
                EventTemplateData_1 = EventTemplateData_1_1;
            }],
        execute: function() {
            EventSettingCpn = (function () {
                function EventSettingCpn() {
                }
                EventSettingCpn.prototype.ngOnInit = function () {
                    this.NowSettingEvent = {
                        TaskName: '',
                        EventName: '扣留',
                        CheckList: [
                            {
                                AttritubeName: 'Lot',
                                AttritubeType: 'System',
                                Caption: '批號',
                                Sequence: 0,
                                CheckOperator: 'Like',
                                CheckType: 'Value',
                                CheckValue: 'CheckValue',
                            }
                        ],
                    };
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', EventTemplateData_1.EventTemplateData)
                ], EventSettingCpn.prototype, "NowSettingEvent", void 0);
                EventSettingCpn = __decorate([
                    core_1.Component({
                        selector: 'EventSetting',
                        templateUrl: 'template/Event/EventSetting.html',
                        styleUrls: ['Style/EventCss.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventSettingCpn);
                return EventSettingCpn;
            }());
            exports_1("EventSettingCpn", EventSettingCpn);
        }
    }
});
//# sourceMappingURL=EventSetting.js.map