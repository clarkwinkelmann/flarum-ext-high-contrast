<?php

namespace ClarkWinkelmann\HighContrast;

use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listeners\Assets::class);
    $events->subscribe(Listeners\Preferences::class);
};
