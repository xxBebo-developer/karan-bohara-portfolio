import { type IOptionLoader, OptionsColor, type RecursivePartial, isNull } from "@tsparticles/engine";
import type { IInfectionStage } from "../Interfaces/IInfectionStage.js";

/**
 */
export class InfectionStage implements IInfectionStage, IOptionLoader<IInfectionStage> {
    color;
    duration?: number;
    infectedStage?: number;
    radius;
    rate;

    constructor() {
        this.color = new OptionsColor();
        this.color.value = "#ff0000";
        this.radius = 0;
        this.rate = 1;
    }

    load(data?: RecursivePartial<IInfectionStage>): void {
        if (isNull(data)) {
            return;
        }

        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }

        this.duration = data.duration;
        this.infectedStage = data.infectedStage;

        if (data.radius !== undefined) {
            this.radius = data.radius;
        }

        if (data.rate !== undefined) {
            this.rate = data.rate;
        }
    }
}
