docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probapyat-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t probapyat-java/app ../../..
