/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

/** components */
import TableRowDrag from './TableRowDrag';
import TableBase from '@snw-components/web-antd-custom/TableBase/Table';

/** types */
import type { TableBaseProps } from '@snw-components/web-antd-custom/TableBase/Table';

interface TableDragProps extends TableBaseProps {
    onDragEnd?(data: DragEndEvent): void;
}

function TableDrag(props: TableDragProps) {
    const { dataSource, onDragEnd, ...tableProps } = props;

    return (
        <DndContext onDragEnd={onDragEnd}>
            <SortableContext items={(dataSource || []).map((i) => i.key)} strategy={verticalListSortingStrategy}>
                <TableBase
                    dataSource={dataSource}
                    {...tableProps}
                    components={{
                        body: {
                            row: TableRowDrag,
                        },
                    }}
                />
            </SortableContext>
        </DndContext>
    );
}

export type { TableDragProps };
export default TableDrag;
