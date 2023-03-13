/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { createActionKey } from '@module-base/utils';

const arrActionKey = ['START_APP', 'AUTO_START'] as const;
export const GLOBAL_ACTION = createActionKey('GLOBAL_ACTION', arrActionKey);
