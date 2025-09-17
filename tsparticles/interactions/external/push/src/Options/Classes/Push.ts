import {
    type IOptionLoader,
    type IParticlesOptions,
    type RangeValue,
    type RecursivePartial,
    type SingleOrMultiple,
    deepExtend,
    executeOnSingleOrMultiple,
    isNull,
    setRangeValue,
} from "@tsparticles/engine";
import type { IPush } from "../Interfaces/IPush.js";

/**
 */
export class Push implements IPush, IOptionLoader<IPush> {
    default;
    groups: string[];
    particles?: SingleOrMultiple<RecursivePartial<IParticlesOptions>>;
    quantity: RangeValue;

    constructor() {
        this.default = true;
        this.groups = [];
        this.quantity = 4;
    }

    load(data?: RecursivePartial<IPush>): void {
        if (isNull(data)) {
            return;
        }

        if (data.default !== undefined) {
            this.default = data.default;
        }

        if (data.groups !== undefined) {
            this.groups = data.groups.map(t => t);
        }

        if (!this.groups.length) {
            this.default = true;
        }

        const quantity = data.quantity;

        if (quantity !== undefined) {
            this.quantity = setRangeValue(quantity);
        }

        this.particles = executeOnSingleOrMultiple(data.particles, particles => {
            return deepExtend({}, particles) as RecursivePartial<IParticlesOptions>;
        });
    }
}
