# LoginCleanArchitecture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Clean Architecture

```
/src
  /app
    /core
      /domain
        /entities
          - user.ts
        /repositories
          - auth.repository.ts
      /application
        /use-cases
          - login.use-case.ts
          - validate-token.use-case.ts
        /services
          - auth-guard.service.ts
          - auth.service.ts
      /infrastructure
        /repositories
          - auth.repository.impl.ts
        /providers
          - localstorage.service.ts
          - http.service.ts
    /presentation
      /components
        /login
          - login.component.ts
          - login.component.html
        /home
          - home.component.ts
          - home.component.html
      /routes
        - app-routing.module.ts
    /app.module.ts
```

## Aplicação da Clean Architecture no Projeto Angular

### No projeto Angular que discutimos, a Clean Architecture é aplicada da seguinte forma:

1. Entidades (/core/domain/entities):
    
    - Entidades são representações dos objetos principais da aplicação, como o User.
    - Exemplo: user.ts

2- Casos de Uso (/core/application/use-cases):

    - Casos de Uso encapsulam a lógica específica da aplicação, como validação de tokens e processos de login.
    - Exemplo: login.use-case.ts e validate-token.use-case.ts

3- Serviços (/core/application/services):

    - Serviços facilitam a interação entre os casos de uso e o sistema de navegação. Eles são responsáveis por chamar os casos de uso e manipular o fluxo de dados.
    - Exemplo: auth.service.ts, que coordena a autenticação e navegação.

4- Repositórios (/core/domain/repositories):

    - Repositórios definem contratos para a persistência de dados. A implementação concreta desses repositórios está na camada de infraestrutura.
    - Exemplo: auth.repository.ts

5- Infraestrutura (/core/infrastructure):

    - Infraestrutura lida com a implementação dos contratos definidos nos repositórios e serviços, como comunicação HTTP e armazenamento local.
    - Exemplo: auth.repository.impl.ts, localstorage.service.ts, http.service.ts

6- Interface de Usuário (/presentation/components):

    - Componentes da interface de usuário são responsáveis pela apresentação e interação com o usuário.
    - Exemplo: login.component.ts e home.component.ts

7- Rotas (/presentation/routes):

    - Rotas definem como os componentes são mapeados para URLs e protegem rotas usando guards.
    - Exemplo: app-routing.module.ts


### Como a Clean Architecture Foi Aplicada

- Entidades e Casos de Uso:

  - Entidades como User são definidas na camada de domínio e usadas em casos de uso.
  - Casos de Uso como LoginUseCase e ValidateTokenUseCase contêm a lógica de aplicação e interagem com o repositório.

- Serviços e Repositórios:

  - Serviços como AuthService coordenam os casos de uso e interagem com o repositório.
  - Repositórios como AuthRepository definem as interfaces para persistência de dados, enquanto suas implementações são feitas na camada de infraestrutura.

- Infraestrutura:

  - Implementações específicas para HTTP e armazenamento local estão na camada de infraestrutura, isoladas da lógica de negócios e casos de uso.

- Interface de Usuário e Rotas:

  - Componentes da interface de usuário, como LoginComponent e HomeComponent, são responsáveis pela interação com o usuário e são importados nos módulos de rotas.
  - Guards de Rotas são configurados para proteger as rotas e garantir a autenticação.
  
## Resumo
A Clean Architecture permite que cada parte do sistema tenha uma responsabilidade clara e definida, com uma separação entre a lógica de negócios, a interface do usuário e a infraestrutura. Essa abordagem facilita a manutenção, a testabilidade e a evolução do sistema ao longo do tempo. No seu projeto Angular, a arquitetura é organizada para refletir essas separações, garantindo que as regras de negócio sejam independentes das tecnologias específicas e da interface de usuário.
