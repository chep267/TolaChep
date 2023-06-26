/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author dongntd267@gmail.com on 10/11/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import * as React from 'react';
import classnames from 'classnames';

// components
import ListTitle from '@snw-components/web-antd-custom/ListBase/components/ListTitle';
import ListContent from '@snw-components/web-antd-custom/ListBase/components/ListContent';
import ListSearch from '@snw-components/web-antd-custom/ListBase/components/ListSearch';

// styles
import styles from './styles/index.local.less';

// utils
import type { ListBaseProps } from '@snw-components/web-antd-custom/ListBase/utils/type';
import useListHook from '@snw-components/web-antd-custom/ListBase/utils/useListHook';

export { default as ListItemBase } from './components/ListItemBase';
export default function ListBase(props: ListBaseProps) {
    const { wrapClassName, title, inputSearchProps, ...contentProps } = props;
    const listHook = useListHook();

    return (
        <div className={classnames(styles['list-base-wrap'], wrapClassName, 'list-base-wrap')}>
            <ListTitle title={title} />
            <ListSearch visible={!!inputSearchProps} {...inputSearchProps} onKeyDown={listHook.onKeyPress} />
            <ListContent {...contentProps} listHook={listHook} />
        </div>
    );
}
