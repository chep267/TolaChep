/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import * as React from 'react';

// utils
import type { ListHookStates, ListHookProps } from '@snw-components/web-antd-custom/ListBase/utils/type';

const defaultState: ListHookStates = {
    disableEventKey: false, // có tắt phím mũi tên không, mặc định là không
    total: 0, // số phần tử
    itemSelect: 0, // vị trí đang select, mặc định là chưa chọn
    itemHover: 0, // ví trí đang hover, mặc định là chưa chọn
    idSelect: '', // id đang select, mặc định là chưa chọn
};

export default function useListHook(props: Partial<ListHookStates> = defaultState): ListHookProps {
    const [state, setState] = React.useState<ListHookStates>({
        ...defaultState,
        ...props,
    });

    const onSelect: ListHookProps['onSelect'] = React.useCallback(
        ({ itemSelect = 0, idSelect = '' }) =>
            setState((prev) => ({
                ...prev,
                itemSelect,
                itemHover: itemSelect,
                idSelect,
            })),
        []
    );

    const onKeyPress: ListHookProps['onKeyPress'] = React.useCallback((event) => {
        if (event.key === 'Enter' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            event.stopPropagation();
        }
        setState((prev) => {
            /** xử lý với 3 case Enter, ArrowDown, ArrowUp
             * Enter: select item đang hover
             * ArrowDown: hover lên trên
             * ArrowUp: hover xuống dưới
             */
            if (state.disableEventKey) {
                return prev;
            }
            if (event.key === 'Enter') {
                if (prev.itemSelect !== prev.itemHover) {
                    return {
                        ...prev,
                        itemSelect: prev.itemHover,
                    };
                }
                return prev;
            }
            if (event.key === 'ArrowDown') {
                return {
                    ...prev,
                    itemHover: prev.itemHover === prev.total ? 1 : prev.itemHover + 1,
                };
            }
            if (event.key === 'ArrowUp') {
                return {
                    ...prev,
                    itemHover: prev.itemHover > 1 ? prev.itemHover - 1 : prev.total,
                };
            }
            return prev;
        });
    }, []);

    const onRefresh = React.useCallback(() => setState(() => ({ ...defaultState })), []);
    const onUpdate: ListHookProps['onUpdate'] = React.useCallback(
        (data = {}) =>
            setState((prev) => ({
                ...prev,
                ...data,
            })),
        []
    );

    return {
        ...state,
        onSelect,
        onKeyPress,
        onRefresh,
        onUpdate,
    };
}
