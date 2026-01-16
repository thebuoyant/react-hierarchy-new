export type HierarchyNodeType = {
  id: string;
  headerTitle: string;
  headerSubTitle: string;
  content: Record<string, string>;
  avatarUrl: string;
  showAvatar: boolean;
  layout: {
    headerBackgroundColor: string;
    headerTitleColor: string;
    headerSubtitleColor: string;
  };
  children: HierarchyNodeType[];
};

type GenerateRandomHierarchyOptions = {
  maxNumberOfLayers: number; // z.B. 1 = nur Root, 2 = Root + 1 Ebene Kinder, ...
  maxNumberOfNodesPerLayer: number; // max. Kinder pro Node
  seed?: number; // optional
  avatarUrls?: string[]; // optional
};

// kleine Hilfsfunktionen (einfach & verständlich)

function clampInt(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, Math.floor(value)));
}

function randomInt(rnd: () => number, min: number, max: number): number {
  // inklusive min und max
  return Math.floor(rnd() * (max - min + 1)) + min;
}

function randomHexColor(rnd: () => number): string {
  const n = Math.floor(rnd() * 0xffffff);
  return `#${n.toString(16).padStart(6, "0")}`;
}

// einfacher Seed-Random (optional, für reproduzierbare Tests)
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildRandomContent(rnd: () => number): Record<string, string> {
  // immer mindestens valueA und valueB
  const content: Record<string, string> = {
    valueA: `Value-A-${randomInt(rnd, 1, 9999)}`,
    valueB: `Value-B-${randomInt(rnd, 1, 9999)}`,
  };

  // optional zusätzliche Felder (valueC, valueD, ...)
  const extraCount = randomInt(rnd, 0, 3); // 0 bis 3 zusätzliche
  for (let i = 0; i < extraCount; i++) {
    const key = `value${String.fromCharCode("C".charCodeAt(0) + i)}`;
    content[key] = `${key}-${randomInt(rnd, 1, 9999)}`;
  }

  return content;
}

export function generateRandomHierarchy(
  root: Omit<HierarchyNodeType, "children"> & {
    children?: HierarchyNodeType[];
  },
  options: GenerateRandomHierarchyOptions
): HierarchyNodeType {
  const layers = clampInt(options.maxNumberOfLayers, 1, 50);
  const maxChildren = clampInt(options.maxNumberOfNodesPerLayer, 0, 20);

  // Avatar-URLs + Fallback (damit NIE undefined entsteht)
  const avatarUrls: string[] = options.avatarUrls ?? [
    "https://mui.com/static/images/avatar/1.jpg",
    "https://mui.com/static/images/avatar/2.jpg",
    "https://mui.com/static/images/avatar/3.jpg",
    "https://mui.com/static/images/avatar/4.jpg",
  ];

  const FALLBACK_AVATAR = "https://mui.com/static/images/avatar/1.jpg";

  const rnd =
    options.seed === undefined ? Math.random : mulberry32(options.seed);

  const randomAvatarUrl = (): string => {
    if (avatarUrls.length === 0) {
      return FALLBACK_AVATAR;
    }

    const index = randomInt(rnd, 0, avatarUrls.length - 1);
    return avatarUrls[index] ?? FALLBACK_AVATAR;
  };

  let idCounter = 1;

  const createNode = (
    depth: number,
    base?: Partial<HierarchyNodeType>
  ): HierarchyNodeType => {
    const id = base?.id ?? `Node-${idCounter++}`;

    const node: HierarchyNodeType = {
      id,
      headerTitle: base?.headerTitle ?? id,
      headerSubTitle: base?.headerSubTitle ?? `${id}-Subtitle`,
      content: base?.content ?? buildRandomContent(rnd),
      avatarUrl: base?.avatarUrl ?? randomAvatarUrl(),
      showAvatar: base?.showAvatar ?? true,
      layout: base?.layout ?? {
        headerBackgroundColor: randomHexColor(rnd),
        headerTitleColor: "#ffffff",
        headerSubtitleColor: "#cccccc",
      },
      children: [],
    };

    // maximale Tiefe erreicht → keine Kinder mehr
    if (depth >= layers) {
      return node;
    }

    // zufällige Anzahl Kinder (0 .. maxChildren)
    const childCount = maxChildren === 0 ? 0 : randomInt(rnd, 0, maxChildren);

    node.children = Array.from({ length: childCount }, () =>
      createNode(depth + 1)
    );

    return node;
  };

  // Root übernehmen, aber children komplett neu erzeugen
  return createNode(1, { ...root, children: [] });
}
