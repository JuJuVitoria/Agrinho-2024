import { setupNav } from './modules/nav.js';
import { setupTheme } from './modules/theme.js'
import { setupFontSize } from './modules/fontSizeControl.js';

document.addEventListener('DOMContentLoaded', function () {
    setupNav();
    setupTheme();
    setupFontSize();
});