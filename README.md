# MoonBase.App Backend API Server

[![Build status](https://ci.appveyor.com/api/projects/status/h2uvmx9yft68k6b2?svg=true)](https://ci.appveyor.com/project/chidimo/express-api-template)

Live API endpoint: <http://moonbase.info.gf:3000/v1>

## API Endpoints

### Active Endpoints:
- /messages endpoint -- <http://moonbase.info.gf:3000/v1/messages>

-- the messages endpoint retrieves all messages from postgresdb

### Under Construction Endpoints:
- /userId endpoint generates a userId key when you make a POST request to it with {data}[^1].

-- the userId endpoint generates a unique userId key to store in postgresdb

[^1]: {data} for example could = username + email 
