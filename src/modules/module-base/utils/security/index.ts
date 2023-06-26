/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/**
 * func Encrypt
 *
 * return: chuỗi mã hóa
 */
function Encrypt(value = ''): string {
    if (!value) return value;
    let result = '';
    try {
        const text = window.btoa(value);
        for (let i = 0, length = text.length; i < length; i += 1) {
            if (i < length - 1) {
                result += text.charCodeAt(i) + 10;
                result += '-';
            } else {
                result += text.charCodeAt(i) + 10;
            }
        }
        return window.btoa(result);
    } catch (e) {
        console.log('Encrypt error: ', e);
        return value;
    }
}

/**
 * func Decrypt
 *
 * return: chuỗi giải mã hóa
 */
function Decrypt(value: null | undefined | string = ''): string {
    if (!value) return '';
    let result = '';

    try {
        const array: any[] = window.atob(value).split('-');
        for (let i = 0, length = array.length; i < length; i += 1) {
            result += String.fromCharCode(array[i] - 10);
        }
        return window.atob(result);
    } catch (e) {
        console.log('Decrypt error: ', e);
        return value;
    }
}

export { Encrypt, Decrypt };
