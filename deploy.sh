echo "Switching to branch master"
git checkout master

echo "Building App..."
npm run build

echo "Deploying files to server..."
scp -r build/* ptech_react@34.134.186.249:/var/www/34.134.186.249/

echo "Done!"