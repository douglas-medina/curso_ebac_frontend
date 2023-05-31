function Weapon(nome) {
    let _nome = nome; // Atributo privado
}

function Espada(nome, nivel, dano) {
    let _nivel = nivel;
    let _Dano = dano;
    let parseDano = parseFloat(_Dano.toFixed(1));

    this.getDano = function() {
        return _Dano;
    }

    this.setDano = function(valor) {
        if (typeof valor === 'number') {
            _Dano = valor;
        }
    }

    this.buff = function() {
        const novoDano = _Dano * 1.1;
        _Dano = novoDano;
    }

    this.dizDano = function() {
        if (_nivel === 70) {
            console.log("A arma " + nome + " tem o nível " + _nivel + " e o dano atualizado é " + _Dano + ". Recebendo um buff de 15%");
        } else if (_nivel === 80) {
            console.log("A arma " + nome + " tem o nível " + _nivel + " e o dano atualizado é " + _Dano + ". Recebendo um buff de 12%");
        }
        else if (_nivel === 90) {
            console.log("A arma " + nome + " tem o nível " + _nivel + " e o dano atualizado é " + _Dano + ". Recebendo um buff de 10%");
        }
    }

    Weapon.call(this, nome);
}

function Nivel70(nome) {
    Espada.call(this, nome, 70, 672);

    this.buff = function() {
        const novoDano = this.getDano() * 1.15;
        this.setDano(novoDano);
    }
}

function Nivel80(nome) {
    Espada.call(this, nome, 80, 980);

    this.buff = function() {
        const novoDano = this.getDano() * 1.12;
        this.setDano(novoDano);
    }
}

function Nivel90(nome) {
    Espada.call(this, nome, 90, 1102);

    this.buff = function() {
        const novoDano = this.getDano() * 1.10;
        this.setDano(novoDano);
    }
}

const arma1 = new Nivel70("Superior Dragon Claw");
const arma2 = new Nivel80("Chaotic Longsword");
const arma3 = new Nivel90("Drygore Rapier");

arma1.buff();
arma1.dizDano();

arma2.buff();
arma2.dizDano();

arma3.buff();
arma3.dizDano();