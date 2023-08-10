/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { theme } from 'antd';

/** components */
import { ListSearchElement } from '../Layout';
import { InputChange } from '@module-base/components/web';

/** types */
import type { ListSearchProps } from '@module-base/models';

const ListSearch = React.memo((props: ListSearchProps) => {
    const {
        token: { colorBorderBg },
    } = theme.useToken();

    return (
        <ListSearchElement $colorBg={colorBorderBg}>
            <InputChange size="large" mode="search" {...props} />
        </ListSearchElement>
    );
});

ListSearch.displayName = 'ListSearch';
export default ListSearch;
