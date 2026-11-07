const character = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'snortleblat.webp',
    attacked: function () {
        if (this.health > 0) {
            this.health -= 20;
            if (this.health < 0) {
                this.health = 0;
            }
            renderCharacter(this);
            if (this.health === 0) {
                alert(this.name + ' has died.');
            }
        } else {
            alert(this.name + ' has died.');
        }
    },
    levelUp: function() {
        this.level += 1;
        renderCharacter(this);
    }
};

function renderCharacter(char) {
    document.querySelector('#characterName').textContent = char.name;
    document.querySelector('#characterClass').textContent = char.class;
    document.querySelector('#characterLevel').textContent = char.level;
    document.querySelector('#characterHealth').textContent = char.health;

    document.querySelector('.image').setAttribute('src', char.image);
    document.querySelector('.image').setAttribute('alt', char.name);
}

renderCharacter(character);

document.querySelector('#attackedBtn').addEventListener('click', function () {
    character.attacked();
});

document.querySelector('#levelUpBtn').addEventListener('click', function () {
    character.levelUp();
});