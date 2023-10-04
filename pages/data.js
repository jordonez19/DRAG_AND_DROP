export const questionsandanswers = [
  {
    id: 1,
    question: "Como se guarda un repositorio en github?",
    answers: [
      { id: 1, nombre: "git init" },
      { id: 2, nombre: "git add ." },
      { id: 3, nombre: 'git commit -m "first commit"' },
      {
        id: 4,
        nombre:
          "git remote add origin https://github.com/NOMBRE_USUARIO/NOMBRE_PROYECTO.git",
      },
      { id: 5, nombre: "git push -u origin master" },
    ],
  },
  {
    id: 2,
    question:
      "Ordena los siguientes comandos de Git para crear una nueva rama:",
    answers: [
      { id: 1, nombre: "git branch nombre_rama" },
      { id: 2, nombre: "git checkout -b nombre_rama" },
      { id: 3, nombre: "git pull origin nombre_rama" },
      { id: 4, nombre: "git merge nombre_rama" },
    ],
  },
  {
    id: 3,
    question:
      "Ordena los siguientes comandos de Git para descartar cambios en un archivo:",
    answers: [
      { id: 1, nombre: "git checkout -- nombre_archivo" },
      { id: 2, nombre: "git reset HEAD nombre_archivo" },
      { id: 3, nombre: "git revert HEAD nombre_archivo" },
      { id: 4, nombre: "git status" },
    ],
  },
  {
    id: 4,
    question:
      "Ordena los siguientes comandos de Git para ver el historial de confirmaciones (commits) en una rama específica:",
    answers: [
      { id: 1, nombre: "git log" },
      { id: 2, nombre: "git status" },
      { id: 3, nombre: "git branch" },
      { id: 4, nombre: "git checkout nombre_rama" },
    ],
  },
  {
    id: 5,
    question:
      "Ordena los siguientes comandos de Git para traer los cambios desde un repositorio remoto a tu rama local sin fusionarlos:",
    answers: [
      { id: 1, nombre: "git pull" },
      { id: 2, nombre: "git fetch" },
      { id: 3, nombre: "git merge origin/nombre_rama" },
      { id: 4, nombre: "git checkout nombre_rama" },
    ],
  },
];
