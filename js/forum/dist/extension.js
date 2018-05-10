'use strict';

System.register('clarkwinkelmann/high-contrast/addAppClass', ['flarum/extend', 'flarum/app', 'flarum/components/Page'], function (_export, _context) {
    "use strict";

    var extend, app, Page, ELEM, CLASS_NAME;

    _export('default', function () {
        extend(Page.prototype, 'config', function (vdom) {
            if (app.session.user && app.session.user.preferences().clarkwinkelmannHighContrast) {
                $(ELEM).addClass(CLASS_NAME);
            } else {
                $(ELEM).removeClass(CLASS_NAME);
            }
        });
    });

    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }],
        execute: function () {
            ELEM = '#app';
            CLASS_NAME = 'High-Contrast-April-Fools';
        }
    };
});;
'use strict';

System.register('clarkwinkelmann/high-contrast/addSettings', ['flarum/extend', 'flarum/app', 'flarum/components/SettingsPage', 'flarum/components/FieldSet', 'flarum/components/Switch'], function (_export, _context) {
    "use strict";

    var extend, app, SettingsPage, FieldSet, Switch;

    _export('default', function () {
        extend(SettingsPage.prototype, 'settingsItems', function (items) {
            items.add('clarkwinkelmann-high-contrast', FieldSet.component({
                label: app.translator.trans('clarkwinkelmann-high-contrast.forum.settings.section.title'),
                children: [Switch.component({
                    children: app.translator.trans('clarkwinkelmann-high-contrast.forum.settings.high-contrast.label'),
                    state: this.user.preferences().clarkwinkelmannHighContrast,
                    onchange: this.preferenceSaver('clarkwinkelmannHighContrast')
                })]
            }));
        });
    });

    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsSettingsPage) {
            SettingsPage = _flarumComponentsSettingsPage.default;
        }, function (_flarumComponentsFieldSet) {
            FieldSet = _flarumComponentsFieldSet.default;
        }, function (_flarumComponentsSwitch) {
            Switch = _flarumComponentsSwitch.default;
        }],
        execute: function () {}
    };
});;
'use strict';

System.register('clarkwinkelmann/high-contrast/main', ['flarum/app', 'clarkwinkelmann/high-contrast/addAppClass', 'clarkwinkelmann/high-contrast/addSettings'], function (_export, _context) {
    "use strict";

    var app, addAppClass, addSettings;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_clarkwinkelmannHighContrastAddAppClass) {
            addAppClass = _clarkwinkelmannHighContrastAddAppClass.default;
        }, function (_clarkwinkelmannHighContrastAddSettings) {
            addSettings = _clarkwinkelmannHighContrastAddSettings.default;
        }],
        execute: function () {

            app.initializers.add('clarkwinkelmann-high-contrast', function () {
                addAppClass();
                addSettings();
            });
        }
    };
});