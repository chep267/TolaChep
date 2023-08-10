/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Typography } from 'antd';

/** components */
import { ListTitleElement } from '../Layout';

/** types */
import type { ListTitleProps } from '@module-base/models';

const ListTitle = React.memo(
    (props: ListTitleProps) => {
        const { title, className } = props;

        return (
            typeof title === 'string' || typeof title === 'number' ? (
                <ListTitleElement className={className}>
                    <Typography.Text>{title}</Typography.Text>
                </ListTitleElement>
            ) : (
                title
            )
        ) as React.ReactElement;
    },
    (prev, next) => prev.title === next.title
);

ListTitle.displayName = 'ListTitle';
export default ListTitle;
