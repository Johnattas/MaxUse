# MaxUse

Uma poderosa biblioteca de utilitários para Vue 3, combinando as melhores ferramentas do **VueUse**, a praticidade e conveniência do **Lodash** e uma vasta coleção de helpers customizados para facilitar o dia a dia do desenvolvimento.

Totalmente projetada em torno do sistema de reatividade do Vue, todas as funções processam de maneira fluida tanto valores reativos (Refs, Computeds, Getters) quanto primitivos, utilizando nativamente `toValue` e `MaybeRefOrGetter`.

## 📦 Instalação

Instale a biblioteca e suas `peerDependencies` através do npm (ou yarn, pnpm):

```bash
npm install max-use @vueuse/core @vueuse/integrations vue ziggy-js
```

## 🚀 Como Usar

A **MaxUse** possui uma arquitetura modularizada, oferecendo flexibilidade total na forma de importação, adaptando-se às necessidades do seu projeto e suportando *tree-shaking*.

### Importação Individual (Recomendado)

A melhor forma de importar apenas o que você precisa:

```ts
import { isString, isWeekend, capitalize, deepMerge } from 'max-use'

const text = "hello"
if (isString(text)) {
  console.log(capitalize(text)) // Saída: Hello
}
```

### Importando como Lodash (`_`)

Para manter a consistência e facilidade do padrão Lodash, a MaxUse exporta o objeto `_`. Ele agrupa **todos os helpers próprios da MaxUse** e também inclui as funções e composables do **VueUse**, priorizando as funções da MaxUse para prevenir conflitos de nomes de forma inteligente.

```ts
import { _ } from 'max-use'

// Helpers nativos da MaxUse
const id = _.random(1, 10)
const merged = _.deepMerge({ a: 1 }, { b: 2 })

// Composables do VueUse injetados no mesmo objeto
const { x, y } = _.useMouse()
```

### Importando por Categoria

Módulos individuais podem ser importados utilizando os *subpaths*, mantendo o pacote e as referências sempre leves:

```ts
import { isTouchDevice } from 'max-use/browser'
import { isPast, isFuture, isWeekend } from 'max-use/dates'
import { first, last, uniqueBy } from 'max-use/iterables'
import { average, median } from 'max-use/math'
import { deepMerge, renameKeys, mapValues } from 'max-use/objects'
import { truncate, noHtml, initials, readingTime, maskSensitive } from 'max-use/strings'
import { isEmail } from 'max-use/validations'
import { formatBytes } from 'max-use/format'
```

### VueUse Original Completo

Se em algum momento você precisar de acesso à instância integral e intocada do `VueUse`, a MaxUse exporta o objeto `vueUse` com todos os itens sem nenhuma exceção.

```ts
import { vueUse } from 'max-use'

const { x, y } = vueUse.useMouse()
```

## 🛠️ Funcionalidades e Categorias

- **Browser**: Verificações relativas a ambiente e dispositivos (ex: `isTouchDevice`).
- **Dates**: Utilitários focados em manipulação, como verificações rápidas (`isPast`, `isFuture`, `isWeekend`, `addTime`).
- **Iterables**: Helpers de arrays modernos e encadeados (`first`, `last`, `uniqueBy`, `chunk`).
- **Math**: Funções numéricas e estatísticas compatíveis com reatividade (`average`, `median`, `roundUp`, `roundDown`).
- **Objects**: Manipulação inteligente e recursiva de objetos (`deepMerge`, `renameKeys`, `set`, `mapValues`).
- **Strings**: Limpeza, máscara e análise de texto (`truncate`, `stripHtml`/`noHtml`, `readingTime`, `maskSensitive`, `initials`).
- **Types**: Validação rigorosa de tipagens e estado da variável (`isString`, `isArray`, `isBlank`).
- **Validations**: Conjunto de verificações comuns (`isEmail`, e mais).
- **Format**: Formatadores úteis (`formatBytes` etc).
- **Electrical**: Cálculos úteis focados no domínio elétrico/físico.
- **Composables**: Hooks reativos complementares ao VueUse.
- **Routes**: Helpers de integração, focado primordialmente no contexto do `ziggy-js` no Vue.

## ⚡ Suporte à Reatividade do Vue 3

Esta não é uma simples biblioteca JavaScript. Todos os helpers foram refatorados para aceitar um tipo primitivo, um `Ref` ou até um `Getter function`. Através da função `toValue()`, as funções resolvem a reatividade e devolvem os resultados correspondentes.

```ts
import { ref } from 'vue'
import { _ } from 'max-use'

const myText = ref("texto confidencial")
// O helper entende que é um Ref automaticamente!
const masked = _.maskSensitive(myText) 
```

## 🤝 Contribuindo

Ao contribuir com novas funcionalidades para a MaxUse, lembre-se:
1. Sempre receba `MaybeRefOrGetter<T>` para argumentos principais quando for lidar com valores reativos.
2. Utilize `toValue(arg)` internamente em vez de `unref(arg)`.
3. Garanta que a função não conflite negativamente com as ferramentas essenciais do VueUse, a menos que seja intencional.

## 📄 Licença

**MIT License** © Desenvolvido por [Johnattas Santana](https://github.com/johnattas)
