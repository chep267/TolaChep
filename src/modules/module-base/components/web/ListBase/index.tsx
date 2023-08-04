/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';

// components
import ListTitle from './components/ListTitle';
import ListContent from './components/ListContent';
import ListSearch from './components/ListSearch';

/** utils */
import { useListBase } from '@module-base/utils';

/** types */
import type { ListBaseProps } from '@module-base/models';
import type { ForwardRefExoticComponent, RefAttributes, HTMLAttributes } from 'react';

/** styles */
const ListBaseElement: ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>> = styled.div`
    display: flex;
    position: relative;
    flex: 1;
    align-items: center;
    flex-direction: column;
    overscroll-behavior: none;
    * {
        box-sizing: border-box;
    }
`;

export default function ListBase(props: ListBaseProps) {
    const { wrapClassName, title, inputSearchProps, ...contentProps } = props;
    const listHook = useListBase();

    return (
        <ListBaseElement className={wrapClassName}>
            <ListTitle title={title} />
            <ListSearch visible={!!inputSearchProps} {...inputSearchProps} onKeyDown={listHook.onKeyPress} />
            <ListContent {...contentProps} listHook={listHook} />
        </ListBaseElement>
    );
}
