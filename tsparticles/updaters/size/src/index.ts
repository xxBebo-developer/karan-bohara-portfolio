import { type Engine } from "@tsparticles/engine";
import { SizeUpdater } from "./SizeUpdater.js";

declare const __VERSION__: string;

/**
 * @param engine -
 * @param refresh -
 */
export async function loadSizeUpdater(engine: Engine, refresh = true): Promise<void> {
    engine.checkVersion(__VERSION__);

    await engine.addParticleUpdater(
        "size",
        () => {
            return Promise.resolve(new SizeUpdater());
        },
        refresh,
    );
}
