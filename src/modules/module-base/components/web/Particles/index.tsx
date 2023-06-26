/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { useId, useCallback, useMemo, memo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

/** constants */
import { comparePure, getOption } from '@module-base/constants';

/** utils */
import { useTheme } from '@module-theme/utils';

/** types */
import type { ISourceOptions } from 'tsparticles-engine';
import type { Container, Engine } from 'tsparticles-engine';

function Particle({ options }: { options?: ISourceOptions }) {
    const { theme, mode } = useTheme();
    const id = useId();

    const particlesInit = useCallback(async (engine: Engine) => {
        // console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // await console.log(container);
    }, []);

    const option = options || useMemo(() => getOption(theme), [mode]);

    return <Particles id={id} init={particlesInit} loaded={particlesLoaded} options={option} />;
}

export default memo(Particle, comparePure());
