import type { IInfectionStage } from "./IInfectionStage.js";

/**
 * The particles infection animations options
 * [[include:Options/Plugins/Infection.md]]
 */
export interface IInfection {
    /**
     * This property specifies if particles can turn back to the original state after being infected
     */
    cure: boolean;

    /**
     * The infection delay of the new infected particles, initial infected particles won't be affected.
     */
    delay: number;

    /**
     * Enables the infection animations
     */
    enable: boolean;

    /**
     * The initial number of infected particles
     */
    infections: number;

    /**
     * This property contains all the infection stages configurations, array of {@link IInfectionStage}
     */
    stages: IInfectionStage[];
}
