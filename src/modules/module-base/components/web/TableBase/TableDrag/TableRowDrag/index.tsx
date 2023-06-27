/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

/** types */
import type { HTMLAttributes, CSSProperties, ReactElement } from 'react';

interface RowProps extends HTMLAttributes<HTMLTableRowElement> {
    'data-row-key': string;
}

function Row({ children, ...props }: RowProps) {
    const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({
        id: props['data-row-key'],
    });

    const transformCustom = CSS.Transform.toString(transform && { ...transform, scaleY: 1 });
    const style: CSSProperties = {
        ...props.style,
        transform: transformCustom ? transformCustom.replace(/translate3d\(([^,]+),/, 'translate3d(0,') : 'unset',
        transition,
        ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
    };

    return (
        <tr {...props} ref={setNodeRef} style={style} {...attributes}>
            {React.Children.map(children, (child) => {
                if ((child as ReactElement).key === 'sort') {
                    return React.cloneElement(child as ReactElement, {
                        children: (
                            <MenuOutlined
                                ref={setActivatorNodeRef}
                                style={{ touchAction: 'none', cursor: 'move' }}
                                {...listeners}
                            />
                        ),
                    });
                }
                return child;
            })}
        </tr>
    );
}

export default Row;
