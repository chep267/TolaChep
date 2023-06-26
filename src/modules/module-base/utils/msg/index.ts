/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { createMessageIntl } from '@module-base/utils';

export const EN_BASE = {
    'module.base.component.input.change.placeholder': 'Aa...',
    'module.base.component.input.search.placeholder': 'Search...',

    'module.base.component.button.cancel.text': 'Cancel',
    'module.base.component.button.ok.text': 'Ok',
    'module.base.component.button.continue.text': 'Ok and continue',

    'module.base.component.tree.text.loading': 'Loading...',
    'module.base.component.tree.text.empty': 'Empty data!',
} as const;

export const VI_BASE = {
    'module.base.component.input.change.placeholder': 'Aa...',
    'module.base.component.input.search.placeholder': 'Tìm kiếm...',

    'module.base.component.button.cancel.text': 'Hủy',
    'module.base.component.button.ok.text': 'Đồng ý',
    'module.base.component.button.continue.text': 'Đồng ý và tiếp tục',

    'module.base.component.tree.text.loading': 'Đang tải...',
    'module.base.component.tree.text.empty': 'Danh sách trống!',
} as const;

export const baseMessage = createMessageIntl(VI_BASE);
