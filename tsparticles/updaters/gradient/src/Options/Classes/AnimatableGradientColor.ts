import { AnimatableColor, type IOptionLoader, type RecursivePartial, isNull, isNumber } from "@tsparticles/engine";
import { GradientColorOpacity } from "./GradientColorOpacity.js";
import type { IAnimatableGradientColor } from "../Interfaces/IOptionsGradient.js";

export class AnimatableGradientColor implements IAnimatableGradientColor, IOptionLoader<IAnimatableGradientColor> {
    opacity?: GradientColorOpacity;
    stop;
    value;

    constructor() {
        this.stop = 0;
        this.value = new AnimatableColor();
    }

    load(data?: RecursivePartial<IAnimatableGradientColor>): void {
        if (isNull(data)) {
            return;
        }

        if (data.stop !== undefined) {
            this.stop = data.stop;
        }

        this.value = AnimatableColor.create(this.value, data.value);

        if (data.opacity !== undefined) {
            this.opacity = new GradientColorOpacity();

            if (isNumber(data.opacity)) {
                this.opacity.value = data.opacity;
            } else {
                this.opacity.load(data.opacity);
            }
        }
    }
}
