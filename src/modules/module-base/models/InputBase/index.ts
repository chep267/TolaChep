/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** types */
import { InputProps, TextAreaProps, InputRef } from 'antd/es/input';

type InputBaseRef = InputRef;
type InputBaseProps = InputProps;

interface InputChangeProps extends InputBaseProps {
    mode?: 'change' | 'search';
    timing?: number;
    onChangeValue?(value: string): void;
    onLoading?(loading: boolean): void;
}
interface InputChangeRef extends InputBaseRef {
    clear(): void;
}

type TextAreaBaseRef = InputRef;
type TextAreaBaseProps = TextAreaProps;

export type { InputBaseProps, InputBaseRef, InputChangeProps, InputChangeRef, TextAreaBaseProps, TextAreaBaseRef };
