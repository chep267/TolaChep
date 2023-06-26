/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Layout, theme } from 'antd';
import styled from 'styled-components';
import TestComponent from '@src/react/test/TestComponent';

const { Content } = Layout;

const ContentLayout = styled(Content)`
    &&& {
        position: relative;
        width: 100%;
        height: calc(100vh - var(--header-height));
        min-height: calc(100vh - var(--header-height));
        max-height: calc(100vh - var(--header-height));
        overflow: hidden auto;
        scroll-behavior: smooth;
        overscroll-behavior: none;
    }
`;

export default function TolaContent(props: { element: React.ReactElement }) {
    const { element } = props;

    return (
        <Layout>
            {/*<ContentLayout>{element}</ContentLayout>*/}
            <ContentLayout>
                <TestComponent />
            </ContentLayout>
        </Layout>
    );
}
