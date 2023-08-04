/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';

/** types */
import type { ListTitleProps } from '@module-base/models';
import type { ForwardRefExoticComponent, RefAttributes, HTMLAttributes } from 'react';

/** styles */
const ListTitleElement: ForwardRefExoticComponent<
    HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>
> = styled.div`
    display: flex;
    justify-content: flex-start;
    width: calc(100% - 24px);
    margin: 6px 12px;
    //.text-medium();
    color: var(--text-color-secondary);
`;

const ListTitle = React.memo(
    (props: ListTitleProps) => {
        const { title } = props;

        return (
            typeof title === 'string' || typeof title === 'number' ? (
                <ListTitleElement>
                    <span>{title}</span>
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
