new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },

    attack: function(){
      // Damage toma el valor del metodo calculateDamage pasandole un valor min y otro max para calcularlo
      var damage = this.calculateDamage(3, 10);
      // La vida del monstruo baja acorde al daño aleatorio que se genera al pulsar el btn
      this.monsterHealth -= damage;
      //  Chequea si ganamos con el metodo Checkwin, si es true deja de ejecutar el resto del codigo.
      if (this.checkWin()) {
        return;
      }
      // Damage toma el valor del metodo calculateDamage pasandole un valor min y otro max para calcularlo
      damage = this.calculateDamage(5, 12);
      // La vida del player baja acorde al daño aleatorio que se genera al pulsar el btn
      this.playerHealth -= damage;
      // Ejecuta el metodo checkWin
      this.checkWin();
    },

    specialAttack: function(){
      var damage = this.calculateDamage(10, 20);
      
      this.monsterHealth -= damage;
      if (this.checkWin()) {
        return;
      }
      damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.checkWin();
    },

    heal: function(){
      var heal = this.calculateDamage(3, 10);
      this.playerHealth += heal;

      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
    },

    giveUp: function(){
    },

    monsterAttacks: function() {
      this.playerHealth -= this.calculateDamage(5, 12);
      this.checkWin();
    },

    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});