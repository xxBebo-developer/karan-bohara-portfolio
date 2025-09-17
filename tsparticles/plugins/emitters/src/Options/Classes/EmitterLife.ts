import { type IOptionLoader, type RangeValue, type RecursivePartial, isNull, setRangeValue } from "@tsparticles/engine";
import type { IEmitterLife } from "../Interfaces/IEmitterLife.js";

/**
 */
export class EmitterLife implements IEmitterLife, IOptionLoader<IEmitterLife> {
    count?: number;
    delay?: RangeValue;
    duration?: RangeValue;
    wait;

    constructor() {
        this.wait = false;
    }

    load(data?: RecursivePartial<IEmitterLife>): void {
        if (isNull(data)) {
            return;
        }

        if (data.count !== undefined) {
            this.count = data.count;
        }

        if (data.delay !== undefined) {
            this.delay = setRangeValue(data.delay);
        }

        if (data.duration !== undefined) {
            this.duration = setRangeValue(data.duration);
        }

        if (data.wait !== undefined) {
            this.wait = data.wait;
        }
    }
}
