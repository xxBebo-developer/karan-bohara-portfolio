import { type Engine } from "@tsparticles/engine";
import { OpacityUpdater } from "./OpacityUpdater.js";

declare const __VERSION__: string;

/**
 * @param engine - The engine instance to load the updater for
 * @param refresh -
 */
export async function loadOpacityUpdater(engine: Engine, refresh = true): Promise<void> {
    engine.checkVersion(__VERSION__);

    await engine.addParticleUpdater(
        "opacity",
        container => {
            return Promise.resolve(new OpacityUpdater(container));
        },
        refresh,
    );
}
