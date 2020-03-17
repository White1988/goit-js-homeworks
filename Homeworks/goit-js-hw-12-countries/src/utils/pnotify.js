/* eslint-disable no-unused-vars */
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial';

PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

const pWarning = message =>
  // eslint-disable-next-line implicit-arrow-linebreak
  PNotify.error({
    text: message,
  });

const pNotice = message =>
  // eslint-disable-next-line implicit-arrow-linebreak
  PNotify.notice({
    text: message,
  });

export { pWarning, pNotice };
