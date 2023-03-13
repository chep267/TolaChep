/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

const REG_EMAIL = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
const REG_PHONE = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);

export { REG_EMAIL, REG_PHONE };
