#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git branch -M main &&
git remote add origin git@gitee.com:Eva_L/grap-book-website.git &&
git push -u origin main -f
cd -