/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author dongntd267@gmail.com on 09/06/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import * as React from 'react';
import classnames from 'classnames';

// styles
import styles from '@snw-components/web-antd-custom/ListBase/styles/index.local.less';

// utils
import type { ListTitleProps } from '@snw-components/web-antd-custom/ListBase/utils/type';

const ListTitle = React.memo(
    (props: ListTitleProps) => {
        const { title } = props;

        return !title
            ? null
            : ((typeof title === 'string' || typeof title === 'number' ? (
                  <div className={classnames(styles['list-base-title'], 'list-base-title')}>
                      <span>{title}</span>
                  </div>
              ) : (
                  title
              )) as React.ReactElement);
    },
    (prev, next) => prev.title === next.title
);

ListTitle.displayName = 'ListTitle';
export default ListTitle;
