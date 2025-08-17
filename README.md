# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Estrategia de Integración - Servicios a Domicilio 🏠

Una guía interactiva para la implementación de tu plataforma de servicios a domicilio con FlutterFlow.

## 🚀 Deployment en GitHub Pages

### Opción 1: Setup Automático (Recomendado)

1. **Crear repositorio en GitHub:**
   - Ve a [github.com](https://github.com) y crea un nuevo repositorio público
   - Nómbralo: `home-services-integration`

2. **Ejecutar estos comandos en tu terminal:**
   ```bash
   # Clonar el repositorio
   git clone https://github.com/TU_USUARIO/home-services-integration.git
   cd home-services-integration
   
   # Crear proyecto con Vite
   npm create vite@latest . -- --template react-ts
   npm install
   
   # Instalar dependencias
   npm install lucide-react
   npm install --save-dev gh-pages
   ```

3. **Reemplazar archivos:**
   - Copia todos los archivos que te he proporcionado
   - **Importante:** En `package.json` y `vite.config.ts`, reemplaza `TU_USUARIO` con tu usuario de GitHub

4. **Deployar:**
   ```bash
   npm run build
   npm run deploy
   ```

5. **Configurar GitHub Pages:**
   - Ve a tu repo → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Carpeta: `/ (root)`

### Opción 2: Fork Directo (Más Rápido)

Si prefieres algo más rápido, puedo crearte un repositorio de ejemplo que puedas fork directamente.

## 📁 Estructura del Proyecto

```
home-services-integration/
├── src/
│   ├── App.tsx              # Componente principal
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos de Tailwind
├── package.json            # Dependencias y scripts
├── vite.config.ts          # Configuración de Vite
├── tailwind.config.js      # Configuración de Tailwind
└── README.md              # Esta guía
```

## 🛠️ Características

- ✅ **Lista de verificación interactiva** - Marca tareas completadas
- ✅ **4 fases estructuradas** con timelines realistas
- ✅ **Áreas de integración específicas** para servicios domiciliarios
- ✅ **Responsive design** - Funciona en móviles y desktop
- ✅ **Fácil de personalizar** - Código TypeScript limpio

## 🔧 Personalización

Para adaptar la propuesta a tu equipo:

1. **Editar fases:** Modifica el array `phases` en `App.tsx`
2. **Cambiar servicios:** Actualiza `integrationAreas`
3. **Ajustar colores:** Modifica las clases de Tailwind CSS
4. **Agregar secciones:** Extiende el componente según necesites

## 🌐 URL Final

Una vez deployado, tu sitio estará disponible en:
`https://TU_USUARIO.github.io/home-services-integration`

## 💡 Tips para Presentación

- La página es interactiva - tu equipo puede marcar progreso en tiempo real
- Funciona sin conexión una vez cargada
- Se puede imprimir si necesitan versión física
- Responsive para revisar en móviles

## 🤝 Colaboración

- Cada miembro del equipo puede hacer fork del repo
- Pueden crear issues para sugerencias
- Pull requests para mejoras o cambios

¿Necesitas ayuda con algún paso del deployment? ¡Solo avísame!