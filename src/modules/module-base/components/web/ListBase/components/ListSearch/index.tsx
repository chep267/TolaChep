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

// components
import { InputSearch } from '@snw-components/web-antd-custom/InputBase';

// styles
import styles from '@snw-components/web-antd-custom/ListBase/styles/index.local.less';

// utils
import type { ListSearchProps } from '@snw-components/web-antd-custom/ListBase/utils/type';

const ListSearch = React.memo((props: ListSearchProps) => {
    const { visible, className, ...otherProps } = props;

    if (!visible) {
        return null;
    }

    return <InputSearch className={classnames(styles['list-base-search'], className, 'list-base-search')} {...otherProps} />;
});

ListSearch.displayName = 'ListSearch';
export default ListSearch;
