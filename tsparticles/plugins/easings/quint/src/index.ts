/* eslint-disable @typescript-eslint/no-magic-numbers */

import { EasingType, type Engine } from "@tsparticles/engine";

declare const __VERSION__: string;

/**
 * @param engine -
 * @param refresh -
 */
export async function loadEasingQuintPlugin(engine: Engine, refresh = true): Promise<void> {
    engine.checkVersion(__VERSION__);

    await engine.addEasing(EasingType.easeInQuint, value => value ** 5, false);
    await engine.addEasing(EasingType.easeOutQuint, value => 1 - (1 - value) ** 5, false);
    await engine.addEasing(
        EasingType.easeInOutQuint,
        value => (value < 0.5 ? 16 * value ** 5 : 1 - (-2 * value + 2) ** 5 / 2),
        false,
    );

    await engine.refresh(refresh);
}
