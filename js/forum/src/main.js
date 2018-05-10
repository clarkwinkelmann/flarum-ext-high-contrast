import app from 'flarum/app';
import addAppClass from 'clarkwinkelmann/high-contrast/addAppClass';
import addSettings from 'clarkwinkelmann/high-contrast/addSettings';

app.initializers.add('clarkwinkelmann-high-contrast', () => {
    addAppClass();
    addSettings();
});
