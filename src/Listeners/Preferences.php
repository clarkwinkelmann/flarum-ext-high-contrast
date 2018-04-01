<?php

namespace ClarkWinkelmann\HighContrast\Listeners;

use Flarum\Event\ConfigureUserPreferences;
use Illuminate\Contracts\Events\Dispatcher;

class Preferences
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureUserPreferences::class, [$this, 'addUserPreference']);
    }

    public function addUserPreference(ConfigureUserPreferences $event)
    {
        $event->add('clarkwinkelmannHighContrast', 'boolval', false);
    }
}
