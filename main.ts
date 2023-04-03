// Edit the configuration below to change the behavior
const config = {
    // Maximum temperature before tone is played.
    maxTemperature: 30,
    // Minimum temperature before tone is played.
    minTemperature: 10,

    // Display settings
    display: {
        // If true, it will skip showing "START" before starting
        instantStart: false,
        // Displays if temperature is too high
        high: "H",
        // Displays if temperature is too low
        low: "L"
    }
}

























/*
    DO NOT EDIT THIS CODE UNLESS YOU KNOW WHAT YOU ARE DOING
*/

// A and B will start or stop the loop.
input.onButtonPressed(Button.AB, () => {
    if (config.display.instantStart === false) { basic.showString("START"); }

        basic.forever(() => {
            if (input.temperature() > config.maxTemperature) {
                basic.showString("H");
                console.log(`Too warm. Temperature: ${input.temperature()}`);
                music.playTone(Note.C, music.beat(BeatFraction.Whole));
            } else if (input.temperature() < config.minTemperature) {
                basic.showString("L");
                console.log(`Too cold. Temperature: ${input.temperature()}`);
                music.playTone(Note.CSharp, music.beat(BeatFraction.Whole));
            } else {
                basic.showString("");
                console.log(`Temperature OK. Temperature: ${input.temperature()}`);
            }
        });
});