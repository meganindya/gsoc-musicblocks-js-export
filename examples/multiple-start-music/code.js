let action = async mouse => {
    let box1 = 4;
    while (box1 < 8) {
        await mouse.playPitch("fa", 4);
        box1 = box1 + 1;
    }
    do {
        await mouse.playNote(1 / 8, async () => {
            await mouse.playPitch("mi", 4);
            return mouse.ENDFLOW;
        });
        box1 = box1 - 1;
        if (box1 < Math.sqrt(Math.sqrt(16))) {
            break;
        }
    } while (box1 == 0);
    return mouse.ENDFLOW;
};
new Mouse(async mouse => {
    for (let i0 = 0; i0 < 4; i0++) {
        await mouse.playNote(1 / 4, async () => {
            await mouse.playPitch("sol", 4);
            return mouse.ENDFLOW;
        });
        for (let i1 = 0; i1 < 4; i1++) {
            await mouse.playNote(1 / 4, async () => {
                await mouse.playPitch("do", 4);
                return mouse.ENDFLOW;
            });
        }
        if (!(true & false)) {
            await mouse.playPitch("sol", 4);
        } else {
            await mouse.playNote(1 / 2, async () => {
                await mouse.playPitchNumber(12);
                return mouse.ENDFLOW;
            });
        }
    }
    return mouse.ENDMOUSE;
});
new Mouse(async mouse => {
    await action(mouse);
    await mouse.playPitch("do", 4);
    let box = 0;
    for (let i0 = 0; i0 < 14; i0++) {
        box = box + 1;
        if (box > 14 / 2) {
            await mouse.playNote(1 / 4, async () => {
                await mouse.stepPitch(-1);
                return mouse.ENDFLOW;
            });
        } else {
            await mouse.playNote(1 / 4, async () => {
                await mouse.stepPitch(1);
                return mouse.ENDFLOW;
            });
        }
    }
    return mouse.ENDMOUSE;
});
MusicBlocks.run();
