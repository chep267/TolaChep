/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

export const AppSizeCustom = Object.freeze({
    global: {
        headerHeight: 64,
        siderWidth: {
            max: 250,
            min: 70,
        },
        contentWidth: {
            max: 2000,
            min: 1300,
            mini: 480,
            hide: 0,
        },
        padding: 10,
    },
    messenger: {
        leftWidth: {
            max: 360,
            min: 280,
            mini: 90,
            hide: 0,
        },
        centerWidth: {
            max: 1300,
            min: 720,
            mini: 480,
            hide: 0,
        },
    },
    screen: {
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xls: '1400px',
        xxl: '1600px',
    },
});
