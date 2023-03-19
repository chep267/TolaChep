/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { Layout, theme } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

const ContentLayout = styled(Content)`
    &&& {
        position: relative;
        width: 100%;
        height: calc(100vh - var(--HEADER_HEIGHT));
        min-height: calc(100vh - var(--HEADER_HEIGHT));
        max-height: calc(100vh - var(--HEADER_HEIGHT));
        overflow: hidden auto;
        scroll-behavior: smooth;
        background-color: red;
        padding: 0 10px;
    }
`;

export default function TolaContent(props: { element: React.ReactElement }) {
    const { element } = props;
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <ContentLayout>{element}</ContentLayout>
        </Layout>
    );
}
