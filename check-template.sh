#!/bin/sh
# check the original template for changes compared to the the local app
# todo - test once in a cloned app

# check if there are uncommitted changes
if git status --porcelain;
then
  echo 'please remove the uncommitted changes before running this script'
  exit
fi

# add remote if doesn't already exists
if [ `git remote -v | grep 'original-tempate https://github.com/wooshiiltd/web-template.git'` ]
then
  git remote add original-tempate https://github.com/wooshiiltd/web-template.git
fi

# get remote
git fetch original-template

# compare the changes between the current branch and the original-template
git diff  $(git rev-parse --abbrev-ref HEAD)...original-template/main -- /