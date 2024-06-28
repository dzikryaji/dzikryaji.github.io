#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Variables
SOURCE_BRANCH="source"
TEMP_BRANCH="move-dist-to-master"
DIST_FOLDER="dist"

# Checkout the source branch
git checkout $SOURCE_BRANCH

# Create a new temporary branch from the source branch
git checkout -b $TEMP_BRANCH

# Move the contents of the dist folder to the root directory
mv $DIST_FOLDER/* .
rm -rf $DIST_FOLDER

# Commit the changes
git add .
git commit -m "Update Deploy"

# Checkout the master branch
git checkout master

# Merge the changes from the temporary branch
git merge $TEMP_BRANCH

# Push the changes to the master branch
git push origin master

# Delete the temporary branch
git branch -d $TEMP_BRANCH

echo "Deployment complete!"
