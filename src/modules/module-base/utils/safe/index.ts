/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

export function* safeEffect(effect: any) {
    try {
        return { response: yield effect, error: null };
    } catch (error) {
        return { error, response: null };
    }
}
