#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run dist

# navigate into the build output directory
cd dist

# create CNAME file
echo $CNAME > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:$REPOSITORY master:gh-pages

cd -