#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Variables
SOURCE_BRANCH="source"
TEMP_BRANCH="move-dist-to-master"
DIST_FOLDER="dist"

npm run build

# Create a new temporary branch from the source branch
git checkout -b $TEMP_BRANCH

# Check if the dist folder exists
if [ -d "$DIST_FOLDER" ]; then
  # Move the contents of the dist folder to the root directory
  mv $DIST_FOLDER/* .
  mv $DIST_FOLDER/.* . 2>/dev/null || true  # Move hidden files if any
  # Remove the dist folder
  rm -rf $DIST_FOLDER
else
  echo "dist folder does not exist in the source branch."
  git checkout $SOURCE_BRANCH
  git branch -d $TEMP_BRANCH
  exit 1
fi

# Commit the changes
git add .
git commit -m "Move contents of dist folder to root"

# Checkout the master branch
git checkout master

# Merge the changes from the temporary branch
git merge $TEMP_BRANCH

# Push the changes to the master branch
git push origin master

# Delete the temporary branch
git checkout $SOURCE_BRANCH
git branch -d $TEMP_BRANCH

echo "Deployment complete!"