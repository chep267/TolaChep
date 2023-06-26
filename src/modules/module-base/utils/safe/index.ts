/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

export function* safeEffect(effect: any): any {
    try {
        return { response: yield effect, error: null };
    } catch (error) {
        return { error, response: null };
    }
}
