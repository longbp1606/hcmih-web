// Dữ liệu mẫu tin tức đa ngôn ngữ
export interface NewsItemMultilang {
  id: number;
  title: {
    vi: string;
    en: string;
    ja: string;
  };
  desc: {
    vi: string;
    en: string;
    ja: string;
  };
  date?: string;
  img: string;
  source: string;
  content?: {
    vi: string;
    en: string;
    ja: string;
  };
  url?: string;
}

export const mockNewsMultilang: NewsItemMultilang[] = [
  {
    id: 1,
    title: {
      vi: "Tặng 100.000 đồng/người cho toàn dân ăn Tết Độc lập",
      en: "100,000 VND gift for all citizens to celebrate Independence Day",
      ja: "独立記念日を祝うため全国民に10万ドン贈呈",
    },
    desc: {
      vi: "(Chinhphu.vn) - Thủ tướng Chính phủ vừa có Công điện số 149/CĐ-TTg ngày 28/8/2025 về việc tặng quà người dân nhân dịp kỷ niệm 80 năm Cách mạng Tháng Tám và Quốc khánh 2/9.",
      en: "(Chinhphu.vn) - The Prime Minister has issued Official Dispatch No. 149/CĐ-TTg dated August 28, 2025 on giving gifts to people on the occasion of the 80th anniversary of the August Revolution and National Day September 2.",
      ja: "(Chinhphu.vn) - 首相は2025年8月28日付け公電第149号/CĐ-TTgで、8月革命80周年および9月2日国慶節の機会に国民への贈り物について発表しました。",
    },
    date: "28/08/2025  20:36",
    img: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/8/28/195b24ce05fa4c87be5ad4d59fb3b272-17563878953541339404104.jpg",
    source: "baochinhphu.vn",
    content: {
      vi: `Công điện nêu: Trong không khí cả nước tưng bừng phấn khởi chào mừng kỷ niệm 80 năm Cách mạng Tháng Tám và Quốc khánh 2/9, để tiếp tục thể hiện sự quan tâm sâu sắc của Đảng và Nhà nước đối với toàn thể nhân dân, triển khai ý kiến chỉ đạo của đồng chí Tổng Bí thư Tô Lâm, Đảng ủy Chính phủ đã trình Bộ Chính trị về việc tổ chức tặng quà cho người dân nhân dịp kỷ niệm 80 năm Cách mạng Tháng Tám và Quốc khánh 2/9.

Tại văn bản số 17129-CV/VPTW ngày 28 tháng 8 năm 2025 của Văn phòng Trung ương, Bộ Chính trị đã đồng ý về chủ trương tặng quà người dân nhân dịp kỷ niệm 80 năm Cách mạng Tháng Tám và Quốc khánh 2/9.

Để kịp thời triển khai ý kiến chỉ đạo của Bộ Chính trị, Thủ tướng Chính phủ yêu cầu:

1. Bộ Tài chính, Ngân hàng Nhà nước Việt Nam, Bộ Công an và Ủy ban nhân dân các tỉnh, thành phố trực thuộc Trung ương theo chức năng, nhiệm vụ được giao căn cứ ý kiến chỉ đạo của Bộ Chính trị tại văn bản số 17129-CV/VPTW, phối hợp chặt chẽ, triển khai ngay việc rà soát đối tượng nhận quà tặng và thực hiện chuyển phần quà đến người dân bằng biện pháp phù hợp (chuyển khoản hoặc trực tiếp) trong thời gian sớm nhất có thể, xong trước ngày Quốc khánh 02/9/2025.

Mức quà tặng: 100.000 đồng/người dân, cho toàn dân ăn Tết Độc lập.`,
      en: `The official dispatch states: In the atmosphere of the whole country jubilantly celebrating the 80th anniversary of the August Revolution and National Day September 2, to continue showing the deep concern of the Party and State for all people, implementing the guidance of Comrade General Secretary To Lam, the Government Party Committee has submitted to the Politburo about organizing gifts for people on the occasion of the 80th anniversary of the August Revolution and National Day September 2.

At document No. 17129-CV/VPTW dated August 28, 2025 of the Central Office, the Politburo agreed on the policy of giving gifts to people on the occasion of the 80th anniversary of the August Revolution and National Day September 2.

To timely implement the Politburo's guidance, the Prime Minister requires:

1. The Ministry of Finance, State Bank of Vietnam, Ministry of Public Security and People's Committees of provinces and cities directly under the Central Government according to their assigned functions and tasks based on the Politburo's guidance in document No. 17129-CV/VPTW, coordinate closely, immediately deploy the review of gift recipients and transfer gifts to people by appropriate measures (bank transfer or direct) as soon as possible, completed before National Day September 2, 2025.

Gift amount: 100,000 VND/person, for all people to celebrate Independence Day.`,
      ja: `公電は次のように述べています：8月革命80周年と9月2日国慶節を祝う全国的な祝賀ムードの中で、党と国家の全人民に対する深い関心を継続的に示すため、ト・ラム書記長同志の指導意見を実施し、政府党委員会は8月革命80周年と9月2日国慶節の機会に人民への贈り物の組織について政治局に提出しました。

2025年8月28日付け中央事務局文書第17129-CV/VPTWにおいて、政治局は8月革命80周年と9月2日国慶節の機会に人民への贈り物の方針に同意しました。

政治局の指導を適時実施するため、首相は以下を要求します：

1. 財務省、ベトナム国家銀行、公安省、および中央直轄市省人民委員会は、文書第17129-CV/VPTWでの政治局の指導に基づき、割り当てられた機能と任務に従って、密接に連携し、贈り物受取人の見直しと適切な手段（銀行振込または直接）による人民への贈り物の移転を可能な限り早急に展開し、2025年9月2日国慶節前に完了させる。

贈り物額：一人当たり10万ドン、全人民が独立記念日を祝うために。`,
    },
    url: "https://baochinhphu.vn/tang-100000-dong-nguoi-cho-toan-dan-an-tet-doc-lap-102250828203355315.htm",
  },
  {
    id: 2,
    title: {
      vi: "Vận dụng tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội trong công cuộc đổi mới đất nước hiện nay",
      en: "Applying Ho Chi Minh's thought on national independence and socialism in the current national renovation",
      ja: "現在の国家革新事業におけるホー・チ・ミンの民族独立と社会主義思想の応用",
    },
    desc: {
      vi: "Chủ tịch Hồ Chí Minh - Anh hùng giải phóng dân tộc, nhà văn hóa lớn. Người đã đến với chủ nghĩa Mác - Lênin, tìm thấy con đường cách mạng vô sản, gắn độc lập dân tộc với chủ nghĩa xã hội.",
      en: "President Ho Chi Minh - National liberation hero, great cultural figure. He came to Marxism-Leninism, found the path of proletarian revolution, linking national independence with socialism.",
      ja: "ホー・チ・ミン主席 - 民族解放の英雄、偉大な文化人。彼はマルクス・レーニン主義に到達し、プロレタリア革命の道を見つけ、民族独立を社会主義と結び付けました。",
    },
    date: "12/06/2025 - 11:37 AM",
    img: "https://th.bing.com/th/id/OIP.IzulhyRGrGmlK4JbShjFCAHaFr?w=213&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    source: "Trường Đào tạo cán bộ Nguyễn Văn Cừ",
    url: "https://tapchilichsudang.vn/van-dung-tu-tuong-ho-chi-minh-ve-doc-lap-dan-toc-va-chu-nghia-xa-hoi-trong-cong-cuoc-doi-moi-dat-nuoc-hien-nay.html",
    content: {
      vi: `Bài viết phân tích sâu sắc tư tưởng cốt lõi của Hồ Chí Minh về con đường phát triển của cách mạng Việt Nam, đó là sự gắn kết không thể tách rời giữa độc lập dân tộc và chủ nghĩa xã hội (CNXH). Đây không chỉ là một lựa chọn mang tính lịch sử mà còn được khẳng định là quy luật phát triển tất yếu của cách mạng Việt Nam.`,
      en: `The article provides a deep analysis of Ho Chi Minh's core ideology on the development path of the Vietnamese revolution, which is the inseparable link between national independence and socialism. This is not only a historical choice but also affirmed as an inevitable law of development for the Vietnamese revolution.`,
      ja: `この記事は、ベトナム革命の発展の道に関するホーチミンの核心的思想、すなわち民族独立と社会主義との不可分の関連性について深く分析しています。これは歴史的な選択であるだけでなく、ベトナム革命の必然的な発展法則であると確認されています。`,
    },
  },
  {
    id: 3,
    title: {
      vi: "Toàn văn Nghị quyết Đại hội đại biểu toàn quốc lần thứ XIII của Đảng",
      en: "Full text of the Resolution of the 13th National Congress of the Party",
      ja: "第13回党全国代表大会決議の全文",
    },
    desc: {
      vi: "(Chinhphu.vn) - Cổng Thông tin điện tử Chính phủ trân trọng giới thiệu toàn văn Nghị quyết Đại hội đại biểu toàn quốc lần thứ XIII của Đảng.",
      en: "(Chinhphu.vn) - The Government Electronic Information Portal respectfully introduces the full text of the Resolution of the 13th National Congress of the Party.",
      ja: "(Chinhphu.vn) - 政府電子情報ポータルは、第13回党全国代表大会決議の全文を謹んで紹介します。",
    },
    date: "26/02/2021 10:03",
    img: "https://th.bing.com/th/id/OIP.5gtumoZBBVTqOOwyV0rcaQHaE7?w=254&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    source: "baochinhphu.vn",
    url: "https://baochinhphu.vn/toan-van-nghi-quyet-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-cua-dang-102288263.htm",
    content: {
      vi: "Đại hội đại biểu toàn quốc lần thứ XIII Đảng Cộng sản Việt Nam họp từ ngày 25/01/2021 đến ngày 01/02/2021 tại Hà Nội. Đại hội đã thảo luận và thông qua các văn kiện quan trọng, đánh giá kết quả thực hiện Nghị quyết Đại hội XII, và đề ra phương hướng, nhiệm vụ phát triển đất nước trong giai đoạn tới, với mục tiêu đến giữa thế kỷ XXI, Việt Nam trở thành nước phát triển, theo định hướng xã hội chủ nghĩa.",
      en: "The 13th National Congress of the Communist Party of Vietnam was held in Hanoi from January 25, 2021, to February 1, 2021. The Congress discussed and approved important documents, assessed the results of the implementation of the 12th Congress Resolution, and set out the direction and tasks for national development in the next period, with the goal of Vietnam becoming a developed, socialist-oriented country by the middle of the 21st century.",
      ja: "第13回ベトナム共産党全国代表大会は、2021年1月25日から2月1日までハノイで開催されました。大会では重要文書が討議・承認され、第12回大会決議の実施結果を評価し、21世紀半ばまでにベトナムが社会主義志向の先進国になるという目標を掲げ、次期における国家発展の方向性と課題を定めました。",
    },
  },
  {
    id: 4,
    title: {
      vi: "Các chính sách hỗ trợ rất quan trọng để quyết liệt phục hồi tăng trưởng",
      en: "Support policies are very important to drastically restore growth",
      ja: "成長を抜本的に回復させるためには支援政策が非常に重要",
    },
    desc: {
      vi: "(Chinhphu.vn) - Chủ tịch nước Nguyễn Xuân Phúc nhận định, việc phấn đấu quyết liệt để phục hồi, tăng trưởng, hỗ trợ phát triển rất quan trọng. Chính vì thế, có chính sách hỗ trợ, phát triển là điều rất cần thiết trong lúc này.",
      en: "(Chinhphu.vn) - President Nguyen Xuan Phuc affirmed that striving drastically to recover, grow, and support development is very important. Therefore, having policies to support and develop is very necessary at this time.",
      ja: "(Chinhphu.vn) - グエン・スアン・フック国家主席は、回復、成長、開発支援のために抜本的に努力することが非常に重要であると断言しました。したがって、現時点では開発を支援するための政策が非常に必要です。",
    },
    date: "04/01/2022 18:40",
    img: "https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/tranthitiep/2022_01_04/IMG_4657%20(1).JPG",
    source: "baochinhphu.vn",
    url: "https://baochinhphu.vn/cac-chinh-sach-ho-tro-rat-quan-trong-de-quyet-liet-phuc-hoi-tang-truong-10222010418400393.htm",
    content: {
      vi: "Tại Kỳ họp bất thường của Quốc hội, Chủ tịch nước Nguyễn Xuân Phúc nhấn mạnh tầm quan trọng của các chính sách hỗ trợ để phục hồi kinh tế sau đại dịch. Ông cho rằng phải chấp nhận tăng nợ công và thâm hụt ngân sách trong tầm kiểm soát để bơm tiền vào nền kinh tế, giải quyết việc làm và thúc đẩy tăng trưởng, đồng thời phải giữ ổn định kinh tế vĩ mô.",
      en: "At the extraordinary session of the National Assembly, President Nguyen Xuan Phuc emphasized the importance of support policies for post-pandemic economic recovery. He stated that it is necessary to accept an increase in public debt and budget deficit within a controllable range to inject money into the economy, create jobs, and promote growth, while maintaining macroeconomic stability.",
      ja: "国会の臨時会合で、グエン・スアン・フック国家主席は、パンデミック後の経済回復のための支援政策の重要性を強調しました。彼は、マクロ経済の安定を維持しつつ、経済への資金注入、雇用創出、成長促進のために、制御可能な範囲で公的債務と財政赤字の増加を受け入れる必要があると述べました。",
    },
  },
  {
    id: 5,
    title: {
      vi: "Văn hóa là sức mạnh mềm, là 'năng lượng gốc' vô tận của dân tộc Việt Nam",
      en: "Culture is the soft power, the endless 'root energy' of the Vietnamese nation",
      ja: "文化はソフトパワーであり、ベトナム民族の無限の「根源的エネルギー」である",
    },
    desc: {
      vi: "(Chinhphu.vn) - 80 năm xây dựng và phát triển, dưới ánh sáng soi đường của Chủ nghĩa Mác - Lê nin, tư tưởng Hồ Chí Minh, sự lãnh đạo sáng suốt của Đảng và sự quản lý, điều hành của Nhà nước, Ngành Văn hóa, Thể thao và Du lịch đã đồng hành cùng dân tộc vượt qua mọi chặng đường lịch sử.",
      en: "(Chinhphu.vn) - 80 years of construction and development, under the guiding light of Marxism-Leninism, Ho Chi Minh's thought, the wise leadership of the Party and the management of the State, the Culture, Sports and Tourism sector has accompanied the nation through all historical stages.",
      ja: "(Chinhphu.vn) - 建設と発展の80年間、マルクス・レーニン主義、ホーチミン思想の導きの光、党の賢明な指導、国家の管理の下で、文化・スポーツ・観光部門は、あらゆる歴史的段階を通じて国家に寄り添ってきました。",
    },
    date: "23/08/2025 13:54",
    img: "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2025/8/23/z6936157601335992915d00766325838610554da6d0c8a-17559312207721721037868.jpg",
    source: "baochinhphu.vn",
    url: "https://baochinhphu.vn/van-hoa-la-suc-manh-mem-la-nang-luong-goc-vo-tan-cua-dan-toc-viet-nam-102250823134859831.htm",
    content: {
      vi: "Tại Lễ kỷ niệm 80 năm Ngày truyền thống Ngành Văn hóa, Tổng Bí thư Tô Lâm đã khẳng định văn hóa là nền tảng tinh thần, động lực phát triển, và là 'năng lượng gốc' vô tận của dân tộc. Ông nhấn mạnh rằng đầu tư cho văn hóa là đầu tư cho tương lai và 'mạch nguồn' sức mạnh dân tộc, đồng thời đề ra 10 nhiệm vụ, giải pháp trọng tâm để ngành Văn hóa phát triển xứng tầm trong giai đoạn mới.",
      en: "At the 80th Anniversary of the Traditional Day of the Culture Sector, General Secretary To Lam affirmed that culture is the spiritual foundation, the driving force for development, and the endless 'root energy' of the nation. He emphasized that investing in culture is investing in the future and the 'source' of national strength, and set out 10 key tasks and solutions for the Culture sector to develop accordingly in the new period.",
      ja: "文化部門の伝統の日80周年記念式典で、ト・ラム書記長は、文化は精神的基盤であり、発展の原動力であり、国家の無限の「根源的エネルギー」であると断言しました。彼は、文化への投資は未来と国家の力の「源」への投資であると強調し、新時代に文化部門がそれに応じて発展するための10の主要な課題と解決策を打ち出しました。",
    },
  },
];
