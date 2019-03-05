My hyper config for all my pcs/vms/laptops/etc.
On windows you need to make a filesystem link using admin cmd:
mklink .\.hyper.js .\hyper-config\.hyper.js
then create local bash link:
mklink /D ..\.hyper_plugins\local\windows_bash .\windows_bash
then add windows_bash to the local plugin array in the main file

