import { type IOptionLoader, type RecursivePartial, isNull } from "@tsparticles/engine";
import type { ITwinkle } from "../Interfaces/ITwinkle.js";
import { TwinkleValues } from "./TwinkleValues.js";

/**
 * [[include:Options/Particles/Twinkle.md]]
 */
export class Twinkle implements ITwinkle, IOptionLoader<ITwinkle> {
    lines;
    particles;

    constructor() {
        this.lines = new TwinkleValues();
        this.particles = new TwinkleValues();
    }

    load(data?: RecursivePartial<ITwinkle>): void {
        if (isNull(data)) {
            return;
        }

        this.lines.load(data.lines);
        this.particles.load(data.particles);
    }
}
