/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { createMessageIntl } from '@module-base/utils';

export const EN_AUTH = Object.freeze({
    'module.auth.form.title.signin': 'Sign In',
    'module.auth.form.title.signout': 'Sign Out',
    'module.auth.form.title.register': 'Register',
    'module.auth.form.title.recover': 'Recover',
    'module.auth.form.checkbox.giveMe': 'Remember me',

    'module.auth.form.navigate.signin': 'Already have an account? Go to sign in!',
    'module.auth.form.navigate.register': 'No account? Go to registration!',
    'module.auth.form.navigate.recover': 'Forgot password? Verify now!',

    'module.auth.form.input.placeholder.account': 'Email/phone number...',
    'module.auth.form.input.placeholder.password': 'Password...',
    'module.auth.form.input.placeholder.passwordHill': 'Enter the password...',

    'module.auth.form.input.error.account.empty': 'Empty account !!!',
    'module.auth.form.input.error.password.empty': 'Empty password !!!',
    'module.auth.form.input.error.passwordHill.empty': 'Confirm password empty !!!',
    'module.auth.form.input.error.account.failed': 'Account must be email/phone number !!!',
    'module.auth.form.input.error.account.incorrect': 'Account or password are incorrect !!!',
    'module.auth.form.input.error.account.unregistered': 'Tài khoản này chưa được đăng ký !!!',
    'module.auth.form.input.error.account.registered': 'Tài khoản đã tồn tại !!!',
    'module.auth.form.input.error.password.incorrect': 'Password must be at least 6 characters long!',
    'module.auth.form.input.error.passwordHill.incorrect': 'Confirm password does not match !!!',
    'module.auth.form.input.error.account.exist':
        'This email/phone number already exists! Please use a different email/phone number.',

    'module.auth.form.message.success.register': 'Sign Up Success! Please log in now!',
});

export const VI_AUTH = Object.freeze({
    'module.auth.form.title.signin': 'Đăng nhập',
    'module.auth.form.title.signout': 'Đăng xuất',
    'module.auth.form.title.register': 'Đăng ký',
    'module.auth.form.title.recover': 'Xác thực',
    'module.auth.form.checkbox.giveMe': 'Ghi nhớ tôi',

    'module.auth.form.navigate.signin': 'Đã có tài khoản? Đi tới đăng nhập!',
    'module.auth.form.navigate.register': 'Chưa có tài khoản? Đi tới đăng ký!',
    'module.auth.form.navigate.recover': 'Quên mật khẩu? Xác thực ngay!',

    'module.auth.form.input.placeholder.account': 'Nhập email/số điện thoại...',
    'module.auth.form.input.placeholder.password': 'Nhập mật khẩu...',
    'module.auth.form.input.placeholder.passwordHill': 'Nhập lại mật khẩu...',

    'module.auth.form.input.error.account.empty': 'Tài khoản trống !!!',
    'module.auth.form.input.error.account.failed': 'Tài khoản phải là email/số điện thoại !!!',
    'module.auth.form.input.error.account.incorrect': 'Tài khoản hoặc mật khẩu không chính xác !!!',
    'module.auth.form.input.error.account.registered':
        'Email/số điện thoại này đã tồn tại! Vui lòng sử dụng email/số điện thoại khác.',
    'module.auth.form.input.error.account.unregistered': 'Tài khoản này chưa được đăng ký !!!',

    'module.auth.form.input.error.password.empty': 'Mật khẩu trống !!!',
    'module.auth.form.input.error.passwordHill.empty': 'Mật khẩu xác nhận trống !!!',
    'module.auth.form.input.error.password.short': 'Mật khẩu dài tối thiểu 6 kí tự!',
    'module.auth.form.input.error.passwordHill.different': 'Mật khẩu xác nhận không khớp !!!',

    'module.auth.form.message.success.register': 'Đăng ký thành công! Bạn hãy đăng nhập ngay nhé!',
});

export const authMessage = createMessageIntl(VI_AUTH);
