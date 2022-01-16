class Settings {
    constructor(colors, sounds, loops) {
        this.colors = colors; // string array
        this.sounds = sounds; // SoundFile array
        this.loops = loops; // SoundFile array
    }
}

class SoundFile {
    constructor(id, path) {
        this.id = id;
        this.path = path;
    }
}