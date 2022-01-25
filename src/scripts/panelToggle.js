let _configIsOpen = false;
let _settingsIsOpen = false;
let _helpIsOpen = false;

function toggleConfig() {
    _configIsOpen = !_configIsOpen;
    setConfig(_configIsOpen)
}

function toggleSettings() {
    _settingsIsOpen = !_settingsIsOpen;
    setSettings(_settingsIsOpen)
}

function toggleHelp() {
    _helpIsOpen = !_helpIsOpen;
    setHelp(_helpIsOpen)
}

function setHelp(b) {
    let ct = document.getElementById('helpPanel');

    if (b) {
        ct.style.display = "block";
        if (_settingsIsOpen) {
            toggleSettings()
        }
        if (_configIsOpen) {
            toggleConfig()
        }
        document.getElementById('helpButton').classList.add('on');
    }
    else {
        ct.style.display = "none";
        document.getElementById('helpButton').classList.remove('on');
    }
}

function setConfig(b) {
    let ct = document.getElementById('configPanel');

    if (b) {
        ct.style.display = "block";
        if (_settingsIsOpen) {
            toggleSettings()
        }
        if (_helpIsOpen) {
            toggleHelp()
        }
        document.getElementById('configButton').classList.add('on');
    }
    else {
        ct.style.display = "none";
        document.getElementById('configButton').classList.remove('on');
    }
}

function setSettings(b) {
    let ct = document.getElementById('settingsPanel');

    if (b) {
        ct.style.display = "block";
        if (_configIsOpen) {
            toggleConfig()
        }
        if (_helpIsOpen) {
            toggleHelp()
        }
        document.getElementById('settingsButton').classList.add('on');
    }
    else {
        ct.style.display = "none";
        document.getElementById('settingsButton').classList.remove('on');

        saveSettings();
    }
}

function openBPM() {
    document.getElementById('bpmPanel').style.display = "block";
}

function closeBPM() {
    document.getElementById('bpmPanel').style.display = "none";
    onSetBPM(document.getElementById('editBPM').valueAsNumber);
}