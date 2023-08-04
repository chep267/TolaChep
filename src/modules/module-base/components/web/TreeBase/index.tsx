/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

/** components */
import RcTree from 'rc-tree';
import { Tree, Spin, theme, Typography } from 'antd';

/** utils */
import { onDropTree } from './utils';
import { baseMessage } from '@module-base/utils';

/** types */
import type { DataNode, TreeProps } from 'antd/es/tree';
import type { Ref, ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';

type TreeBaseRef = Ref<RcTree>;

interface TreeBaseProps extends TreeProps {
    loading?: boolean;
    empty?: ReactNode;
    onDragDrop?(data: { id: string; parentId: string; afterId: string; beforeId: string; treeData: DataNode[] }): void;
}

/** styles */
const TreeLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    width: 100%;
    & > span[class*='text-loading'] {
        margin-left: 10px;
    }
`;
const TreeBaseElement: ForwardRefExoticComponent<TreeBaseProps & { iconColor: string } & RefAttributes<TreeBaseRef>> = styled(
    Tree
)`
    width: 100%;
    height: 100%;
    overflow: hidden auto;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 20px;
    }
    &:hover::-webkit-scrollbar-thumb {
        background: grey;
    }

    div[class*='ant-tree-treenode-draggable'] {
        & > span[class*='ant-tree-switcher'] {
            svg {
                fill: ${(props) => props.iconColor};
            }
        }
        & > span[class*='ant-tree-draggable-icon'] {
            visibility: hidden;
            opacity: 1;
            line-height: 20px;
            font-size: 20px;
            span {
                color: ${(props) => props.iconColor};
            }
        }
        &:hover {
            & > span[class*='ant-tree-draggable-icon'] {
                visibility: visible;
            }
        }
    }
`;

const TreeBase = React.forwardRef<TreeBaseRef, TreeBaseProps>((props, ref) => {
    const { loading, empty, onDragDrop, treeData, ...treeProps } = props;
    const [gData, setGData] = React.useState<DataNode[] | undefined>(undefined);
    const {
        token: { colorPrimary },
    } = theme.useToken();
    const { formatMessage } = useIntl();

    React.useEffect(() => {
        setGData(treeData);
    }, [treeData]);

    const onDrop: TreeProps['onDrop'] = (info) => onDropTree(info, { gData, setGData, onSuccess: onDragDrop });

    if (loading) {
        return (
            <TreeLoading>
                <Spin />
                <Typography.Text className="text-loading">
                    {formatMessage(baseMessage['module.base.component.tree.text.loading'])}
                </Typography.Text>
            </TreeLoading>
        );
    }

    if (!gData || gData.length === 0) {
        return !!empty && (typeof empty === 'object' || typeof empty === 'symbol') ? (
            empty
        ) : (
            <TreeLoading>
                <Typography.Text className="text-empty">
                    {empty || formatMessage(baseMessage['module.base.component.tree.text.empty'])}
                </Typography.Text>
            </TreeLoading>
        );
    }

    return <TreeBaseElement ref={ref} iconColor={colorPrimary} blockNode onDrop={onDrop} treeData={gData} {...treeProps} />;
});

TreeBase.displayName = 'TreeBase';
export type { TreeBaseProps, TreeBaseRef };
export default TreeBase;
