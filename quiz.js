/**
 * 互动古文教学平台 - 《四时田园杂兴（其二十五）》客观题数据包
 */

const quizQuestions = [
    {
        id: 1,
        text: "诗中“梅子金黄杏子肥”一句，从哪些角度描写了夏季的农作物？",
        py: "shī zhōng méi zǐ jīn huáng xìng zǐ féi yī jù cóng nǎ xiē jiǎo dù miáo xiě le xià jì de nóng zuò wù",
        en: "From what aspects does the line 'plums golden, apricots plump' describe summer crops?",
        options: [
            {
                text: "颜色与形态",
                py: "yán sè yǔ xíng tài",
                en: "Color and form",
                correct: true,
                explanation: "“金黄”写梅子的颜色，“肥”写杏子果肉饱满的形态，分别从颜色和形态两个角度描写。",
                explanationPy: "jīn huáng xiě méi zǐ de yán sè féi xiě xìng zǐ guǒ ròu bǎo mǎn de xíng tài fēn bié cóng yán sè hé xíng tài liǎng gè jiǎo dù miáo xiě",
                explanationEn: "'Golden' describes the color of plums, while 'plump' describes the full form of apricots, covering both color and form."
            },
            {
                text: "气味与味道",
                py: "qì wèi yǔ wèi dào",
                en: "Scent and taste",
                correct: false,
                explanation: "诗句没有描写梅子和杏子的气味或味道，仅从视觉角度描写其颜色与形态。",
                explanationPy: "shī jù méi yǒu miáo xiě méi zǐ hé xìng zǐ de qì wèi huò wèi dào jǐn cóng shì jué jiǎo dù miáo xiě qí yán sè yǔ xíng tài",
                explanationEn: "The verse does not describe scent or taste; it only describes color and form from a visual perspective."
            },
            {
                text: "大小与重量",
                py: "dà xiǎo yǔ zhòng liàng",
                en: "Size and weight",
                correct: false,
                explanation: "“肥”虽与形态有关，但并非直接描写大小或重量，重点是果肉饱满的状态。",
                explanationPy: "féi suī yǔ xíng tài yǒu guān dàn bìng fēi zhí jiē miáo xiě dà xiǎo huò zhòng liàng zhòng diǎn shì guǒ ròu bǎo mǎn de zhuàng tài",
                explanationEn: "Although 'plump' relates to form, it does not directly describe size or weight; the focus is on fullness."
            },
            {
                text: "数量与密度",
                py: "shù liàng yǔ mì dù",
                en: "Quantity and density",
                correct: false,
                explanation: "诗句没有描写梅子和杏子的数量或密度，而是描写其成熟后的颜色与饱满度。",
                explanationPy: "shī jù méi yǒu miáo xiě méi zǐ hé xìng zǐ de shù liàng huò mì dù ér shì miáo xiě qí chéng shú hòu de yán sè yǔ bǎo mǎn dù",
                explanationEn: "The verse does not describe quantity or density, but rather the color and fullness of the ripe fruits."
            }
        ]
    },
    {
        id: 2,
        text: "“麦花雪白菜花稀”中“稀”字的意思是什么？",
        py: "mài huā xuě bái cài huā xī zhōng xī zì de yì sī shì shén me",
        en: "What does the character '稀' mean in this line?",
        options: [
            {
                text: "稀少、稀疏，指油菜花开始凋谢",
                py: "xī shǎo xī shū zhǐ yóu cài huā kāi shǐ diāo xiè",
                en: "Sparse, thinning out, referring to rapeseed flowers beginning to wither",
                correct: true,
                explanation: "“稀”指油菜花开始落花结籽，不再像盛花期那样繁密，表现了初夏季节的更替。",
                explanationPy: "xī zhǐ yóu cài huā kāi shǐ luò huā jié zǐ bù zài xiàng shèng huā qī nà yàng fán mì biǎo xiàn le chū xià jì jié de gēng tì",
                explanationEn: "'Sparse' means the rapeseed flowers are beginning to drop and form seeds, no longer as dense as in full bloom, reflecting the transition of early summer."
            },
            {
                text: "稀薄、淡，指麦花的颜色很淡",
                py: "xī báo dàn zhǐ mài huā de yán sè hěn dàn",
                en: "Thin, pale, referring to the light color of buckwheat flowers",
                correct: false,
                explanation: "“雪白”已经明确描写了麦花的颜色，“稀”修饰的是菜花，而非麦花。",
                explanationPy: "xuě bái yǐ jīng míng què miáo xiě le mài huā de yán sè xī xiū shì de shì cài huā ér fēi mài huā",
                explanationEn: "'Snow-white' already describes the color of buckwheat flowers; 'sparse' modifies the rapeseed flowers, not the buckwheat."
            },
            {
                text: "稀奇、罕见，指菜花很特别",
                py: "xī qí hǎn jiàn zhǐ cài huā hěn tè bié",
                en: "Rare, unusual, referring to the uniqueness of the rapeseed flowers",
                correct: false,
                explanation: "“稀”在此处是“稀疏”之意，表示油菜花落花后的状态，而非“稀奇”之意。",
                explanationPy: "xī zài cǐ chù shì xī shū zhī yì biǎo shì yóu cài huā luò huā hòu de zhuàng tài ér fēi xī qí zhī yì",
                explanationEn: "'稀' here means 'sparse,' indicating the state of the rapeseed flowers after dropping, not 'rare' or 'unusual.'"
            },
            {
                text: "稀少，指麦花的数量不多",
                py: "xī shǎo zhǐ mài huā de shù liàng bù duō",
                en: "Sparse, referring to the few buckwheat flowers",
                correct: false,
                explanation: "“麦花”与“雪白”搭配，描写的是颜色，“稀”修饰的是“菜花”，不是“麦花”。",
                explanationPy: "mài huā yǔ xuě bái dā pèi miáo xiě de shì yán sè xī xiū shì de shì cài huā bù shì mài huā",
                explanationEn: "'Buckwheat flowers' is paired with 'snow-white' to describe color; 'sparse' modifies 'rapeseed flowers,' not buckwheat."
            }
        ]
    },
    {
        id: 3,
        text: "“日长篱落无人过”中的“日长”是什么意思？",
        py: "rì cháng lí luò wú rén guò zhōng de rì cháng shì shén me yì sī",
        en: "What does '日长' mean in this line?",
        options: [
            {
                text: "夏季白昼变长",
                py: "xià jì bái zhòu biàn cháng",
                en: "Summer days are getting longer",
                correct: true,
                explanation: "“日长”指夏至前后白昼渐长，是夏季的典型特征，为后文写农民早出晚归作铺垫。",
                explanationPy: "rì cháng zhǐ xià zhì qián hòu bái zhòu jiàn zhǎng shì xià jì de diǎn xíng tè zhēng wèi hòu wén xiě nóng mín zǎo chū wǎn guī zuò pù diàn",
                explanationEn: "'日长' refers to the lengthening of daylight around the summer solstice, a typical summer feature, setting up the context for farmers' long working hours."
            },
            {
                text: "太阳很高，指正午时分",
                py: "tài yáng hěn gāo zhǐ zhèng wǔ shí fēn",
                en: "The sun is high, referring to noon",
                correct: false,
                explanation: "“日长”不是指太阳的位置，而是指白昼的长度变长，是时间概念而非时刻概念。",
                explanationPy: "rì cháng bù shì zhǐ tài yáng de wèi zhì ér shì zhǐ bái zhòu de cháng dù biàn cháng shì shí jiān gài niàn ér fēi shí kè gài niàn",
                explanationEn: "'日长' refers to the length of daytime, not the position of the sun. It is a temporal concept, not a specific moment."
            },
            {
                text: "日子过得很慢，很无聊",
                py: "rì zi guò de hěn màn hěn wú liáo",
                en: "Days pass slowly and boringly",
                correct: false,
                explanation: "“日长”是客观描写夏季昼长，并非表达诗人主观觉得日子无聊或难熬。",
                explanationPy: "rì cháng shì kè guān miáo xiě xià jì zhòu cháng bìng fēi biǎo dá shī rén zhǔ guān jué dé rì zi wú liáo huò nán áo",
                explanationEn: "'日长' is an objective description of long summer days, not an expression of the poet's boredom or impatience."
            },
            {
                text: "太阳落山晚，指傍晚",
                py: "tài yáng luò shān wǎn zhǐ bàng wǎn",
                en: "The sun sets late, referring to evening",
                correct: false,
                explanation: "“日长”是全天的白昼变长，而非单指傍晚太阳落山晚，范围更广。",
                explanationPy: "rì cháng shì quán tiān de bái zhòu biàn cháng ér fēi dān zhǐ bàng wǎn tài yáng luò shān wǎn fàn wéi gèng guǎng",
                explanationEn: "'日长' refers to the entire daytime getting longer, not just the sun setting later in the evening."
            }
        ]
    },
    {
        id: 4,
        text: "诗中“无人过”与“惟有蜻蜓蛱蝶飞”的对比，主要想表现什么？",
        py: "shī zhōng wú rén guò yǔ wéi yǒu qīng tíng jiá dié fēi de duì bǐ zhǔ yào xiǎng biǎo xiàn shén me",
        en: "What does the contrast between 'no one passes' and 'only dragonflies and butterflies fly' mainly convey?",
        options: [
            {
                text: "农民早出晚归，为农事忙碌",
                py: "nóng mín zǎo chū wǎn guī wèi nóng shì máng lù",
                en: "Farmers are busy working in the fields from morning till night",
                correct: true,
                explanation: "白天篱笆旁无人经过，只有蜻蜓蛱蝶飞舞，侧面表现了农民全都下田干活，为农事忙碌。",
                explanationPy: "bái tiān lí ba páng wú rén jīng guò zhǐ yǒu qīng tíng jiá dié fēi wǔ cè miàn biǎo xiàn le nóng mín quán dōu xià tián gàn huó wèi nóng shì máng lù",
                explanationEn: "With no one passing by the fence during the day and only dragonflies and butterflies flying, it indirectly shows that all the farmers are working in the fields."
            },
            {
                text: "农村人烟稀少，非常荒凉",
                py: "nóng cūn rén yān xī shǎo fēi cháng huāng liáng",
                en: "The village is sparsely populated and desolate",
                correct: false,
                explanation: "诗中描写的是初夏农忙时节的景象，并非农村荒凉。“无人过”是因为农民都在田里干活。",
                explanationPy: "shī zhōng miáo xiě de shì chū xià nóng máng shí jié de jǐng xiàng bìng fēi nóng cūn huāng liáng wú rén guò shì yīn wèi nóng mín dōu zài tián lǐ gàn huó",
                explanationEn: "The poem depicts the busy farming season, not a desolate village. 'No one passes' because farmers are all in the fields."
            },
            {
                text: "诗人感到孤独寂寞",
                py: "shī rén gǎn dào gū dú jì mò",
                en: "The poet feels lonely and isolated",
                correct: false,
                explanation: "诗人并非表达孤独，而是通过静景衬托农忙，表达对田园生活与农民勤劳的赞美。",
                explanationPy: "shī rén bìng fēi biǎo dá gū dú ér shì tōng guò jìng jǐng chèn tuō nóng máng biǎo dá duì tián yuán shēng huó yǔ nóng mín qín láo de zàn měi",
                explanationEn: "The poet is not expressing loneliness; he uses the quiet scene to highlight the farmers' busyness and praise rural life."
            },
            {
                text: "蜻蜓和蝴蝶比人还多",
                py: "qīng tíng hé hú dié bǐ rén hái duō",
                en: "There are more dragonflies and butterflies than people",
                correct: false,
                explanation: "诗句并非比较数量，而是通过“无人”与“惟有”的对比，衬托出农民的忙碌与田间的静谧。",
                explanationPy: "shī jù bìng fēi bǐ jiào shù liàng ér shì tōng guò wú rén yǔ wéi yǒu de duì bǐ chèn tuō chū nóng mín de máng lù yǔ tián jiān de jìng mì",
                explanationEn: "The verse is not comparing numbers; the contrast between 'no one' and 'only' highlights the farmers' busyness and the tranquility of the fields."
            }
        ]
    }
];

console.log("成功加载：quiz 客观题数据包");
