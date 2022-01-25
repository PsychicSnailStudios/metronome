let CurrentBPM = 120;
let AppMetronome = new Metronome(CurrentBPM);

let _randomNames = ['Metronome', 'Metrognome', 'Blep', 'Bleep', 'Bloop', 'Boop', 'Beep', 'Pitter', 'Patter', 'Click', 'Clack']

let _playPauseIcon = document.getElementById('playPauseIcon');
let _playButton = document.getElementById('playButton');

let QuarterMarkers = document.getElementsByName('4ths');
let EMarkers = document.getElementsByName('16ths');
let AndMarkers = document.getElementsByName('8ths');
let AMarkers = document.getElementsByName('32nds');

let ApplicationSettings = JSON.parse(localStorage.getItem('settings'));

pageLoad();

function pageLoad() {
    if (ApplicationSettings == null) {
        ApplicationSettings = new AppSettings(['#23395B', '#3e81b1', '#74b7cc', '#73C2BE'], true);
        localStorage.setItem('settings', JSON.stringify(ApplicationSettings));
    }

    console.log("Loaded Settings Object:", ApplicationSettings);
    
    document.getElementById('bpmLabel').innerHTML = CurrentBPM;
    document.getElementById('title').innerHTML = _randomNames[Math.floor(Math.random() * _randomNames.length)];;
}

function onStartStop() {
    AppMetronome.startStop();

    if (AppMetronome.isRunning) {
        _playPauseIcon.className = 'pause';
    }
    else {
        _playPauseIcon.className = 'play';
    }
}

function onChangeBPM(value) {
    CurrentBPM += value;
    AppMetronome.tempo = CurrentBPM;
    document.getElementById('bpmLabel').innerHTML = CurrentBPM;
}
function onSetBPM(value) {
    CurrentBPM = value;
    AppMetronome.tempo = CurrentBPM;
    document.getElementById('bpmLabel').innerHTML = CurrentBPM;
}

function clearMarkers() {
    QuarterMarkers.forEach(q => {
        q.classList.remove('color-1');
    });

    EMarkers.forEach(e => {
        e.classList.remove('color-2');
    });

    AndMarkers.forEach(and => {
        and.classList.remove('color-3');
    });

    AMarkers.forEach(a => {
        a.classList.remove('color-2');
    });
}

function onBeat(beatNumber, time, audioContext) {

    // create an oscillator
    const osc = audioContext.createOscillator();
    const envelope = audioContext.createGain();

    const down = 3000;
    const b4 = 2000;
    const b8 = 1600;
    const b16 = 1400;
    const b32 = 1000;
    const noSound = 0;

    // 1.e.+.a.2.e.+.a.3.e.+.a.4.e.+.a.
    switch (beatNumber) {
        case 1:
            clearMarkers();
            QuarterMarkers[0].classList.add('color-1');
            if (PlayDownbeat) {
                osc.frequency.value = down;
                document.getElementById('beatCount').innerHTML = '1';
            }
            else {
                osc.frequency.value = b4;
                document.getElementById('beatCount').innerHTML = '1';
            }
            break;
        case 2:
            if (Play32ndNotes) {
                osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 3:
            if (Play16thNotes) {
                clearMarkers();
            osc.frequency.value = b16;
                document.getElementById('beatCount').innerHTML = 'e';
                EMarkers[0].classList.add('color-2');
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 4:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 5:
            if (Play8thNotes) {
                clearMarkers();
                osc.frequency.value = b8;
                document.getElementById('beatCount').innerHTML = '&';
                AndMarkers[0].classList.add('color-3');
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 6:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 7:
            if (Play16thNotes) {
                clearMarkers();
            osc.frequency.value = b16;
                document.getElementById('beatCount').innerHTML = 'a';
                AMarkers[0].classList.add('color-2');
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 8:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 9:
            clearMarkers();
            osc.frequency.value = b4;
            document.getElementById('beatCount').innerHTML = '2';
            QuarterMarkers[1].classList.add('color-1');
            break;
        case 10:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 11:
            if (Play16thNotes) {
                clearMarkers();
            osc.frequency.value = b16;
                document.getElementById('beatCount').innerHTML = 'e';
                EMarkers[1].classList.add('color-2');
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 12:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 13:
            if (Play8thNotes) {
                clearMarkers();
            osc.frequency.value = b8;
                document.getElementById('beatCount').innerHTML = '&';
                AndMarkers[1].classList.add('color-3');
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 14:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 15:
            if (Play16thNotes) {
                clearMarkers();
            osc.frequency.value = b16;
                document.getElementById('beatCount').innerHTML = 'a';
                AMarkers[1].classList.add('color-2');
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 16:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 17:
            clearMarkers();
            osc.frequency.value = b4;
            document.getElementById('beatCount').innerHTML = '3';
            QuarterMarkers[2].classList.add('color-1');
            break;
        case 18:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 19:
            if (Play16thNotes) {
                clearMarkers();
                osc.frequency.value = b16;
                document.getElementById('beatCount').innerHTML = 'e';
                EMarkers[2].classList.add('color-2');
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 20:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 21:
            if (Play8thNotes) {
                clearMarkers();
            osc.frequency.value = b8;
                document.getElementById('beatCount').innerHTML = '&';
                AndMarkers[2].classList.add('color-3');
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 22:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 23:
            if (Play16thNotes) {
                clearMarkers();
                osc.frequency.value = b16;
                document.getElementById('beatCount').innerHTML = 'a';
                AMarkers[2].classList.add('color-2');
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 24:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 25:
            clearMarkers();
            osc.frequency.value = b4;
            document.getElementById('beatCount').innerHTML = '4';
            QuarterMarkers[3].classList.add('color-1');
            break;
        case 26:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 27:
            if (Play16thNotes) {
                clearMarkers();
            osc.frequency.value = b16;
                document.getElementById('beatCount').innerHTML = 'e';
                EMarkers[3].classList.add('color-2');
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 28:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 29:
            if (Play8thNotes) {
                clearMarkers();
                osc.frequency.value = b8;
                document.getElementById('beatCount').innerHTML = '&';
                AndMarkers[3].classList.add('color-3');
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 30:
            if (Play32ndNotes) {
            osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 31:
            if (Play16thNotes) {
                clearMarkers();
                osc.frequency.value = b16;
                document.getElementById('beatCount').innerHTML = 'a';
                AMarkers[3].classList.add('color-2');
            }
            else {
                osc.frequency.value = noSound;
            }
            break;
        case 32:
            if (Play32ndNotes) {
                osc.frequency.value = b32;
                document.getElementById('beatCount').innerHTML = '.';
            }
            else {
                osc.frequency.value = noSound;
            }
            break;

        default:
            console.error('NULL beat error');
            osc.frequency.value = noSound;
            break;
    }

    envelope.gain.value = 1;
    envelope.gain.exponentialRampToValueAtTime(1, time + 0.001);
    envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.02);

    osc.connect(envelope);
    envelope.connect(audioContext.destination);

    osc.start(time);
    osc.stop(time + 0.03);
}