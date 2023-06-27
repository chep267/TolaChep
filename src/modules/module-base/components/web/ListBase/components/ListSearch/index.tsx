/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
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
