CREATE TABLE IF NOT EXISTS USUARIO(
    id   default (1),
    nome TEXT NOT NULL,
    tema TEXT NOT NULL CHECK (tema IN ('claro', 'escuro'))
);
