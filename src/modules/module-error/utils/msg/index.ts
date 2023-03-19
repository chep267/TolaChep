/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { createMessageIntl } from '@module-base/utils';

export const EN_ERROR = Object.freeze({
    'module.error.fallback.title': 'An error occurred',
    'module.error.fallback.content': 'Please try to run the application again',
    'module.error.fallback.retry': 'Retry',
    'module.error.fallback.autoReload': '(Auto rerun after {value} seconds)',
});

export const VI_ERROR = Object.freeze({
    'module.error.fallback.title': 'Đã xảy ra lỗi',
    'module.error.fallback.content': 'Bạn hãy thử chạy lại ứng dụng',
    'module.error.fallback.retry': 'Thử lại',
    'module.error.fallback.autoReload': '(Tự động chạy lại sau {value} giây)',
});

export const errorMessage = createMessageIntl(VI_ERROR);
