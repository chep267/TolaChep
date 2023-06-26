/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author dongntd267@gmail.com on 29/11/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import * as React from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

// components
import TableRowDrag from './TableRowDrag';
import TableBase, { TableBaseProps } from '@snw-components/web-antd-custom/TableBase/Table';

interface TableDragProps extends TableBaseProps {
    onDragEnd?(data: DragEndEvent): void;
}

export type { TableDragProps };
export default function TableDrag(props: TableDragProps) {
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
