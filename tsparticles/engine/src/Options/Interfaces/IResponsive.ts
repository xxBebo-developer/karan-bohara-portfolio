import type { ISourceOptions } from "../../Types/ISourceOptions.js";
import type { ResponsiveMode } from "../../Enums/Modes/ResponsiveMode.js";

export interface IResponsive {
    /**
     * Maximum width of the canvas or the screen, depending on {@link mode} value.
     */
    maxWidth: number;

    /**
     * Responsive mode.
     */
    mode: ResponsiveMode | keyof typeof ResponsiveMode;

    /**
     * Options to override.
     */
    options: ISourceOptions;
}
