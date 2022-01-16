let _configIsOpen = false;
let _settingsIsOpen = false;

function toggleConfig() {
    _configIsOpen = !_configIsOpen;
    setConfig(_configIsOpen)
}

function toggleSettings() {
    _settingsIsOpen = !_settingsIsOpen;
    setSettings(_settingsIsOpen)
}

function setConfig(b) {
    let ct = document.getElementById('configPanel');

    if (b) {
        ct.style.display = "block";
        if (_settingsIsOpen) {
            toggleSettings()
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
        document.getElementById('settingsButton').classList.add('on');
    }
    else {
        ct.style.display = "none";
        document.getElementById('settingsButton').classList.remove('on');
    }
}

function openBPM() {
    document.getElementById('bpmPanel').style.display = "block";
}

function closeBPM() {
    document.getElementById('bpmPanel').style.display = "none";
    onSetBPM(document.getElementById('editBPM').valueAsNumber);
}