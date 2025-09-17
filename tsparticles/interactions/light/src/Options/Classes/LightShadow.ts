import { type IOptionLoader, OptionsColor, type RecursivePartial, isNull } from "@tsparticles/engine";
import type { ILightShadow } from "../Interfaces/ILightShadow.js";

export class LightShadow implements ILightShadow, IOptionLoader<ILightShadow> {
    color;
    length;

    constructor() {
        this.color = new OptionsColor();
        this.color.value = "#000000";

        this.length = 2000;
    }

    load(data?: RecursivePartial<ILightShadow>): void {
        if (isNull(data)) {
            return;
        }

        this.color = OptionsColor.create(this.color, data.color);

        if (data.length !== undefined) {
            this.length = data.length;
        }
    }
}
