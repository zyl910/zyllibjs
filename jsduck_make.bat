rd /s /Q "%~dp0doc"
%~dp0jsduck-5.3.4.exe --output="%~dp0doc" --images="%~dp0images" --builtin-classes --title="zyllibjs" "%~dp0src"
pause
