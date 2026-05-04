---
trigger: always_on
---

Esta é uma biblioteca que busca ser algo como "VueUse + Lodash + Outros Helpers"... 

Como esta é uma bibliaoteca para o vue, os helpers deverão considerar a reatividade dos valores recebidos.
Para obter um valor possivelmente reativo, não use unRef. Utilize toValue no lugar.

Como ela é VueUse + Lodash + Outros Helpers...

Eu preciso exportar os Helpers Próprios... Exportar também _. com todas as funções e depois os helpers e composables do VueUse (Exceto os helpers com nomes repetidos), além de exportar um vueUse com todos os items do vueUse sem exceção...

Ao fazer npm run build, caso aconteça o erro abaixo . Você deve desconsiderar o erro e entender que está tudo ok.

"On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/Helpers/Objects/deepMerge.ts
        modified:   src/Helpers/Strings/random.ts
        modified:   src/index.ts

no changes added to commit (use "git add" and/or "git commit -a")
npm error Git working directory not clean.
npm error A complete log of this run can be found in: /home/johnattas/.npm/_logs/2026-05-04T14_55_39_118Z-debug-0.log"