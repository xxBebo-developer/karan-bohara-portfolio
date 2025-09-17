import {
    type Container,
    type ICoordinates,
    type MoveDirection,
    type Particle,
    type Vector,
    getDistances,
} from "@tsparticles/engine";

/**
 *
 * @param container -
 * @param direction -
 * @returns the particle created
 */
export function buildParticleWithDirection(container: Container, direction: MoveDirection): Particle | undefined {
    const options = { move: { direction } };

    return container.particles.addParticle(undefined, options);
}

/**
 *
 * @param start -
 * @param stop -
 * @param velocity -
 */
export function segmentBounce(start: ICoordinates, stop: ICoordinates, velocity: Vector): void {
    const { dx, dy } = getDistances(start, stop),
        half = 0.5,
        wallAngle = Math.atan2(dy, dx) + Math.PI * half,
        wallNormalX = Math.sin(wallAngle),
        wallNormalY = -Math.cos(wallAngle),
        double = 2,
        d = double * (velocity.x * wallNormalX + velocity.y * wallNormalY);

    velocity.x -= d * wallNormalX;
    velocity.y -= d * wallNormalY;
}
