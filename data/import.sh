
HOST=$1
USERNAME=$2
PASSWORD=$3

mongoimport \
    --host HOST \
    --ssl \
    --username USERNAME \
    --password PASSWORD \
    --authenticationDatabase admin \
    --db northwind \
    --collection customers \
    --type csv \
    --file customers.csv \
    --headerline
