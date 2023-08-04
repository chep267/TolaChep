/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** components */
import { InputChange } from '@module-base/components/web';

/** types */
import type { ListSearchProps } from '@module-base/models';

const ListSearch = React.memo((props: ListSearchProps) => {
    const { visible, ...otherProps } = props;

    return visible ? null : <InputChange {...otherProps} />;
});

ListSearch.displayName = 'ListSearch';
export default ListSearch;
