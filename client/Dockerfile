FROM node:19.0.0

RUN npm install -g eslint

ADD docker/docker-entrypoint /usr/bin/docker-entrypoint

ENTRYPOINT ["/usr/bin/docker-entrypoint"]

WORKDIR "/app"

CMD ["serve"]