const maxTemperature = 30

basic.forever(() => {
    if (input.temperature() > 30) {
        console.log(`Too warm. Temperature: ${input.temperature()}`);
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
    } else {
        console.log(`Temperature OK. Temperature: ${input.temperature()}`);
    }
});