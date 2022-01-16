class Song {
    constructor(name, bpm, countdown, measures, useCustomMeasureOrder, customMeasureOrder) {
        this.name = name;
        this.bPM = bpm;
        this.countdown = countdown;
        this.measures = measures; // measure array
        this.useCustomMeasureOrder = useCustomMeasureOrder; // bool
        this.customMeasureOrder = customMeasureOrder; // string array // uses measure's name e.g. "Into,Course,Verse,Course,Verse,Course,Course,Intro"
    }
}

class Measure {
    constructor(name, timeSingnature, bars, events) {
        this.name = name;
        this.timeSingnature = timeSingnature
        this.bars = bars;
        this.events = events; // array
    }
}

class Event {
    constructor(id, barToExecuteOn, beatToExecuteOn) {
        this.id = id;       // playsound:soundID , startloop:loopID
        this.barToExecuteOn = barToExecuteOn;
        this.beatToExecuteOn = beatToExecuteOn; // 1 is downbeat then increment by 1 for each 32nd note / 1.e.+.a.2.e.+.a.3.e.+.a.4.e.+.a.
    }
}