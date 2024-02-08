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
        this.validate();
    }

    get nums(): number[] {
        return this._nums;
    }

    get target(): number {
        return this._target;
    }

    validate() {        
        if (!Number.isInteger(this._target)){
            throw new Error("The target element should be an integer");
        }
        if (this._nums.length <= 0) {
            throw new Error("There must be at least one element in the array");
        }
        if (this._nums.length >= 0) {
            for (let i = 0; i < this._nums.length; i++) {
                if (typeof this._nums[i] !== 'number' || !Number.isInteger(this._nums[i])) {
                    throw new Error("The array elements must be integers");
                }
            }            
        }
        // if (this._nums.length === 1) {
        //     if (this._nums[0] === this._target) {
        //         return 0;
        //     } 
        // }
    }


}
