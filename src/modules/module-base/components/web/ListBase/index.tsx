/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** components */
import { ListBaseElement, ListTitle, ListContent, ListItemBase } from '@module-base/components/web/ListBase/components';

/** types */
import type { ListBaseProps } from '@module-base/models';

function ListBase(props: ListBaseProps) {
    const { className, titleProps, searchProps, contentProps } = props;

    return (
        <ListBaseElement className={className}>
            <ListTitle {...titleProps} />
            <ListContent searchProps={searchProps} contentProps={contentProps} />
        </ListBaseElement>
    );
}

export { ListItemBase };
export default ListBase;
