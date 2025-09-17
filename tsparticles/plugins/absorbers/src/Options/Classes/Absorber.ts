import {
    type IOptionLoader,
    type IRangedCoordinates,
    OptionsColor,
    type RecursivePartial,
    isNull,
    setRangeValue,
} from "@tsparticles/engine";
import { AbsorberSize } from "./AbsorberSize.js";
import type { IAbsorber } from "../Interfaces/IAbsorber.js";

/**
 * [[include:Options/Plugins/Absorbers.md]]
 */
export class Absorber implements IAbsorber, IOptionLoader<IAbsorber> {
    color;
    destroy;
    draggable;
    name?: string;
    opacity;
    orbits;
    position?: RecursivePartial<IRangedCoordinates>;
    size;

    constructor() {
        this.color = new OptionsColor();
        this.color.value = "#000000";
        this.draggable = false;
        this.opacity = 1;
        this.destroy = true;
        this.orbits = false;
        this.size = new AbsorberSize();
    }

    load(data?: RecursivePartial<IAbsorber>): void {
        if (isNull(data)) {
            return;
        }

        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }

        if (data.draggable !== undefined) {
            this.draggable = data.draggable;
        }

        this.name = data.name;

        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }

        if (data.position !== undefined) {
            this.position = {};

            if (data.position.x !== undefined) {
                this.position.x = setRangeValue(data.position.x);
            }

            if (data.position.y !== undefined) {
                this.position.y = setRangeValue(data.position.y);
            }
        }

        if (data.size !== undefined) {
            this.size.load(data.size);
        }

        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }

        if (data.orbits !== undefined) {
            this.orbits = data.orbits;
        }
    }
}
