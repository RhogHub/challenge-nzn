import ValueObject from "./value-object.interface";

type NumbersProps = {
    nums: number[];
    target: number;
}

export default class Numbers implements ValueObject {
    private _nums: number[];
    private _target: number;

    constructor(props: NumbersProps) {
        this._nums = props.nums;
        this._target = props.target;
    }

    get nums(): number[] {
        return this._nums;
    }

    get target(): number {
        return this._target;
    }
}
