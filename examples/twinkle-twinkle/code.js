let part1 = async mouse => {
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("do", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("do", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("sol", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("sol", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("la", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("la", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 4, async () => {
        await mouse.playPitch("sol", 4);
        return mouse.ENDFLOW;
    });
    return mouse.ENDFLOW;
};
let part2 = async mouse => {
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("fa", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("fa", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("mi", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("mi", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("re", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("re", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 4, async () => {
        await mouse.playPitch("do", 4);
        return mouse.ENDFLOW;
    });
    return mouse.ENDFLOW;
};
let part3 = async mouse => {
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("sol", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("sol", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("fa", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("fa", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("mi", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 8, async () => {
        await mouse.playPitch("mi", 4);
        return mouse.ENDFLOW;
    });
    await mouse.playNote(1 / 4, async () => {
        await mouse.playPitch("re", 4);
        return mouse.ENDFLOW;
    });
    return mouse.ENDFLOW;
};
let breadslice = async mouse => {
    await part1(mouse);
    await part2(mouse);
    return mouse.ENDFLOW;
};
let PJ = async mouse => {
    for (let i0 = 0; i0 < 2; i0++) {
        await part3(mouse);
    }
    return mouse.ENDFLOW;
};
new Mouse(async mouse => {
    await mouse.setInstrument("guitar", async () => {
        await breadslice(mouse);
        await PJ(mouse);
        await breadslice(mouse);
        return mouse.ENDFLOW;
    });
    return mouse.ENDMOUSE;
});
MusicBlocks.run();
