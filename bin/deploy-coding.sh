#! /bin/bash
set -e

rm -rf coding-repo
git clone git@git.coding.net:xcatliu/from-javascript-to-typescript.git coding-repo
cd coding-repo

git checkout coding-pages

rsync -a ../_book/ ./

git add -A
git commit -m 'Update coding-pages'
git push origin coding-pages

cd ..
rm -rf coding-repo

