// Get the player and enemy elements
const player = document.getElementById('player');
const enemy = document.getElementById('enemy');

// Set the player's initial position
let playerX = 0;
let playerY = 0;

// Set the enemy's initial position
let enemyX = 550;
let enemyY = 350;

// Move the player when the arrow keys are pressed
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      if (playerY > 0) {
        playerY -= 10;
        player.style.bottom = playerY + 'px';
      }
      break;
    case 'ArrowDown':
      if (playerY < 350) {
        playerY += 10;
        player.style.bottom = playerY + 'px';
      }
      break;
    case 'ArrowLeft':
      if (playerX > 0) {
        playerX -= 10;
        player.style.left = playerX + 'px';
      }
      break;
    case 'ArrowRight':
      if (playerX < 550) {
        playerX += 10;
        player.style.left = playerX + 'px';
      }
      break;
  }
});

// Move the enemy towards the player
setInterval(() => {
  if (enemyX > playerX) {
    enemyX -= 1;
    enemy.style.right = enemyX + 'px';
  } else if (enemyX < playerX) {
    enemyX += 1;
    enemy.style.right = enemyX + 'px';
  }

  if (enemyY > playerY) {
    enemyY -= 1;
    enemy.style.top
