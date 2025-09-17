import {
    type IOptionLoader,
    type IParticlesOptions,
    type RecursivePartial,
    deepExtend,
    isNull,
} from "@tsparticles/engine";
import type { ITrail } from "../Interfaces/ITrail.js";

/**
 */
export class Trail implements ITrail, IOptionLoader<ITrail> {
    delay;
    particles?: RecursivePartial<IParticlesOptions>;
    pauseOnStop;
    quantity;

    constructor() {
        this.delay = 1;
        this.pauseOnStop = false;
        this.quantity = 1;
    }

    load(data?: RecursivePartial<ITrail>): void {
        if (isNull(data)) {
            return;
        }

        if (data.delay !== undefined) {
            this.delay = data.delay;
        }

        if (data.quantity !== undefined) {
            this.quantity = data.quantity;
        }

        if (data.particles !== undefined) {
            this.particles = deepExtend({}, data.particles) as RecursivePartial<IParticlesOptions>;
        }

        if (data.pauseOnStop !== undefined) {
            this.pauseOnStop = data.pauseOnStop;
        }
    }
}
