if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    exit 1
fi

git push --delete origin $1
git tag -d $1
git tag $1
git push origin --tags