/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** types */
import type { DataNode } from 'antd/lib/tree';
import type { NodeDragEventParams } from 'rc-tree/lib/contextTypes';
import type { EventDataNode, Key } from 'rc-tree/lib/interface';

/** hàm cắt 1 node khỏi tree */
export const pruneNode = (tree: DataNode[], nodeId: string | number) => {
    for (let i = 0, n = tree.length; i < n; i += 1) {
        const node = tree[i];
        if (node.key === nodeId) {
            tree.splice(i, 1);
            return true;
        }
        if (node.children) {
            if (pruneNode(node.children, nodeId)) {
                return true;
            }
        }
    }
    return false;
};

/** hàm get node cha của 1 node trong tree */
export const getParentNode: (tree: DataNode[], nodeId: string | number) => DataNode | null = (tree, nodeId) => {
    let parentNode: DataNode | null = null;
    for (let i = 0, n = tree.length; i < n; i += 1) {
        const node = tree[i];
        if (node.children) {
            if (node.children.some(({ key }) => key === nodeId)) {
                parentNode = node;
                break;
            }
            parentNode = getParentNode(node.children, nodeId);
            if (parentNode) {
                break;
            }
        }
    }
    return parentNode;
};

/** hàm get node đứng liền trước của 1 node trong tree, phục vụ api kéo thả */
export const getPreviousNode: (tree: DataNode[], nodeId: string | number, parentNode: DataNode | null) => DataNode | null = (
    tree,
    nodeId,
    parentNode = getParentNode(tree, nodeId)
) => {
    const arrayNode = parentNode ? parentNode.children || [] : tree;
    for (let i = 0, n = arrayNode.length; i < n; i += 1) {
        const node = arrayNode[i];
        if (node.key === nodeId) {
            return i === 0 ? null : arrayNode[i - 1];
        }
    }
    return null;
};

/** hàm kéo thả tree */
export const onDropTree = (
    info: NodeDragEventParams<DataNode> & {
        dragNode: EventDataNode<DataNode>;
        dragNodesKeys: Key[];
        dropPosition: number;
        dropToGap: boolean;
    },
    option: {
        gData: DataNode[] | undefined;
        setGData: (gData: DataNode[]) => void;
        onSuccess?: (data: { id: string; parentId: string; afterId: string; beforeId: string; treeData: DataNode[] }) => void;
    }
) => {
    const { gData, setGData, onSuccess } = option;
    if (!gData) {
        return;
    }

    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (
        data: DataNode[] | undefined,
        key: React.Key,
        callback: (node: DataNode, i: number, dataLoop: DataNode[]) => void
    ) => {
        if (!data) {
            return null;
        }
        for (let i = 0, n = data.length; i < n; i += 1) {
            if (data[i].key === key) {
                return callback(data[i], i, data);
            }
            if (data[i].children) {
                loop(data[i].children, key, callback);
            }
        }
        return null;
    };
    const data = [...gData];

    // Find dragObject
    let dragObj: DataNode;
    loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1);
        dragObj = item;
    });

    if (!info.dropToGap) {
        // Drop on the content
        loop(data, dropKey, (item) => {
            item.children = item.children || [];
            // where to insert 示例添加到头部，可以是随意位置
            item.children.unshift(dragObj);
        });
    } else if (
        // eslint-disable-next-line
        ((info.node as any).props.children || []).length > 0 && // Has children
        // eslint-disable-next-line
        (info.node as any).props.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
    ) {
        loop(data, dropKey, (item) => {
            item.children = item.children || [];
            // where to insert 示例添加到头部，可以是随意位置
            item.children.unshift(dragObj);
            // in previous version, we use item.children.push(dragObj) to insert the
            // item to the tail of the children
        });
    } else {
        let ar: DataNode[] = [];
        let i: number;
        loop(data, dropKey, (_item, index, arr) => {
            ar = arr;
            i = index;
        });
        if (dropPosition === -1) {
            ar.splice(i!, 0, dragObj!);
        } else {
            ar.splice(i! + 1, 0, dragObj!);
        }
    }

    // update data
    setGData(data);

    // callback
    if (onSuccess) {
        const parentNode = getParentNode(gData, dragKey);
        const prevNode = getPreviousNode(data, dragKey, parentNode);
        const parentId = parentNode ? `${parentNode.key}` : '-1';
        const afterId = prevNode ? `${prevNode.key}` : '';

        onSuccess({ id: `${dragKey}`, parentId, afterId, beforeId: '', treeData: data });
    }
};
