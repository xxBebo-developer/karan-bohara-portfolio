import { type IOptionLoader, type RecursivePartial, ValueWithRandom, isNull, isNumber } from "@tsparticles/engine";
import { AbsorberSizeLimit } from "./AbsorberSizeLimit.js";
import type { IAbsorberSize } from "../Interfaces/IAbsorberSize.js";

export class AbsorberSize extends ValueWithRandom implements IAbsorberSize, IOptionLoader<IAbsorberSize> {
    density;
    limit: AbsorberSizeLimit;

    constructor() {
        super();
        this.density = 5;
        this.value = 50;
        this.limit = new AbsorberSizeLimit();
    }

    load(data?: RecursivePartial<IAbsorberSize>): void {
        if (isNull(data)) {
            return;
        }

        super.load(data);

        if (data.density !== undefined) {
            this.density = data.density;
        }

        if (isNumber(data.limit)) {
            this.limit.radius = data.limit;
        } else {
            this.limit.load(data.limit);
        }
    }
}
