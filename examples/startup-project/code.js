new Mouse(async mouse => {
    await mouse.setInstrument("guitar", async () => {
        await mouse.playNote(1 / 4, async () => {
            await mouse.playPitch("sol", 4);
            return mouse.ENDFLOW;
        });
        await mouse.playNote(1 / 4, async () => {
            await mouse.playPitch("mi", 4);
            return mouse.ENDFLOW;
        });
        await mouse.playNote(1 / 2, async () => {
            await mouse.playPitch("sol", 4);
            return mouse.ENDFLOW;
        });
        return mouse.ENDFLOW;
    });
    return mouse.ENDMOUSE;
});
MusicBlocks.run();
