CREATE TABLE IF NOT EXISTS TAREFAS (
    id INTEGER PRIMARY KEY,
    titulo TEXT NOT NULL,
    dias_semana TEXT DEFAULT "",
    descricao TEXT,
    concluido BOOLEAN DEFAULT 0,
    dataPrevistaTermino DATE NOT NULL,
    dataCriacao DATE NOT NULL,
    dataArquivacao DATE DEFAULT NULL,
    fk_categoriaNome TEXT NOT NULL,
    FOREIGN KEY(fk_categoriaNome) REFERENCES categoria(nome)
);
