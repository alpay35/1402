// Handles automatic jailbreak retry logic and countdown timers.

function setAutoJbRetry(checked) {
    storage.set('autoJbRetry', checked);
    storage.session.set('autoJbRetry', checked);
    rememberUserChoices();

    if (!checked) return;
    if (confirm(window.lang.autoJbRetryConfirm)) jailbreak();
}

function setAutoJb(checked) {
    storage.set('autoJb', checked);
    storage.session.set('autoJb', checked);
    storage.set('rememberedDevice', true);
}

// When jailbreak succeeds, this will be stopped
function autoJailbreak() {
    // used for 6.7x jailbreak when userland is loaded
    var jbNow = storage.session.getBoolean('jailbreakNow', false);
    if (jbNow) {
        storage.session.remove('jailbreakNow');
        jailbreak();
        return;
    }

    // Auto jailbreak retry logic
    var autoJbRetryChecked = storage.getBoolean('autoJbRetry', true);
    var autoJbRetrySessionChecked = storage.session.getBoolean('autoJbRetry', false);
    if (ui.autoJbRetry) ui.autoJbRetry.checked = autoJbRetryChecked;

    // Auto jailbreak logic (enabled by default; user can opt out in Settings)
    var autoJbChecked = storage.getBoolean('autoJb', true);
    var autoJbSessionChecked = storage.session.getBoolean('autoJb', true);
    if (ui.autoJb) ui.autoJb.checked = autoJbChecked;

    // check if supported ps4
    var isSupported = isFirmwareSupported(window.ps4Fw);
    if (!isSupported || !window.ps4Fw) return;

    // If auto jb retry is checked and previous jailbreak attempt was unsuccessful, retry jailbreak with a timer
    if (autoJbRetryChecked && autoJbRetrySessionChecked) {
        autoJailbreakTimer(false);
    } else if (autoJbChecked && autoJbSessionChecked) {
        // If auto jb is enabled (or choices were saved on this device), execute jailbreak after 5s countdown
        autoJailbreakTimer(true);
    }
}

// Storage retry value true or saved device choices: start 5s countdown
function autoJailbreakTimer(permanentJb) {
    if (autoJbInterval) clearInterval(autoJbInterval);
    var timer = 5;
    if (ui.stopAutoJbBtn) toggleVisibility(ui.stopAutoJbBtn.id, true);
    // check if language values are available, if not, use default values
    var langObj = window.lang || {};
    var autoJbRetryText = langObj.autoJbRetry || "{seconds} saniye icinde yeniden deneniyor...";
    var autoJbText = langObj.autoJb || "Secimleriniz hatirlandi. {seconds} saniye icinde otomatik devam ediliyor...";
    var message = permanentJb ? autoJbText : autoJbRetryText;

    function updateCountdownDisplay() {
        if (!ui.clickToStartText) return;
        ui.clickToStartText.textContent = message.replace('{seconds}', timer);
        ui.clickToStartText.style.fontSize = "32px";
        ui.clickToStartText.style.lineHeight = "1.2";
        ui.clickToStartText.style.textAlign = "center";
    }

    // paste this again so it displays immediately on page load
    updateCountdownDisplay();
    autoJbInterval = setInterval(function () {
        timer--;
        if (timer <= 0) {
            clearInterval(autoJbInterval);
            autoJbInterval = null;
            jailbreak();
            return;
        }
        updateCountdownDisplay();
    }, 1000);
}

function setReloadAfterJb(checked) {
    storage.set('reloadAfterJb', checked);
    rememberUserChoices();
}

function getReloadAfterJb() {
    var checked = getReloadAfterJbValue();
    var input = document.getElementById('reloadAfterJbInput');
    if (input) input.checked = checked;
    return checked;
}