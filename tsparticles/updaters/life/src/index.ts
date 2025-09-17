import { type Engine } from "@tsparticles/engine";
import { LifeUpdater } from "./LifeUpdater.js";

declare const __VERSION__: string;

/**
 * @param engine -
 * @param refresh -
 */
export async function loadLifeUpdater(engine: Engine, refresh = true): Promise<void> {
    engine.checkVersion(__VERSION__);

    await engine.addParticleUpdater(
        "life",
        async container => {
            return Promise.resolve(new LifeUpdater(container));
        },
        refresh,
    );
}
