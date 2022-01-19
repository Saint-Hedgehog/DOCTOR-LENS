import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initAccordion} from './modules/accordion';
import {initSelect} from './modules/select';
import {initSlider} from './modules/slider';
import {initMask} from './modules/mask';
import {initFormValidate} from './modules/form-validate';
import {initTabs} from './modules/tabs';
import {initDiagrams} from './modules/diagrams';
import {initLazyLoad} from './modules/lazyLoad';
import {initStarRating} from './modules/star-rating';

import {initWebP} from './modules/webp';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initAccordion();
initSelect();
initSlider();
initMask();
initFormValidate();
initTabs();
initDiagrams();
initLazyLoad();
initStarRating();

initWebP();
