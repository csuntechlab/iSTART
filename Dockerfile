FROM csunmetalab/environment:base-20190130 as base
COPY . /var/www/html
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
RUN yarn install 
# Change /var/www permission
RUN chown -hR www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
# Expose port 80 and 6001 
EXPOSE 80
EXPOSE 6001
# PHP/Apache
FROM csunmetalab/environment:base-20190130 as build
# Copy Front/Backend packages
COPY --from=base /var/www/html /var/www/html
COPY --from=vendor /app/vendor/ /var/www/html/vendor/
COPY --from=frontend /app/public/js/ /var/www/html/public/js/
COPY --from=frontend /app/public/css/ /var/www/html/public/css/
COPY --from=frontend /app/mix-manifest.json /var/www/html/mix-manifest.json
