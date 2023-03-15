/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';

/** utils */
import { errorMessage } from '@module-error/utils';
import { getOptionStar } from '@module-base/constants';
import Logo from '@module-error/assets/svg/error.jpeg';

/** components */
import { FallBackLayout, Container, ButtonRetry, TextAutoReload, Title, Content } from './styles';
import { getTextIntl } from '@module-base/components';
const ToLaParticle = React.lazy(() => import('@module-base/components/Particles'));

export default function FallbackDefault({ isAutoReload }: { isAutoReload: boolean }) {
    const [second, setSecond] = React.useState(100);

    React.useEffect(() => {
        const timeOut = setInterval(() => {
            setSecond((s) => s - 1);
        }, 1000);

        return () => {
            clearTimeout(timeOut);
        };
    }, []);

    React.useEffect(() => {
        if (second === 0) reloadWindow();
    }, [second]);

    const reloadWindow = React.useCallback(() => {
        window.location.reload();
    }, []);

    return (
        <FallBackLayout>
            <Container>
                <img src={Logo} alt="err" />
                <Title type="danger" strong message={errorMessage['module.error.fallback.title']} />
                <Content type="danger" strong message={errorMessage['module.error.fallback.content']} />
                <ButtonRetry onClick={reloadWindow} type="primary" danger size="large">
                    {getTextIntl({ message: errorMessage['module.error.fallback.retry'] })}
                </ButtonRetry>
            </Container>
            {isAutoReload ? (
                <TextAutoReload
                    message={errorMessage['module.error.fallback.autoReload']}
                    messageOption={{ value: second }}
                />
            ) : null}
            <React.Suspense fallback={null}>
                <ToLaParticle options={getOptionStar()} />
            </React.Suspense>
        </FallBackLayout>
    );
}
