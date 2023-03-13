/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

export const AUTH_STORE_KEY = {
    ROOT: 'StoreAuth',
} as const;

export const PATH_AUTH_FIREBASE = '/auths/';

export const AUTH_FORM_ERROR = {
    /**  không có lỗi */
    DEFAULT: '',

    /**  tài khoản trống */
    ACCOUNT_EMPTY: 'account.empty',

    /**  tài khoản không phải email/số điện thoại */
    ACCOUNT_FAILED: 'account.failed',

    /**  tài khoản, mật khẩu sai */
    ACCOUNT_INCORRECT: 'account.incorrect',

    /**  tài khoản chưa được đăng ký */
    ACCOUNT_UNREGISTERED: 'account.unregistered',

    /**  tài khoản đã tồn tại */
    ACCOUNT_REGISTERED: 'account.registered',

    /**  mật khẩu trống */
    PASSWORD_EMPTY: 'password.empty',

    /**  mật khẩu xác nhận trống */
    PASSWORD_HILL_EMPTY: 'passwordHill.empty',

    /**  mật khẩu ngắn */
    PASSWORD_SHORT: 'password.short',

    /**  mật khẩu xác nhận không khớp */
    PASSWORD_DIFFERENT: 'passwordHill.different',
} as const;

export const REGEX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const REG_PHONE = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
