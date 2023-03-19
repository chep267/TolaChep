/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

const GENERAL_COLOR = Object.freeze({
    default: {
        normal: '#f0f2f5',
        light: '#f0f2f5',
        dark: '#000000',
        purple: '#7360F2',
    },
    state: {
        default: '#F4F7FC',
        primary: '#0d47a1',
        success: '#00cc52',
        info: '#1c99f8',
        warning: '#ffac38',
        danger: '#ff0032',
    },
});

export const LIGHT_COLOR = Object.freeze({
    particle: '#0d47a1',
    text: {
        normal: '#000000',
        placeholder: '#747474',
    },
    background: {
        component: '#f0f2f5',
        input: '#ffffff',
    },
    icon: {
        base: '#828282',
    },
    button: {
        default: '#038cf5',
    },
    ...GENERAL_COLOR,
});

export const PURPLE_COLOR = Object.freeze({
    particle: '#7360F2',
    text: {
        normal: '#7360F2',
        placeholder: '#747474',
    },
    background: {
        component: '#f0f2f5',
        input: '#ffffff',
    },
    icon: {
        base: '#828282',
    },
    button: {
        default: '#038cf5',
    },
    ...GENERAL_COLOR,
});

export const DARK_COLOR = Object.freeze({
    particle: '#000033',
    text: {
        normal: '#ffffff',
        placeholder: '#747474',
    },
    background: {
        component: '#f0f2f5',
        input: '#ffffff',
    },
    icon: {
        base: '#828282',
    },
    button: {
        default: '#038cf5',
    },
    ...GENERAL_COLOR,
});

export type TypeColor = typeof LIGHT_COLOR | typeof PURPLE_COLOR | typeof DARK_COLOR;
