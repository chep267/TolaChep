/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { theme } from 'antd';

/** components */
import { ListItemElement } from '../Layout';

/** constants */
import { emptyFunction } from '@module-base/constants';

/** types */
import type { ListItemProps } from '@module-base/models';

const ListItem = React.memo((props: ListItemProps) => {
    const { item, index, isHovered, isSelected, onClick = emptyFunction, renderItem } = props;
    const itemRef: React.RefObject<HTMLElement> = React.useRef(null);

    const {
        token: { colorPrimaryHover },
    } = theme.useToken();

    React.useEffect(() => {
        if (isHovered) {
            itemRef?.current?.scrollIntoView({ block: 'end', inline: 'nearest', behavior: 'smooth' });
        }
    }, [isHovered]);

    React.useEffect(() => {
        if (isSelected) {
            handleClick();
        }
    }, [isSelected]);

    const handleClick = React.useCallback(() => onClick(item, index), []);

    return (
        <ListItemElement
            ref={itemRef}
            type="default"
            $isHovered={isHovered}
            $isSelected={isSelected}
            $colorBgHover={colorPrimaryHover}
            onClick={handleClick}>
            {typeof renderItem === 'function' ? renderItem(item, index) : typeof item === 'object' ? item.id : item}
        </ListItemElement>
    );
});

ListItem.displayName = 'ListItem';
export default ListItem;
