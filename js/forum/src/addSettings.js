import {extend} from 'flarum/extend';
import app from 'flarum/app';
import SettingsPage from 'flarum/components/SettingsPage';
import FieldSet from 'flarum/components/FieldSet';
import Switch from 'flarum/components/Switch';

export default function () {
    extend(SettingsPage.prototype, 'settingsItems', function (items) {
        items.add('clarkwinkelmann-high-contrast',
            FieldSet.component({
                label: app.translator.trans('clarkwinkelmann-high-contrast.forum.settings.section.title'),
                children: [
                    Switch.component({
                        children: app.translator.trans('clarkwinkelmann-high-contrast.forum.settings.high-contrast.label'),
                        state: this.user.preferences().clarkwinkelmannHighContrast,
                        onchange: this.preferenceSaver('clarkwinkelmannHighContrast'),
                    }),
                ],
            })
        );
    });
}
