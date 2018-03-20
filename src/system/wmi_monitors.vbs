strComputer = "." 
Set objWMIService = GetObject("winmgmts:\\" & strComputer & "\root\cimv2") 
Set colItems = objWMIService.ExecQuery("Select * from Win32_DesktopMonitor",,48) 

For Each objItem in colItems
msg = "Caption: " & objItem.Caption & ", Name: " & objItem.Name & ", ScreenWidth: " & objItem.ScreenWidth & ", ScreenHeight: " & objItem.ScreenHeight
WScript.Echo msg
WScript.Echo objItem.ScreenWidth
'WScript.Echo "ScreenHeight: " & objItem.ScreenHeight 
'WScript.Echo "ScreenWidth: " & objItem.ScreenWidth 
Next
