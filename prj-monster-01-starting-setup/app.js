const getForceOfAttack = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
    data() {
        return {
            currentRound: 0,
            player: 'player',
            monster: 'monster',
            draw: 'draw',
            endMessage: '',

            minHealth: 0,
            maxHealth: 100,

            healingMin: 8,
            healingMax: 20,

            playerHealth: 100,
            monsterHealth: 100,

            minAttack: 5,
            forceOfAttackByPlayer: 10,
            forceOfSpecialAttackByPlayer: 15,
            forceOfAttackByMonster: 10,
            healPointsForPlayer: 5,

            winner: '',

            logs: []
        }
    },
    computed: {
        playerHealthValue() {
            return this.playerHealth + '%';
        },

        monsterHealthValue() {
            return this.monsterHealth + '%';
        },

        isSpecialAttackAvailable() {
            return this.currentRound % 3 !== 0 || this.winner !== '';
        },

        isGameOver(){
            return this.winner !== '';
        }

    },

    methods: {
        onAttack() {
            this.currentRound++;
            this.attackByPlayer(this.forceOfAttackByPlayer);
            this.attackByMonster();
        },
        onSpecialAttack() {
            this.currentRound++;
            this.attackByPlayer(this.forceOfSpecialAttackByPlayer);
            this.attackByMonster();
        },

        onHeal() {
            this.currentRound++;
            this.healPlayer();
            this.attackByMonster();
        },

        onSurrender() {
            this.currentRound++;
            this.winner = this.monster;
            this.playerHealth = this.minHealth;
        },

        healPlayer() {
            this.currentRound++;

            const attackValue = getForceOfAttack(this.healingMin, this.healingMax);
            this.playerHealth += attackValue;
            this.validPlayerHealth();

            this.addLogMessage(this.player, 'heal', attackValue);
        },

        attackByPlayer(maxOfAttack) {
            const attackValue = getForceOfAttack(this.minAttack, maxOfAttack);
            this.monsterHealth -= attackValue;
            this.validMonsterHealth();

            this.addLogMessage(this.player, 'attack', attackValue);
        },

        attackByMonster() {
            const attackValue = getForceOfAttack(this.minAttack, this.forceOfAttackByMonster);
            this.playerHealth -= attackValue;
            this.validPlayerHealth();

            this.addLogMessage(this.monster, 'attack', attackValue);
        },

        validMonsterHealth() {
            if (this.monsterHealth > this.maxHealth) {
                this.monsterHealth = this.maxHealth;
            }
            if (this.monsterHealth < this.minHealth) {
                this.monsterHealth = this.minHealth;
            }
        },

        validPlayerHealth() {
            if (this.playerHealth > this.maxHealth) {
                this.playerHealth = this.maxHealth;
            }
            if (this.playerHealth < this.minHealth) {
                this.playerHealth = this.minHealth;
            }
        },

        addLogMessage(who, what, value) {
            this.logs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        },

        // checkWinner() {
        //     if (this.monsterHealth <= this.minHealth && this.playerHealth > this.minHealth) {
        //         this.displayResult("The winner is the player");
        //         this.winner = this.player;
        //         this.reset();
        //     } else if (this.playerHealth <= this.minHealth && this.monsterHealth > this.minHealth) {
        //         this.displayResult("The winner is the monster");
        //         this.winner = this.monster;
        //         this.reset();
        //     } else if (this.playerHealth <= this.minHealth && this.monsterHealth <= this.minHealth) {
        //         this.displayResult("Draw");
        //         this.winner = this.draw;
        //         this.reset();
        //     }
        // },

        // displayResult(message) {
        //     alert(message);
        // },

        reset() {
            this.playerHealth = this.maxHealth;
            this.monsterHealth = this.maxHealth;
            this.currentRound = 0;
            this.winner = '';
            this.endMessage = '';
            this.logs = [];
        }
    },

    watch:
        {
            playerHealth(value) {
                if (value <= this.minHealth && this.monsterHealth <= 0) {
                    this.endMessage = "Draw";
                    this.winner = this.draw;
                } else if (value <= 0) {
                    this.endMessage =  "The winner is the monster";
                    this.winner = this.monster;
                }
            },

            monsterHealth(value) {
                if (value <= this.minHealth && this.playerHealth <= 0) {
                    this.endMessage = "Draw";
                    this.winner = this.draw;
                } else if (value <= 0) {
                    this.endMessage = "The winner is the player";
                    this.winner = this.player;
                }
            }
        }
});


app.mount('#game');