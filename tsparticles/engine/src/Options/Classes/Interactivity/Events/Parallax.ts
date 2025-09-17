import type { IOptionLoader } from "../../../Interfaces/IOptionLoader.js";
import type { IParallax } from "../../../Interfaces/Interactivity/Events/IParallax.js";
import type { RecursivePartial } from "../../../../Types/RecursivePartial.js";
import { isNull } from "../../../../Utils/TypeUtils.js";

/**
 */
export class Parallax implements IParallax, IOptionLoader<IParallax> {
    enable;
    force;
    smooth;

    constructor() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }

    load(data?: RecursivePartial<IParallax>): void {
        if (isNull(data)) {
            return;
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        if (data.force !== undefined) {
            this.force = data.force;
        }

        if (data.smooth !== undefined) {
            this.smooth = data.smooth;
        }
    }
}
