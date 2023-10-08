Para ejecutar en producción:

`http-server -o /index.html`

Para ejecutar desde hithub:

`https://carlos-claveria.github.io/angular-curso/`

Para actualizar el paquete de distribución de github (./docs) en package.json:

`"build:github" : "ng build --base-href ./ && rimraf ./docs && copyfiles dist/bases/* ./docs -f"`

`npm run build:hithub`