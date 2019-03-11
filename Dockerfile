# Backend
FROM composer:latest as vendor
COPY database/ database/
COPY composer.json composer.json
COPY composer.lock composer.lock
RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist
# Frontend
FROM node:10-alpine as frontend
RUN mkdir -p /app/public
COPY package.json webpack.mix.js yarn.lock /app/
COPY resources/ /app/resources/
WORKDIR /app
RUN yarn install \
    && yarn run prod
FROM csunmetalab/environment:base-20190130 as base
COPY . /var/www/html
RUN apt-get update && apt-get install -y \
      git \
      vim \
      wget \
      gnupg
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -qq -y build-essential nodejs yarn \
    libpq-dev \
    mysql-client
RUN yarn global add --prod --no-lockfile laravel-echo-server \
 && yarn cache clean \
 && mkdir -p /app/database
# Install Redis.
RUN \
  cd /tmp && \
  wget  http://download.redis.io/redis-stable.tar.gz && \
  tar xvzf redis-stable.tar.gz && \
  cd redis-stable && \
  make && \
  make install && \
  cp -f src/redis-sentinel /usr/local/bin && \
  mkdir -p /etc/redis && \
  cp -f *.conf /etc/redis && \
  rm -rf /tmp/redis-stable* && \
  sed -i 's/^\(bind .*\)$/# \1/' /etc/redis/redis.conf && \
  sed -i 's/^\(daemonize .*\)$/# \1/' /etc/redis/redis.conf && \
  sed -i 's/^\(dir .*\)$/# \1\ndir \/data/' /etc/redis/redis.conf && \
  sed -i 's/^\(logfile .*\)$/# \1/' /etc/redis/redis.conf
# Define mountable directories.
VOLUME ["/data"]
# Define default command.
CMD ["redis-server", "/etc/redis/redis.conf"]
# Expose ports.
EXPOSE 6379
# Change /var/www permission
RUN chown -hR www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
# Expose port 80 and 443
EXPOSE 80
# PHP/Apache
FROM csunmetalab/environment:base-20190130 as build
# Copy Front/Backend packages
COPY --from=base /var/www/html /var/www/html
COPY --from=vendor /app/vendor/ /var/www/html/vendor/
COPY --from=frontend /app/public/js/ /var/www/html/public/js/
COPY --from=frontend /app/public/css/ /var/www/html/public/css/
COPY --from=frontend /app/mix-manifest.json /var/www/html/mix-manifest.json
