import { type IOptionLoader, OptionsColor, type RecursivePartial, isNull } from "@tsparticles/engine";
import type { ILinksShadow } from "../Interfaces/ILinksShadow.js";

/**
 */
export class LinksShadow implements ILinksShadow, IOptionLoader<ILinksShadow> {
    blur;
    color;
    enable;

    constructor() {
        this.blur = 5;
        this.color = new OptionsColor();
        this.color.value = "#000";
        this.enable = false;
    }

    load(data?: RecursivePartial<ILinksShadow>): void {
        if (isNull(data)) {
            return;
        }

        if (data.blur !== undefined) {
            this.blur = data.blur;
        }

        this.color = OptionsColor.create(this.color, data.color);

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
