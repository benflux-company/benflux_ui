export { initCommand } from "./commands/init.js"
export { addCommand } from "./commands/add.js"
export { themeCommand } from "./commands/theme.js"
export { listCommand } from "./commands/list.js"
export { REGISTRY, getComponent, getComponentsByCategory, searchComponents } from "./utils/registry.js"
export type { RegistryComponent, ComponentCategory } from "./utils/registry.js"
export {
  detectFramework,
  detectPackageManager,
  getComponentsPath,
  hasTailwind,
} from "./utils/detect-framework.js"
