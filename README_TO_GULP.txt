Step 1 – Install Node.js
Go to 'http://nodejs.org' and click install. Your operating system should be recognised automatically. 

Step 2 – Install Gulp.js
Open command prompt – Now type 'npm install -g gulp' this will install "Gulp.js" globally on your system.

Step 3 – Check Gulp
Now type 'gulp -version', if this gives you the current gulp version than everything went fine.

Step 4 – Create "package.json"
Go via terminal to your project folder and type 'npm init'. 
You can skip all configurations by pressing continously enter.

Step 5 – Install Gulp locally 
Now type 'npm install gulp --save'. A folder "node_modules" with content should appear.

Step 6 – Install Plugin 
To install the needed plugin type 'npm install --save-dev gulp-concat'.

Step 7 – Create "gulpfile.js"
As forelast step create "gulpfile.js" if needed. In this file there should be the performed code for using plugins. 
The repository should contain the "gulpfile.js" including the proper code. It will be needed for step 8. 

Step 8 - Concatenate
Finally type 'gulp scripts1' press enter and than type 'gulp scripts2'. 'scrips1' and 'scripts2' are the task names
given by code in "gulpfile.js".

NOTE:
These are minimal explained steps for installing and using Gulp. 
For deep understanding Gulp, please use internet and/or these following links:

Author: Tech CBT
https://www.youtube.com/watch?v=sS4sTrd57t8 - Grunt JS: Quick Introduction
https://www.youtube.com/watch?v=mbRlB42vQP8 - Gulp JS: Quick Introduction (in 30 min)

Author: Ollie Mc Farlane
http://omcfarlane.co.uk/install-gulp-js-windows/ - How to Install Gulp.js on Windows