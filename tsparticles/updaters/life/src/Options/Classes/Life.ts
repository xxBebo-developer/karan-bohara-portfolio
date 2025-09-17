import { type IOptionLoader, type RecursivePartial, isNull } from "@tsparticles/engine";
import type { ILife } from "../Interfaces/ILife.js";
import { LifeDelay } from "./LifeDelay.js";
import { LifeDuration } from "./LifeDuration.js";

export class Life implements ILife, IOptionLoader<ILife> {
    count;
    delay;
    duration;

    constructor() {
        this.count = 0;
        this.delay = new LifeDelay();
        this.duration = new LifeDuration();
    }

    load(data?: RecursivePartial<ILife>): void {
        if (isNull(data)) {
            return;
        }

        if (data.count !== undefined) {
            this.count = data.count;
        }

        this.delay.load(data.delay);
        this.duration.load(data.duration);
    }
}
