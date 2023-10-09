Entrar a la carpeta './server' y hacer el siguiente comando:
docker build -t node:18-alpine .

luego salir de la carpeta 'server'
..cd

luego iniciar el docker swarm
docker swarm init

y por ultimo lanzar los 9 contenedores:
docker stack deploy -c docker-compose.yml services