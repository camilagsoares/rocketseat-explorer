> Commit são marcos importantes ao longo do desenvolvimento
> 
- Guarda um histórico ao longo da aplicação

`git init` para criar um novo repositório

- pasta .git não pode ser apagada,é a pasta que contém todo histórico de alteração ao longo do projeto

**git add .** salva todos os arquivos novos

**git commit -m “”**  Mensagem

**git log** histórico de commits

**git log -n 3** mostra os três últimos commits

**git status** mostra em qual estágio os arquivos se encontram

**HEAD** mostra o último commit realizado no projeto

- O HEAD é como se fosse um ponteiro apontando o nível do projeto se encontra


**git diff** Compara as alterações, mostrando linha a linha do que mudou

**git restore <arquivo>** ou **git restore .** para voltar o código/descartar mudanças

**git restore  - - staged <>** Desfaz a alteração que foi para staged

**git commit —amend -m “”** Para mudar o commit

**git reset —soft HEAD~1**   Desfazendo o último commit

» Após dar o primeiro **git push origin main**,depois pode usar só **git push**

» É bom colocar a pasta *node_modules* no arquivo .gitignore

»`.gitkeep` mostra a pasta no terminal,mesmo se estiver vazio