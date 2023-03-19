import styled from 'styled-components';
import SafeLayout from '@module-base/components/web/Layout/SafeLayout';
import Button from '@module-base/components/web/stack/Button';

export const Container = styled(SafeLayout)(({ theme }) => ({
    position: 'fixed',
    zIndex: theme.zIndex.max,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
}));

export const BtnClose = styled(Button)(({ theme }) => ({
    position: 'absolute',
    right: 20,
    top: 20,
    width: 50,
    height: 50,
    fontSize: 25,
    backgroundColor: 'gray',
    transition: 'all 0.2s ease',
    zIndex: theme.zIndex.max,
}));

export const BtnDownLoad = styled(BtnClose)({
    right: 80,
});
