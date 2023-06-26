/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { createMessageIntl } from '@module-base/utils';

export const EN_ERROR = {
    'module.error.fallback.title': 'An error occurred',
    'module.error.fallback.content': 'Please try to run the application again',
    'module.error.fallback.retry': 'Retry',
    'module.error.fallback.autoReload': '(Auto reload after {value} seconds)',
} as const;

export const VI_ERROR = {
    'module.error.fallback.title': 'Đã xảy ra lỗi',
    'module.error.fallback.content': 'Bạn hãy thử chạy lại ứng dụng',
    'module.error.fallback.retry': 'Thử lại',
    'module.error.fallback.autoReload': '(Tự động tải lại sau {value} giây)',
} as const;

export const errorMessage = createMessageIntl(VI_ERROR);
