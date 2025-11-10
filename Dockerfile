# Étape 1 : Utiliser une image PHP officielle avec Composer
FROM php:8.2-cli

# Installer quelques dépendances nécessaires à Laravel
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    curl \
    libzip-dev \
    zip \
    && docker-php-ext-install zip pdo pdo_mysql

# Définir le dossier de travail
WORKDIR /app

# Copier tout le projet dans le conteneur
COPY . .

# Donner les bonnes permissions à Laravel
RUN chmod -R 775 storage bootstrap/cache

# Exposer le port 10000 (Render utilise ce port par défaut)
EXPOSE 10000

# Commande de démarrage
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=10000"]
