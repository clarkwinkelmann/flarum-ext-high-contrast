import {extend} from 'flarum/extend';
import app from 'flarum/app';
import Page from 'flarum/components/Page';

const ELEM = '#app';
const CLASS_NAME = 'High-Contrast-April-Fools';

export default function () {
    extend(Page.prototype, 'config', function (vdom) {
        if (app.session.user && app.session.user.preferences().clarkwinkelmannHighContrast) {
            $(ELEM).addClass(CLASS_NAME);
        } else {
            $(ELEM).removeClass(CLASS_NAME);
        }
    });
}
