# Composants manquants — Benflux UI vs Ant Design

> Audit réalisé le 2026-05-27. 13 composants restants à implémenter.

## Navigation

| Composant  | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| **Affix**  | Épingle un élément à une position fixe après un scroll seuil  |
| **Anchor** | Liens de navigation in-page avec indicateur de section active |

## Layout

| Composant    | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| **Layout**   | Shell composable : `Layout`, `Sider`, `Header`, `Content`, `Footer` |
| **Space**    | Espacement flex avec `Space.Compact` pour grouper des éléments      |
| **Splitter** | Panneaux redimensionnables (Resizable existe mais API différente)   |
| **Flex**     | Wrapper flex avec props gap/align/justify (utilitaire)              |

## Data Entry

| Composant        | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| **AutoComplete** | Input avec suggestions filtrées en dropdown                |
| **Cascader**     | Select multi-niveaux (catégorie → sous-catégorie → valeur) |
| **Mentions**     | Input avec détection `@user` et dropdown de suggestions    |
| **TreeSelect**   | Select avec arbre hiérarchique déroulant                   |

## Data Display

| Composant    | Description                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------- |
| **Collapse** | Sections repliables multiples (différent de Accordion — plusieurs panneaux ouverts simultanément) |

## Feedback

| Composant        | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| **Message**      | Notification légère en haut de page (type flash, différent de Toast) |
| **Notification** | Notification riche en haut à droite avec icône, titre, action        |
| **Popconfirm**   | Popover de confirmation avant une action destructive                 |
