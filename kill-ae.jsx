var command = $.os.indexOf("Win")
  ? "osascript -e 'tell application \"Terminal\" to do script \"pkill After Effects && killall Terminal\"'"
  : "taskkill /f /im AfterFX.exe /t";
system.callSystem(command);
