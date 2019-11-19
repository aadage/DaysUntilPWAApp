# DaysUntilPWAApp
github pages version of DaysUntil app


# Publishing Steps
* Right-click BlazorPWA project and select Publish
* Copy the published files from:
    C:\Users\mgase\Documents\docs\Code\github\AppForApps\DaysUntil\DaysUntil\DaysUntil\bin\Release\netstandard2.0\publish\DaysUntil\dist
	to:
    C:\Users\mgase\Documents\docs\Code\github\DaysUntilPWAApp
* Open C:\Users\mgase\Documents\docs\Code\github\DaysUntilPWAApp in VSCode
* Update root paths
	index.html - update the base tag to <base href="/DaysUntilPWAApp/" />
	manifest.json - update /images to /DaysUntilPWAApp/images
	serviceworker.js - change pathroot to /DaysUntilPWAApp/
	sw-init.js - change pathroot to /DaysUntilPWAApp/
* Add a commit comment and commit all of the changes.
* From the command line at C:\Users\mgase\Documents\docs\Code\github\DaysUntilPWAApp execute this command:
	git push origin master


# App URL
https://aadage.github.io/BlazorPWAApp/


