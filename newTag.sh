if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    exit 1
fi
git tag $1
git push origin --tags