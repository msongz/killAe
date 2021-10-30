var command = $.os.indexOf("Win") ?
    "osascript -e 'tell application \"Terminal\" to do script \"pkill After Effects && killall Terminal\"'" :
    "taskkill /f /im AfterFX.exe /t";
if (app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY") === 1) {
    system.callSystem(command);
} else {
    alert("Not Allow Scripts to Write Files and Access Network\nPlease Check Preference")
};
