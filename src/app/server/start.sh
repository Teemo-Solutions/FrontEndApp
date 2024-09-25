#!/bin/bash

# Inicia JSON Server con la base de datos y las rutas personalizadas
json-server --watch db.json --routes routes.json --port 3000
