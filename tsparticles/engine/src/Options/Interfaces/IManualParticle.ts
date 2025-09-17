import type { ICoordinatesWithMode } from "../../Core/Interfaces/ICoordinates.js";
import type { IParticlesOptions } from "./Particles/IParticlesOptions.js";
import type { RecursivePartial } from "../../Types/RecursivePartial.js";

/**
 * Manual particles options
 * [[include:Options/ManualParticles.md]]
 */
export interface IManualParticle {
    /**
     * Particle options, this properties will override the general particles configuration
     */
    options?: RecursivePartial<IParticlesOptions>;

    /**
     * Particle position in canvas size percent, if undefined a random position will be used
     */
    position?: ICoordinatesWithMode;
}
