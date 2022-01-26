let _docRoot = document.querySelector(':root');

let DarkMode = true;

let PlayDownbeat = true;
let Play8thNotes = true;
let Play16thNotes = false;
let Play32ndNotes = false;
let PlayTripletNotes = false;

let MetronomeSound = 'click';
let MetronomeTimeSignature = 4;

loadSettings();

function loadSettings()
{
    DarkMode = ApplicationSettings.darkMode;
    if (DarkMode) {
        setStyleDark();
    }
    else {
        setStyleLight();
    }

    document.getElementById('isDark').checked = DarkMode;

    document.getElementById('timeSignature').querySelectorAll('option')[2].selected = 'selected';
    updateTimeSignature();

    document.getElementById('sound').querySelectorAll('option')[0].selected = 'selected';

    document.getElementById('color1').value = ApplicationSettings.colors[0];
    document.getElementById('color2').value = ApplicationSettings.colors[1];
    document.getElementById('color3').value = ApplicationSettings.colors[2];
    document.getElementById('color4').value = ApplicationSettings.colors[3];

    document.getElementById('downbeat').checked = PlayDownbeat;
    document.getElementById('show8').checked = Play8thNotes;
    document.getElementById('show16').checked = Play16thNotes;
    document.getElementById('show32').checked = Play32ndNotes;
    // document.getElementById('triples').checked = PlayTripletNotes;
    updateBeatToggles();

    updateBeatCounter();
    
}

function saveSettings() {
    ApplicationSettings.darkMode = document.getElementById('isDark').checked;

    ApplicationSettings.colors[0] = document.getElementById('color1').value;
    ApplicationSettings.colors[1] = document.getElementById('color2').value;
    ApplicationSettings.colors[2] = document.getElementById('color3').value;
    ApplicationSettings.colors[3] = document.getElementById('color4').value;

    localStorage.setItem('settings', JSON.stringify(ApplicationSettings));

    console.log("Saved Settings Object:", ApplicationSettings);
}

function toggleDarkMode() {
    DarkMode = !DarkMode;

    if (DarkMode) {
        setStyleDark()
    }
    else {
        setStyleLight()
    }
}
function setStyleDark() {
    _docRoot.style.setProperty('--main-bg-color', 'var(--dark-bg-color)');
    _docRoot.style.setProperty('--main-color', 'var(--dark-color)');
    _docRoot.style.setProperty('--main-img', 'var(--dark-percent)');
    _docRoot.style.setProperty('--main-marker', 'var(--dark-marker)');
    _docRoot.style.setProperty('--main-section-color', 'var(--dark-section-color)');
}
function setStyleLight() {
    _docRoot.style.setProperty('--main-bg-color', 'var(--light-bg-color)');
    _docRoot.style.setProperty('--main-color', 'var(--light-color)');
    _docRoot.style.setProperty('--main-img', 'var(--light-percent)');
    _docRoot.style.setProperty('--main-marker', 'var(--light-marker)');
    _docRoot.style.setProperty('--main-section-color', 'var(--light-section-color)');
}

function setColor(id) {
    switch (id)
    {
        case 1:
            _docRoot.style.setProperty('--color-1', document.getElementById('color1').value);
            break;

        case 2:
            _docRoot.style.setProperty('--color-2', document.getElementById('color2').value);
            break;

        case 3:
            _docRoot.style.setProperty('--color-3', document.getElementById('color3').value);
            break;

        case 4:
            _docRoot.style.setProperty('--color-4', document.getElementById('color4').value);
            break;
    }
}

function updateBeatToggles()
{
    PlayDownbeat = document.getElementById('downbeat').checked;
    Play8thNotes = document.getElementById('show8').checked;
    Play16thNotes = document.getElementById('show16').checked;
    Play32ndNotes = document.getElementById('show32').checked;
    // PlayTripletNotes = document.getElementById('triples').checked;

    adjustVisualizer(QuarterMarkers);

    if (Play8thNotes) {
        adjustVisualizer(AndMarkers);
    }
    else {
        hideObjects(AndMarkers);
    }

    if (Play16thNotes) {
        adjustVisualizer(EMarkers);
        adjustVisualizer(AMarkers);
    }    
    else {
        hideObjects(EMarkers);
        hideObjects(AMarkers);
    }
}

function hideObjects(o) {
    o.forEach(a => {
        a.style.display = "none";
    });
}

function showObjects(o) {
    o.forEach(a => {
        a.style.display = "inline-block";
    });
}

function adjustVisualizer(v) {
    hideObjects(v);

    for (let i = 0; i < MetronomeTimeSignature; i++) {
        v[i].style.display = "inline-block";
    }
}

function updateTimeSignature() {
    MetronomeTimeSignature = Number(document.getElementById('timeSignature').value);

    AppMetronome.signature = MetronomeTimeSignature;
    AppMetronome.currentNote = 1;
    _docRoot.style.setProperty('--visualizer-count', MetronomeTimeSignature);

    updateBeatToggles();
}

function updateSound() {
    MetronomeSound = document.getElementById('sound').value;
}

function updateBeatCounter() {
    if (document.getElementById('countBeats').checked) {
        document.getElementById('beatCount').style.display = "block";
    }
    else {
        document.getElementById('beatCount').style.display = "none";
    }
}