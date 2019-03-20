

function collide(){
    var asteroid = initAsteroid();
    var projectile = initProjectile();
    var projectileWidth = 64;
    var projectileHeight = 4;
    var asteroidWidth = img2.width;
    var asteroidHeight = img2.height;

    if (asteroid.asteroidX < projectile.projectileX + projectileWidth  && asteroid.asteroidX + asteroidWidth  > projectile.projectileX &&
        asteroid.asteroidY < projectile.projectileY + projectileHeight && asteroid.asteroidY + asteroidHeight > projectile.projectileY) {
    // The objects are touching
    console.log('Objects touched');
    }
}   