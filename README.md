#LiteWait Setup Steps
#Windows and it is the same for linux as well

#Before going to install, please ensure that .net framework runtime installed
#and python runtime is also installed and environment variable is set for python executable

1. Install nvm for windows

2. set environment variable for nvm

3. open the command prompt

4. nvm install 0.10.32

5. nvm use 0.10.32

6. npm install -g gulp

7. npm install -g gulp-cli

8. npm install -g bower

6. http://guides.beanstalkapp.com/version-control/git-on-windows.html follow the tutor in this url upto generating ssh key

7. open the public ssh key file in an editor and copy the content

8. login with laksiva2005 gitgub account

9. go to settings -> SSH Keys -> New SSH Key then paste your key and give a name and save it

10. after the above steps right click your desktop and you will see a menu git bash click to open it

11. then issue the following commands

12. git clone git@github.com:laksiva2005/litewait.git

13. now a folder created as litewait

12. go to that folder

13. npm install

14. bower install

15. gulp

you will see the output in browser

once you do something just refresh the browser to see the changes (have to explore a way to auto refresh browser tab in gulp)

Commit Steps
=============

1. every time if you go to the litewait folder in git bash, use the below command before starting any work

2. if you are not in master branch issue "git checkout master" then issue "git fetch --all"

3. git rebase origin/master

4. the above step is to ensure that you are having the latest copy of your source

5. git checkout -b 'your-branch-name'

6. the step 5 is for new branch only if you want to checkout to your already existing branch please skip -b option, now you are in your branch

7. if you want to create another new branch, first you need to commit all your changed works in the current branch and must checkout to master branch
   then use the step 5 to create and checkout to your new branch

8. then do all your coding changes, after completing your work please issue the following commands

9. gulp prod

10. git add .

11. git commit -am 'your commit message'

12. git push origin your-branch-name

13. git checkout master

14. git fetch --all

15. git rebase origin/master