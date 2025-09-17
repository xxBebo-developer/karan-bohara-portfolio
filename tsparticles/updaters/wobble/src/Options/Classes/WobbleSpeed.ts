import { type IOptionLoader, type RangeValue, type RecursivePartial, isNull, setRangeValue } from "@tsparticles/engine";
import type { IWobbleSpeed } from "../Interfaces/IWobbleSpeed.js";

export class WobbleSpeed implements IWobbleSpeed, IOptionLoader<IWobbleSpeed> {
    angle: RangeValue;
    move: RangeValue;

    constructor() {
        this.angle = 50;
        this.move = 10;
    }

    load(data?: RecursivePartial<IWobbleSpeed>): void {
        if (isNull(data)) {
            return;
        }

        if (data.angle !== undefined) {
            this.angle = setRangeValue(data.angle);
        }

        if (data.move !== undefined) {
            this.move = setRangeValue(data.move);
        }
    }
}
