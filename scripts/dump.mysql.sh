#!/bin/bash
docker exec  db /usr/bin/mysqldump -u root --password=395F844E696D423F6B7ACBBA301539668E6 wordpress > backup.sql
