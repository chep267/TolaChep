/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { lazy, Suspense, useEffect, useState, useCallback } from 'react';

/** components */
import { FallBackLayout, Container, ButtonRetry, TextAutoReload, Title, Content } from './styles';
import { getTextIntl } from '@module-base/components/web';

/** utils */
import { errorMessage } from '@module-error/utils';
import { getOptionStar } from '@module-base/constants';
import Logo from '@module-error/assets/svg/error.jpeg';

/** components lazy */
const ToLaParticle = lazy(() => import('@modules/module-base/components/web/Particles'));

function FallbackDefault({ isAutoReload }: { isAutoReload: boolean }) {
    const [second, setSecond] = useState(99);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecond((s) => s - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        if (second === 0) {
            reloadWindow();
        }
    }, [second]);

    const reloadWindow = useCallback(() => {
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
            <Suspense fallback={null}>
                <ToLaParticle options={getOptionStar()} />
            </Suspense>
        </FallBackLayout>
    );
}

export default FallbackDefault;
