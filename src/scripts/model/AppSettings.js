class AppSettings {
    constructor(colors, darkMode) {
        this.colors = colors; // string array
        this.darkMode = darkMode; // bool

        // this.sounds = sounds; // SoundFile array
        // this.loops = loops; // SoundFile array
    }
}

class SoundFile {
    constructor(id, path) {
        this.id = id;
        this.path = path;
    }
}