const poemData = [
    // 第一句：梅子金黄杏子肥，
    { text: "梅子", py: "méi zǐ", zh: "梅树的果实，夏季成熟，呈金黄色。", en: "plums / mei fruit" },
    { text: "金黄", py: "jīn huáng", zh: "像金子一样的黄色，形容梅子成熟时的颜色。", en: "golden yellow", exam: true },
    { text: "杏子", py: "xìng zǐ", zh: "杏树的果实，夏季成熟，果肉肥厚多汁。", en: "apricots" },
    { text: "肥", py: "féi", zh: "果实肥美、饱满。形容杏子成熟后果肉厚实。", en: "plump / full", exam: true },
    { text: "，", punc: true },   // ← 逗号，不换行

    // 第二句：麦花雪白菜花稀。
    { text: "麦花", py: "mài huā", zh: "荞麦花，花为白色或淡红色。这里指荞麦开出的白色花朵。", en: "buckwheat flowers", exam: true },
    { text: "雪白", py: "xuě bái", zh: "像雪一样洁白。形容荞麦花的颜色。", en: "snow-white" },
    { text: "菜花", py: "cài huā", zh: "油菜花，鲜黄色。春末夏初开始落花结籽。", en: "rapeseed flowers", exam: true },
    { text: "稀", py: "xī", zh: "稀疏、稀少。形容油菜花开始凋谢落花，不像盛花期那样繁密。", en: "sparse / thinning out", exam: true },
    { text: "。", punc: true },   // ← 句号，换行

    // 第三句：日长篱落无人过，
    { text: "日长", py: "rì cháng", zh: "白天变长。指夏季白昼较长。", en: "days growing longer (summer)", exam: true },
    { text: "篱落", py: "lí luò", zh: "篱笆、竹篱。用竹子或树枝编成的栅栏。", en: "fence / hedge" },
    { text: "无人", py: "wú rén", zh: "没有行人经过。", en: "no one" },
    { text: "过", py: "guò", zh: "经过、路过。", en: "to pass by" },
    { text: "，", punc: true },   // ← 逗号，不换行

    // 第四句：惟有蜻蜓蛱蝶飞。
    { text: "惟有", py: "wéi yǒu", zh: "只有、仅有。", en: "only / there are only" },
    { text: "蜻蜓", py: "qīng tíng", zh: "蜻蜓，昆虫，常在夏季水边或田野飞舞。", en: "dragonflies" },
    { text: "蛱蝶", py: "jiá dié", zh: "蝴蝶的一种。泛指蝴蝶。", en: "butterflies", exam: true },
    { text: "飞", py: "fēi", zh: "飞舞、飞翔。", en: "to fly" },
    { text: "。", punc: true }    // ← 句号，换行
];
