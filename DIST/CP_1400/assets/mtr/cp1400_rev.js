function create(ctx, state, vehicle) {
    state.playAudio = (resource) => {
        ctx.getMyCars().forEach(car => {
            ctx.getCarSoundManager(car).playSound(resource, Vector3f(0, 0, 0), 0.2, 1.00)
        })
    }
    state.prevSpeed = -1;
    state.curSpeed = 0;
}

function render(ctx, state, vehicle) {
    var previousSpeed = state.prevSpeed;
    var currentSpeed = vehicle.getSpeedKmh();

    if (previousSpeed < 30.88 && currentSpeed >= 30.88) {
        state.playAudio(Resources.id("mtr:cp1400_20_rev_0"))
    }
    if (previousSpeed < 43.24 && currentSpeed >= 43.24) {
        state.playAudio(Resources.id("mtr:cp1400_20_rev_1"))
    }
    if (previousSpeed < 55.59 && currentSpeed >= 55.59) {
        state.playAudio(Resources.id("mtr:cp1400_20_rev_1a"))
    }
    if (previousSpeed < 74.12 && currentSpeed >= 74.12) {
        state.playAudio(Resources.id("mtr:cp1400_20_rev_2"))
    }
    if (previousSpeed < 86.47 && currentSpeed >= 86.47) {
        state.playAudio(Resources.id("mtr:cp1400_20_rev_3"))
    }

    state.prevSpeed = currentSpeed;
}

function dispose(ctx, state, vehicle) {
   
}
