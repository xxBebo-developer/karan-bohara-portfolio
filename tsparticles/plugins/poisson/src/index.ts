import { type Engine } from "@tsparticles/engine";
import { PoissonDiscPlugin } from "./PoissonDiscPlugin.js";

declare const __VERSION__: string;

/**
 * @param engine - The engine to add the plugin to
 * @param refresh -
 */
export async function loadPoissonDiscPlugin(engine: Engine, refresh = true): Promise<void> {
    engine.checkVersion(__VERSION__);

    await engine.addPlugin(new PoissonDiscPlugin(engine), refresh);
}
