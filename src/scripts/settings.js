let _docRoot = document.querySelector(':root');

let DarkMode = true;

let PlayDownbeat = true;
let Play8thNotes = true;
let Play16thNotes = false;
let Play32ndNotes = false;
let PlayTripletNotes = false;

let MetronomeSound = 'click';
let MetronomeTimeSignature = '4-4';

loadSettings();

function loadSettings()
{
    document.getElementById('isDark').checked = DarkMode;

    document.getElementById('color1').value = '#23395B';
    document.getElementById('color2').value = '#3e81b1';
    document.getElementById('color3').value = '#74b7cc';
    document.getElementById('color4').value = '#73C2BE';

    document.getElementById('downbeat').checked = PlayDownbeat;
    document.getElementById('show8').checked = Play8thNotes;
    document.getElementById('show16').checked = Play16thNotes;
    document.getElementById('show32').checked = Play32ndNotes;
    document.getElementById('triples').checked = PlayTripletNotes;
    updateBeatToggles()

    updateBeatCounter()
    
    document.getElementById('timeSignature').querySelectorAll('option')[0].selected = 'selected';
    document.getElementById('sound').querySelectorAll('option')[0].selected = 'selected';
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
    PlayTripletNotes = document.getElementById('triples').checked;

    if (Play8thNotes) {
        AndMarkers.forEach(and => {
            and.style.display = "inline-block";
        });
    }
    else {
        AndMarkers.forEach(and => {
            and.style.display = "none";
        });
    }

    if (Play16thNotes) {
        EMarkers.forEach(e => {
            e.style.display = "inline-block";
        });

        AMarkers.forEach(a => {
            a.style.display = "inline-block";
        });
    }    
    else {
        EMarkers.forEach(e => {
            e.style.display = "none";
        });

        AMarkers.forEach(a => {
            a.style.display = "none";
        });
    }
}

function updateTimeSignature() {
    MetronomeTimeSignature = document.getElementById('timeSignature').value;
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