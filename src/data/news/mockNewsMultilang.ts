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

Mức quà tặng: 100.000 đồng/người dân, cho toàn dân ăn Tết Độc lập.

2. Bộ Tài chính chủ trì, phối hợp với các cơ quan liên quan khẩn trương báo cáo cấp có thẩm quyền quyết định trước ngày 29 tháng 8 năm 2025 bố trí nguồn kinh phí phù hợp để thực hiện, bảo đảm cân đối ngân sách nhà nước.

3. Ngân hàng Nhà nước Việt Nam chỉ đạo các đơn vị có liên quan và các ngân hàng thương mại, nhất là các ngân hàng thương mại nơi Kho bạc nhà nước mở tài khoản, bảo đảm hệ thống thanh toán và tiền mặt, đáp ứng yêu cầu tặng quà cho người dân kịp thời, thông suốt, không để bỏ sót bất kỳ ai và không trùng lắp.

4. Ủy ban nhân dân các tỉnh, thành phố trực thuộc Trung ương chỉ đạo các cơ quan, đơn vị có liên quan trên địa bàn, phối hợp chặt chẽ với Bộ Công an, Bộ Tài chính, Ngân hàng Nhà nước Việt Nam để tổ chức chuyển quà kịp thời, an toàn đến người dân, bảo đảm tiến độ theo yêu cầu.

5. Bộ Văn hóa, Thể thao và Du lịch, Đài Truyền hình Việt Nam, Đài Tiếng nói Việt Nam, Thông tấn xã Việt Nam theo chức năng, nhiệm vụ được giao thực hiện công tác thông tin truyền thông về chính sách nêu trên của Đảng và Nhà nước, tạo không khí phấn khởi, đoàn kết trong nhân dân chào mừng kỷ niệm 80 năm Cách mạng Tháng Tám và Quốc khánh 2/9.

6. Văn phòng Chính phủ theo chức năng, nhiệm vụ được giao, theo dõi, đôn đốc việc thực hiện Công điện này; báo cáo cấp có thẩm quyền những vấn đề vượt thẩm quyền.`,
      en: `The official dispatch states: In the atmosphere of the whole country jubilantly celebrating the 80th anniversary of the August Revolution and National Day September 2, to continue showing the deep concern of the Party and State for all people, implementing the guidance of Comrade General Secretary To Lam, the Government Party Committee has submitted to the Politburo about organizing gifts for people on the occasion of the 80th anniversary of the August Revolution and National Day September 2.

At document No. 17129-CV/VPTW dated August 28, 2025 of the Central Office, the Politburo agreed on the policy of giving gifts to people on the occasion of the 80th anniversary of the August Revolution and National Day September 2.

To timely implement the Politburo's guidance, the Prime Minister requires:

1. The Ministry of Finance, State Bank of Vietnam, Ministry of Public Security and People's Committees of provinces and cities directly under the Central Government according to their assigned functions and tasks based on the Politburo's guidance in document No. 17129-CV/VPTW, coordinate closely, immediately deploy the review of gift recipients and transfer gifts to people by appropriate measures (bank transfer or direct) as soon as possible, completed before National Day September 2, 2025.

Gift amount: 100,000 VND/person, for all people to celebrate Independence Day.

2. The Ministry of Finance shall take the lead in coordinating with relevant agencies to urgently report to competent authorities for decisions before August 29, 2025 to arrange appropriate funding sources for implementation, ensuring state budget balance.

3. The State Bank of Vietnam shall direct relevant units and commercial banks, especially commercial banks where the State Treasury opens accounts, to ensure payment systems and cash, meeting the requirements for timely and smooth gift giving to people, without omission of anyone and without duplication.

4. People's Committees of provinces and cities directly under the Central Government shall direct relevant agencies and units in their localities, coordinate closely with the Ministry of Public Security, Ministry of Finance, and State Bank of Vietnam to organize timely and safe gift delivery to people, ensuring progress as required.

5. The Ministry of Culture, Sports and Tourism, Vietnam Television, Voice of Vietnam, Vietnam News Agency according to their assigned functions and tasks shall carry out information and communication work on the above policies of the Party and State, creating an atmosphere of excitement and unity among the people in celebrating the 80th anniversary of the August Revolution and National Day September 2.

6. The Government Office according to its assigned functions and tasks shall monitor and urge the implementation of this Official Dispatch; report to competent authorities on matters beyond its authority.`,
      ja: `全国が八月革命と九二国慶節八十周年記念行事を熱烈に歓迎する中、党と国家の全人民に対する深い関心を表明し、蘇林総書記同志の指導意見を実行するため、党委員会は八月革命と九二国慶節八十周年記念行事を政治部に提出して人民に贈り物を贈った。

2025年8月28日中央弁公室第17129-CV/VPTW号の文書では、政治部は8月革命と9月2日の国慶節80周年の際に人民に贈り物を贈るという主張に同意した。

政治局の指導意見をタイムリーに実行するために、政府の総理は次のように要求した

1.財政部、ベトナム国家銀行、公安部と各省・市人民委員会は職能に基づき、政治部第17129-CV/VPTW号書類の指示に従い、緊密に調整し、直ちに贈り物を受け取る相手に対して審査を行い、できるだけ早く適切な措置（振込みまたは直接）を通じて贈り物を人民に引き渡し、2025年9月2日までに完成させる。

贈り物:100。 一人当たり1000元で、全人民が独立して食べることができる。

2.財政部が主催し、関係機関の緊急報告に協力して、主管部門は2025年8月29日までに適切な資金を配分して実施し、国家予算のバランスを確保することを決定した。

3.ベトナム国家銀行は関係機関と商業銀行、特に国家財政部が口座を開設する商業銀行に、支払いと現金システムを確保し、人民への贈り物の要求を適時、透明に満たし、誰にも漏れず、重復しないように指示する。

4.中央直轄省市人民委員会は関系部門と機関に公安部、財政部、ベトナム国家銀行と密接に協力して、適時、安全に人民に贈り物を移動し、要求通りの進度を確保するように指示した。

5.文化、スポーツ・観光部、ベトナムテレビ局、ベトナムボイステレビ、ベトナム新聞社は職能に応じて、党と国家の上記政策に関するメディア情報活動の展開を依頼し、八月革命と九二国慶節80周年を祝う人民のために喜びと団結の雰囲気を作り出す

6.政府事務室は職能、任務の授権、監督、本電力工事の実施を促す 管轄範囲外の問題を報告する権限を持つ。`,
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
    img: "https://btnmt.1cdn.vn/2022/05/19/t2(1).jpg",
    source: "tapchilichsudang.vn",
    url: "https://tapchilichsudang.vn/van-dung-tu-tuong-ho-chi-minh-ve-doc-lap-dan-toc-va-chu-nghia-xa-hoi-trong-cong-cuoc-doi-moi-dat-nuoc-hien-nay.html",
    content: {
      vi: `Tổng quan

Bài viết phân tích sâu sắc tư tưởng cốt lõi của Hồ Chí Minh về con đường phát triển của cách mạng Việt Nam, đó là sự gắn kết không thể tách rời giữa độc lập dân tộc và chủ nghĩa xã hội (CNXH). Đây không chỉ là một lựa chọn mang tính lịch sử mà còn được khẳng định là quy luật vận động, phát triển tất yếu của cách mạng Việt Nam, được Đảng Cộng sản Việt Nam kiên định vận dụng và phát triển sáng tạo trong công cuộc đổi mới đất nước hiện nay.

1. Quá trình Lựa chọn và Kiên định Con đường Cách mạng của Hồ Chí Minh

Từ khát vọng cháy bỏng giải phóng dân tộc, Nguyễn Ái Quốc đã tìm ra con đường cứu nước duy nhất đúng đắn thông qua chủ nghĩa Mác - Lênin. Người đã khẳng định dứt khoát: "Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác con đường cách mạng vô sản".

Giai đoạn đầu: Con đường này được cụ thể hóa ngay từ khi thành lập Đảng trong Chánh cương vắn tắt (1930), xác định cách mạng Việt Nam phải trải qua hai giai đoạn: "tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản".

Ưu tiên chiến lược: Trước biến động của tình hình thế giới, Hội nghị Trung ương 8 (tháng 5/1941) đã có một quyết định sáng suốt mang tính bước ngoặt: đặt nhiệm vụ giải phóng dân tộc lên hàng đầu. Lập luận rằng nếu không giành được độc lập dân tộc, thì quyền lợi của mọi giai cấp cũng không thể đòi lại được. Quyết định này chính là nhân tố quyết định thắng lợi của Cách mạng Tháng Tám năm 1945.

Bảo vệ thành quả: Sau khi giành được độc lập, trong cuộc kháng chiến chống thực dân Pháp, tinh thần "Tổ quốc trên hết", "Dân tộc trên hết" và quyết tâm "thà hy sinh tất cả, chứ nhất định không chịu mất nước" đã thể hiện sự kiên định bảo vệ nền độc lập non trẻ.

Làm rõ lộ trình: Tại Đại hội Đảng lần thứ II (1951) và trong tác phẩm Thường thức chính trị (1953), Hồ Chí Minh đã hệ thống hóa rõ hơn về hai bước của cách mạng Việt Nam: bước một là cách mạng dân tộc dân chủ nhân dân, bước hai là tiến lên CNXH.

Lý tưởng xuyên suốt: Trong suốt cuộc kháng chiến chống Mỹ cứu nước, tư tưởng này tiếp tục là kim chỉ nam, được thể hiện qua chân lý "Nước Việt Nam là một, dân tộc Việt Nam là một". Khát vọng độc lập, thống nhất và đi lên CNXH đã hội tụ thành sức mạnh to lớn của toàn dân tộc, làm nên Đại thắng mùa Xuân năm 1975.

Như vậy, độc lập dân tộc gắn liền với CNXH là sợi chỉ đỏ xuyên suốt, là tư tưởng cốt lõi trong toàn bộ sự nghiệp cách mạng của Hồ Chí Minh và của Đảng, dẫn dắt dân tộc đi từ thắng lợi này đến thắng lợi khác.

2. Vận dụng Sáng tạo trong Công cuộc Đổi mới Đất nước Hiện nay

Bước vào thời kỳ đổi mới, tư tưởng Hồ Chí Minh về độc lập dân tộc và CNXH tiếp tục được khẳng định là nền tảng tư tưởng, kim chỉ nam cho mọi hành động của Đảng và Nhà nước.

Khẳng định nền tảng: Đại hội VII (1991) đã chính thức xác định: "Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động". Đây là một dấu mốc quan trọng, thể hiện sự nhận thức sâu sắc về giá trị và vai trò của di sản Hồ Chí Minh.

Phát triển mô hình CNXH Việt Nam: Vượt qua cuộc khủng hoảng sau sự sụp đổ của mô hình CNXH ở Liên Xô và Đông Âu, Đảng ta đã kiên định con đường đã chọn nhưng với một tư duy sáng tạo. Mô hình xã hội XHCN mà Việt Nam xây dựng được phát triển và hoàn thiện qua các kỳ Đại hội, được cụ thể hóa trong Cương lĩnh (bổ sung, phát triển năm 2011) với 8 đặc trưng cơ bản, tiêu biểu là: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh; do nhân dân làm chủ; có nền kinh tế phát triển cao...".

Minh chứng bằng thành tựu: Sau gần 40 năm đổi mới, việc kiên định mục tiêu này đã mang lại những thành tựu to lớn, có ý nghĩa lịch sử. Vị thế và tiềm lực quốc gia không ngừng được nâng cao, được thể hiện qua các chỉ số ấn tượng về kinh tế (quy mô GDP, xuất khẩu, thu hút FDI), đổi mới sáng tạo, giảm nghèo và chỉ số hạnh phúc. Độc lập, chủ quyền được giữ vững, đối ngoại được mở rộng, uy tín quốc tế của Việt Nam ngày càng tăng.

Làm sâu sắc mối quan hệ biện chứng: Thực tiễn đã chứng minh mối quan hệ hai chiều không thể tách rời:

• Độc lập dân tộc là điều kiện tiên quyết, là tiền đề để xây dựng CNXH. Không có độc lập thì không thể xây dựng CNXH.

• Ngược lại, xây dựng CNXH thành công sẽ tạo ra nguồn lực vật chất - kỹ thuật dồi dào, xây dựng đất nước hùng cường, tạo nền tảng vững chắc nhất để bảo vệ vĩnh viễn nền độc lập dân tộc.`,
      en: `Overview
This article provides an in-depth analysis of Ho Chi Minh's core ideology on the development path of the Vietnamese revolution: the inseparable link between national independence and socialism. This is not merely a historical choice but is affirmed as the inevitable law of movement and development for the Vietnamese revolution, a principle that the Communist Party of Vietnam has steadfastly applied and creatively developed in the current national renewal (Doi Moi) process.

1. The Process of Ho Chi Minh's Selection and Steadfast Pursuit of the Revolutionary Path
Stemming from an ardent desire for national liberation, Nguyen Ai Quoc discovered the only correct path to national salvation through Marxism-Leninism. He definitively asserted: "To save the country and liberate the nation, there is no other path than that of proletarian revolution."

Early Stage: This path was concretized from the Party's inception in the Brief Political Platform (1930), which determined that the Vietnamese revolution must undergo two stages: "a bourgeois democratic revolution and a land revolution to advance towards a communist society."

Strategic Priority: Facing global shifts, the 8th Central Committee Conference (May 1941) made a brilliant and pivotal decision: to prioritize the task of national liberation. The reasoning was that if national independence was not achieved, the interests of all classes could not be reclaimed. This decision was the decisive factor in the victory of the August Revolution in 1945.

Protecting Achievements: After gaining independence, during the resistance war against the French colonialists, the spirit of "The Fatherland above all," "The Nation above all," and the resolve to "sacrifice everything rather than lose our country" demonstrated the steadfast commitment to protecting the fledgling independence.

Clarifying the Roadmap: At the 2nd Party Congress (1951) and in the work Political Common Sense (1953), Ho Chi Minh further systematized the two steps of the Vietnamese revolution: the first step is the people's national democratic revolution, and the second is advancing to socialism.

A Consistent Ideal: Throughout the resistance war against America for national salvation, this ideology continued to be a guiding principle, expressed in the truth that "Vietnam is one, the Vietnamese nation is one." The aspiration for independence, reunification, and the advancement to socialism converged into the immense strength of the entire nation, leading to the Great Spring Victory of 1975.

Thus, national independence linked with socialism is the red thread running throughout, the core ideology of Ho Chi Minh's and the Party's entire revolutionary cause, leading the nation from one victory to another.

2. Creative Application in the Current National Renewal Process
Entering the Doi Moi era, Ho Chi Minh's ideology on national independence and socialism continues to be affirmed as the ideological foundation and a lodestar for all actions of the Party and the State.

Affirming the Foundation: The 7th Party Congress (1991) officially declared: "The Party takes Marxism-Leninism and Ho Chi Minh Thought as its ideological foundation and lodestar for action." This was a significant milestone, reflecting a profound awareness of the value and role of Ho Chi Minh's legacy.

Developing Vietnam's Socialist Model: Overcoming the crisis following the collapse of the socialist model in the Soviet Union and Eastern Europe, our Party has steadfastly followed its chosen path, but with creative thinking. The socialist model that Vietnam is building has been developed and refined through successive Party Congresses, specified in the Platform (supplemented and developed in 2011) with 8 basic characteristics, notably: "A rich people, a strong country, democracy, justice, and civilization; owned by the people; with a highly developed economy..."

Evidence from Achievements: After nearly 40 years of Doi Moi, the steadfast adherence to this goal has brought about tremendous achievements of historical significance. The nation's position and potential have been continuously enhanced, reflected in impressive indicators of the economy (GDP scale, exports, FDI attraction), innovation, poverty reduction, and the happiness index. Independence and sovereignty are firmly maintained, foreign relations have expanded, and Vietnam's international prestige is ever-increasing.

Deepening the Dialectical Relationship: Practice has proven the inseparable, two-way relationship:

• National independence is the prerequisite, the precondition for building socialism. Without independence, socialism cannot be built.

• Conversely, successfully building socialism will create abundant material and technical resources, build a prosperous nation, and establish the most solid foundation to permanently protect national independence.
`,
      ja: `概要

本文はホーチミンのベトナム革命発展の道に関する核心思想、すなわち民族独立と社会主義(CNXH)との不可分なつながりを深く分析した。 これは歴史的な選択であるだけでなく、ベトナム革命の必然的な運動と発展規則を肯定し、ベトナム共産党によって現在の国家革新事業でしっかりと運用され、創造的に発展している。

1.ホーチミン革命の道の選択と確定

民族解放への熱烈な切望から、ルアン愛国はマルクスレーニン主義を通じて国家を救う唯一の正しい道を見つけた。 「国を救って民族を解放するには、ほかに道はなく、プロレタリアート革命の道しかない。

第一段階:この道は党の成立初期（1930年）に具体化され、ベトナム革命は「ブルジョアジー革命と革命の土地革命が共産主義社会に向かう」という二つの段階を経なければならないことが確定した。

戦略優先:世界情勢の動揺に直面して、八大（1941年5月）はマイルストーンの意義ある賢明な決定を下した。民族解放任務を第一にする。 論争によると、民族独立を勝ち取らなければ、すべての階級の権利は回復できない。 この決定は1945年8月革命の勝利を決める要素である。

独立を勝ち取った後、フランス植民地主義に抵抗する闘争の中で、「民族至上」、「民族至上」の精神と、「すべてを犠牲にして水に落ちたくない」という決意は、若い独立を守るという確固たる決意を体現した。

第二次党大会（1951年）と『政治慣行』）1953年）では、ホーチミンはベトナム革命の二つの段階について体系的に述べた。第一段階は民族民主革命であり、第二段階はベトナムに向かって前進する。

貫徹の理想:抗米救国戦争の間、この思想は引き続き羅針盤であり、「ベトナムは一国であり、ベトナム民族は一国である」という真理を通して表現されている。 独立、統一、向上の願いは全民族の強大な力を結集し、1975年春の勝利を形成した。

そのため、中国共産党と結ばれた民族独立は一貫した赤い糸であり、ホーチミンと党の革命事業全体の核心思想であり、民族をある勝利から別の勝利へと導く。

2.現在の土地革新運動を創造的に活用する

革新期に入って、ホーチミン民族独立思想とホーチミンは引き続き党と国家のすべての行動の思想基礎、羅針盤として肯定されている。

定礎宣言:第七回党大会（1991年）は正式に、「党はマルクス・レーニン主義とホーチミン思想を思想の基礎とし、行動の羅針盤とする」と確定した。 これは重要な里程標であり、ホーチミン遺産の価値と役割に対する深い認識を体現している。

ベトナムモデルの発展:ソ連と東欧モデルが崩壊した後の危機を克服し、わが党はしっかりと道を選んだが、創造的思考を持っている。 ベトナムが創立したXHCN社会モデルは各期の大会を通じて発展し、完備したもので、具体的には「綱領」（2011年補充、発展））に現れて、8つの基本的な特徴を持って、その代表的なものは、「人民は裕福で、水力力が強く、民主的で、公平で、文明的である； 人民によって支配される； 高度に発達した経済ブロックを持っている。 .""です。

成果の証拠:40年近くの革新を経て、この目標の確固たる達成は歴史的意義のある大きな成果を収めた。 国家の地位と潜在力は絶えず向上し、印象的な経済指標（国内総生産、輸出、外国からの直接投資の誘致）、革新、貧困と幸福指数の減少に現れている。 独立、主権が維持され、対外開放され、ベトナムの国際的威光は日増しに強まっている。

弁証法関係の深化:双方向関係が不可分であることを実践的に証明する:

• 民族独立は国家建設の前提と前提である。 独立性がなければ、CNXHを作ることはできません。

• 反対に、建設の成功は豊富な物質技術資源を創造し、強国を建設し、民族独立を永久に維持するために最も強固な基礎を築く。`,
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
    img: "https://bcp.cdnchinhphu.vn/Uploaded/nguyenxuanhong/2021_01_25/IMG_4131.JPG",
    source: "baochinhphu.vn",
    url: "https://baochinhphu.vn/toan-van-nghi-quyet-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-cua-dang-102288263.htm",
    content: {
      vi: `Đại hội đại biểu toàn quốc lần thứ XIII Đảng Cộng sản Việt Nam họp từ ngày 25/01/2021 đến ngày 01/02/2021, tại Thủ đô Hà Nội, sau khi thảo luận các văn kiện do Ban Chấp hành Trung ương Đảng khoá XII trình,
QUYẾT NGHỊ

I- Tán thành những nội dung cơ bản về đánh giá kết quả thực hiện Nghị quyết Đại hội XII và đánh giá chung về 10 năm thực hiện Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội năm 1991 (bổ sung, phát triển năm 2011), 10 năm thực hiện Chiến lược phát triển kinh tế - xã hội 2011 - 2020, 30 năm thực hiện Cương lĩnh 1991, 35 năm thực hiện công cuộc đổi mới; định hướng phát triển và phương hướng, nhiệm vụ phát triển đất nước trong thời gian tới nêu trong các văn kiện của Ban Chấp hành Trung ương Đảng khoá XII trình Đại hội. Cụ thể là:

1. Kết quả thực hiện Nghị quyết Đại hội XII

Trong nhiệm kỳ Đại hội XII, nắm bắt thuận lợi, thời cơ, vượt qua khó khăn, thách thức, nhất là tác động nặng nề của cuộc khủng hoảng, suy thoái kinh tế toàn cầu do đại dịch COVID-19; toàn Đảng, toàn dân, toàn quân đã đoàn kết, chung sức, đồng lòng nỗ lực phấn đấu, thực hiện thắng lợi các mục tiêu, nhiệm vụ, đạt được nhiều thành tựu rất quan trọng, khá toàn diện, tạo nhiều dấu ấn nổi bật. Kinh tế vĩ mô ổn định, lạm phát được kiểm soát, tăng trưởng được duy trì ở mức khá cao; tiềm lực, quy mô và sức cạnh tranh của nền kinh tế được nâng lên. Các lĩnh vực xã hội, môi trường có nhiều tiến bộ. Đời sống nhân dân được cải thiện đáng kể. Công tác xây dựng, chỉnh đốn Đảng và xây dựng hệ thống chính trị được đặc biệt chú trọng, triển khai toàn diện, đồng bộ, hiệu quả. Công tác kiểm tra, giám sát, kỷ luật và đấu tranh phòng, chống tham nhũng, lãng phí, tiêu cực chuyển biến mạnh mẽ, có bước đột phá gắn kết chặt chẽ giữa "xây" và "chống", có hiệu quả, ngày càng đi vào chiều sâu. Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam không ngừng được củng cố vững mạnh. Công tác lãnh đạo của Đảng với Nhà nước, Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội được tăng cường, mối quan hệ phối hợp ngày càng chặt chẽ, đồng bộ. Chính trị - xã hội ổn định; quốc phòng, an ninh không ngừng được củng cố, kiên quyết, kiên trì giữ vững độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ, lợi ích quốc gia, dân tộc; quan hệ đối ngoại và hội nhập quốc tế ngày càng sâu rộng và hiệu quả; vị thế, uy tín của Việt Nam trên trường quốc tế được nâng cao. Đặc biệt, trong năm 2020, đại dịch COVID-19 gây ra nhiều thiệt hại về kinh tế - xã hội, song nhờ phát huy được sức mạnh đại đoàn kết toàn dân tộc, sự ưu việt của chế độ xã hội chủ nghĩa, sự tham gia đồng bộ, quyết liệt của cả hệ thống chính trị dưới sự lãnh đạo đúng đắn của Đảng, sự đồng lòng ủng hộ của nhân dân, đất nước ta đã từng bước kiểm soát có hiệu quả đại dịch COVID-19; từng bước phục hồi sản xuất, kinh doanh và các hoạt động kinh tế - xã hội; ổn định đời sống nhân dân; góp phần củng cố, tăng cường niềm tin của nhân dân đối với Đảng, Nhà nước và chế độ xã hội chủ nghĩa; khẳng định bản lĩnh, ý chí, truyền thống tốt đẹp của nhân dân ta, dân tộc ta.

Những thành tựu đạt được 5 năm qua là kết tinh sức sáng tạo của quá trình phấn đấu liên tục, bền bỉ của toàn Đảng, toàn dân và toàn quân ta qua nhiều nhiệm kỳ đại hội, góp phần tạo nên những thành tựu to lớn, có ý nghĩa lịch sử của nước ta qua 35 năm đổi mới. Đạt được những thành tựu nêu trên có nhiều nguyên nhân, nhưng nguyên nhân bao trùm và quan trọng nhất là sự đoàn kết, thống nhất, sự lãnh đạo, chỉ đạo đúng đắn, kịp thời, có hiệu quả của Ban Chấp hành Trung ương, Bộ Chính trị, Ban Bí thư và các cấp uỷ đảng trong việc triển khai thực hiện toàn diện, đồng bộ Nghị quyết Đại hội lần thứ XII, giải quyết kịp thời, có hiệu quả nhiều vấn đề mới nảy sinh trong thực tiễn; sự quản lý, điều hành quyết liệt của Chính phủ và chính quyền các cấp; sự nỗ lực đổi mới nội dung và phương thức hoạt động của Quốc hội và Hội đồng nhân dân các cấp; sự tham gia tích cực và có hiệu quả của Mặt trận Tổ quốc và các tổ chức chính trị - xã hội; sự phối hợp đồng bộ của cả hệ thống chính trị; sự nỗ lực của đội ngũ cán bộ, đảng viên; tinh thần lao động tích cực, cần cù, sáng tạo, trách nhiệm của cộng đồng doanh nghiệp và các tầng lớp nhân dân; sự ủng hộ của bạn bè quốc tế.

Bên cạnh những thành tựu đạt được, việc hoàn thiện thể chế, đổi mới mô hình tăng trưởng, cơ cấu lại nền kinh tế, công nghiệp hoá, hiện đại hoá còn chậm, chưa tạo được chuyển biến căn bản; năng suất, chất lượng, hiệu quả và sức cạnh tranh của nền kinh tế chưa cao. Giáo dục và đào tạo, khoa học và công nghệ chưa trở thành động lực then chốt thúc đẩy phát triển kinh tế - xã hội. Lĩnh vực văn hoá, xã hội chưa có nhiều đột phá, hiệu quả chưa cao; đời sống của một bộ phận nhân dân còn khó khăn. Quản lý tài nguyên, bảo vệ môi trường và khả năng thích ứng với biến đổi khí hậu còn bất cập. Các lĩnh vực quốc phòng, an ninh, đối ngoại còn một số mặt hạn chế. Sức mạnh đại đoàn kết toàn dân tộc và dân chủ xã hội chủ nghĩa có lúc, có nơi chưa được quan tâm phát huy đầy đủ. Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam có mặt chưa đáp ứng tốt yêu cầu phát triển kinh tế - xã hội và quản lý đất nước trong tình hình mới. Công tác xây dựng, chỉnh đốn Đảng còn một số hạn chế.

Mười năm thực hiện Cương lĩnh (bổ sung, phát triển năm 2011) và thực hiện Chiến lược phát triển kinh tế - xã hội 10 năm 2011 - 2020 đã tạo những tiến bộ quan trọng cả về nhận thức lý luận và tổ chức thực hiện, khẳng định những giá trị to lớn của Cương lĩnh, tiếp tục khẳng định đường lối đổi mới của Đảng ta là đúng đắn, sáng tạo. Kinh tế, văn hoá, xã hội tiếp tục phát triển, quốc phòng, an ninh, đối ngoại được tăng cường, đời sống vật chất và tinh thần của nhân dân được cải thiện rõ rệt. Tuy nhiên, kinh tế - xã hội phát triển chưa tương xứng với tiềm năng, lợi thế của đất nước và còn nhiều khó khăn, thách thức. Một số chỉ tiêu phát triển kinh tế - xã hội trong Chiến lược phát triển kinh tế - xã hội 10 năm 2011 - 2020 và việc tạo nền tảng để đưa nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại chưa đạt được mục tiêu đề ra. Công cuộc đổi mới và tình hình quốc tế tiếp tục đặt ra nhiều vấn đề về lý luận và thực tiễn cần phải tập trung giải quyết để đưa đất nước phát triển nhanh và bền vững hơn theo định hướng xã hội chủ nghĩa, nhất là việc nhận thức, giải quyết đúng, hiệu quả các mối quan hệ lớn.

Nhìn lại 35 năm thực hiện công cuộc đổi mới, 30 năm thực hiện Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (Cương lĩnh năm 1991), lý luận về đường lối đổi mới, về chủ nghĩa xã hội và con đường đi lên chủ nghĩa xã hội ở nước ta ngày càng hoàn thiện và từng bước được hiện thực hoá. Đất nước đã đạt được những thành tựu to lớn, có ý nghĩa lịch sử, phát triển mạnh mẽ, toàn diện so với những năm trước đổi mới. Quy mô, trình độ nền kinh tế được nâng lên. Đời sống nhân dân được cải thiện rõ rệt cả về vật chất và tinh thần. Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay. Những thành tựu của 35 năm thực hiện công cuộc đổi mới, 30 năm thực hiện Cương lĩnh năm 1991, đặc biệt, trong 10 năm thực hiện Cương lĩnh (bổ sung, phát triển năm 2011) đã tiếp tục khẳng định con đường đi lên chủ nghĩa xã hội của nước ta là phù hợp với thực tiễn Việt Nam và xu thế phát triển của thời đại; sự lãnh đạo đúng đắn của Đảng là nhân tố hàng đầu quyết định thắng lợi của cách mạng Việt Nam. Trong bối cảnh tình hình thế giới có nhiều biến động nhanh, phức tạp, Cương lĩnh của Đảng tiếp tục là ngọn cờ tư tưởng, ngọn cờ chiến đấu, ngọn cờ quy tụ sức mạnh đại đoàn kết toàn dân tộc phấn đấu vì một nước Việt Nam "dân giàu, nước mạnh, dân chủ, công bằng, văn minh".

2. Tầm nhìn và định hướng phát triển

Trong những năm tới, tình hình thế giới và trong nước có cả thuận lợi, thời cơ và khó khăn, thách thức đan xen; đặt ra nhiều vấn đề mới, yêu cầu mới nặng nề, phức tạp hơn đối với sự nghiệp xây dựng và bảo vệ Tổ quốc; đòi hỏi toàn Đảng, toàn dân, toàn quân ta phải đoàn kết một lòng; tiếp tục đổi mới mạnh mẽ tư duy; có quyết tâm chính trị cao; dự báo chính xác, kịp thời diễn biến của tình hình; chủ động ứng phó kịp thời với mọi tình huống; nỗ lực hơn nữa để tiếp tục đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới; không ngừng gia tăng tiềm lực mọi mặt của quốc gia, bảo vệ vững chắc Tổ quốc và những thành quả phát triển đã đạt được; đưa đất nước vững bước tiến lên, phát triển nhanh và bền vững; quyết tâm thực hiện thắng lợi các quan điểm, mục tiêu, định hướng và nhiệm vụ trọng tâm sau:

Quan điểm chỉ đạo:

- Kiên định và vận dụng, phát triển sáng tạo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh; kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội; kiên định đường lối đổi mới của Đảng; kiên định các nguyên tắc xây dựng Đảng để xây dựng và bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa.

- Bảo đảm cao nhất lợi ích quốc gia - dân tộc trên cơ sở các nguyên tắc cơ bản của Hiến chương Liên Hợp Quốc và luật pháp quốc tế, bình đẳng, hợp tác, cùng có lợi. Tiếp tục phát triển nhanh và bền vững đất nước; gắn kết chặt chẽ và triển khai đồng bộ các nhiệm vụ, trong đó phát triển kinh tế - xã hội là trung tâm; xây dựng Đảng là then chốt; phát triển văn hoá là nền tảng tinh thần; bảo đảm quốc phòng, an ninh là trọng yếu, thường xuyên.

- Khơi dậy mạnh mẽ tinh thần yêu nước, ý chí tự cường dân tộc, sức mạnh đại đoàn kết toàn dân tộc và khát vọng phát triển đất nước phồn vinh, hạnh phúc; phát huy dân chủ xã hội chủ nghĩa, sức mạnh tổng hợp của cả hệ thống chính trị và của nền văn hoá, con người Việt Nam, bồi dưỡng sức dân, nâng cao chất lượng nguồn nhân lực, có cơ chế đột phá để thu hút, trọng dụng nhân tài, thúc đẩy đổi mới sáng tạo, ứng dụng mạnh mẽ khoa học và công nghệ, nhất là những thành tựu của cuộc cách mạng công nghiệp lần thứ tư, tạo động lực mạnh mẽ cho phát triển nhanh và bền vững.

- Kết hợp sức mạnh dân tộc với sức mạnh thời đại; nêu cao ý chí độc lập, tự chủ, chủ động, tích cực hội nhập và nâng cao hiệu quả hợp tác quốc tế; phát huy tối đa nội lực, tranh thủ ngoại lực, trong đó nguồn lực nội sinh, nhất là nguồn lực con người là quan trọng nhất.

- Tăng cường xây dựng, chỉnh đốn Đảng, phát huy bản chất giai cấp công nhân của Đảng, nâng cao năng lực lãnh đạo, năng lực cầm quyền và sức chiến đấu của Đảng; xây dựng Đảng và hệ thống chính trị trong sạch, vững mạnh toàn diện, xây dựng Nhà nước tinh gọn, hoạt động hiệu lực, hiệu quả; gắn với tinh giản biên chế, nâng cao chất lượng và cơ cấu lại đội ngũ cán bộ, công chức, viên chức; xây dựng đội ngũ cán bộ, đảng viên, nhất là đội ngũ cán bộ cấp chiến lược, người đứng đầu đủ phẩm chất, năng lực và uy tín, ngang tầm nhiệm vụ, gắn bó mật thiết với nhân dân là những nhân tố có ý nghĩa quyết định thành công sự nghiệp xây dựng, phát triển đất nước và bảo vệ Tổ quốc.

Mục tiêu tổng quát:

Nâng cao năng lực lãnh đạo, năng lực cầm quyền và sức chiến đấu của Đảng; xây dựng Đảng và hệ thống chính trị trong sạch, vững mạnh toàn diện; củng cố, tăng cường niềm tin của nhân dân đối với Đảng, Nhà nước, chế độ xã hội chủ nghĩa; khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc, phát huy ý chí và sức mạnh đại đoàn kết toàn dân tộc kết hợp với sức mạnh thời đại; đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới, công nghiệp hoá, hiện đại hoá; xây dựng và bảo vệ vững chắc Tổ quốc, giữ vững môi trường hoà bình, ổn định; phấn đấu đến giữa thế kỷ XXI, nước ta trở thành nước phát triển, theo định hướng xã hội chủ nghĩa.

Mục tiêu cụ thể:

- Đến năm 2025, kỷ niệm 50 năm giải phóng hoàn toàn miền Nam, thống nhất đất nước: Là nước đang phát triển, có công nghiệp theo hướng hiện đại, vượt qua mức thu nhập trung bình thấp.

- Đến năm 2030, kỷ niệm 100 năm thành lập Đảng: Là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao.

- Đến năm 2045, kỷ niệm 100 năm thành lập nước Việt Nam Dân chủ Cộng hoà, nay là nước Cộng hoà xã hội chủ nghĩa Việt Nam: Trở thành nước phát triển, thu nhập cao.

Định hướng các chỉ tiêu chủ yếu về phát triển kinh tế - xã hội 5 năm 2021 - 2025:

Về kinh tế: Tốc độ tăng trưởng kinh tế (GDP) bình quân 5 năm đạt khoảng 6,5 - 7%/năm. Đến năm 2025, GDP bình quân đầu người khoảng 4.700 - 5.000 USD; đóng góp của năng suất các nhân tố tổng hợp (TFP) vào tăng trưởng đạt khoảng 45%; tốc độ tăng năng suất lao động xã hội bình quân trên 6,5%/năm; tỉ lệ đô thị hoá khoảng 45%; tỉ trọng công nghiệp chế biến, chế tạo trong GDP đạt trên 25%; kinh tế số đạt khoảng 20% GDP.

Về xã hội: Đến năm 2025, tỉ trọng lao động nông nghiệp trong tổng lao động xã hội khoảng 25%; tỉ lệ lao động qua đào tạo là 70%; tỉ lệ thất nghiệp ở khu vực thành thị năm 2025 dưới 4%; tỉ lệ nghèo đa chiều duy trì mức giảm 1 - 1,5% hằng năm; có 10 bác sĩ và 30 giường bệnh/1 vạn dân; tỉ lệ tham gia bảo hiểm y tế đạt 95% dân số; tuổi thọ trung bình đạt khoảng 74,5 tuổi; tỉ lệ xã đạt tiêu chuẩn nông thôn mới tối thiểu 80%, trong đó ít nhất 10% đạt chuẩn nông thôn mới kiểu mẫu.

Về môi trường: Đến năm 2025, tỉ lệ sử dụng nước sạch, nước hợp vệ sinh của dân cư thành thị là 95 - 100%, nông thôn là 93 - 95%; tỉ lệ thu gom và xử lý chất thải rắn sinh hoạt đô thị bảo đảm tiêu chuẩn, quy chuẩn đạt 90%; tỉ lệ khu công nghiệp, khu chế xuất đang hoạt động có hệ thống xử lý nước thải tập trung đạt tiêu chuẩn môi trường là 92%; tỉ lệ cơ sở gây ô nhiễm môi trường nghiêm trọng được xử lý đạt 100%; giữ tỉ lệ che phủ rừng ổn định 42%.

Định hướng phát triển đất nước giai đoạn 2021 - 2030:

(1) Tiếp tục đổi mới mạnh mẽ tư duy, xây dựng, hoàn thiện đồng bộ thể chế phát triển bền vững về kinh tế, chính trị, văn hoá, xã hội, môi trường..., tháo gỡ kịp thời những khó khăn, vướng mắc; khơi dậy mọi tiềm năng và nguồn lực, tạo động lực mới cho sự phát triển nhanh và bền vững đất nước.

(2) Hoàn thiện toàn diện, đồng bộ thể chế phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa, tạo môi trường thuận lợi để huy động, phân bổ và sử dụng có hiệu quả các nguồn lực, thúc đẩy đầu tư, sản xuất kinh doanh. Bảo đảm ổn định kinh tế vĩ mô, đổi mới mạnh mẽ mô hình tăng trưởng, cơ cấu lại nền kinh tế, đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước; tập trung xây dựng kết cấu hạ tầng và phát triển đô thị; phát triển kinh tế nông thôn gắn với xây dựng nông thôn mới; ưu tiên nguồn lực phát triển hạ tầng nông thôn miền núi, vùng dân tộc thiểu số; đẩy mạnh chuyển đổi số quốc gia, phát triển kinh tế số trên nền tảng khoa học và công nghệ, đổi mới sáng tạo; nâng cao năng suất, chất lượng, hiệu quả và sức cạnh tranh của nền kinh tế, gắn kết hài hoà, hiệu quả thị trường trong nước và quốc tế.

(3) Tạo đột phá trong đổi mới căn bản, toàn diện giáo dục và đào tạo, phát triển nguồn nhân lực chất lượng cao, thu hút và trọng dụng nhân tài. Thúc đẩy nghiên cứu, chuyển giao, ứng dụng mạnh mẽ thành tựu của cuộc Cách mạng công nghiệp lần thứ tư vào mọi lĩnh vực của đời sống xã hội, chú trọng một số ngành, lĩnh vực trọng điểm, có tiềm năng, lợi thế để làm động lực cho tăng trưởng theo tinh thần bắt kịp, tiến cùng và vượt lên ở một số lĩnh vực so với khu vực và thế giới.

(4) Phát triển con người toàn diện và xây dựng nền văn hoá Việt Nam tiên tiến, đậm đà bản sắc dân tộc để văn hoá thực sự trở thành sức mạnh nội sinh, động lực phát triển đất nước và bảo vệ Tổ quốc. Tăng đầu tư cho phát triển sự nghiệp văn hoá. Xây dựng, phát triển, tạo môi trường và điều kiện xã hội thuận lợi nhất để khơi dậy truyền thống yêu nước, niềm tự hào dân tộc, niềm tin, khát vọng phát triển đất nước phồn vinh, hạnh phúc; tài năng, trí tuệ, phẩm chất của con người Việt Nam là trung tâm, mục tiêu và động lực phát triển quan trọng nhất của đất nước.

(5) Quản lý phát triển xã hội có hiệu quả, nghiêm minh, bảo đảm an ninh xã hội, an ninh con người; thực hiện tiến bộ và công bằng xã hội; xây dựng môi trường văn hoá, đạo đức xã hội lành mạnh, văn minh; chú trọng nâng cao chất lượng dịch vụ y tế, chất lượng dân số, gắn dân số với phát triển; quan tâm đến mọi người dân, bảo đảm chính sách lao động, việc làm, thu nhập, thực hiện tốt phúc lợi xã hội, an sinh xã hội. Không ngừng cải thiện toàn diện đời sống vật chất và tinh thần của nhân dân.

(6) Chủ động thích ứng có hiệu quả với biến đổi khí hậu, phòng, chống và giảm nhẹ thiên tai, dịch bệnh, quản lý, khai thác, sử dụng hợp lý, tiết kiệm, hiệu quả và bền vững tài nguyên; lấy bảo vệ môi trường sống và sức khoẻ nhân dân làm mục tiêu hàng đầu; kiên quyết loại bỏ những dự án gây ô nhiễm môi trường, bảo đảm chất lượng môi trường sống, bảo vệ đa dạng sinh học và hệ sinh thái; xây dựng nền kinh tế xanh, kinh tế tuần hoàn, thân thiện với môi trường.

(7) Kiên quyết, kiên trì bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của Tổ quốc; bảo vệ Đảng, Nhà nước, nhân dân và chế độ xã hội chủ nghĩa. Giữ vững an ninh chính trị, bảo đảm trật tự, an toàn xã hội, an ninh con người, an ninh kinh tế, an ninh mạng, xây dựng xã hội trật tự, kỷ cương. Chủ động ngăn ngừa các nguy cơ chiến tranh, xung đột từ sớm, từ xa; phát hiện sớm và xử lý kịp thời những yếu tố bất lợi, nhất là những yếu tố nguy cơ gây đột biến; đẩy mạnh đấu tranh làm thất bại mọi âm mưu và hoạt động chống phá của các thế lực thù địch.

(8) Tiếp tục thực hiện đường lối đối ngoại độc lập, tự chủ, đa phương hoá, đa dạng hoá; chủ động và tích cực hội nhập quốc tế toàn diện, sâu rộng, có hiệu quả; giữ vững môi trường hoà bình, ổn định, không ngừng nâng cao vị thế, uy tín quốc tế của Việt Nam.

(9) Thực hành và phát huy rộng rãi dân chủ xã hội chủ nghĩa, quyền làm chủ và vai trò tự quản của nhân dân; phát huy sức mạnh đại đoàn kết toàn dân tộc; củng cố, nâng cao niềm tin của nhân dân, tăng cường đồng thuận xã hội; tiếp tục đổi mới tổ chức, nội dung, phương thức hoạt động của Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội.

(10) Xây dựng và hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa trong sạch, vững mạnh, tinh gọn, hoạt động hiệu lực, hiệu quả, vì nhân dân phục vụ và vì sự phát triển của đất nước. Tăng cường công khai, minh bạch, trách nhiệm giải trình; kiểm soát quyền lực gắn với siết chặt kỷ cương, kỷ luật trong hoạt động của Nhà nước và của cán bộ, công chức, viên chức. Tiếp tục đẩy mạnh đấu tranh phòng, chống tham nhũng, lãng phí, quan liêu, tội phạm và tệ nạn xã hội.

(11) Tiếp tục xây dựng, chỉnh đốn Đảng toàn diện; tăng cường bản chất giai cấp công nhân của Đảng; đổi mới phương thức lãnh đạo, nâng cao năng lực lãnh đạo, cầm quyền của Đảng; xây dựng hệ thống chính trị trong sạch, vững mạnh, tinh gọn, hoạt động hiệu lực, hiệu quả; xây dựng đội ngũ cán bộ, đảng viên, công chức, viên chức, nhất là cán bộ cấp chiến lược, người đứng đầu có đủ phẩm chất, năng lực và uy tín, ngang tầm nhiệm vụ; làm tốt công tác tư tưởng, lý luận; chú trọng công tác bảo vệ Đảng, bảo vệ chính trị nội bộ; tăng cường công tác kiểm tra, giám sát, kỷ luật, công tác đấu tranh phòng, chống tham nhũng và công tác dân vận của Đảng.

(12) Tiếp tục nắm vững và xử lý tốt các quan hệ lớn: Quan hệ giữa ổn định, đổi mới và phát triển; giữa đổi mới kinh tế và đổi mới chính trị; giữa tuân theo các quy luật thị trường và bảo đảm định hướng xã hội chủ nghĩa; giữa phát triển lực lượng sản xuất và xây dựng, hoàn thiện từng bước quan hệ sản xuất xã hội chủ nghĩa; giữa Nhà nước, thị trường và xã hội; giữa tăng trưởng kinh tế và phát triển văn hoá, thực hiện tiến bộ, công bằng xã hội, bảo vệ môi trường; giữa xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa; giữa độc lập, tự chủ và hội nhập quốc tế; giữa Đảng lãnh đạo, Nhà nước quản lý và nhân dân làm chủ; giữa thực hành dân chủ và tăng cường pháp chế, bảo đảm kỷ cương xã hội. Trong nhận thức và giải quyết các quan hệ lớn, cần chú trọng hơn đến bảo đảm định hướng xã hội chủ nghĩa; xây dựng, hoàn thiện quan hệ sản xuất tiến bộ, phù hợp; phát triển văn hoá, thực hiện tiến bộ và công bằng xã hội, bảo vệ môi trường; bảo vệ Tổ quốc xã hội chủ nghĩa; giữ vững độc lập, tự chủ và phát huy quyền làm chủ của nhân dân.

Nhiệm vụ trọng tâm trong nhiệm kỳ Đại hội XIII:

(1) Tiếp tục đẩy mạnh xây dựng, chỉnh đốn Đảng, xây dựng Nhà nước pháp quyền xã hội chủ nghĩa và hệ thống chính trị toàn diện, trong sạch, vững mạnh. Đổi mới phương thức lãnh đạo, cầm quyền của Đảng. Xây dựng tổ chức bộ máy của hệ thống chính trị tinh gọn, hoạt động hiệu lực, hiệu quả. Tiếp tục đẩy mạnh đấu tranh phòng, chống quan liêu, tham nhũng, lãng phí, tiêu cực, "lợi ích nhóm", những biểu hiện "tự diễn biến", "tự chuyển hoá" trong nội bộ. Xây dựng đội ngũ đảng viên và cán bộ các cấp, nhất là cấp chiến lược, người đứng đầu đủ phẩm chất, năng lực, uy tín, ngang tầm nhiệm vụ. Củng cố lòng tin, sự gắn bó của nhân dân với Đảng, Nhà nước, chế độ xã hội chủ nghĩa.

(2) Tập trung kiểm soát đại dịch COVID-19, tiêm chủng đại trà vắc-xin COVID-19 cho cộng đồng; phục hồi, phát triển kinh tế - xã hội, đổi mới mạnh mẽ mô hình tăng trưởng, cơ cấu lại nền kinh tế, xây dựng, hoàn thiện đồng bộ thể chế phát triển phù hợp với nền kinh tế thị trường đầy đủ, hiện đại, hội nhập; phát triển đồng bộ và tạo ra sự liên kết giữa các khu vực, các vùng, các thành phần kinh tế, các loại hình sản xuất kinh doanh; có chính sách hỗ trợ hiệu quả doanh nghiệp trong nông nghiệp; đẩy mạnh nghiên cứu, chuyển giao, ứng dụng tiến bộ khoa học và công nghệ, đổi mới sáng tạo, nhất là những thành tựu của cuộc cách mạng công nghiệp lần thứ tư, thực hiện chuyển đổi số quốc gia, phát triển kinh tế số, nâng cao năng suất, chất lượng, hiệu quả, sức cạnh tranh của nền kinh tế; huy động, phân bổ, sử dụng có hiệu quả các nguồn lực, tạo động lực để phát triển kinh tế nhanh và bền vững; hoàn thiện hệ thống pháp luật, nhất là pháp luật về bảo hộ sở hữu trí tuệ và giải quyết các tranh chấp dân sự, khắc phục những điểm nghẽn cản trở sự phát triển của đất nước.

(3) Giữ vững độc lập, tự chủ, tiếp tục nâng cao chất lượng, hiệu quả hoạt động đối ngoại, hội nhập quốc tế; tăng cường tiềm lực quốc phòng, an ninh, xây dựng Quân đội nhân dân, Công an nhân dân cách mạng, chính quy, tinh nhuệ, từng bước hiện đại, một số lực lượng tiến thẳng lên hiện đại, tạo tiền đề vững chắc phấn đấu năm 2030 xây dựng Quân đội nhân dân, Công an nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại; kiên quyết, kiên trì bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ, biển, đảo, vùng trời; giữ vững môi trường hoà bình, ổn định để phát triển đất nước.

(4) Khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc; phát huy giá trị văn hoá, sức mạnh con người Việt Nam trong sự nghiệp xây dựng và bảo vệ Tổ quốc, hội nhập quốc tế; có chính sách cụ thể phát triển văn hoá đồng bào dân tộc thiểu số; thực hiện tốt chính sách xã hội, bảo đảm an ninh xã hội, an ninh con người, tạo chuyển biến mạnh mẽ trong quản lý phát triển xã hội, thực hiện tiến bộ, công bằng xã hội, nâng cao chất lượng cuộc sống và chỉ số hạnh phúc của con người Việt Nam.

(5) Hoàn thiện đồng bộ hệ thống pháp luật, cơ chế, chính sách nhằm phát huy mạnh mẽ dân chủ xã hội chủ nghĩa, quyền làm chủ của nhân dân; đồng thời xây dựng Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam trong sạch, vững mạnh; cải cách tư pháp, tăng cường pháp chế, bảo đảm kỷ cương xã hội, trước hết là sự gương mẫu tuân theo pháp luật, thực hành dân chủ xã hội chủ nghĩa của cấp uỷ, tổ chức đảng, chính quyền, Mặt trận Tổ quốc Việt Nam và tổ chức chính trị - xã hội các cấp, của cán bộ, đảng viên; tăng cường đại đoàn kết toàn dân tộc.

(6) Quản lý chặt chẽ, sử dụng hợp lý, hiệu quả đất đai, tài nguyên; bảo vệ, cải thiện môi trường; chủ động, tích cực triển khai các giải pháp thích ứng với biến đổi khí hậu, thiên tai khắc nghiệt.

Các đột phá chiến lược:

(1) Hoàn thiện đồng bộ thể chế phát triển, trước hết là thể chế phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa. Đổi mới quản trị quốc gia theo hướng hiện đại, cạnh tranh hiệu quả. Tập trung ưu tiên hoàn thiện đồng bộ, có chất lượng và tổ chức thực hiện tốt hệ thống luật pháp, cơ chế, chính sách, tạo lập môi trường đầu tư kinh doanh thuận lợi, lành mạnh, công bằng cho mọi thành phần kinh tế, thúc đẩy đổi mới sáng tạo; huy động, quản lý và sử dụng có hiệu quả mọi nguồn lực cho phát triển, nhất là đất đai, tài chính, hợp tác công - tư; đẩy mạnh phân cấp, phân quyền hợp lý, hiệu quả, đồng thời tăng cường kiểm tra, giám sát, kiểm soát quyền lực bằng hệ thống pháp luật.

(2) Phát triển nguồn nhân lực, nhất là nguồn nhân lực chất lượng cao; ưu tiên phát triển nguồn nhân lực cho công tác lãnh đạo, quản lý và các lĩnh vực then chốt trên cơ sở nâng cao, tạo bước chuyển biến mạnh mẽ, toàn diện, cơ bản về chất lượng giáo dục, đào tạo gắn với cơ chế tuyển dụng, sử dụng, đãi ngộ nhân tài, đẩy mạnh nghiên cứu, chuyển giao, ứng dụng và phát triển mạnh khoa học - công nghệ, đổi mới sáng tạo; khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc, phát huy giá trị văn hoá, sức mạnh con người Việt Nam, tinh thần đoàn kết, tự hào dân tộc trong sự nghiệp xây dựng và bảo vệ Tổ quốc.

(3) Xây dựng hệ thống kết cấu hạ tầng đồng bộ, hiện đại cả về kinh tế và xã hội; ưu tiên phát triển một số công trình trọng điểm quốc gia về giao thông, thích ứng với biến đổi khí hậu; chú trọng phát triển hạ tầng thông tin, viễn thông, tạo nền tảng chuyển đổi số quốc gia, từng bước phát triển kinh tế số, xã hội số.

II- Thông qua Báo cáo chính trị, Chiến lược phát triển kinh tế - xã hội 10 năm 2021 - 2030, phương hướng, nhiệm vụ phát triển kinh tế - xã hội 5 năm 2021 - 2025. Giao Ban Chấp hành Trung ương Đảng khoá XIII căn cứ Báo cáo giải trình của Đoàn Chủ tịch Đại hội, kết quả biểu quyết để hoàn chỉnh và chính thức ban hành.

III- Thông qua Báo cáo tổng kết công tác xây dựng Đảng và thi hành Điều lệ Đảng của Ban Chấp Trung ương khoá XII; đồng ý không sửa đổi, bổ sung Điều lệ Đảng hiện hành. Giao Ban Chấp hành Trung ương Đảng khoá XIII chỉ đạo nghiên cứu, tiếp thu để điều chỉnh thông qua các quy định, hướng dẫn của Trung ương; tăng cường kiểm tra, giám sát, bảo đảm thi hành nghiêm chỉnh, thống nhất Điều lệ trong toàn Đảng.

IV- Thông qua Báo cáo kiểm điểm sự lãnh đạo, chỉ đạo của Ban Chấp hành Trung ương Đảng khoá XII trình Đại hội XIII. Giao Ban Chấp hành Trung ương Đảng khoá XIII tiếp thu ý kiến của Đại hội, phát huy ưu điểm, khắc phục khuyết điểm, nâng cao chất lượng và hiệu quả công tác lãnh đạo, chỉ đạo trong nhiệm kỳ tới.

V- Đại hội đồng ý đồng chí Nguyễn Phú Trọng, Tổng Bí thư Ban Chấp hành Trung ương Đảng khoá XII tái cử Ban Chấp hành Trung ương Đảng, Bộ Chính trị khoá XIII để bầu giữ chức Tổng Bí thư Ban Chấp hành Trung ương Đảng khoá XIII.

VI- Thông qua kết quả bầu Ban Chấp hành Trung ương Đảng khoá XIII gồm 200 đồng chí, trong đó có 180 đồng chí Uỷ viên Trung ương chính thức, 20 đồng chí Uỷ viên Trung ương dự khuyết.

VII- Ban Chấp hành Trung ương Đảng khoá XIII và các cấp uỷ, tổ chức đảng lãnh đạo, chỉ đạo cụ thể hoá và tổ chức thực hiện thắng lợi đường lối và những chủ trương nêu trong các văn kiện Đại hội XIII.

Đại hội kêu gọi toàn Đảng, toàn dân, toàn quân, đồng bào ta ở trong nước và nước ngoài phát huy mạnh mẽ lòng yêu nước, tinh thần dân tộc, dân chủ xã hội chủ nghĩa, sức mạnh đại đoàn kết toàn dân tộc, giá trị văn hoá, khát vọng phát triển đất nước, sức mạnh con người Việt Nam, vai trò của khoa học - công nghệ, đổi mới sáng tạo, thực hiện thắng lợi Nghị quyết Đại hội để đất nước ta phát triển nhanh, bền vững hơn, lập nên kỳ tích phát triển mới vì một nước Việt Nam phồn vinh, hạnh phúc, cùng tiến bước, sánh vai với các cường quốc năm châu, thực hiện thành công tâm nguyện của Chủ tịch Hồ Chí Minh vĩ đại và ước vọng của toàn dân tộc ta.
ĐẠI HỘI ĐẠI BIỂU TOÀN QUỐC LẦN THỨ XIII`,
      en: "The 13th National Congress of the Communist Party of Vietnam was held in Hanoi from January 25, 2021, to February 1, 2021. The Congress discussed and approved important documents, assessed the results of the implementation of the 12th Congress Resolution, and set out the direction and tasks for national development in the next period, with the goal of Vietnam becoming a developed, socialist-oriented country by the middle of the 21st century.",
      ja: `ベトナム共産党第13回全国代表大会は2021年1月25日から2021年2月1日までベトナムの首都ハノイで開催され、越共12回中央執行委員会が提出した書類を検討した後、
死亡する

一、第十二回代表大会決議の執行状況に対する評価結果と、1991年の国家建設要綱が社会主義過渡期に実施された10年（2011年補充と発展）の総合評価、2011-2020年の経済社会発展戦略実施10年、1991年綱要実施30年、改革実施35年などの基本内容に分ける； 発展の方向と方向、今後しばらくの間に国家発展の任務は党の第12回大会中央執行委員会の書類に記載されている。 具体的には:

1.第12回代表大会決議の実行結果

第12回代表大会の任期中、チャンスを掴み、困難と挑戦、特にCOVID-19の疫病による世界的な不況と危機の深刻な影響を克服する； 全党、全人民、全軍一致団結、ともに努力奮闘し、目標と任務の実現に勝利し、多くの非常に重要かつ全面的な成果を収め、多くの際立ったシンボルを作った。 マクロ経済が安定し、インフレが抑制され、成長が高い水準に保たれる； 経済の潜在力、規模、競争力が向上した。 社会、環境などの面で大きな進展を遂げた。 人民の生活は大きく改善された。 党建設、整頓と政治制度建設の仕事は特に重視され、全面的、同調的、効果的に展開される。 検査・監督・規律・防止活動は、腐敗防止・浪費防止・消極的という強烈な転換を遂げ、画期的な歩調をとり、「緑」と「反」を緊密に結びつけ、効果的で、日増しに深まっている。 ベトナムの社会主義法治は絶えず強固にされている。 党と国家、ベトナム祖国戦線と政治社会組織の指導活動が強化され、協調関係は日増しに密接になり、同調している。 政治-社会的安定 国防の安全は国家・民族の独立・主権・統一・領土保全を不可分に強固にし、断固として堅持する。 対外関係と国際への融合はますます深化し、有効である ベトナムの国際舞台での地位と威光が向上した。 特に、2020年、COVID-19の疫病は多くの経済と社会的損失をもたらしたが、全民族の大団結の力、社会主義制度の優位性を発揮し、党の正しい指導の下、政治体系全体の同調と積極的な参加を得て、人民の支持の下、わが国は次第にCOVID-19の疫病を効果的に抑制した。 生産、経営、社会経済活動を段階的に回復する 人民の生活を安定させる； 党、国家、社会主義制度に対する人民の自信を強固にし、強化するのに役立つ わが国人民、わが国人民の本領、意志、優れた伝統を肯定する。

過去五年間の成果はわが党全体であり、全人民と全軍は幾多の任期にわたってたゆまぬ創造的努力の結晶を堅持し、わが国の三十五年の改革が成し遂げた大きな成果と歴史的意義に貢献した。 上記の成果を得た原因は多いが、最も全面的かつ最も重要な原因は、中央執行委員会、政治部、秘書所、各級党委員会が第12回全国代表大会決議を全面的に実行し、同時に実行する際の団結、統一、指導、正確、適時、有効に実践中に現れた多くの問題を解決することである。 各級の政府と政府を厳格に管理、管理する 国会と各級人民議会の内容と働き方の革新に努める； 祖国戦線と政治社会組織の積極的かつ効果的な参加 政治制度全体の調和統一； 幹部チーム、党員の努力 積極的、勤勉、革新的、責任感の強い企業社会と人民大衆 国際的な友人の支持を得た。

得られた成果のほか、体制の整備、成長モデルの革新、経済構造の再編、工業化、現代化のプロセスが遅く、根本的な転換が生じていない； 経済の生産力、品質、効率、競争力は高くない。 教育と訓練、科学技術は経済社会の発展を推進する重要な原動力となっていない。 文化、社会分野には大きな突破がなく、効率が悪い 一部の住民の生活は依然として困難である。 資源管理、環境保護、気候変動に対応する能力が不足している。 国防、安全、外交などの分野にはまだいくつかの限界がある。 全民族団結と社会主義民主主義の大きな力は時に、十分に発揮されないことがある。 フランス国家を樹立する
綱領（2011年補充、発展）を実行し、「2011-2020年経済社会発展十年戦略」を実施した十年は、認識、推論、組織実施の面で重要な進展を遂げ、綱領の大きな価値を肯定し、わが党改革の道が正しく、創造的であることをさらに肯定した。 経済、文化、社会は引き続き発展し、国防、安全、対外的に強化され、人民の物質的・精神的生活は明らかに改善された。 しかし、経済社会の発展は国の潜在力と優位性に見合っておらず、多くの困難と挑戦がある。 「2011-2020年経済社会発展戦略」の中のいくつかの経済と社会発展指標とわが国を基本的に現代化方向の工業国にするための基礎を築くことはまだ既定の目標を達成していない。 革新活動と国際情勢は引き続き多くの集中的に解決すべき理論と実践問題を提出して、国家がより迅速かつ持続的に社会主義の方向に発展し、特に大きな関係を認識し、正確かつ効果的に解決するようにする。

革新事業の35年を振り返り、社会主義過渡期の国家建設綱領の30年（1991年綱領）、わが国の改革の道、社会主義の道、社会主義の道に関する理論は日増しに完備し、次第に実現している。 国家は大きな成果を収め、歴史的意義を持ち、力強く発展し、改革前の数年に比べて全面的に発展した。 規模、経済レベルが向上しました。 人民の生活は物質的にも精神的にも明らかに改善された。 わが国は今日のように国際的地位、実力、実力、威光を持ったことがない。 革新事業35年、1991年に綱領を実施して30年の成果、特に綱領実施10年（2011年補充、発展）は引き続きわが国の社会主義への道がベトナムの実践と時代の発展傾向に符合していることを肯定する。 党の正しい指導はベトナム革命の勝利を決める主要な要素である。 刻々と変化し、複雑で変化に富む世界情勢の中で、党の綱領は依然として思想の旗印、戦闘の旗印であり、全民族の団結力を結集し、「富める者、強国、民主、公正、文明」のベトナムのために奮闘する旗印である。

2.ビジョンと発展方向

今後数年、世界と国内の情勢は有利で、チャンスと困難で、挑戦が交錯している 祖国建設と防衛の事業に対して多くの新しい問題、新しい要求、新しい重い、より複雑な要求を出した； 全党、全人民、全軍団結一心を求める； 絶えず革新的な思考を深める； 高い政治的決意を持っている； 事態の進展を正確かつタイムリーに予測する あらゆる状況に積極的に対応する さらに努力して、全面的かつ同時に革新的な仕事を推進する 国家の各方面の潜在力を絶えず高め、祖国をしっかり守り、得られた発展成果 国を着実に前進させ、急速に発展させ、持続可能な発展する 以下の観点、目標、方向、重点任務を順調に実行することを決心した。

指導的観点:

-マルクス・レーニン主義、ホーチミン思想を堅持し、運用し、創造的に発展させる； 民族独立と社会主義の目標を堅持する 党の革新の道を堅持する 党の建設原則を堅持し、社会主義ベトナム祖国をしっかりと建設し、守る。

-「国連憲章」と国際法の基本原則に基づいて、国家-民族の最高利益、平等、協力、互恵を保障する。 国の快速と持続可能な発展を続ける 各任務を緊密に結合し、かつ同時に遂行し、経済・社会の発展を中心とする。 党の建設が肝心である 文化を発展させることは精神の基礎である 国防の安全を確保することが重要で、常に。

——愛国精神、民族の自らの意志、全民族の団結の力、国家の繁栄と幸福な発展という願いを強く刺激する； 社会主義民主主義を発揮することはベトナムの政治制度と文化の総合的な力であり、人民の力を育成し、人的資源の素質を高め、人材を引きつけ、利用する突破メカニズムを備え、革新・革新を促進し、科学技術、特に第四次産業革命の成果を大いに応用し、ベトナム人民の急速な持続可能な発展のために強大な原動力を創造する。

民族の力と時代の力を結びつける 独立自主、自主的な国際協力の効率化の意志を強調する 内的な力を十分に発揮し、外的な力を獲得するには、その中で内的な資源、特に人的資源が最も重要である。
——党の建設と整頓を強化し、党の労働者階級の本質を発揮し、党の指導力、執政力、戦闘力を高める； 廉潔で全面的に強力な党と政治体系を建設し、洗練され、有効に機能する国を建設する 編成を簡素化し、幹部、公務員チームの素質と再編を高める 幹部・党員チーム、特に戦略級幹部チームを建設するとき、指導者は相応の素質、能力と威光を備え、人民と緊密につながり、国家の建設・発展と祖国防衛事業の成功の決定的な要素である。

全体的な目標:

党の指導力、統治力、戦闘力を高める 廉潔で全面的に強力な党と政治制度を建設する 党、国家、社会主義制度に対する人民の自信を強固にし、強化する 国家の繁栄・幸福・発展という願いを奮い立たせ、民族団結大国の意志と力を発揮させ、時代の力と結びつける。 革新、工業化、現代化を全面的に推進する 祖国を強固に守り、平和で安定した環境を守る； 21世紀中葉までに、わが国は社会主義の道の先進国となった。

具体的な目標:

2025年までに、南方完全解放50周年を記念して、国家統一:発展途上国として、現代工業を重視して、中低所得水準を超えた。

2030年までに、党の創立100周年を祝う:発展途上国で、現代工業、中所得を持っている。

2045年までに、ベトナム民主共和国成立100周年、すなわち現在のベトナム社会主義共和国を記念して、先進、高所得国になる。

2021年から2025年までの経済社会発展の主な指標方向:

経済面:5年間の平均経済成長率は約6.5%から7%である。 2025年までに、一人当たりのGDPは約4です。 七百五。 000元； 成長に対する総合要素生産性（TFP）の寄与率は45）程度に達した； 社会労働生産性の年平均成長率は6.5%以上に達した 都市化率は約45%； 製造業の国内総生産に占める比重は25%以上に達した デジタル経済は国内総生産の20%を占めている。

社会面:2025年までに、農業労働力が社会の総労働力に占める割合は約25%； 訓練を受けた労働力の割合は70%； 2025年までに、都市部の失業率は4%を下回った； 多次元貧困率は毎年1%から1.5%減少する 1万人に10人の医師と30の病床がある； 医療保険参加率は95%； 予想寿命は約74.5歳です 新農村基準は少なくとも80%に達し、そのうち少なくとも10%は新農村基準に達している。

環境面:2025年までに、都市住民の清潔、衛生用水の割合は95-100%、農村は93-95%； 都市生活固形廃棄物の収集と処理率は90%； 工業団地、輸出団地の92%の汚水処理システムは環境基準に達している； 深刻な環境汚染物質の処理率は100%； 森林被覆率は42%で安定している。

2021-2030年の国の方向性:

（一）引き続き思考を大いに革新し、経済、政治、文化、社会、環境持続可能な発展の同調体制を建設し、充実させる。 、困難と困難をタイムリーに解消する； 潜在力と資源を十分に発揮し、国の急速な持続可能な発展のために新たな原動力を創造する。

（二）社会主義市場経済体制を全面的かつ同期的に改善・発展させ、資源の動員・分配・有効利用のために有利な環境を創造し、投資・生産・経営を促進する。 マクロ経済の安定を確保し、成長モデルを大いに革新し、経済構造を再編し、国家の工業化と現代化を推進する； インフラの整備と都市の発展を重視する 農村の経済発展は新農村建設と密接に結びついている 山岳地帯、少数民族地区の農村インフラを優先的に発展させる； 国家のデジタル化変革を推進し、科学技術、革新に基づいてデジタル経済を発展させる； 経済の生産力、品質、効率と競争力を高め、国内外の市場を調和させ、効率的にする。

（三）基礎革新、全面的な教育訓練の面で突破を得て、質の高い人材資源を発展させて、人材を誘致して利用する。 研究を推進し、第四次産業革命の成果を移転し、大いに応用し、社会生活の各分野は、ある分野で地域や世界と比較して、追い越す、追い越すという精神で成長を促すために、潜在力と優位性のある部門、重点分野に重点を置いている。
 
 (四）人を全面的に発展させ、民族的特色を持つ先進的なベトナム文化を建設し、文化を真に国家発展と祖国防衛の内的動力にする。 文化事業の発展への投資を大きくする。 愛国の伝統、民族の誇り、信念、国家の繁栄と幸福の願いを刺激するために、最も有利な環境と社会条件を確立、発展、創造する ベトナム人の才能、知恵、素質は国の最も重要な中心、目標、発展の原動力である。

（五）社会発展を効果的かつ厳格に管理し、社会の安全と人民の安全を保障する。 進歩と社会正義を実現すること 文化環境健康社会道徳文明社会を建設する 医療サービスの質、人口素質の向上を重視し、人口と発展を結びつける 全人民に関心を持ち、労働、就業、収入政策を保障し、社会福祉と社会保障をしっかりと実行する。 人民の物質的・精神的生活を絶えず改善する。

（六）積極的かつ効果的に気候変動に適応し、災害、流行病、管理、開発、合理的、節約、有効かつ持続可能な資源の利用を予防、防止、軽減する； 環境と人民の健康を守ることを第一の目標とする 環境汚染プロジェクトを断固として解消し、居住環境の質を確保し、生物多様性と生態系を保護する； グリーン経済、循環経済、環境にやさしい経済を建設する。

（七）祖国の独立、主権、統一、領土保全を断固として、断固として守る； 党、国家、人民、社会主義制度を守る。 政治的安全を守り、秩序を保障し、社会的安全、人類的安全、経済的安全、ネットワーク的安全、社会秩序と規律を建設する。 戦争、紛争の危険を積極的に予防し、早期、長期； 不利な要素、特に突然変異の危険要素を早期に発見し、適時に処理する； 闘争を強化することは敵対勢力のすべての陰謀と反破壊活動を挫折させた。

（八）独立自主、多角化、多元化の対外路線を引き続き実施する。 積極的、全面的、深く、効果的に国際社会に溶け込む 平和で安定した環境を守り、ベトナムの国際的地位と威光を絶えず高める。

（九）社会主義民主、人民自主権、自主権を広く実行し、発揚する 全民族団結の偉大な力を発揮する； 人民の信頼を固め、強化し、社会的結束力を高める ベトナム祖国戦線と政治社会組織の組織、内容、活動方式を引き続き革新する。

（十）清潔、強大、リーン、効率的に運営される社会主義法治国家を確立し、整備し、人民に奉仕し、国家発展に奉仕する。 公開性、透明性、説明責任の強化 権力のコントロールは国家と役人、公務員、役人の活動における厳格な規律と規律に関係している。 腐敗、浪費、官僚主義、犯罪、社会的弊害を防止する闘争を強化し続ける。

（十一）引き続き党を全面的に建設、整備する； 党の労働者階級の本質を高める 指導方式を革新し、党の指導、統治能力を高める 廉潔、強大、リーン、有効な政治制度を確立する； 幹部、党員、公務員、役人、特に戦略級幹部チームを建設し、相応の素質、能力と信用を備え、任務に見合った指導チーム 思想的な仕事、推理的な仕事をする 党内の防衛活動を重視し、国内の政治秩序を守る； 党の検査、監督、規律、腐敗防止と民事輸送活動を強化する。

（十二）引き続き大きな関係を把握し、処理する）安定、革新、発展の関係； 経済革新と政治革新の関係 市場の法則に従い、社会主義の位置付けを保証する 生産力と建設生産力を発展させ、社会主義生産関係を徐々に充実させる； 国、市場と社会の関係； 経済成長と文化発展、社会正義の実現、環境保護； 社会主義ベトナム祖国の建設と防衛； 独立、自治、国際社会への統合 党の指導、国家管理と人民の当主 民主主義を実行し、法制を強化し、社会規律を確保する。 重大な関係を認識して解決する際には、社会主義の発展方向を保証することをより重視しなければならない 先進的で適切な生産関係を確立、完備する 文化を発展させ、社会の進歩と公平を実現し、環境を保護する 社会主義祖国を守る； 独立自主を堅持し、人民の主権を発揮する。

13大任期の主な任務:

（一）引き続き党建設、整頓を大いに推進し、社会主義法治国家と全面的、廉潔、穏健な政治制度を建設する。 党の指導・統治方式を刷新する。 きめ細かく、効果的に機能する政治体系組織機構を構築する。 反官僚主義、反腐敗、浪費、消極、「集団利益」、「自己発展」、「自己転化」の内的闘争を引き続き推進する。 各級の党員と幹部陣、特に戦略級の隊長を建設し、相応の素質、能力、威光と任務レベルを備えている。 党、国家、社会主義制度に対する人民の信頼と依存を固める。

 (二）COVID-19の流行を集中的にコントロールし、コミュニティにCOVID-19ワクチンを接種する； 経済社会を回復・発展させ、成長モデルを大いに革新し、経済構造を再編し、十分かつ現代的で、市場経済に溶け込むのに適した発展体制を確立・整備する。 地域、地域、経済構成部分、商業生産タイプ間のつながりを同時に発展させ、確立する 農業企業の利益を支える政策を制定する 科学技術の進歩、革新・革新、特に第四次産業革命の成果を研究、譲渡、応用し、国家のデジタル化モデルチェンジを実現し、デジタル経済を発展させ、経済の生産力、品質、利益、競争力を高める； 資源を動員、分配、有効に利用し、経済の急速な持続可能な発展に原動力を創造する； 法律体系、特に知的財産権の保護と民事紛争の解決に関する法律を整備し、国家の発展を阻害する障害を克服する。

（三）独立自主を堅持し、引き続き対外活動の質と利益を高め、国際に溶け込む； 国防・安全の潜在力を強化し、正規化・精鋭化・逐次現代化の人民軍隊を建設し、一部の力は現代化に直行し、2030年に正規化・精鋭化・現代化の人民軍隊・革命化の人民警察を建設するための確固たる前提を築く； 独立、主権、統一、領土保全を断固として堅持する； 平和で安定した環境を維持し、国家の発展を促進する。

（四）国の発展・繁栄、幸福への願いを刺激する 祖国の建設と防衛、国際事業への融合においてベトナム人の文化的価値と力を発揮する 少数民族同胞文化を発展させる具体的な政策がある 社会政策をしっかりと実施し、社会の安全と人民の安全を保障し、社会の発展を管理し、社会の進歩と公正を実現し、ベトナム人民の生活の質と幸福指数を高める面で強力な変革を実現する。

（五）法律、仕組み、政策体系を同時に充実させ、社会主義民主、人民自主権を大いに発展させる。 同時にクリーンで強力なベトナム社会主義法治国家を建設する； 司法を改革し、法律制度を強化し、社会規律を確保するには、まず法律を遵守し、ベトナムの各級委員会、党組織、政府、祖国戦線と各級の政治社会組織、幹部と党員を実践する社会主義民主の模範である。 全民族の団結を強める。

（六）厳格な管理、合理的な利用、土地、資源の有効利用； 環境の保護と改善 気候変動と極端な自然災害に対応する措置を積極的に展開する。

戦略的ブレークスルー:

（一）同調発展体制の整備は、まず社会主義市場経済体制の発展である。 近代化、効果的な競争の方向に向かって国家統治を改革する。 同調、品質、組織的に法律、メカニズム、政策体系を整備し、すべての経済構成部分に便利、健康、公平な投資環境を創造し、革新を促進する すべての資源を動員、管理、有効に活用して発展を促進し、特に土地、財政、公私協力 分権、合理的、有効な分権を推進し、法制を通じて権力の検査、監督、コントロールを強化する。

（二）人的資源、特に質の高い人的資源の開発； 先進的な基礎の上で指導、管理と肝心な分野の人的資源を優先的に発展させ、教育の質、訓練と採用、使用と人材待遇のメカニズムを組み合わせた全面的な基礎の上で強力な転換を実現し、研究、移転、応用と科学技術革新を大いに発展させる； 国の繁栄、幸福への願いを呼び起こし、祖国の建設と防衛事業においてベトナムの文化的価値、人力、団結精神、民族的誇りを発揮させる。

（三）経済と社会の同調、現代化のインフラ体系を確立する； いくつかの交通輸送国の重点工事を優先的に発展させ、気候変動に適応する 情報通信インフラの発展を重視し、国のデジタル化変革の基礎を築き、デジタル経済とデジタル社会を徐々に発展させる。

政治報告、2021-2030年経済社会発展戦略、2021-2025年経済社会発展方向と任務を通じて。 第13回党中央執行委員会は大会議長団の報告に基づき、採決結果が完成し、正式に公布された。

三、党の建設作業を通じて報告書と十二期中央委員会の党規約の執行状況をまとめる； 現行党規約を改正・補足しないことに同意する。 第十三回党中央執行委員会に指導研究、受け入れ、中央の規定、指示により調整を依頼する 検査・監督を強化し、厳格な執行を確保し、全党の定款を統一する。

四、第十二回党中央執行委員会を通じて第十三回代表大会に提出された指導と指導検査報告書。 第13期党中央執行委員会は大会の意見を聞き、優位性を発揮し、不足を補い、次期任期の指導と指導の質と有効性を高める。

五、大会は第十二期党中央執行委員会総書記阮富仲同志が再び第十三期党中央執行委員会と政治部を第十三期党中央執行委員会総書記として選出することに同意した。

六、党の十三期中央執行委員会選挙結果を通じて、200名の同志から構成され、その中に180名の正式中央委員同志、20名の候補中央委員同志がいる。

第七に、第十三回党中央執行委員会と各級委員会は、党の指導を組織し、第十三回代表大会文書に提出された方針と主張を具体的に指導し、組織して勝利して実施する。

大会は全党、全人民、全軍、国内外の同胞に愛国主義、民族精神、社会主義民主、全民族団結の力、文化的価値、国家発展の願い、ベトナム人民の力、科学技術、革新と創造の役割を大いに発揚するよう呼びかけた。 大会決議を勝利のうちに実施し、わが国をより速く、より持続可能に発展させ、繁栄、幸福、共に進歩するベトナムのために新たな発展の奇跡を起こし、五州強国と肩を並べてホーチミン主席の偉大な願いと全民族の願いを実現した。
第13回全国人民代表大会`,
    },
  },
  {
    id: 4,
    title: {
      vi: "Các chính sách hỗ trợ rất quan trọng để quyết liệt phục hồi tăng trưởng",
      en: "Support policies are very important to drastically restore growth",
      ja: "サポートポリシーは、成長を断固として回復するために重要です",
    },
    desc: {
      vi: "(Chinhphu.vn) - Chủ tịch nước Nguyễn Xuân Phúc nhận định, việc phấn đấu quyết liệt để phục hồi, tăng trưởng, hỗ trợ phát triển rất quan trọng. Chính vì thế, có chính sách hỗ trợ, phát triển là điều rất cần thiết trong lúc này.",
      en: "(Chinhphu.vn) - President Nguyen Xuan Phuc affirmed that striving drastically to recover, grow, and support development is very important. Therefore, having policies to support and develop is very necessary at this time.",
      ja: "(Chinhphu.vn) - ルアン春福国家主席は、回復、成長、発展を支援するための厳しい努力が非常に重要であるため、政策支援があり、発展は現在非常に必要であると述べた。",
    },
    date: "04/01/2022 18:40",
    img: "https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/tranthitiep/2022_01_04/IMG_4657%20(1).JPG",
    source: "baochinhphu.vn",
    url: "https://baochinhphu.vn/cac-chinh-sach-ho-tro-rat-quan-trong-de-quyet-liet-phuc-hoi-tang-truong-10222010418400393.htm",
    content: {
      vi: `Chiều 4/1, tại Kỳ họp bất thường lần thứ nhất, Quốc hội khoá XV, các đại biểu Quốc hội thảo luận ở tổ dự thảo Nghị quyết về chính sách tài khóa, tiền tệ hỗ trợ triển khai Chương trình phục hồi và phát triển kinh tế-xã hội.

Trên cơ sở phân tích ảnh hưởng tiêu cực của dịch bệnh COVID-19 trong 2 năm qua đến người dân, doanh nghiệp và nền kinh tế, Ủy viên Bộ Chính trị, Chủ tịch nước Nguyễn Xuân Phúc nhận định, việc phấn đấu quyết liệt để phục hồi, tăng trưởng, hỗ trợ phát triển rất quan trọng. Chính vì thế, có chính sách hỗ trợ, phát triển là điều rất cần thiết trong lúc này.

Chủ tịch nước đánh giá cao Tờ trình của Chính phủ về chương trình phục hồi và phát triển kinh tế-xã hội. Tờ trình không chỉ đề ra mục tiêu, giải pháp mà còn có phương án huy động nguồn lực thực hiện hỗ trợ. Nêu dẫn chứng nhiều quốc gia đã tăng chi ngân sách để hỗ trợ phục hồi kinh tế, Chủ tịch nước cho rằng phải chấp nhận tăng nợ công, thâm hụt ngân sách tăng trong tầm kiểm soát. “Không cách nào khác, phải bơm tiền ra nền kinh tế, giải quyết việc làm cho người lao động, phục vụ tăng trưởng”, Chủ tịch nước Nguyễn Xuân Phúc nêu rõ.

Nhận định “cầu” của nền kinh tế còn yếu, Chủ tịch nước cho rằng cần tăng tổng “cầu”, nhất là tại những lĩnh vực bị ảnh hưởng bởi dịch bệnh, những đối tượng gặp khó khăn cần được hỗ trợ như người nghèo, công nhân. Theo Chủ tịch nước, việc hỗ trợ tài khóa và tiền tệ để phát triển trong lúc khó khăn này cần thiết nhưng nền tảng là phải giữ kinh tế vĩ mô, nhất là chỉ tiêu lạm phát.

Chủ tịch nước cũng cho rằng việc hỗ trợ cho người lao động và các khu vực bị ảnh hưởng cần khẩn trương, quyết liệt thực hiện để đến được tay người dân, doanh nghiệp, tiến hành tháo gỡ ngay những vướng mắc trong quá trình thực hiện. Đồng thời cần thiết kế lại cơ chế khuyến khích và thủ tục tiếp nhận gói hỗ trợ tài khóa, tiền tệ, tín dụng cho doanh nghiệp, người dân, làm sao họ tiếp cận một cách nhanh nhất, thuận tiện nhất, chống tham ô, lãng phí tốt nhất.

Chủ tịch nước Nguyễn Xuân Phúc yêu cầu trong quá trình thực hiện gói tài khóa, tiền tệ phát triển kinh tế phải nâng cao sức chống chịu của nền kinh tế, vừa có mục tiêu tăng trưởng bảo đảm chất lượng, năng suất lao động, áp dụng những giải pháp chuyển đổi số sử dụng công nghệ tốt hơn, mạnh hơn, đặc biệt là vấn đề lao động, việc làm, đào tạo nghề phải được giải quyết tổng thể, cụ thể.

Chủ tịch nước cũng đề nghị bổ sung nhóm giải pháp tăng hiệu quả sử dụng ngân sách Nhà nước, bảo đảm thu ngân sách Nhà nước bền vững hơn; tăng tính minh bạch, công bằng, tăng vai trò điều tiết công cụ thuế. “Cần có một hệ thống giải pháp chứ không phải chỉ tung tiền ra mà không có biện pháp quản lý sẽ gây ra hậu quả nghiêm trọng trong thực hiện chính sách tài khóa, tiền tệ”.

Cùng thảo luận về nội dung này, Đại biểu Nguyễn Thị Mai Thoa (đoàn Hải Dương) cho rằng, trong thời điểm này, Chính phủ dành một phần lớn ngân sách hỗ trợ phục hồi kinh tế, đầu tư cho phát triển cơ sở hạ tầng là cần thiết và quan trọng. Chính sách này sẽ tạo ra động lực cho tăng trưởng trong giai đoạn dài tiếp theo.

Về chính sách hỗ trợ gián tiếp thông qua hỗ trợ về lãi suất cho các ngân hàng thương mại, Đại biểu kiến nghị, cần phải tiến hành rà soát để xác định chính xác mức độ cần hỗ trợ của các doanh nghiệp để có những chính sách phù hợp, hiệu quả.

Tờ trình của Chính phủ cũng đề nghị hỗ trợ tiền thuê nhà cho người lao động. Đại biểu cho rằng, khoản tiền này rất cần thiết, sẽ hỗ trợ trực tiếp cho người dân để tháo gỡ những khó khăn trước mắt và một phần khuyến khích sản xuất kinh doanh. Tuy nhiên, Đại biểu cũng đề nghị cân nhắc về tính hiệu quả, bởi khoản tiền hỗ trợ của Nhà nước nếu đặt trong tổng số cần hỗ trợ thì rất lớn, nhưng khi phân chia cho người dân thì mỗi người chỉ được hưởng một khoản rất khiêm tốn. “Nên dành một khoản xứng đáng để đầu tư giải quyết việc làm cho người lao động sẽ có tác động lâu dài hơn, hiệu quả lớn hơn”, đại biểu Nguyễn Thị Mai Thoa nói.

Cùng quan điểm, đại biểu Trần Văn Lâm (Bắc Giang) cho rằng, chính sách tài khóa, tiền tệ hỗ trợ triển khai Chương trình phục hồi và phát triển kinh tế-xã hội có nhiều biện pháp trọng tâm, phù hợp với bối cảnh tình hình đất nước và thế giới. Gói hỗ trợ tập trung chính vào đầu tư công. Các nguồn lực tung ra vừa giải quyết vấn đề kích cầu thông qua đầu tư công đồng thời tạo sự tăng trưởng trong thời gian tới. Nếu tổ chức thực hiện tốt chắc chắn sẽ tạo ra xung lực lớn, thúc đẩy tăng trưởng kinh tế, thực hiện mục tiêu phát triển kinh tế-xã hội năm 2022 và cả giai đoạn 2021-2025.

Tuy nhiên, đại biểu đoàn Bắc Giang cũng bày tỏ quan ngại và đề nghị lưu ý các yếu tố cân đối vĩ mô, nợ công, nghĩa vụ trả nợ, lạm phát. Đồng thời, lo ngại có thể xuất hiện các tình trạng đầu cơ, bong bóng tài chính, bong bóng bất động sản…

Bộ trưởng Bộ Tài chính Hồ Đức Phớc cho hay, thời gian tới, muốn kinh tế vực dậy, cần thúc đẩy mạnh mẽ tăng trưởng, cần tạo ra cầu cho nền kinh tế. Do đó, Chính phủ trình Quốc hội gói chính sách tài khóa 291.000 tỷ đồng.

Trong đó có giảm thuế 64.000 tỷ đồng, gấp 3 lần mức giảm thuế của năm ngoái (năm 2021 chỉ giảm 21.500 tỷ đồng), đặc biệt trong đó giảm 2% thuế GTGT, hỗ trợ doanh nghiệp bứt phá phát triển… Đồng thời, chi hỗ trợ thuê nhà cho người lao động là 6.600 tỷ đồng; chi hỗ trợ doanh nghiệp bằng cách giảm thuế và bảo lãnh cho ngân hàng chính sách xã hội để hỗ trợ giải quyết việc làm, cho học sinh sinh viên vay, phát triển miền núi…

Bộ trưởng Hồ Đức Phớc nhấn mạnh, việc huy động nguồn lực cũng đã có báo cáo các cấp có thẩm quyền. Để việc huy động nguồn lực linh hoạt nhất, bền vững nhất hỗ trợ phục hồi phát triển kinh tế; để gói kích cầu nói riêng và giải quyết nút thắt phát triển kinh tế xã hội nói chung cần giảm bớt khâu trung gian, thủ tục đầu tư…

Chủ nhiệm Uỷ ban Tài chính Ngân sách của Quốc hội Nguyễn Phú Cường cho rằng, kinh tế Việt Nam như “cơ thể chuẩn bị hết bệnh cần thuốc phục hồi”. “Sức khỏe” doanh nghiệp, người dân kiệt quệ sau đại dịch, do đó gói phục hồi kinh nếu được ban hành sớm sẽ phục vụ tốt cho quá trình khôi phục nền kinh tế.

Theo ông Cường, Chính phủ đề xuất gói này bao gồm chính sách tài khoá và tiền tệ, trong đó, hỗ trợ tài khoá gồm kích cầu và cả kích cung với quy mô 290.000 tỷ đồng, trong đó giảm phí, lệ phí 64.000 tỷ đồng. Chủ nhiệm Uỷ ban Tài chính-Ngân sách cho rằng việc giảm các loại phí, lệ phí sẽ giúp doanh nghiệp có điều kiện phát triển sản xuất.

Bên cạnh đó, chi trực tiếp từ ngân sách Nhà nước là 176.000 tỷ đồng, chỉ sử dụng để chi đầu tư phát triển: Về phòng, chống dịch, đầu tư xây mới, cải tạo, nâng cấp, hiện đại hóa hệ thống y tế cơ sở, y tế dự phòng, trung tâm kiểm soát bệnh tật cấp vùng, viện và bệnh viện cấp trung ương là 14.000 tỷ đồng; về an sinh xã hội, lao động, việc làm hơn 8.000 tỷ đồng; hỗ trợ doanh nghiệp, hợp tác xã, hộ kinh doanh; về đầu tư phát triển kết cấu hạ tầng (trong đó đáng chú ý là hạ tầng giao thông là 103.164 tỷ đồng).

“Kích cầu đầu tư hiệu quả và an toàn hơn kích cầu tiêu dùng. Nếu chỉ đạo kiên quyết như chống dịch thì hiệu quả giải ngân sẽ rất cao”, ông Cường nhấn mạnh.

Hải Liên`,
      en: "At the extraordinary session of the National Assembly, President Nguyen Xuan Phuc emphasized the importance of support policies for post-pandemic economic recovery. He stated that it is necessary to accept an increase in public debt and budget deficit within a controllable range to inject money into the economy, create jobs, and promote growth, while maintaining macroeconomic stability.",
      ja: `1月4日午後、第15回国会第1回特別会議で、国会代表はグループで財政政策、貨幣支援による経済社会の回復と発展計画の実施に関する決議案を討論した

過去2年間のCOVID-19流行が人民、企業、経済に及ぼすマイナスの影響を分析した上で、政治局委員、国家主席の阮春福は、回復、成長、発展を支援するための厳しい努力が非常に重要であるため、政策支援があり、発展は現在非常に必要であると述べた。

国家元首は経済と社会の回復と発展に関する政府のアジェンダを称賛する。 この議題は目標と解決案だけでなく、資源を動員してサポートを実施する案も提出した。 多くの国が経済回復を支援するために予算支出を増やしている証拠を引用すると、大統領は公共債務の増加、予算赤字の増加を受け入れなければならないと考えている。「他に方法はない。経済に資金を注入し、労働者の雇用問題を解決し、成長に奉仕しなければならない」と阮春福国家主席は述べた。

経済の「天井」は依然として疲弊しているため、国の大統領は総「天井」を増やす必要があると考えている。特に疫病の影響を受ける分野では、助けを必要とする対象、例えば貧しい人々。労働者は大統領によると、財政と貨幣支援はこの困難な時期に発展する必要があるが、基礎はマクロ経済、特にインフレ指標を維持することでなければならない

大統領はまた、労働者と影響を受ける地域への支援は緊急かつ断固として行い、人民、企業の手に届き、直ちに実施中の障害を取り除くとともに、企業と人民の財政、貨幣、信用の包括的な支援を受けて、いかに最速、最も便利で、最も効果的な腐敗防止、無駄な方法で行うか、インセンティブの仕組みと手順を再設計する必要があると考えている。

グエン・チュンボク国家主席は、財政包括計画を実施する過程で、経済を発展させる通貨は経済の弾力性を高め、品質と労働生産性の成長目標を保証すると同時に、より良く、より強い技術デジタル転換ソリューション、特に労働、就職と職業訓練問題を全面的、具体的に解決しなければならないと要求した。

大統領はまた、国家予算の使用効率を高め、より持続可能な国家予算収入を確保するために、ソリューショングループを増やすことを提案した 透明性、公平性を高め、税収管理ツールの役割を発揮する。 「管理措置なしに資金を投じるのではなく、システムのソリューションが必要であり、財政と通貨政策の実施に重大な結果をもたらす。

この内容を議論する際、代表のNguyen Thị Mai Thoa（海洋フォーラム）は、この時、政府は大部分の予算を景気回復を支援するために使用し、投資インフラの発展が必要で重要であるという政策は次の長期段階の成長に原動力を提供すると考えている。

商業銀行に金利サポートを提供する間接的なサポート政策について、代表者たちは、適切かつ効果的な政策を策定するために、企業がサポートする必要がある程度を正確に判断するために審査を行う必要があると提案した。

政府のアジェンダは労働者に賃貸手当を提供することも提案している。 代表たちは、このお金は非常に必要であり、人民を直接支援して目の前の困難と部分的に生産経営を奨励するが、代表たちは効率を考慮することも提案している。なぜなら、国の援助資金は必要な援助総額に入れば莫大であるが、人民に分配するとき、誰もが非常に謙虚な補助金しか得られないからである。「労働者の就業問題を解決するために十分な資金を投入すべきであり、これはより長期的な影響を及ぼし、より効果的である。」代表のNguyenthmaithooong

それと同時に、陳文林（北江）代表は、財政政策、貨幣支援による経済社会の回復と発展計画の実施には多くの重点措置があり、国家と世界情勢に符合する背景支援計画は主に公共投資に集中していると考えている。 解放された資源は公共投資による刺激の問題を解決し、将来の成長が組織の運営が良好であれば、大きな原動力を生み出し、経済成長を促進し、2022年と2021-2025年の段階で経済社会の発展目標を達成することを創造した。

しかし、北江選手団も懸念を表明し、マクロバランス要素、公共債務、債務返済の義務とインフレと同時に、投機、金融バブル、不動産バブルなどの可能性を心配することを提案した。

胡錦濤財政部長は、今後しばらくの間、景気回復のためには、成長を大いに推進する必要があり、経済の橋渡しをする必要があると述べた。 そのため、政府は国会に291財政政策バッグを提出した。 1兆の盾。

その中には64項目の減税が含まれています。 兆盾は、昨年の減税の3倍（2021年は21）しか減っていない。 500億ベトナムシールド)、特にGTGT税を2%削減し、企業の発展をサポートする......と同時に、労働者の賃貸をサポートする支出は66千億シールドである 財政部は減税と社会政策銀行保証などの方式で企業が就職、学生ローン、山岳地帯の発展などの問題を解決することを支援する。

胡徳部長は、資源異動も主管部門に報告すると強調した。 最も柔軟で持続可能な資源を動員し、経済回復・発展を支援する； 特に社会経済発展のボトルネックを梱包し、解決するためには、中間段階、投資手続きなどを減らしなければならない。

ベトナム議会財政予算委員会のグエン富強議長は、ベトナム経済は「病気が回復すべき体を準備する」と考えている。 企業は「健康」で、民衆は疫病が勃発した後、疲れ果てているので、景気回復案が早く出されれば、景気回復のプロセスに奉仕する。

Cang氏によると、政府が提案したこの案には財政と通貨政策が含まれており、その中に財政支援には290規模の衝撃と衝撃が含まれている。 兆盾、その中で費用を減らして、料金は64です。 1兆の盾。 財政予算委員会議長は、様々な費用と費用を下げることが企業の条件付き生産発展につながると考えている。

また、国家予算の直接支出は176です。 兆越盾は、投資発展にのみ使用されます。予防、防疫、投資の新設、改修、アップグレード、基礎衛生システムの現代化、予防医療、地域疾病管理センター、病院と中央病院は14です。 兆シールド； 社会保障、労働、就職など8つの方面。 兆シールド； 企業、協同組合、起業家をサポートする インフラ開発投資について（その中で特筆すべきは交通インフラ103。 1640億)。

「投資需要は消費需要よりも効率的で安全である。 指導がしっかりと防疫として行われていれば、買い戻しの効果は非常に高くなり、「強さんは強調します

ヘイレン`,
    },
  },
  {
    id: 5,
    title: {
      vi: "Văn hóa là sức mạnh mềm, là 'năng lượng gốc' vô tận của dân tộc Việt Nam",
      en: "Culture is the soft power, the endless 'root energy' of the Vietnamese nation",
      ja: "文化はソフトパワーであり、ベトナム民族の無限の「原子力」である",
    },
    desc: {
      vi: "(Chinhphu.vn) - 80 năm xây dựng và phát triển, dưới ánh sáng soi đường của Chủ nghĩa Mác - Lê nin, tư tưởng Hồ Chí Minh, sự lãnh đạo sáng suốt của Đảng và sự quản lý, điều hành của Nhà nước, Ngành Văn hóa, Thể thao và Du lịch đã đồng hành cùng dân tộc vượt qua mọi chặng đường lịch sử.",
      en: "(Chinhphu.vn) - 80 years of construction and development, under the guiding light of Marxism-Leninism, Ho Chi Minh's thought, the wise leadership of the Party and the management of the State, the Culture, Sports and Tourism sector has accompanied the nation through all historical stages.",
      ja: "(Chinhphu.vn) - 80年の建設と発展は、馬レーニン主義、ホーチミン思想の指導のもと、党の賢明な指導と国家、文化、スポーツと旅行の管理と民族が歴史のすべてのステップを歩んだ。",
    },
    date: "23/08/2025 13:54",
    img: "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2025/8/23/z6936157601335992915d00766325838610554da6d0c8a-17559312207721721037868.jpg",
    source: "baochinhphu.vn",
    url: "https://baochinhphu.vn/van-hoa-la-suc-manh-mem-la-nang-luong-goc-vo-tan-cua-dan-toc-viet-nam-102250823134859831.htm",
    content: {
      vi: `Sáng 23/8, Bộ Văn hóa, Thể thao và Du lịch long trọng tổ chức Lễ kỷ niệm 80 năm Ngày truyền thống Ngành Văn hóa (28/8/1945 - 28/8/2025) tại Nhà hát Lớn Hà Nội.

Nhân dịp này, ngành văn hóa vinh dự đón đồng chí Tô Lâm, Tổng Bí thư Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam dự và chỉ đạo; đồng chí Thủ tướng Chính phủ Phạm Minh Chính cùng các đồng chí Lãnh đạo Chính phủ, Quốc hội, Mặt trận Tổ quốc Việt Nam; lãnh đạo các ban, bộ, ngành, đoàn thể Trung ương và thành phố Hà Nội; các đại sứ, đại diện của một số quốc gia; lãnh đạo Bộ Văn hóa, Thể thao và Du lịch qua các thời kỳ; Giám đốc và nguyên Giám đốc các Sở Văn hóa, Thể thao và Du lịch, Sở Văn hóa và Thể thao, Sở Du lịch các tỉnh, thành phố; 80 gương điển hình tiên tiến trong lĩnh vực văn hóa, thông tin, thể thao và du lịch; văn nghệ sĩ, nhà khoa học, trí thức, vận động viên tiêu biểu; tập thể lãnh đạo các cơ quan, đơn vị thuộc Bộ cùng đông đảo nhà báo, phóng viên, biên tập viên các cơ quan thông tấn báo chí.

Lịch sử đã khắc ghi khi 80 năm trước, ngày 28/8/1945, Chủ tịch Hồ Chí Minh đã ký Tuyên cáo thành lập Chính phủ lâm thời gồm 13 Bộ, trong đó có Bộ Thông tin, Tuyên truyền, tiền thân của Bộ Văn hóa, Thể thao và Du lịch hiện nay.

Từ khi có Đảng lãnh đạo, văn hóa được xác định là một mặt trận trọng yếu. Đề cương Văn hóa Việt Nam năm 1943 - bản tuyên ngôn đầu tiên của Đảng về văn hóa đã xác định ba nguyên tắc cơ bản: "Dân tộc - Khoa học - Đại chúng" trong xây dựng, phát triển văn hóa; đến Nghị quyết các kỳ Đại hội, Nghị quyết chuyên đề của Ban Chấp hành Trung ương, Bộ Chính trị đều khẳng định văn hóa là hồn cốt dân tộc, là động lực của sự phát triển, là "sức mạnh mềm" của quốc gia. Nhờ vào đường lối đúng đắn, sáng tạo đó, hành trình 80 năm qua ngành Văn hóa đã làm nên một trường ca với nhiều cung bậc cảm xúc: Văn hóa đã nuôi dưỡng tâm hồn và bản sắc, từ khúc nhạc hào hùng của nền văn hóa kháng chiến, đến những vũ điệu tự tin của thể thao hội nhập với những khát vọng vươn cao, với những bước chân du lịch đưa đất nước ra thế giới và báo chí trở thành mạch dẫn tri thức kết nối niềm tin giữa Đảng với Nhân dân.

Phát biểu tại chương trình, Bộ trưởng Bộ Văn hóa, Thể thao và Du lịch nhấn mạnh, nhìn tổng thể về thành tựu của ngành VHTTDL, đó không chỉ là niềm tự hào mà còn là điểm tựa tinh thần vững chắc để xây dựng một nền văn hóa Việt Nam giàu bản sắc. Soi rọi vào thực tiễn của những năm gần đây, lĩnh vực văn hóa có nhiều chuyển biến tích cực:

Nhận thức về vị trí, vai trò của văn hóa đối với sự phát triển bền vững đất nước ngày càng toàn diện và sâu sắc; văn hóa được hiện diện trong hầu hết các Nghị quyết, Chiến lược, Kế hoạch phát triển kinh tế - xã hội của đất nước.

Văn hóa xây nên dáng hình của dân tộc, định hình hệ giá trị quốc gia, bồi đắp hệ giá trị gia đình, hệ giá trị con người Việt Nam thời kỳ mới

Phát biểu tại Lễ kỷ niệm, Tổng Bí thư Tô Lâm nhấn mạnh, ngay từ khi Đảng mới ra đời, trong khói lửa của Cách mạng và dự cảm về tương lai đất nước, Đảng ta và Chủ tịch Hồ Chí Minh kính yêu đã xác định vị trí đặc biệt của Văn hóa. Đề cương về Văn hóa Việt Nam năm 1943 đã phác họa một tầm nhìn xa, xác lập ba nguyên tắc lớn: dân tộc, khoa học, đại chúng; khẳng định Văn hóa soi đường cho quốc dân đi, Văn hóa là một mặt trận và những người làm Văn hóa là chiến sĩ. Ngay từ buổi đầu của chính quyền nhân dân, ngay trong chiến tranh chống Pháp, chống Mỹ, Đảng và Bác đã cử, đã gửi hàng trăm thanh niên trẻ ra nước ngoài học tập về Văn hóa, Nghệ thuật, Thể thao...

Từ đó đến nay, xuyên suốt các kỳ Đại hội, các Nghị quyết, Kết luận, Chỉ thị của Trung ương, của Bộ Chính trị, Ban Bí thư đều nhấn mạnh: Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu, vừa là động lực của sự phát triển; văn hóa là sức mạnh mềm, là “năng lượng gốc” vô tận của dân tộc Việt Nam. 

Theo Tổng Bí thư, hiện nay, chúng ta đang xây dựng nền Văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc; đề cao vai trò của con người là trung tâm, chủ thể, là mục tiêu, động lực của phát triển; đang tiến tới phát triển công nghiệp văn hóa, xây dựng thị trường văn hóa lành mạnh; xây dựng môi trường văn hóa, đời sống văn hóa; phát huy hệ giá trị quốc gia, hệ giá trị gia đình, hệ giá trị con người Việt Nam; phòng, chống suy thoái, “tự diễn biến”, “tự chuyển hóa” trên lĩnh vực tư tưởng-văn hóa. Cùng với đó, Đảng luôn đặt trọng tâm xây dựng “Văn hóa trong Đảng”, văn hóa trong hệ thống chính trị; xây dựng phong cách nêu gương, liêm chính, tận tụy vì dân; đề cao văn hóa pháp quyền, văn hóa công vụ, văn hóa doanh nghiệp, văn hóa trong kinh doanh.

Tổng Bí thư chỉ rõ, đó là căn cốt để lan tỏa ra xã hội, củng cố niềm tin, tạo đồng thuận, khơi dậy khát vọng phát triển phồn vinh, hạnh phúc. Để Văn hóa phải luôn gắn với đời sống chính trị, kinh tế, xã hội; văn hóa phải thẩm thấu vào từng quyết sách, từng công trình, từng con đường, cây cầu, từng cánh đồng, khu công nghiệp, đô thị, làng quê; hiện diện trong nếp nghĩ, cách làm, trong lối ứng xử và phẩm chất của con người Việt Nam. Văn hóa xây nên dáng hình của dân tộc, định hình hệ giá trị quốc gia, bồi đắp hệ giá trị gia đình, hệ giá trị con người Việt Nam thời kỳ mới: yêu nước, nhân ái, đoàn kết, trung thực, trách nhiệm, sáng tạo, kỷ cương, khát vọng.

Tổng Bí thư nhấn mạnh: Chúng ta mãi mãi khắc ghi những bước chân đầu tiên của các chiến sĩ văn hóa trong cao trào cách mạng, khi mỗi tờ tranh cổ động, mỗi câu hát, mỗi trang báo, mỗi buổi diễn giữa sân đình hay bên bờ ruộng đều biến thành ngọn lửa. Trong Tổng khởi nghĩa giành chính quyền, trong những ngày đầu xây dựng chính quyền cách mạng, chúng ta không thể không ghi ơn những nhà văn hóa lớn đã sáng tác Quốc Kỳ, Quốc Ca, Quốc huy của Nhà nước dân chủ nhân dân; trong kháng chiến chống thực dân, đế quốc, biết bao thế hệ văn nghệ sĩ, cán bộ thông tin, tuyên truyền, cán bộ văn hóa cơ sở đã hóa thân vào nhân dân, mang nhiệt huyết đi khắp núi rừng, đồng bằng, đô thị. Họ lặn lội khắp mọi vùng miền, “mưa dầm, cơm vắt” giữa chiến hào với bộ đội, với dân công hỏa tuyến, với những chiến dịch quân sự, thắp đèn dầu trong hầm dã chiến, gảy đàn bên bếp lửa, viết những vần thơ, bài hát, vẽ những ký họa từ tiền tuyến, nơi mũi tên hòn đạn; họ làm công tác địch vận bằng văn hóa, đánh địch bằng nhạc cụ, ngòi bút... Nhiều đồng chí đã ngã xuống, đã hiến dâng tuổi trẻ và tài năng, để văn hóa trở thành vũ khí sắc bén, để niềm tin lan tỏa, để ý chí quật cường được nhân lên gấp bội.

Trong hòa bình, kiến thiết, phát triển và đổi mới, Văn hóa vẫn là lực lượng xung kích trên mặt trận tư tưởng, tinh thần. Các phong trào “Toàn dân đoàn kết xây dựng đời sống văn hóa”, “Xây dựng nông thôn mới, đô thị văn minh”, xây dựng trường học, cơ quan, doanh nghiệp văn hóa… để góp phần thay đổi diện mạo đời sống. Bao thế hệ cán bộ di sản dầm mưa dãi nắng gìn giữ mái đình, bức hoành phi, từng viên gạch cổ; bao cán bộ thư viện cần mẫn giữa kho sách; bao nghệ sĩ âm thầm tập luyện sau cánh gà sân khấu; bao phóng viên, nghệ sĩ nhiếp ảnh ghi lại những khoảnh khắc tiêu biểu của hơi thở cuộc sống; bao hướng dẫn viên góp những nụ cười cho thương hiệu quốc gia; bao huấn luyện viên, vận động viên đổ mồ hôi và nước mắt để màu cờ sắc áo Việt Nam tung bay trên đấu trường quốc tế.

Đầu tư cho văn hóa là đầu tư cho tương lai, cho “mạch nguồn” sức mạnh dân tộc
Tổng Bí thư cũng lưu ý đến một số bài học được rút ra trong thực tiễn Cách mạng gần một thế kỷ qua.

Thứ nhất, mọi thành tựu Văn hóa đều bắt đầu từ việc kiên định đường lối đúng đắn, tôn trọng quy luật văn hóa và đặt con người ở trung tâm. Khi đường lối đúng, cơ chế phù hợp, thì sức sáng tạo của đội ngũ cán bộ làm công tác văn hóa được giải phóng, sức mạnh của cộng đồng được khơi dậy và bừng sáng.

Thứ hai, bản sắc là gốc, hội nhập là cành. Bản sắc giúp ta đứng vững và trường tồn; hội nhập giúp ta nở hoa kết trái và lan tỏa. Bảo tồn và phát triển bổ sung cho nhau trong một thực thể hữu cơ sống động.

Thứ ba, Văn hóa muốn nở hoa phải có môi trường lành mạnh và nguồn lực tương xứng. Đầu tư cho văn hóa là đầu tư cho tương lai, cho “mạch nguồn” sức mạnh dân tộc.

Thứ tư, Văn hóa chỉ tồn tại vĩnh cửu khi hòa vào đời sống. Mọi chính sách phải hướng tới công chúng, tới cộng đồng, tới từng gia đình, từng khu phố, thôn bản, trường học, cơ quan, doanh nghiệp.

Thứ năm, trong thời đại số, sáng tạo là mạch chủ, đổi mới là phương thức, liên kết là động lực. Kết nối văn hóa với công nghệ, với thị trường, với du lịch, với giáo dục, với đô thị, với nông thôn… giá trị sẽ nhân lên bội phần.

Đất nước ta đang bước vào giai đoạn phát triển mới với mục tiêu trở thành nước phát triển, thu nhập cao theo định hướng xã hội chủ nghĩa. Bối cảnh thế giới biến động nhanh, phức tạp; cuộc Cách mạng công nghiệp lần thứ tư, kinh tế số, kinh tế xanh, kinh tế tuần hoàn, đô thị thông minh… đang định hình những chuẩn mực mới; cạnh tranh chiến lược, bùng nổ thông tin, “đấu tranh trên không gian mạng” diễn ra gay gắt; sự thâm nhập của các sản phẩm văn hóa ngoại lai đa dạng, nhiều chiều.

Văn hóa là sức mạnh mềm, là 'năng lượng gốc' vô tận của dân tộc Việt Nam- Ảnh 4.
Tổng Bí thư Tô Lâm tặng hoa, Bộ trưởng Nguyễn Văn Hùng trao Bằng khen của Bộ trưởng Bộ VHTTDL cho các gương điển hình tiên tiến trong lĩnh vực văn hóa, thông tin, thể thao và du lịch. Ảnh: Nam Nguyễn

10 nhiệm vụ, giải pháp đối với ngành Văn hóa
Trong bối cảnh đó, Văn hóa càng phải đi trước một bước, soi đường, dẫn dắt, bồi đắp bản lĩnh, củng cố niềm tin, hình thành năng lực mềm quốc gia. Trên tinh thần đó, Tổng Bí thư đề nghị toàn ngành Văn hóa tập trung thực hiện tốt một số nhiệm vụ, giải pháp chủ yếu:

Một là, tiếp tục quán triệt sâu sắc và triển khai toàn diện đường lối, quan điểm của Đảng về Văn hóa; đặt Văn hóa ngang tầm với kinh tế, chính trị, xã hội; cụ thể hóa bằng chiến lược, quy hoạch, chương trình, dự án có trọng tâm, trọng điểm; bảo đảm nguồn lực tương xứng, cơ chế đột phá, phân cấp, phân quyền rõ ràng; tăng cường giám sát, đánh giá, kiểm tra.

Hai là, xây dựng môi trường văn hóa lành mạnh từ gia đình, nhà trường, xã hội; đề cao vai trò nêu gương của cán bộ, đảng viên; đẩy mạnh giáo dục đạo đức, lối sống, kỹ năng số, văn hóa ứng xử; phòng, chống bạo lực gia đình, bạo lực học đường; phát triển văn hóa số văn minh, an toàn; xây dựng cộng đồng văn hóa cơ sở giàu bản sắc, sáng, xanh, sạch, đẹp.

Ba là, bồi dưỡng, trọng dụng, tôn vinh đội ngũ trí thức, văn nghệ sĩ, huấn luyện viên, vận động viên, doanh nhân du lịch, người làm công tác văn hóa ở mọi cấp, nhất là cơ sở. Xây dựng cơ chế đặt hàng, trao giải, hỗ trợ sáng tạo, bảo vệ quyền tác giả, các quyền liên quan; nâng cao đời sống vật chất và tinh thần cho lực lượng Văn hóa; khuyến khích tài năng trẻ ; phát hiện, ươm mầm hạt giống sáng tạo từ trường học, câu lạc bộ, thiết chế văn hóa cơ sở.

Bốn là, phát triển công nghiệp văn hóa và kinh tế sáng tạo trở thành trụ cột mới của tăng trưởng; hoàn thiện thể chế thị trường văn hóa, cơ chế tài chính, chính sách thuế, tín dụng, đất đai, đầu tư, dữ liệu; khuyến khích doanh nghiệp văn hóa, khởi nghiệp sáng tạo; phát triển hạ tầng số cho sản xuất, phân phối, tiêu dùng sản phẩm văn hóa; xây dựng cụm, khu công nghiệp sáng tạo, “thung lũng văn hóa” gắn với các đô thị lớn và trung tâm du lịch.

Năm là, bảo tồn, tôn tạo, phát huy di sản gắn với sinh kế cộng đồng và phát triển bền vững. Ứng dụng mạnh mẽ công nghệ số, trí tuệ nhân tạo trong số hóa di sản, trong trưng bày, biểu diễn, giáo dục; xây dựng thiết chế “văn hóa số”, “bảo tàng mở”, “nhà hát di động”, “thư viện số” thân thiện với mọi lứa tuổi; phát triển du lịch di sản có trách nhiệm; nuôi dưỡng “tài sản văn hóa sống” là nghệ nhân, nghệ sĩ dân gian.

Sáu là, tạo bứt phá cho thể thao quần chúng và thể thao thành tích cao. Chú trọng giáo dục thể chất trong trường học; phát triển hệ thống câu lạc bộ, không gian thể thao công cộng; nâng cao năng lực khoa học-y học thể thao; tuyển chọn, huấn luyện vận động viên trẻ theo chuẩn mực hiện đại; mở rộng hợp tác quốc tế; đặt ra mục tiêu cao, bền vững, nhân văn.

Bảy là, tái cấu trúc, nâng cao chất lượng và sức cạnh tranh của du lịch Việt Nam. Phát triển sản phẩm mang bản sắc văn hóa, giàu trải nghiệm; thúc đẩy du lịch thông minh, xanh, sạch, giảm phát thải; kết nối liên vùng, liên ngành; nâng cao chất lượng nguồn nhân lực; siết chặt kỷ cương, chuẩn hóa dịch vụ; xây dựng thương hiệu điểm đến “Việt Nam-vẻ đẹp bất tận, văn hóa tỏa hương”.

Tám là, tăng cường ngoại giao văn hóa, quảng bá hình ảnh quốc gia; chủ động tham gia các mạng lưới sáng tạo quốc tế; tổ chức các sự kiện, liên hoan, festival, tuần văn hóa quy mô khu vực và thế giới; đưa tinh hoa Việt Nam ra thế giới và đưa tinh hoa thế giới về với Việt Nam trên tinh thần hòa bình, hữu nghị, tôn trọng khác biệt, học hỏi lẫn nhau, hòa nhập chứ không hòa tan.

Chín là, đẩy mạnh chuyển đổi số toàn diện trong ngành. Xây dựng cơ sở dữ liệu lớn về di sản, nghệ thuật, thể thao, du lịch; hoàn thiện chuẩn mở, bản đồ số văn hóa; phát triển nền tảng phân phối nội dung số, công cụ bảo vệ bản quyền; ứng dụng phân tích dữ liệu, công nghệ thực tế mở rộng trong bảo tàng, biểu diễn, giáo dục; tăng cường an ninh, an toàn thông tin, đấu tranh chống nội dung độc hại, xuyên tạc.

Mười là, tiếp tục đấu tranh làm thất bại âm mưu “diễn biến hòa bình” trên lĩnh vực tư tưởng, văn hóa; kiên quyết bảo vệ nền tảng tư tưởng của Đảng; xây dựng “lá chắn mềm” là hệ giá trị, niềm tin, chuẩn mực xã hội; nâng cao năng lực truyền thông chính sách; chủ động truyền cảm hứng tốt đẹp, nhân rộng gương người tốt việc tốt.

Văn hóa là sức mạnh mềm, là 'năng lượng gốc' vô tận của dân tộc Việt Nam- Ảnh 5.
Thủ tướng Phạm Minh Chính và Bộ trưởng Nguyễn Văn Hùng tặng hoa, trao Bằng khen của Bộ trưởng Bộ VHTTDL cho các gương điển hình tiên tiến trong lĩnh vực văn hóa, thông tin, thể thao và du lịch. Ảnh: Nam Nguyễn

Văn hóa phải thấm vào mọi quy hoạch, đề án, dự án với tầm nhìn dài hạn và tiêu chuẩn cao
Tổng Bí thư Tô Lâm đề nghị các Cấp ủy, Chính quyền, Mặt trận Tổ quốc và các Đoàn thể chính trị, xã hội tiếp tục quan tâm lãnh đạo, chỉ đạo, tạo điều kiện thuận lợi, huy động nguồn lực xã hội cho phát triển Văn hóa; coi trọng văn hóa trong quy hoạch đô thị và nông thôn; xây dựng thiết chế văn hóa cơ sở đồng bộ, hiệu quả; khuyến khích doanh nghiệp, cộng đồng tham gia. Văn hóa không thể đứng bên lề chính sách phát triển, văn hóa phải thấm vào mọi quy hoạch, đề án, dự án với tầm nhìn dài hạn và tiêu chuẩn cao.

Tổng Bí thư mong đội ngũ trí thức, văn nghệ sĩ, những “kỹ sư tâm hồn” của Nhân dân, tiếp tục bền bỉ, dũng cảm, say mê sáng tạo; lấy cuộc sống làm mạch nguồn, lấy Nhân dân làm chỗ dựa, lấy chân lý, cái đẹp, lẽ phải làm kim chỉ nam; kiên quyết nói không với thương mại hóa tầm thường, giả dối, lai căng, cực đoan; mở đường cho những thể nghiệm mới, tiếp nhận tinh hoa văn hóa nhân loại để làm giàu cho kho tàng văn hóa dân tộc.

Ngành thể thao tiếp tục rèn ý chí, kỷ luật, khát vọng chiến thắng; xem chuẩn mực đạo đức là nền tảng, khoa học, công nghệ là sức mạnh; tôn trọng luật chơi; nuôi dưỡng tài năng từ trường học, gia đình, cộng đồng.

Ngành du lịch bền bỉ với con đường bản sắc, chất lượng, bền vững, thông minh, sáng tạo, đổi mới, hội nhập; coi trải nghiệm của du khách và lợi ích của cộng đồng là trung tâm; lấy văn hóa và thiên nhiên làm “tài sản vô giá”, lấy nụ cười, tâm hồn Việt Nam làm nơi hội tụ những trái tim.

Bên cạnh đó, lớp lớp cán bộ cơ sở, những người “gieo hạt văn hóa” hằng ngày, tiếp tục tận tụy, đổi mới phương pháp, gắn kết cộng đồng; để mỗi nhà văn hóa, thư viện, sân chơi, không gian công cộng thực sự đông vui, hữu ích; để các giá trị tốt đẹp được vun bồi từ những việc nhỏ.

Tổng Bí thư nhấn mạnh, 80 năm, một mốc son để biết ơn, để tự hào và để vươn mình. Tôi tin tưởng sâu sắc rằng, dưới sự lãnh đạo của Đảng, quản lý của Nhà nước, sự vào cuộc của cả hệ thống chính trị, sự đồng lòng, ủng hộ của Nhân dân; với bản lĩnh, tài năng và lòng yêu nghề của đội ngũ những người làm văn hóa, thông tin, thể thao, du lịch; chúng ta sẽ đưa Văn hóa Việt Nam phát triển xứng tầm, để đất nước ta mạnh giàu, để dân tộc ta trường tồn, để mỗi người Việt Nam hạnh phúc, tự tin hòa nhập và tỏa sáng.

Nhân dịp này, Tổng Bí thư Tô Lâm đã trao Huân chương Lao động hạng Nhất cho Bộ VHTTDL và Thủ tướng Chính phủ Phạm Minh Chính trao Huân chương Lao động hạng Nhất cho Bộ trưởng Bộ VHTTDL Nguyễn Văn Hùng. 

Cũng nhân dịp này, Bộ VHTTDL đã tặng bằng khen cho 80 gương điển hình tiên tiến trong lĩnh vực văn hóa, thông tin, thể thao và du lịch.

Diệp Anh`,
      en: "At the 80th Anniversary of the Traditional Day of the Culture Sector, General Secretary To Lam affirmed that culture is the spiritual foundation, the driving force for development, and the endless 'root energy' of the nation. He emphasized that investing in culture is investing in the future and the 'source' of national strength, and set out 10 key tasks and solutions for the Culture sector to develop accordingly in the new period.",
      ja: `8月23日午前、文化、スポーツ、旅行部はハノイ大劇場で文化伝統日80周年祝賀イベント（28/8/1945 - 28/8/2025））を盛大に開催した。

その際、文化界はベトナム共産党中央執行委員会総書記蘇林同志の出席と指導を歓迎する； 範明正総理同志とベトナム政府、国会、祖国戦線指導同志； 各委員会、部委員会、部門、中央団体と河内市を指導する 大使、一部の国の代表 各時期の文化、スポーツ、旅行部をリードする 文化、スポーツと旅行部、文化と体育部、各省・市の旅行部の主任と元主任； 文化、情報、スポーツ、旅行分野の80の先進的な模範 文学者、科学者、知識人、スポーツ選手 部下の各機関と会社の指導者集団と多くの記者、記者、新聞通信社の編集者。

80年前の1945年8月28日、ホーチミン主席は、情報部、宣伝部、現在の文化、スポーツ、旅行部の前身を含む13の部からなる臨時政府を設立する宣言に署名した

党の指導以来、文化は重要な戦線として確定された。 1943年ベトナム文化綱要-党の最初の文化宣言は文化建設と発展の三つの基本原則を確定した:「民族-科学-大衆」 大会決議、中央執行委員会特別テーマ決議、中央政治局はいずれも文化が民族の魂、発展の原動力、国家の「ソフトパワー」であることを強調している。 正しい道、創造性のため、過去80年間の文化事業はすでに多くの感情階段を持つ歌唱学校を形成した。文化は魂と身分を育成し、文化に抵抗する壮大な曲調から、スポーツの自信ダンスと崇高な願いを組み合わせ、旅行の歩みに伴って国を世界に持ち込み、ニュースが知識の導きとなり、党と人民の間の信頼を結び付けた。

文化、スポーツ、旅行部部長は番組で発言した時、VHTTDL業界の全体的な成果から、誇りだけでなく、特色のあるベトナム文化を築く強固な精神基盤でもあると強調した。 近年の実践を反映して、文化分野には多くの積極的な変化が起こった:

国家持続可能な発展に対する文化の地位と役割がますます全面的かつ深くなっていることを意識する 文化は国家経済社会発展の大部分の決議、戦略、計画に現れている。

文化的イメージを形成し、国家価値体系を形成し、家庭価値体系を埋め、新時代のベトナム人の価値体系

林総書記は記念式典で演説した際、新党が誕生して以来、革命の煙と国家の未来に対する予感の中で、わが党と親愛なるホーチミン主席は文化の特別な地位を確定したと強調した。 1943年《ベトナム文化綱要》は先見の明を示し、民族、科学、大衆の三つの原則を確立した。 文化が国民に道を教え、文化が最前線であり、文化を作る人が戦士であることを肯定する。 人民政府が成立した当初から、対仏、対米戦争では、党とおじさんは数百人の青年を海外に派遣して文化、芸術、スポーツを勉強した。 ..

以来、大会期間中、中央、政治局、秘書所の決議、結論、指示は、文化は社会の精神的基礎であり、発展の目標であり、発展の原動力でもあることを強調した。 文化はベトナム民族のソフトパワーであり、無限の「原子力」である。

総書記によると、現在、我々は先進的なベトナム文化、強い民族特色を建設している； 人を中心とすることは発展の中心、主体、目標、動力である 文化産業を積極的に発展させ、健康な文化市場を建設する 文化環境と文化生活を建設する ベトナム民族価値体系、家庭価値体系、人文価値体系を発揚する； 予防、衰退防止、「自己進化」、「自己転換」思想文化。 それと同時に、党は常に「党内文化」、政治体系における文化の建設を重点としている； 模範を示し、廉潔で、人民に奉仕するスタイルを確立する； 法治文化、公務文化、企業文化、企業文化を強調する。

総書記は、これが社会を広め、信頼を固め、共通認識を確立し、繁栄と幸福な発展を促す願いの基礎であると指摘した。 文化を常に政治、経済、社会生活に結び付ける 文化はすべての意思決定、すべての工事、すべての道路、すべての橋、すべての田野、すべての工業地帯、すべての都市、すべての村に浸透しなければならない； それはベトナム人の思想、行動、品質の中にあります。 文化は民族のイメージを形成し、民族の価値体系を形成し、家庭の価値体系を埋め、新時代のベトナム人の価値体系:愛国、仁愛、団結、誠実、責任、創造、規律、抱負。

総書記は次のように強調した。私たちは革命の高まりの中で文化戦士の第一歩を永遠に記録する。当時、漫画、歌、新聞、庭、田辺のすべての公演が炎になった。 政権奪取の総蜂起では、革命政権が樹立された初期に、民族、国歌、人民民主国家の国章を作った偉大な文化家に感謝しなければならない。 帝国の反植民地抗争では、何世代もの文芸家、ニュース、宣伝、末端の文化幹部が人民になり、情熱を持って山林、平原、都市を旅した。 彼らは各地区で潜水し、部隊、最前線の市民、軍事行動との間の「雨、飯を絞る」、野戦の地下室でランプに火をつけ、ストーブのそばで笛を吹き、詩、歌を書き、前線から漫画を描き、矢印は弾丸である； 彼らは文化で敵を打ち負かし、楽器や筆で敵を打ち負かす。 ...多くの同志が倒れ、青春と才能をささげ、文化を鋭い武器にし、信仰を広め、強い意志を倍増させた。

平和、建設、発展、革新の中で、文化は依然として思想と精神戦線における衝撃力である。 「全国民が団結して文化生活を建設する」、「新農村、文明都市を建設する」運動は、学校、機構、文化企業などを建設し、生活の様相を変えるために貢献する。 何代にもわたって継承された役人は屋根、塀、古いれんがを守っている； 図書館員は図書館の真ん中で勤勉でなければならない 芸術家たちは舞台の後ろで静かに手羽先を練習する； 記者、写真家は生命呼吸の典型的な瞬間を記録した； ガイドは国家ブランドに笑顔を提供する コーチと選手たちはベトナム国旗の色が国際舞台で舞い上がるために汗と涙を流した。

文化への投資は未来への投資であり、民族の力の「源泉」である
事務総長はまた、過去1世紀の革命実践でいくつかの教訓を得たと指摘した。

第一に、すべての文化的成果はしっかりと正しい道から始まり、文化的法則を尊重し、人を中心としている。 経路とメカニズムが正しいとき、文化工作幹部チームの創造力が解放され、コミュニティの力が刺激され、照らされる。

第二に、アイデンティティは根であり、融合は枝である。 身分は私たちを立たせ、不老不死にする； 融合は私たちに花を咲かせ、広まっていく。 活気に満ちた有機的な実体の中で互いに保護され発展している。

第三に、文化が花を咲かせるには、健康な環境と相応の資源が必要である。 文化への投資は未来への投資であり、民族の力への「源泉」である。

第四に、文化は生活に溶け込んでこそ永遠に続く。 すべての政策は公衆、コミュニティ、すべての家庭、コミュニティ、村、学校、機関、企業を対象としなければならない。

第五に、デジタル時代には、革新は主流であり、革新は方式であり、連動は動力である。 文化と技術と、市場と、旅行と、教育と、都市と、農村とを結びつける……価値は倍増する。

わが国は新しい発展段階に入っており、社会主義方向の高所得先進国になることを目標としている。 目まぐるしく変化する複雑な世界環境； 第四次産業革命、デジタル経済、グリーン経済、循環経済、スマートシティは新しい基準を形成している； 戦略的競争、情報爆発、「サイバー空間競争」が激しい； 外来文化製品の多様性、多次元の浸透。

文化はソフトパワーであり、ベトナム民族の無限の「原子力」である。
蘇林総書記は花を贈り、阮文雄部長はVHTTDL部長賞を授与し、文化、情報、スポーツと旅行分野の先進的な模範を表彰した。 撮影:Nam Nguyen

文化部門の10の任務、解決策
このような背景の下で、文化はさらに一歩先を行き、本領を照らし、導き、育成し、自信を固め、国家のソフトパワーを形成しなければならない。 この精神に基づいて、事務総長は文化部門全体に集中していくつかの任務を遂行することを提案し、主な解決策は次の通りである。

一つは、文化に対する党の路線と観点を引き続き深化させ、全面的に実行することである。 文化と経済、政治、社会を同等にする 戦略、計画、方案、プロジェクトを重点、重点とする； 資源の見合った確保、仕組みの突破、権力の移譲、権力の分散； 監視、評価、検査を強化する。

二つ目は、家庭、学校、社会などの面から健康な文化環境を作ることです 幹部、党員の模範的役割を発揮する 道徳教育、ライフスタイル、デジタルスキル、行動文化を推進する 家庭内暴力と学校内暴力の予防、打撃 文明、安全なデジタル文化を発展させる 特色があり、明るく、緑で、清潔で、美しい基礎文化コミュニティを建設する。

三つ目は、知識人、文学芸術家、コーチ、スポーツ選手、旅行起業家、各級の文化関係者、特に基礎関係者を育成、重視、尊重することである。 注文、奨励、創作のサポート、著作権の保護、関連する権利の仕組みの確立； 文化力の物質的・精神的生活水準を高めること； 若い人材を励ます； 学校、クラブ、基礎文化の創造的な種を発掘、育成する。

四、文化産業と創造性経済を発展させることが成長の新たな柱となる 文化市場体制、金融メカニズム、税収政策、貸付、土地、投資、データを完備する； 文化企業、革新的な創業を奨励する 文化製品の生産、分配、消費を発展させるデジタルインフラストラクチャ クラスター、創意工業地帯、大都市と観光センターを結ぶ「文化の谷」を建設する。

五、コミュニティの生活と持続可能な発展につながる遺産を保護、祭祀、弘揚することである。 デジタル技術を強力に応用し、人工知能は遺産のデジタル化、展覧会、演技、教育； 「デジタル文化」、「オープン博物館」、「移動オペラハウス」、「デジタル図書館」、「年齢を問わず誰もが共有」を建設する； 責任ある遺産旅行を発展させる 「生活文化遺産」を育てる芸術家、民間芸術家。

六、大衆スポーツと高成果スポーツの突破口を作ること。 学校の体育教育を重視する クラブ制度、公共スポーツ空間を発展させる スポーツ科学の医学能力を高める 現代の基準に基づいて青年選手を選抜、訓練する 国際協力を拡大する 高い目標、持続可能な発展、人文精神を樹立する。

七組換えで、ベトナム観光業の質と競争力を高める。 文化的特色があり、豊富な経験を持つ製品を開発する スマート、グリーン、クリーンな旅行を促進し、排出量を減らす 地域間、学際的なつながり 人的資源の質を高める 規律を強化し、サービスを規範化する 「ベトナム――果てしなく美しく、香りのある文化」の目的地ブランドを作る。

八、文化外交を強化し、国のイメージを宣伝すること； 国際革新ネットワークに積極的に参加する 地域と世界規模のイベント、祝日、文化週間を組織する ベトナムの精華を世界にもたらし、平和、友情、違いを尊重し、互いに学び合い、融合する精神に基づいて、世界の精華をベトナムに持ち帰ります。

九、業界の全面的なデジタル化のモデルチェンジを推進することである。 遺産、芸術、スポーツ、旅行の大規模なデータベースを構築する オープンスタンダード、デジタル文化地図の整備； デジタルコンテンツ配信プラットフォームと著作権保護ツールの開発； 博物館、演技、教育における現実技術の応用を分析、拡張する 安全、情報の安全を強化し、有害な内容と伝播を打撃する。

十は闘争を続け、思想・文化分野における「平和的変遷」の陰謀をくじくことである。 党の思想的基礎を断固として守る 「ソフト障壁」を建設することは価値体系、信念、社会規範である 政策のコミュニケーション能力を高める 積極的に善人を激励し、よい手本を示す。

文化はソフトパワーであり、ベトナム民族の無限の「原子力」である。
範明正総理と阮文雄部長は生花を贈り、文化、情報、スポーツと旅行分野の先進モデルにVHTTDL部長賞を授与した。 撮影:Nam Nguyen

文化はすべての計画、プロジェクトとプロジェクトに浸透し、長期的な視点と高い基準を持っていなければならない
蘇林総書記は各級委員会、政府、祖国戦線と政治団体を提案し、社会は引き続き指導、指導に注目し、文化発展のために便利な条件を創造し、社会資源を動員する。 都市と農村の計画の中で文化を重視する 同期的で効率的なキャンパス文化建設を確立する 企業とコミュニティへの参加を奨励する。 文化は発展政策の端に立つことはできず、文化は長期的な視点と高い基準を持つすべての訂画、プロジェクト、プロジェクトに浸透しなければならない。

総書記は知識人、文芸関係者、人民の「魂工学者」がたゆまず、勇敢で、創造力に満ちていることを望んでいる。 生命を源とし、人民を拠り所とし、真、美、理を指針とする； 凡庸な商業化、虚偽、混在、極端なものに断固として反対する 新しい体験の道を切り開き、人類文化の精華を吸収し、民族文化の宝庫を豊かにする。

スポーツは意志、規律、勝利への渇望を鍛え続ける； 道徳基準に基づいて、科学技術は力である ゲームのルールを尊重する； 学校、家庭、コミュニティから人材を育成する。

観光業の特色、品質、持続可能性、知能、革新、融合の道を堅持する； 観光客の体験とコミュニティの利益を中心に 文化と自然を「貴重な宝」とし、笑顔とベトナム精神を心の集積地とする。

また、毎日「文化の種をまく」末端幹部は引き続き献身し、方法を革新し、コミュニティを結集する； どの文化館、図書館、遊園地、公共空間も本当に楽しく、役に立つようにする； 良い価値観は些細なことから培われるものです。

総書記は、80年は感謝、誇り、誇りのマイルストーンであると強調した。 私は、党の指導の下、国家の管理の下、政治体系全体の介入、人民の同情と支持を確信しています 文化、情報、スポーツ、旅行者の才能と専門的素養を備えている 私たちはベトナム文化をそれに見合った程度に発展させ、私たちの国を強く豊かにし、私たちの民族を存続させ、ベトナム人一人を幸せにし、自信を持って融合させ、輝きます。

その際、蘇林総書記はVHTTDL部に一等労働勲章を授与し、範明正政府総理はVHTTDL部長の阮文雄に一等労働勲章を授与した

その際、VHTTDL部は文化、情報、スポーツ、旅行分野の80名の先進模範に賞を授与した。

葉英`,
    },
  },
  {
    id: 6,
    title: {
      vi: "Di sản Chủ tịch Hồ Chí Minh: Từ đoàn kết trong Đảng đến đồng thuận xã hội",
      en: "President Ho Chi Minh's Legacy: From Unity within the Party to Social Consensus",
      ja: "ホー・チ・ミン主席の遺産：党内団結から社会的合意まで"
    },
    desc: {
      vi: '(Chinhphu.vn) - "Tôi chỉ có một đảng, Đảng Việt Nam" - Đó là lời tuyên bố của Chủ tịch Hồ Chí Minh trước Quốc hội, trước quốc dân, trước thế giới, tại Kỳ họp thứ hai Quốc hội khoá I (ngày 31/10/1946).',
      en: '(Chinhphu.vn) - "I have only one party, the Vietnamese Party" - This was President Ho Chi Minh\'s declaration before the National Assembly, the people, and the world at the second session of the first National Assembly (October 31, 1946).',
      ja: '(Chinhphu.vn) - 「私には一つの党、ベトナム党しかない」- これは第1期国会第2回会議（1946年10月31日）で国会、国民、世界に向けたホー・チ・ミン主席の宣言でした。'
    },
    date: "19/05/2024  08:53",
    img: "https://tinhuybinhphuoc.vn/uploads/hdnd/2024_05/image-20240519080338-4.jpeg",
    source: "Nguồn: baochinhphu.vn",
    content: {
      vi: `"Tôi chỉ có một đảng, Đảng Việt Nam" - Đó là lời tuyên bố của Chủ tịch Hồ Chí Minh trước Quốc hội, trước quốc dân, trước thế giới, tại Kỳ họp thứ hai Quốc hội khoá I (ngày 31/10/1946). Đó là sự khẳng định của Người sáng lập ra Đảng, xây dựng thiết chế Nhà nước và mở đường kiến thiết đất nước và đó cũng là tuyên bố có giá trị bền vững, bởi Đảng không phải là tổ chức làm quan phát tài, mà Đảng luôn đồng hành cùng dân tộc, vì dân tộc, giương cao chiến lược đại đoàn kết toàn dân tộc vì mục tiêu, khát vọng của nhân dân.

Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc là hệ thống quan điểm khoa học và có giá trị bền vững về Đảng luôn tiên phong trong chiến lược đại đoàn kết toàn dân, đoàn kết rộng rãi, tạo sức mạnh trong tổ chức Mặt trận và đồng thuận xã hội. Tư tưởng của Người về đại đoàn kết có ý nghĩa định hướng quan trọng cho công cuộc xây dựng đất nước, góp phần đấu tranh chống mọi âm mưu, thủ đoạn phá hoại khối đại đoàn kết toàn dân tộc.

"Chúng ta phải lấy đoàn kết mà xoay vần vận mệnh, giữ gìn dân tộc và bảo vệ nước nhà"

Lịch sử dân tộc ta đã hun đúc nên một bảng vàng giá trị truyền thống, nổi bật và xuyên suốt cho đến nay là truyền thống đoàn kết và cố kết cộng đồng. Từ khi Đảng ra đời do lãnh tụ Hồ Chí Minh sáng lập đã trở thành chủ thể quan trọng và là trung tâm của đại đoàn kết toàn dân trên cơ sở định ra đường lối chiến lược và sách lược đoàn kết dân tộc ta.

Chiến lược đại đoàn kết góp phần bảo vệ và phát triển Đảng. Chủ tịch Hồ Chí Minh đã chỉ dạy rằng, Đảng đoàn kết nhất định phải vào sâu trong quần chúng, hết lòng, hết sức phục vụ quần chúng, làm cho quần chúng mến Đảng, tin Đảng, ra sức ủng hộ Đảng và tự giác tự nguyện chịu Đảng lãnh đạo. Người khẳng định: "Ra sức phụng sự nhân dân, củng cố mối liên hệ giữa nhân dân với Đảng, kịp thời cho Đảng biết những nhu cầu của nhân dân, giải thích cho nhân dân thấm nhuần và thực hiện chính sách của Đảng".

Đảng đoàn kết, dân tộc đoàn kết và sự gắn bó máu thịt giữa Đảng với nhân dân tạo nên sức mạnh vĩ đại để dân tộc ta vượt qua muôn vàn khó khăn, thử thách, chiến thắng mọi kẻ thù. Trước lúc đi xa, trong Di chúc - mấy lời gửi lại cho toàn Đảng, toàn dân, Hồ Chủ tịch đã căn dặn: Đoàn kết là một truyền thống cực kỳ quý báu của Đảng và của dân ta. Các đồng chí từ Trung ương đến các chi bộ cần "phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình".

Đoàn kết thống nhất trong Đảng là điều kiện, cơ sở vững chắc để xây dựng khối đoàn kết toàn dân. Theo Người, muốn đưa cách mạng đến thành công phải có lực lượng cách mạng đủ mạnh để chiến thắng kẻ thù và xây dựng thành công xã hội mới; muốn có lực lượng cách mạng mạnh phải thực hiện đại đoàn kết, quy tụ mọi lực lượng cách mạng thành một khối vững chắc.

Người nói: "Sử ta dạy cho ta bài học này: Lúc nào dân ta đoàn kết muôn người như một thì nước ta độc lập, tự do. Trái lại lúc nào dân ta không đoàn kết thì bị nước ngoài xâm lấn. Vậy nay ta phải biết đoàn kết, đoàn kết mau, đoàn kết chắc chắn…".

Bởi vì, trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân. Người sớm nhìn thấy giai cấp nông dân Việt Nam là lực lượng cách mạng tiềm tàng, có những khả năng rất to lớn, nếu mà khéo tổ chức, khéo lãnh đạo, thì lực lượng ấy sẽ làm xoay trời chuyển đất, "bao nhiêu thực dân và phong kiến cũng sẽ bị lực lượng to lớn ấy đánh tan".

Đảng có giương cao ngọn cờ đại đoàn kết thì tiền đồ, tương lai của Đảng mới tất thành, có cơ sở xã hội rộng rãi thì sự nghiệp của Đảng mới thành công và vững chắc. "Đoàn kết, đoàn kết, đại đoàn kết/Thành công, thành công, đại thành công".

Đoàn kết không phải là một thủ đoạn chính trị, mà là một nghệ thuật và là một quy luật nhân quả. Người nhấn mạnh rằng: "Không đoàn kết thì suy và mất. Có đoàn kết thì thịnh và còn. Chúng ta phải lấy đoàn kết mà xoay vần vận mệnh, giữ gìn dân tộc và bảo vệ nước nhà".

Đảng đồng hành và đấu tranh chống âm mưu phá hoại khối đại đoàn kết

Trong tình hình hiện nay, vấn đề đặt ra yêu cầu hết sức cấp thiết cho công tác dân vận của Đảng, tức là vấn đề xác lập, xây dựng mối quan hệ giữa Đảng với dân càng trở nên quan trọng nhằm mục đích bảo vệ Đảng. Nhân dân ta đã và đang bảo vệ thành quả cách mạng, giữ vững độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ, giữ vững an ninh quốc gia và bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa.

Đảng luôn đồng hành và giương cao ngọn cờ đại đoàn kết dân tộc chính là "động lực chủ yếu để phát triển đất nước". Bài học kinh nghiệm quan trọng được đúc kết là: "Đoàn kết trong Đảng là hạt nhân, là cơ sở vững chắc để xây dựng đoàn kết trong hệ thống chính trị, đại đoàn kết toàn dân tộc và đoàn kết quốc tế".

Đoàn kết ở đây dựa trên cơ sở mục đích, lý tưởng của Đảng, trên cơ sở lợi ích của giai cấp công nhân, nhân dân lao động và toàn dân tộc, trên cơ sở tuân thủ các nguyên tắc hoạt động của Đảng, trên cơ sở tôn trọng ý kiến cá nhân, mặc dù ý kiến đó là ý kiến bảo lưu trong tổ chức Đảng, đoàn kết trên tình đồng chí thương yêu lẫn nhau.

Những nhiệm vụ cụ thể để thực hiện di sản Hồ Chí Minh:

1. Quán triệt tư tưởng Hồ Chí Minh: Mỗi cán bộ, đảng viên, người đứng đầu cấp ủy phải noi gương các tiên liệt, tích cực tu dưỡng, rèn luyện phẩm chất đạo đức, củng cố niềm tin giữa Đảng với dân, tạo dựng nền tảng vững chắc cho quyền lãnh đạo của Đảng đối với xã hội.

2. Quan tâm giải quyết quyền và lợi ích của nhân dân: Đảng và Nhà nước luôn vì nhân dân, chăm lo cho sự phát triển tiến bộ của nhân dân. Phát huy tối đa quyền là chủ và làm chủ của nhân dân. Dân chủ từ cấp cơ sở và trong hệ thống chính trị các cấp.

3. Nêu cao phương châm: Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng. Phải dành sự quan tâm đối với đồng bào dân tộc thiểu số, đồng bào có đạo; không ngừng xóa đói, giảm nghèo đa chiều.

4. Đấu tranh phòng, chống mọi âm mưu phá hoại: Đấu tranh chống mọi âm mưu, thủ đoạn phá hoại đoàn kết trong Đảng và chia rẽ khối đại đoàn kết toàn dân tộc. Hiện nay, có nhiều luận điệu xuyên tạc, sai trái phủ nhận về nguyên tắc đoàn kết, thống nhất trong Đảng.

5. Tuyên truyền, giáo dục và phát huy đoàn kết: Tuyên truyền, giáo dục, bồi dưỡng và phát huy khối đại đoàn kết toàn dân tộc, đồng thời cảnh giác, phòng chống mọi hoạt động lợi dụng xâm phạm tự do tôn giáo và đi ngược lại lợi ích quốc gia dân tộc.

6. Tôn trọng tự do tín ngưỡng: Đảng ta đã khẳng định: Tôn trọng và đảm bảo quyền tự do tín ngưỡng tôn giáo và tự do không tín ngưỡng tôn giáo của công dân. Mọi công dân đều bình đẳng về nghĩa vụ và quyền lợi trước pháp luật.

7. Hòa giải, hòa hợp dân tộc: Nêu cao tinh thần hòa giải, hòa hợp dân tộc, không phân biệt vùng miền, dân tộc, tôn giáo, nguồn gốc xuất thân, địa vị xã hội; tiến tới xóa bỏ mọi thù hằn, định kiến, mặc cảm dân tộc.

Kết luận, di sản tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc không chỉ là kim chỉ nam cho công tác xây dựng Đảng mà còn là nền tảng vững chắc để xây dựng khối đại đoàn kết toàn dân tộc, hướng đến xây dựng một Việt Nam thống nhất, hùng cường.

TS. Lê Trung Kiên
Viện Hồ Chí Minh và các lãnh tụ của Đảng,
Học viện Chính trị quốc gia Hồ Chí Minh`,
      en: `"I have only one party, the Vietnamese Party" - This was President Ho Chi Minh's declaration before the National Assembly, the people, and the world at the second session of the first National Assembly (October 31, 1946). This was the affirmation of the founder of the Party, who built state institutions and opened the path for national construction, and it was also a declaration of enduring value, because the Party is not an organization for personal gain, but the Party always accompanies the nation, for the nation, raising high the strategy of great national unity for the goals and aspirations of the people.

Ho Chi Minh's thought on great national unity is a scientific system of views with enduring value about the Party always pioneering in the strategy of great national unity, broad solidarity, creating strength in Front organizations and social consensus. His thought on great unity has important guiding significance for national construction, contributing to the struggle against all plots and schemes to sabotage the great national unity bloc.

"We must use unity to turn fate around, preserve the nation and protect the homeland"

Our nation's history has forged a golden board of traditional values, prominent and continuous to this day is the tradition of unity and community solidarity. Since the Party was founded by leader Ho Chi Minh, it has become an important subject and center of great national unity based on setting strategic lines and policies for our national unity.

The great unity strategy contributes to protecting and developing the Party. President Ho Chi Minh taught that a united Party must go deep into the masses, wholeheartedly serve the masses, make the masses love the Party, trust the Party, actively support the Party and voluntarily accept Party leadership. He affirmed: "Make every effort to serve the people, strengthen the relationship between the people and the Party, timely inform the Party of the people's needs, explain to the people to thoroughly understand and implement the Party's policies."

Party unity, national unity and the blood bond between the Party and the people create great strength for our nation to overcome countless difficulties and challenges, defeating all enemies. Before going far, in his Testament - a few words left for the entire Party and people, President Ho advised: Unity is an extremely precious tradition of our Party and people. Comrades from the Central Committee to branches need to "preserve the unity of the Party like protecting the pupil of one's eye."

Unity within the Party is the condition and solid foundation for building national unity. According to Him, to bring the revolution to success, there must be revolutionary forces strong enough to defeat the enemy and successfully build a new society; to have strong revolutionary forces, great unity must be implemented, gathering all revolutionary forces into a solid bloc.

He said: "Our history teaches us this lesson: When our people unite as ten thousand as one, our country is independent and free. Conversely, when our people are not united, they are invaded by foreign countries. So now we must know how to unite, unite quickly, unite surely..."

Because in the sky nothing is more precious than the people. In the world nothing is stronger than the united force of the people. He early saw that the Vietnamese peasant class was a potential revolutionary force with very great capabilities, if skillfully organized and led, that force would turn heaven and earth, "no matter how many colonialists and feudalists will be defeated by that great force."

The Party raising high the flag of great unity ensures the future of the Party will succeed, having a broad social base ensures the Party's cause will be successful and solid. "Unity, unity, great unity/Success, success, great success."

Unity is not a political trick, but an art and a law of cause and effect. He emphasized: "Without unity there is decline and loss. With unity there is prosperity and survival. We must use unity to turn fate around, preserve the nation and protect the homeland."

The Party accompanies and struggles against plots to sabotage the great unity bloc

In the current situation, the issue raises urgent requirements for the Party's mass mobilization work, namely the issue of establishing and building the relationship between the Party and the people becomes increasingly important for the purpose of protecting the Party. Our people have been and are protecting revolutionary achievements, maintaining independence, sovereignty, unity, territorial integrity, maintaining national security and firmly defending the socialist Vietnamese Fatherland.

The Party always accompanies and raises high the flag of great national unity which is "the main driving force for national development." The important lesson learned is: "Unity within the Party is the core, the solid foundation for building unity in the political system, great national unity and international solidarity."

Unity here is based on the Party's purposes and ideals, on the interests of the working class, working people and the entire nation, on compliance with the Party's operating principles, on respect for individual opinions, although those opinions are reserved opinions in the Party organization, unity based on comradely love for each other.

Specific tasks to implement Ho Chi Minh's legacy:

1. Thoroughly understand Ho Chi Minh's thought: Every cadre, party member, and head of party committees must follow the example of predecessors, actively cultivate and train moral qualities, strengthen trust between the Party and people, create a solid foundation for the Party's leadership right over society.

2. Care about solving people's rights and interests: The Party and State are always for the people, caring for the progressive development of the people. Maximize the people's mastery rights. Democracy from the grassroots level and in the political system at all levels.

3. Uphold the motto: People know, people discuss, people do, people check, people supervise, people benefit. Must pay attention to ethnic minorities and religious compatriots; continuously eliminate hunger and reduce multidimensional poverty.

4. Struggle to prevent and combat all sabotage plots: Struggle against all plots and schemes to sabotage unity within the Party and divide the great national unity bloc. Currently, there are many distorted and wrong arguments denying the principle of unity within the Party.

5. Propagate, educate and promote unity: Propagate, educate, foster and promote the great national unity bloc, while being vigilant and preventing all activities that exploit and violate religious freedom and go against national interests.

6. Respect freedom of belief: Our Party has affirmed: Respect and ensure citizens' rights to freedom of religion and freedom from religion. All citizens are equal in obligations and rights before the law.

7. National reconciliation and harmony: Promote the spirit of national reconciliation and harmony, without discrimination of region, ethnicity, religion, origin, social status; move toward eliminating all hatred, prejudice, and ethnic complexes.

In conclusion, Ho Chi Minh's ideological legacy on great national unity is not only a compass for Party building work but also a solid foundation for building the great national unity bloc, toward building a unified, strong Vietnam.

Dr. Le Trung Kien
Ho Chi Minh Institute and Party Leaders,
Ho Chi Minh National Academy of Politics`,
      ja: `「私には一つの党、ベトナム党しかない」- これは第1期国会第2回会議（1946年10月31日）で国会、国民、世界に向けたホー・チ・ミン主席の宣言でした。これは党を創設し、国家制度を建設し、国家建設への道を開いた人の確信であり、党は個人の利益のための組織ではなく、党は常に民族と共にあり、民族のために、人民の目標と願望のために偉大な民族大団結の戦略を高く掲げているため、永続的価値を持つ宣言でもありました。

偉大な民族大団結に関するホー・チ・ミン思想は、偉大な民族大団結戦略、幅広い団結において党が常に先駆的役割を果たし、戦線組織と社会的合意に力を創造することについての科学的で持続的価値を持つ観点の体系です。偉大な団結に関する彼の思想は、国家建設事業において重要な指導的意義を持ち、偉大な民族大団結ブロックを破壊するあらゆる陰謀や手段に対する闘争に貢献しています。

「我々は団結によって運命を転換し、民族を守り、祖国を守らなければならない」

我が民族の歴史は伝統的価値の黄金板を鍛え上げました。今日まで顕著で一貫している伝統は団結とコミュニティの結束の伝統です。指導者ホー・チ・ミンによって創設された党の誕生以来、我が民族の団結のための戦略路線と政策を決定する基礎の上で、全民族大団結の重要な主体であり中心となっています。

偉大な団結戦略は党の保護と発展に貢献します。ホー・チ・ミン主席は、団結した党は必ず大衆の中に深く入り、全身全霊で大衆に奉仕し、大衆が党を愛し、党を信頼し、積極的に党を支持し、自覚的に自発的に党の指導を受けるようにしなければならないと教えました。彼は確認しました：「人民に奉仕するために努力し、人民と党の関係を強化し、人民のニーズを党にタイムリーに知らせ、人民が党の政策を深く理解し実施するよう説明する」。

党の団結、民族の団結、そして党と人民の血の絆が偉大な力を創造し、我が民族が無数の困難と試練を乗り越え、すべての敵を打ち負かしました。遠くに行く前、遺書で - 全党、全人民に残した言葉で、ホー主席は忠告しました：団結は我が党と我が人民の極めて貴重な伝統です。中央から支部まで同志たちは「自分の瞳を守るように党の団結統一を守らなければならない」。

党内の団結統一は、全民族団結ブロックを建設するための条件であり、堅固な基礎です。彼によると、革命を成功に導くためには敵を打ち負かし新しい社会を成功裏に建設するのに十分な強さの革命勢力が必要です；強い革命勢力を持つためには偉大な団結を実施し、すべての革命勢力を堅固なブロックに結集しなければなりません。

彼は言いました：「我が歴史は我々にこの教訓を教えています：我が人民が万人が一つとなって団結する時、我が国は独立し自由になります。逆に我が人民が団結しない時は外国に侵略されます。だから今我々は団結を知り、早く団結し、確実に団結しなければなりません...」。

なぜなら、天空において人民より貴重なものはありません。世界において人民の団結した力より強いものはありません。彼は早くからベトナム農民階級が潜在的革命勢力であり、非常に大きな能力を持っており、巧みに組織し指導すれば、その勢力は天地をひっくり返し、「いかなる植民地主義者や封建主義者もその偉大な勢力によって打ち破られる」ことを見ていました。

党が偉大な団結の旗を高く掲げれば党の前途と未来は必ず成功し、広範な社会基盤を持てば党の事業は成功し堅固になります。「団結、団結、大団結/成功、成功、大成功」。

団結は政治的手段ではなく、芸術であり因果の法則です。彼は強調しました：「団結がなければ衰退し失う。団結があれば繁栄し残る。我々は団結によって運命を転換し、民族を守り、祖国を守らなければならない」。

党の同行と偉大な団結ブロック破壊陰謀に対する闘争

現在の状況において、党の大衆動員活動に対する極めて緊急な要求を提起する問題、すなわち党と人民の関係を確立し建設する問題が党を保護する目的でますます重要になっています。我が人民は革命の成果を保護し、独立、主権、統一、領土完整を維持し、国家安全保障を維持し、社会主義ベトナム祖国をしっかりと守っています。

党は常に同行し、偉大な民族大団結の旗を高く掲げることが「国家発展の主要原動力」です。重要な経験教訓は：「党内の団結は核心であり、政治制度での団結、偉大な民族大団結、国際団結を建設するための堅固な基礎である」。

ここでの団結は党の目的と理想の基礎、労働者階級、勤労人民、全民族の利益の基礎、党の活動原則の遵守の基礎、個人の意見の尊重の基礎（その意見が党組織での保留意見であっても）、同志愛の基礎の上に立っています。

ホー・チ・ミンの遺産を実現するための具体的任務：

1. ホー・チ・ミン思想の徹底：すべての幹部、党員、党委員会の長は先人の模範に倣い、積極的に修養し、道徳的品質を鍛練し、党と人民の信頼を強化し、社会に対する党の指導権のための堅固な基盤を築かなければなりません。

2. 人民の権利と利益の解決への関心：党と国家は常に人民のためにあり、人民の進歩的発展を気遣います。人民の主人としての権利を最大限発揮します。基層レベルから政治制度各級における民主主義。

3. 方針の高揚：人民が知り、人民が話し合い、人民が行い、人民が検査し、人民が監督し、人民が享受する。少数民族、宗教を持つ同胞に注意を払わなければなりません；絶え間なく飢餓をなくし、多次元貧困を削減します。

4. すべての破壊陰謀の防止・対抗闘争：党内の団結を破壊し偉大な民族大団結ブロックを分裂させるすべての陰謀や手段に対する闘争。現在、党内の団結統一原則を否定する多くの歪曲された誤った論調があります。

5. 団結の宣伝、教育、発揚：偉大な民族大団結ブロックを宣伝、教育、育成、発揚し、同時に宗教の自由を侵害し国家民族利益に反するすべての活動の利用を警戒し防止します。

6. 信仰の自由の尊重：我が党は確認しています：市民の宗教信仰の自由権と宗教を信仰しない自由権を尊重し保障する。すべての市民は法の前で義務と権利において平等です。

7. 民族和解・和合：地域、民族、宗教、出身、社会的地位を区別せずに民族和解・和合精神を高揚；すべての憎悪、偏見、民族コンプレックスの除去に向かいます。

結論として、偉大な民族大団結に関するホー・チ・ミン思想遺産は党建設活動の指針であるだけでなく、偉大な民族大団結ブロック建設のための堅固な基盤でもあり、統一された強力なベトナム建設に向かいます。

レ・チュン・キエン博士
ホー・チ・ミン研究所および党指導者研究所、
ホー・チ・ミン国家政治学院`
    },
    url: "https://baochinhphu.vn/di-san-chu-tich-ho-chi-minh-tu-doan-ket-trong-dang-den-dong-thuan-xa-hoi-102240518220545524.htm"
  },
  {
    id: 7,
    title: {
      vi: "Tư tưởng Hồ Chí Minh - Những giá trị vĩnh cửu",
      en: "Ho Chi Minh's Thought - Eternal Values",
      ja: "ホー・チ・ミン思想 - 永遠の価値"
    },
    desc: {
      vi: "(Chinhphu.vn) - Học Bác phải trở thành nhu cầu văn hóa, yếu tố tự giác, thúc đẩy nội tâm bên trong của mỗi một con người.",
      en: "(Chinhphu.vn) - Learning from Uncle Ho must become a cultural need, a conscious element that promotes the inner self of each person.",
      ja: "(Chinhphu.vn) - ホーおじさんから学ぶことは、文化的ニーズとなり、各人の内面を促進する自覚的要素とならなければなりません。"
    },
    date: "18/05/2015  10:43",
    img: "https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/duongphuonglien/2015_05_18/bac_ho_HMQV.jpg",
    source: "Nguồn: baochinhphu.vn",
    content: {
      vi: `Kỷ niệm 125 năm ngày sinh của Bác Hồ kính yêu (19/5/1890-19/5/2015), GS. TS Hoàng Chí Bảo - Chuyên gia cao cấp của Hội đồng Lý luận Trung ương đã dành cho phóng viên Báo điện tử Chính phủ những trao đổi sâu sắc về việc học tập, làm theo tấm gương của Người trong giai đoạn hiện nay.

Học Bác từ trong tâm

Cuộc vận động học tập và làm theo tấm gương đạo đức của Bác Hồ được Đảng ta chính thức phát động vào năm 2007, đến nay là gần 10 năm. Chỉ thị 03-CT/T.Ư của Bộ Chính trị (khóa XI) về tiếp tục đẩy mạnh việc học tập và làm theo tấm gương đạo đức Hồ Chí Minh chính là thể hiện chủ trương của Đảng ta về việc học tập và làm theo tấm gương đạo đức của Bác sẽ không còn là một cuộc vận động kiểu hành chính như trước đây. Đó sẽ không còn là việc chỉ đơn thuần học Bác trong những dịp lễ hội như kỷ niệm sinh nhật Bác, kỷ niệm Quốc khánh… Mà học Bác phải trở thành nhu cầu văn hóa, yếu tố tự giác, thúc đẩy nội tâm bên trong của mỗi con người. Điểm mới của việc học tập và làm theo Bác là không coi đó là cuộc vận động có tính chất hành chính, mà nó trở thành nhu cầu văn hóa thường xuyên, tránh những chuyện phù phiếm, hình thức, lãng phí, hướng tới sự thiết thực, nhất là việc làm theo Bác.

Trong bối cảnh tình hình hiện nay, việc thực hiện Chỉ thị đó là rất quan trọng, có ý nghĩa trên rất nhiều phương diện. Thứ nhất, việc học tập tiếp tục cho chúng ta một động lực tinh thần để củng cố niềm tin vào lý tưởng, mục tiêu độc lập dân tộc và chủ nghĩa xã hội mà sinh thời Bác đã dồn công sức vào để thực hiện, chúng ta tiếp tục thực hiện sự nghiệp đó của Bác.

Thứ hai, học tập và làm theo tấm gương đạo đức của Bác để đẩy mạnh việc thực hiện Nghị quyết Trung ương 4 khóa XI về những vấn đề cấp bách trong xây dựng Đảng. Sinh thời Bác là người sáng lập ra Đảng, Bác dày công rèn luyện Đảng ta thành một Đảng chân chính cách mạng. Trước tình trạng một bộ phận không nhỏ cán bộ, đảng viên suy thoái về tư tưởng, đạo đức và lối sống như Nghị quyết Trung ương 4 khóa XI đã nhấn mạnh. Đáng lo ngại, bộ phận này lại thuộc về đội ngũ lãnh đạo quản lý các cấp. Việc học tập, làm theo Bác là một biện pháp tích cực để chỉnh đốn Đảng, làm cho Đảng trong sạch, vững mạng, xứng đáng là người lãnh đạo của nhân dân, xứng đáng với niềm tin, sự kỳ vọng của nhân dân.

Còn một lý do nữa khiến cuộc học tập lần này có ý nghĩa khi Đảng ta sắp sửa tổ chức Đại hội Đảng lần thứ XII. Đại hội Đảng sắp tới cũng là thời điểm công cuộc đổi mới của đất nước ta tròn 30 năm, Đảng sẽ tổng kết những vấn đề trọng yếu về lý luận và thực tiễn dưới ánh sáng tư tưởng Hồ Chí Minh. Và để tìm được những đột phá trong sự phát triển của dân tộc, của đất nước do Đảng lãnh đạo thì hơn lúc nào hết cần vận dụng tư tưởng, đạo đức, phương pháp và phong cách Hồ Chí Minh vào cuộc sống hằng ngày của chúng ta.

Năm 2015 là năm có hàng loạt sự kiện quan trọng. Chúng ta kỷ niệm 40 năm thống nhất đất nước –thực hiện xuất sắc một trong những lời thề với Bác khi vĩnh biệt Người “quyết tâm giải phóng miền Nam để thỏa lòng mong ước của Người”. Năm nay chúng ta cũng kỷ niệm 50 năm Bác viết Di chúc. Bản Di chúc chỉ có 1.000 từ thôi nhưng Bác dặn dò không sót một điều gì trong công cuộc kháng chiến chống Mỹ lúc bấy giờ, Bác trù tính cả việc xây dựng đất nước đàng hoàng hơn, to đẹp hơn trong tương lai, Bác dặn phải “giữ gìn sự đoàn kết trong Đảng như giữ gìn con ngươi của mắt mình”. Bác còn dặn công việc đầu tiên là công việc với con người. Trong bản Di chúc lịch sử đó, Bác đã kín đáo gửi vào 2 định nghĩa quan trọng. Một là định nghĩa về chủ nghĩa xã hội trong câu cuối của bản Di chúc: “Điều mong muốn cuối cùng của tôi là toàn Đảng, toàn dân đoàn kết một lòng, xây dựng thành công một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, góp phần xứng đáng vào cách mạng thế giới”. Đó chính là định nghĩa về chủ nghĩa xã hội mà Đảng ta đưa nguyên văn tinh thần vào trong Cương lĩnh của Đảng, trong văn kiện chính trị của Đảng.

Trong lần sửa Di chúc vào năm 1968, Bác có trù tính là giải phóng miền Nam xong, theo ý Bác “việc đầu tiên phải làm là chỉnh đốn Đảng” và “phải có chủ trương, chính sách thật cụ thể, đúng đắn, tránh rơi vào thiếu sót, bị động và sai lầm để lo cuộc sống cho dân, hàn gắn vết thương chiến tranh, phát triển đất nước”. Bác căn dặn rằng “đây sẽ là một cuộc chiến đấu khổng lồ giữa cái tốt tươi, mới mẻ và những cái xấu xa, hư hỏng, lỗi thời. Phải dựa vào dân, tập hợp dân thành lực lượng, thành phong trào để dân thực hiện”.

46 năm kể từ khi Bác mất, đọc lại bản Di chúc ta mới thấm thía một điều rằng đó chính là định nghĩa của Bác về đổi mới. Bản Di chúc chứa đựng những giá trị rất thiêng liêng và chính thức được xếp vào danh mục bảo vật quốc gia. Bản Di chúc cũng là động lực cho chúng ta trong việc học tập và làm theo tấm gương đạo đức của Bác.

Năm nay chúng ta còn kỷ niệm 60 năm Bác và Trung ương từ núi rừng về Hà Nội sau chiến thắng Điện Biên Phủ; kỷ niệm 70 năm thành lập nước và 85 năm lịch sử Đảng. Bao nhiêu ngày kỷ niệm năm nay càng khiến chúng ta học tập và làm theo Bác, để có sức mạnh tinh thần giúp toàn Đảng, toàn dân ta vượt qua khó khăn, hướng tới phía trước, thực hiện phát triển bền vững.

Học Bác để hành động

GS. TS Hoàng Chí Bảo nhấn mạnh, sở dĩ Đảng ta chủ trương tiếp tục học tập và làm theo Bác bởi thực tế đã cho thấy việc học tập thời gian vừa qua tuy có những kết quả nhất định nhưng cũng không tránh khỏi những nhược điểm và hạn chế. Hạn chế lớn nhất chúng ta phải rút kinh nghiệm là phải khắc phục tính hình thức, tính phô trương, nhiều khi lãng phí thời giờ và tiền của, nó xa lạ với phong cách của Bác là tiết kiệm. Học thế nào cho thực chất, học để hành động chứ không phải học để nâng cao nhận thức mà không hành động. Cần phải học nhất ở phong cách của Bác là nói ít, làm nhiều, chủ yếu là hành động; đã nói là phải làm, nhất quán với nhau; chỉ có như thế thì mới được dân tin. Phải tách rời những nhược điểm đã có: Tách rời giữa học và làm; khắc phục bệnh hình thức phô trương, học Bác một cách thiết thực.

Chưa kể cán bộ, đảng viên, nhân dân thường học Bác mà càng làm lãnh đạo quản lý càng phải học, càng giữ trọng trách lớn của Đảng và Nhà nước càng phải làm tấm gương học tập và làm theo Bác.

Bác giản dị chứ không hề giản đơn

Trả lời câu hỏi: “Từ thực tiễn của những năm tháng học tập Bác như vừa qua, có điều gì cần nhấn mạnh, rút kinh nghiệm?”, GS. TS Hoàng Chí Bảo lưu ý là từ nay trở đi, cuộc vận động phải biến thành nhu cầu, tình cảm, tư tưởng của mỗi một người, của mỗi tổ chức, mỗi cơ quan. Tức là biến việc học tập, làm theo Bác như một nhu cầu văn hóa chứ không còn là cuộc vận động mang tính chất hành chính. Chính vì vậy giờ ta bỏ cụm từ “Cuộc vận động”.

Hai nữa, Bác không chỉ có tấm gương đạo đức, trước hết Bác là một nhà tư tưởng, những tư tưởng của Bác có thể nói là ở tầm chiến lược về cách mạng Việt Nam và cả dự báo, tiên tri về tương lai. Học Bác là học toàn diện các tư tưởng lẫn đạo đức, phương pháp và phong cách. Có lần Đảng ta đã nhấn mạnh, học Bác là học phong cách quần chúng, phong cách dân chủ, phong cách nêu gương, học Bác về đạo đức cách mạng, học Bác về thực hành.

Đời Bác có rất nhiều thực hành tiêu biểu. Một là thực hành lý luận gắn với thực tiễn, chứ không bao giờ lý luận suông cũng như không bao giờ thực tiễn tách rời lý luận. Ta nhớ lời của Bác: “Lý luận mà không áp dụng vào thực tiễn là một lý luận suông vô ích. Thực hành mà không có lý luận soi sáng là một thực hành mù quáng và phiêu lưu”. Bác luôn gắn chặt lý luận và thực tiễn là một. Đó là sự thực hành rất lớn của Bác.

Thứ hai, Bác là một người thực hành dân chủ, dân chủ trong Đảng, dân chủ trong Nhà nước, dân chủ trong ứng xử với nhân dân.

Thứ ba, Bác cũng là một mẫu mực của thực hiện dân vận. Dân vận là thực hành vận động quần chúng làm cách mạng, đem lại lợi quyền cho dân, không bỏ sót, phí phạm một tài năng nào. Bác dặn chúng ta, muốn dân vận tốt phải tránh xa tình trạng bàn giấy, quan liêu, “chỉ tay năm ngón”, mắt nhìn, óc nghĩ, tai nghe, miệng nói, chân đi, tay làm thì dân mới tin.

Thứ tư là thực hành đoàn kết và đại đoàn kết, đây là thực hành ở tầm chiến lược của Bác. Bác là linh hồn của khối đại đoàn kết toàn dân tộc, Bác tổng kết “Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công”.

Thứ năm là thực hành đạo đức cách mạng xoay quanh 4 chuẩn mực đạo đức: Cần, kiệm, liêm chính, chí công vô tư.

Theo GS. TS Hoàng Chí Bảo, năm thực hành đó toát lên toàn bộ sự vĩ đại của tư tưởng, đạo đức Hồ Chí Minh. Vì vậy học tập, làm theo Bác là học tư tưởng chứ không chỉ riêng đạo đức và tấm gương đạo đức. Đó là chỗ mà cán bộ, nhất là cán bộ quản lý phải thấm nhuần.

GS. TS Hoàng Chí Bảo cho hay có rất nhiều biện pháp, giải pháp khiến việc học tập, làm theo Bác có chất lượng hơn, có hiệu quả hơn? Mỗi cơ quan, mỗi tổ chức, mỗi người có thể tự suy nghĩ về vấn đề này. Nhưng theo Giáo sư, có một số giải pháp rất quan trọng.

Giải pháp thứ nhất là phải giáo dục về nhận thức khoa học, làm cho từ lãnh đạo quản lý đến đảng viên và quần chúng nhân dân hiểu rõ học Bác lúc này là học cái gì, học để làm gì và học như thế nào. Đó là giáo dục từ trong nhận thức, nhận thức cho hết sự vĩ đại, sự cao quý của Bác. Bác là sự kết hợp của vĩ đại với giản dị.

Thứ hai, học Bác là để làm tròn trách nhiệm được giao hiện nay, học bằng cái tâm, cái đức của chính mình: Động cơ phải trong sáng, hay nói như Bác là phải đặt việc công lên trên hết - “dĩ công vi thượng”. Học Bác là học chân thành, đoàn kết, học Bác là học “trọng dân, trọng pháp"… Phải hiểu đúng Bác thì học Bác mới có ý nghĩa. Học Bác một cách sáng tạo chứ không bắt chước, không giáo điều. Bác giản dị chứ không hề giản đơn.

Có nhiều người nhầm, đáng lẽ học Bác để làm tốt công việc được giao thì lại học Bác ở cách ăn vận giản dị quần nâu, áo vải… Tầm vóc của Bác là lãnh tụ, chúng ta chỉ là người bình thường, không thể bắt chước Bác hết ở ngoại hình bên ngoài được. Chỉ có một Hồ Chí Minh nhưng có hàng triệu triệu người học tập được đạo đức của Hồ Chí Minh.

Như vậy, giải pháp thứ nhất là tiếp tục giáo dục nhận thức khoa học, nhất là đối với thế hệ trẻ, đặc biệt là đối với đội ngũ cán bộ quản lý trong Đảng. Đảng ta hiện có 4 triệu đảng viên. Nếu 4 triệu đảng viên này học tập và làm theo tấm gương Bác thì đã có một sức mạnh ghê gớm, đất nước sẽ phát triển tốt đẹp; nhân dân sẽ gắn bó với Đảng, chế độ sẽ bền vững.

Tiếp đó, phải có quy định rõ ràng về chế độ trách nhiệm, trước hết là của người đứng đầu các cơ quan đoàn thể, trách nhiệm của người đứng đầu cấp ủy… phải chịu trách nhiệm trước nhân dân, chịu trách nhiệm về tất cả những việc lớn-nhỏ xảy ra trong địa phương, trong phạm vi công việc của mình. Cái yếu của chúng ta là đùn đẩy trách nhiệm, chính vì thiếu vắng trách nhiệm mới “đẻ” ra quan liêu, tham nhũng.

Học Bác một cách thiết thực hiện nay là: Tiết kiệm, chống lãng phí, tập trung sức để chống bằng được quan liêu trong thể chế Nhà nước và chống bằng được “quốc nạn” tham nhũng. Chỉ có thể chống được tham nhũng nếu như minh bạch, thiếu minh bạch chính là mảnh đất màu mỡ cho tham nhũng. Muốn chống tham nhũng phải tăng cường kiểm soát của nhân dân, căn cứ vào tiếng nói của dân và sức mạnh của thông tin đại chúng để kiểm soát hành vi cán bộ và dùng luật pháp để nghiêm trị. Nói như Bác, trừng trị tất cả những kẻ bất liêm, bất kể họ là ai. Nếu bây giờ nỗ lực của toàn Đảng, toàn dân khắc phục được tham nhũng, giảm thiểu được tham nhũng tiến tới đẩy lùi được tham nhũng chính là cách học tập Bác tốt nhất. Tham nhũng chính là làm hại dân, tổn hại đất nước. Chống được tham nhũng là sẽ phục vụ được nhân dân.

Cuối cùng, làm thế nào để chúng ta xây dựng được nền tảng văn hóa, lấy tư tưởng đạo đức Hồ Chí Minh làm cốt lõi. Chúng ta thực hành Nghị quyết về văn hóa của Đảng thông qua việc học tập và làm theo tấm gương, đạo đức Bác Hồ. Văn hóa đạo đức trong ứng xử với nhau, văn hóa đạo đức trong Đảng, nhất là vấn đề dân chủ trong Nhà nước pháp quyền. Văn hóa trong hệ thống chính trị, trong các đoàn thể quần chúng và làm sao ở đâu, lúc nào chúng ta cũng tôn trọng tiếng nói của người dân, tôn trọng quyền làm chủ của nhân dân và làm mọi việc để đem lại lợi ích cho nhân dân. Được lòng dân lúc này sẽ củng cố được sự bền vững của Đảng, của chế độ. Đó cũng là mong muốn lớn nhất của Bác. Bác chỉ mong cho Đảng đoàn kết, mong cho Nhà nước đúng là “của dân, do dân, vì dân”. Bác chỉ mong toàn dân tộc đoàn kết một lòng để xây dựng một nước Việt Nam hiện đại.

Phương Liên`,
      en: `Commemorating the 125th anniversary of beloved Uncle Ho's birth (May 19, 1890 - May 19, 2015), Professor Dr. Hoang Chi Bao - Senior Expert of the Central Theoretical Council shared profound exchanges with Government Electronic Newspaper reporters about learning and following His example in the current period.

Learning Uncle Ho from the Heart

The campaign to learn and follow Uncle Ho's moral example was officially launched by our Party in 2007, nearly 10 years ago. Directive 03-CT/TW of the Politburo (11th term) on continuing to promote learning and following Ho Chi Minh's moral example reflects our Party's policy that learning and following Uncle Ho's moral example will no longer be an administrative campaign like before. It will no longer be simply learning Uncle Ho during festivals like commemorating Uncle Ho's birthday, National Day... But learning Uncle Ho must become a cultural need, a conscious element that promotes the inner self of each person. The new point of learning and following Uncle Ho is not to consider it an administrative campaign, but it becomes a regular cultural need, avoiding superficial, formal, wasteful matters, toward practicality, especially following Uncle Ho.

In the current context, implementing that Directive is very important and meaningful in many aspects. First, continued learning gives us spiritual motivation to strengthen faith in the ideals and goals of national independence and socialism that Uncle Ho devoted his efforts to achieve during his lifetime, and we continue to realize Uncle Ho's cause.

Second, learning and following Uncle Ho's moral example to promote the implementation of Resolution of the 4th Central Committee, 11th term on urgent issues in Party building. During his lifetime, Uncle Ho was the founder of the Party, Uncle Ho worked hard to train our Party into a truly revolutionary Party. Faced with the situation of a significant portion of cadres and party members declining in ideology, morality and lifestyle as emphasized by Resolution of the 4th Central Committee, 11th term. Worryingly, this portion belongs to the leadership and management team at all levels. Learning and following Uncle Ho is a positive measure to rectify the Party, make the Party clean and strong, worthy of being the people's leader, worthy of the people's trust and expectations.

Another reason making this learning meaningful is when our Party is about to organize the 12th Party Congress. The upcoming Party Congress is also the time when our country's renovation work turns 30 years old, the Party will summarize key theoretical and practical issues under the light of Ho Chi Minh thought. And to find breakthroughs in the development of the nation and country led by the Party, more than ever we need to apply Ho Chi Minh's thought, morality, methods and style to our daily lives.

2015 is a year with a series of important events. We commemorate 40 years of national reunification - excellently fulfilling one of the promises to Uncle Ho when bidding farewell to Him "determined to liberate the South to satisfy His wish." This year we also commemorate 50 years since Uncle Ho wrote his Testament. The Testament has only 1,000 words but Uncle Ho instructed without missing anything in the anti-American resistance at that time, Uncle Ho planned the construction of a more proper and beautiful country in the future, Uncle Ho instructed to "preserve Party unity like protecting the pupil of one's eye." Uncle Ho also instructed that the first job is working with people. In that historic Testament, Uncle Ho subtly included 2 important definitions. One is the definition of socialism in the last sentence of the Testament: "My ultimate wish is that the entire Party and people unite as one to successfully build a peaceful, unified, independent, democratic and prosperous Vietnam, making a worthy contribution to world revolution." That is the definition of socialism that our Party incorporated the original spirit into the Party Platform, in the Party's political documents.

In the 1968 revision of the Testament, Uncle Ho planned that after liberating the South, according to Uncle Ho "the first thing to do is rectify the Party" and "must have specific, correct policies and guidelines, avoiding shortcomings, passivity and mistakes to care for people's lives, heal war wounds, develop the country." Uncle Ho advised that "this will be a gigantic battle between the good, fresh, new things and the bad, corrupt, outdated things. Must rely on the people, gather people into forces, into movements for people to implement."

46 years since Uncle Ho passed away, re-reading the Testament we deeply realize that it is Uncle Ho's definition of renovation. The Testament contains very sacred values and is officially listed as a national treasure. The Testament is also motivation for us in learning and following Uncle Ho's moral example.

This year we also commemorate 60 years since Uncle Ho and the Central Committee returned from the mountains to Hanoi after the Dien Bien Phu victory; commemorate 70 years of nation-building and 85 years of Party history. So many commemorative days this year make us learn and follow Uncle Ho more, to have spiritual strength to help our entire Party and people overcome difficulties, move forward, achieve sustainable development.

Learning Uncle Ho to Act

Professor Dr. Hoang Chi Bao emphasized that our Party advocates continuing to learn and follow Uncle Ho because reality has shown that learning in the recent period, although achieving certain results, also has inevitable shortcomings and limitations. The biggest limitation we must learn from is overcoming formalism and showiness, sometimes wasting time and money, which is foreign to Uncle Ho's frugal style. How to learn substantially, learn to act rather than learn to raise awareness without action. We must learn most from Uncle Ho's style of speaking little, doing much, mainly acting; once said must be done, consistent with each other; only then will people trust. Must separate existing shortcomings: Separation between learning and doing; overcome the disease of formalism and showiness, learn Uncle Ho practically.

Not to mention that cadres, party members, and people usually learn Uncle Ho, but the more one does leadership and management, the more one must learn, the more one holds great responsibilities of the Party and State, the more one must be an example of learning and following Uncle Ho.

Uncle Ho is Simple but Not Simplistic

Answering the question: "From the practice of learning Uncle Ho in recent years, what needs to be emphasized and learned?", Professor Dr. Hoang Chi Bao noted that from now on, the movement must become the need, emotion, and thought of each person, each organization, each agency. That is, turning learning and following Uncle Ho into a cultural need rather than an administrative campaign. Therefore, we now drop the phrase "Campaign."

Furthermore, Uncle Ho not only has a moral example, first of all Uncle Ho is a thinker, Uncle Ho's thoughts can be said to be at the strategic level of Vietnamese revolution and even forecasts and prophecies about the future. Learning Uncle Ho is comprehensively learning thoughts and morality, methods and style. Our Party once emphasized that learning Uncle Ho is learning mass style, democratic style, exemplary style, learning Uncle Ho about revolutionary morality, learning Uncle Ho about practice.

Uncle Ho's life had many representative practices. One is the practice of theory combined with reality, never pure theory nor practice separated from theory. We remember Uncle Ho's words: "Theory not applied to practice is useless empty theory. Practice without theory to illuminate is blind and adventurous practice." Uncle Ho always closely combined theory and practice as one. That is Uncle Ho's very great practice.

Second, Uncle Ho is a practitioner of democracy, democracy in the Party, democracy in the State, democracy in dealing with people.

Third, Uncle Ho is also a model of implementing mass mobilization. Mass mobilization is the practice of mobilizing masses to make revolution, bringing rights and benefits to people, not missing or wasting any talent. Uncle Ho instructed us that to do good mass work must stay away from desk work, bureaucracy, "pointing with five fingers", eyes see, mind thinks, ears hear, mouth speaks, feet walk, hands work then people will trust.

Fourth is practicing unity and great unity, this is Uncle Ho's strategic-level practice. Uncle Ho is the soul of the great national unity bloc, Uncle Ho concluded "Unity, unity, great unity. Success, success, great success."

Fifth is practicing revolutionary morality revolving around 4 moral standards: Diligence, frugality, integrity, selflessness.

According to Professor Dr. Hoang Chi Bao, those five practices reveal the entire greatness of Ho Chi Minh's thought and morality. Therefore, learning and following Uncle Ho is learning thought, not just morality and moral example. That is what cadres, especially management cadres, must thoroughly understand.

Professor Dr. Hoang Chi Bao said there are many measures and solutions to make learning and following Uncle Ho more quality and effective. Each agency, organization, person can think about this issue themselves. But according to the Professor, there are some very important solutions.

The first solution is to educate about scientific awareness, making leaders, managers, party members and people clearly understand what to learn from Uncle Ho now, what to learn for and how to learn. That is education from within awareness, awareness of Uncle Ho's greatness and nobility. Uncle Ho is the combination of greatness with simplicity.

Second, learning Uncle Ho is to fulfill current assigned responsibilities, learning with one's own heart and virtue: Motives must be pure, or as Uncle Ho said, must put public work above all - "prioritize public service." Learning Uncle Ho is learning sincerity, unity, learning Uncle Ho is learning "respect people, respect law"... Must understand Uncle Ho correctly for learning Uncle Ho to be meaningful. Learn Uncle Ho creatively, not imitating, not dogmatic. Uncle Ho is simple but not simplistic.

Many people misunderstand, instead of learning Uncle Ho to do assigned work well, they learn Uncle Ho in simple dressing like brown pants, cloth shirts... Uncle Ho's stature is a leader, we are ordinary people, cannot imitate Uncle Ho completely in external appearance. There is only one Ho Chi Minh but millions of people can learn Ho Chi Minh's morality.

Thus, the first solution is to continue scientific awareness education, especially for the young generation, particularly for the management cadre team in the Party. Our Party currently has 4 million party members. If these 4 million party members learn and follow Uncle Ho's example, there will be tremendous strength, the country will develop well; people will be attached to the Party, the regime will be sustainable.

Next, there must be clear regulations on responsibility systems, first of all of heads of mass organizations, responsibilities of heads of party committees... must be responsible to the people, responsible for all big and small matters occurring in localities, within their work scope. Our weakness is shifting responsibility, precisely because of lack of responsibility that breeds bureaucracy and corruption.

Learning Uncle Ho practically now is: Being frugal, fighting waste, concentrating efforts to fight bureaucracy in state institutions and fight the "national disaster" of corruption. Corruption can only be fought if there is transparency, lack of transparency is fertile ground for corruption. To fight corruption must strengthen people's control, based on people's voice and mass media power to control cadre behavior and use law to strictly handle. As Uncle Ho said, punish all dishonest people regardless of who they are. If now the efforts of the entire Party and people overcome corruption, minimize corruption toward pushing back corruption, that is the best way to learn Uncle Ho. Corruption harms people and damages the country. Fighting corruption will serve the people.

Finally, how do we build a cultural foundation with Ho Chi Minh's thought and morality as the core. We implement the Party's Resolution on culture through learning and following Uncle Ho's example and morality. Moral culture in dealing with each other, moral culture in the Party, especially the issue of democracy in the rule of law state. Culture in the political system, in mass organizations and how everywhere, anytime we respect people's voice, respect people's mastery rights and do everything to bring benefits to people. Winning people's hearts now will consolidate the sustainability of the Party and regime. That is also Uncle Ho's greatest wish. Uncle Ho only wished for Party unity, wished for the State to truly be "of the people, by the people, for the people." Uncle Ho only wished for the entire nation to unite as one to build a modern Vietnam.

Phuong Lien`,
      ja: `愛するホーおじさん生誕125周年記念（1890年5月19日〜2015年5月19日）にあたり、中央理論評議会の上級専門家であるホアン・チ・バオ教授博士は、政府電子新聞の記者に対し、現在の時期における彼の模範に学び従うことについて深い見解を交換しました。

心からホーおじさんに学ぶ

ホーおじさんの道徳的模範に学び従う運動は、2007年に我が党によって正式に開始され、現在までに約10年になります。政治局（第11期）の指示03-CT/TWは、ホー・チ・ミンの道徳的模範に学び従うことを継続して推進することについて、我が党の方針を表しており、ホーおじさんの道徳的模範に学び従うことは、もはや以前のような行政的キャンペーンではなくなります。それはもはや、ホーおじさんの誕生日記念や建国記念日のような祭日にただ単純にホーおじさんを学ぶことではありません。ホーおじさんに学ぶことは、文化的ニーズ、自覚的要素となり、各人の内面を促進するものでなければなりません。ホーおじさんに学び従うことの新しい点は、それを行政的性質のキャンペーンとは考えず、それが定期的な文化的ニーズとなり、表面的、形式的、無駄なことを避け、実践的なこと、特にホーおじさんに従うことに向かうことです。

現在の状況において、その指示の実施は非常に重要であり、多くの側面で意義があります。第一に、継続的な学習は、ホーおじさんが生涯をかけて実現に努力した民族独立と社会主義の理想と目標への信念を強化する精神的動機を与え、我々はホーおじさんのその事業を継続して実現します。

第二に、ホーおじさんの道徳的模範に学び従うことで、党建設における緊急課題に関する第11期中央委員会第4回決議の実施を促進します。生前、ホーおじさんは党の創設者であり、ホーおじさんは我が党を真の革命党に訓練することに努力しました。第11期中央委員会第4回決議で強調されたように、少なからぬ幹部・党員が思想、道徳、生活様式において衰退している状況に直面しています。憂慮すべきことに、この部分は各級の指導管理チームに属しています。ホーおじさんに学び従うことは、党を正し、党を清潔で強固にし、人民の指導者にふさわしく、人民の信頼と期待にふさわしくする積極的な措置です。

この学習が意義を持つもう一つの理由は、我が党が第12回党大会の開催を準備している時だからです。今度の党大会は、我が国の刷新事業が30年を迎える時でもあり、党はホー・チ・ミン思想の光の下で理論と実践の重要問題を総括します。そして党が指導する民族と国の発展における突破口を見つけるために、これまで以上にホー・チ・ミンの思想、道徳、方法、スタイルを我々の日常生活に適用する必要があります。

2015年は一連の重要な出来事がある年です。我々は国土統一40周年を記念します - 彼に別れを告げる際のホーおじさんへの約束の一つ「南部解放を決意して彼の願いを満たす」を見事に実現しました。今年我々はホーおじさんが遺言を書いてから50周年も記念します。遺言はわずか1,000語でしたが、ホーおじさんは当時の抗米戦争において何一つ見落とすことなく指導し、ホーおじさんは将来のより適切で美しい国づくりまで計画し、ホーおじさんは「自分の瞳を守るように党の団結を保つ」よう指導しました。ホーおじさんは最初の仕事は人との仕事だとも指導しました。その歴史的遺言において、ホーおじさんは密かに2つの重要な定義を込めました。一つは遺言の最後の文における社会主義の定義です：「私の最終的な願いは、全党、全人民が心を一つにして団結し、平和で統一された独立民主的で豊かで強いベトナムの建設を成功させ、世界革命に相応しい貢献をすることです」。それは我が党が党綱領、党の政治文書に原文の精神を取り入れた社会主義の定義です。

1968年の遺言修正で、ホーおじさんは南部解放後、ホーおじさんの意向によると「最初にすべきことは党の是正」であり、「具体的で正確な方針・政策を持ち、欠陥、受身、誤りに陥ることを避けて人民の生活を心配し、戦争の傷を癒し、国を発展させる」必要があると計画しました。ホーおじさんは「これは良い新鮮な新しいものと悪い腐敗した時代遅れなものとの間の巨大な戦いになるだろう。人民に依拠し、人民を力に、運動にまとめて人民が実現する」よう指導しました。

ホーおじさんが亡くなってから46年、遺言を読み返して我々は深く、それがホーおじさんの刷新の定義であることを理解します。遺言は非常に神聖な価値を含んでおり、正式に国宝リストに分類されています。遺言は我々がホーおじさんの道徳的模範に学び従う動機でもあります。

今年我々はディエンビエンフー勝利後にホーおじさんと中央委員会が山林からハノイに戻って60周年も記念し、建国70周年と党史85周年を記念します。今年のこれらの記念日は、我々がホーおじさんに学び従うことを一層促し、全党・全人民が困難を乗り越え、前進し、持続可能な発展を実現するための精神的力を持つようにします。

行動するためにホーおじさんに学ぶ

ホアン・チ・バオ教授博士は、我が党がホーおじさんに学び従うことを継続して主張する理由は、現実が最近の学習期間において一定の結果を達成したものの、避けられない欠点と限界もあることを示しているからだと強調しました。我々が経験から学ばなければならない最大の限界は、形式主義と見せびらかしを克服することであり、時として時間と金を無駄にし、それはホーおじさんの質素なスタイルとは異質です。どのように実質的に学び、認識を高めるだけでなく行動するために学ぶか。ホーおじさんのスタイルから最も学ぶべきは、少し話し、多く行い、主に行動することです；言ったことは必ずやり、一貫していること；そうしてこそ人民に信頼されます。既存の欠点を分離しなければなりません：学習と実行の分離；形式主義と見せびらかしの病気を克服し、実践的にホーおじさんに学ぶこと。

幹部、党員、人民が通常ホーおじさんに学ぶだけでなく、指導管理をすればするほど学ばなければならず、党と国家の大きな責任を担えば担うほどホーおじさんに学び従う模範とならなければなりません。

ホーおじさんは素朴だが単純ではない

「最近のホーおじさんに学ぶ年月の実践から、何を強調し経験を得るべきか？」という質問に答えて、ホアン・チ・バオ教授博士は、今後、運動は各人、各組織、各機関の需要、感情、思想にならなければならないと注意しました。つまり、ホーおじさんに学び従うことを文化的需要に変え、もはや行政的性質のキャンペーンではなくすることです。そのため今我々は「キャンペーン」という表現を取り除きます。

さらに、ホーおじさんは道徳的模範だけでなく、まずホーおじさんは思想家であり、ホーおじさんの思想はベトナム革命について戦略的レベルにあり、将来についての予測と予言さえもあると言えます。ホーおじさんに学ぶことは、思想と道徳、方法とスタイルを包括的に学ぶことです。我が党はかつて強調しました、ホーおじさんに学ぶことは大衆スタイル、民主的スタイル、模範スタイルを学ぶこと、ホーおじさんの革命道徳について学ぶこと、ホーおじさんの実践について学ぶことです。

ホーおじさんの生涯には多くの代表的な実践がありました。一つは理論を現実と結合させた実践であり、決して空論でも理論から切り離された実践でもありませんでした。我々はホーおじさんの言葉を覚えています：「実践に適用されない理論は無用な空論である。理論によって照らされない実践は盲目的で冒険的な実践である」。ホーおじさんは常に理論と実践を一つとして密接に結合させました。それはホーおじさんの非常に大きな実践です。

第二に、ホーおじさんは民主主義の実践者でした。党における民主主義、国家における民主主義、人民との対応における民主主義。

第三に、ホーおじさんは大衆動員実施の模範でもありました。大衆動員は革命をするために大衆を動員し、人民に権利と利益をもたらし、いかなる才能も見逃したり無駄にしたりしない実践です。ホーおじさんは我々に、良い大衆工作をしたければ机上の空論、官僚主義、「五本指で指す」こと、目で見、頭で考え、耳で聞き、口で話し、足で歩き、手で働いてこそ人民が信頼すると指導しました。

第四は団結と大団結の実践で、これはホーおじさんの戦略レベルの実践です。ホーおじさんは偉大な民族大団結ブロックの魂であり、ホーおじさんは「団結、団結、大団結。成功、成功、大成功」と総括しました。

第五は4つの道徳基準を中心とした革命道徳の実践です：勤勉、質素、廉潔、公私混同しないこと。

ホアン・チ・バオ教授博士によると、これらの5つの実践はホー・チ・ミンの思想と道徳の全ての偉大さを表しています。そのためホーおじさんに学び従うことは思想を学ぶことであり、道徳と道徳的模範だけではありません。それは幹部、特に管理幹部が深く理解しなければならないことです。

ホアン・チ・バオ教授博士は、ホーおじさんに学び従うことをより質の高く効果的にする多くの措置と解決策があると言いました。各機関、各組織、各人がこの問題について自分で考えることができます。しかし教授によると、いくつかの非常に重要な解決策があります。

第一の解決策は科学的認識について教育することで、指導管理者から党員・人民大衆まで、今ホーおじさんに学ぶとは何を学ぶのか、何のために学ぶのか、どのように学ぶのかを明確に理解させることです。それは認識内での教育、ホーおじさんの偉大さと高潔さを完全に認識する教育です。ホーおじさんは偉大さと素朴さの結合です。

第二に、ホーおじさんに学ぶことは現在与えられた責任を全うするためであり、自分の心と徳で学ぶことです：動機は純粋でなければならず、ホーおじさんの言葉で言えば公務を何よりも優先しなければなりません - 「公を重んじる」。ホーおじさんに学ぶことは誠実さ、団結を学ぶこと、ホーおじさんに学ぶことは「人民を重んじ、法を重んじる」ことを学ぶことです...ホーおじさんを正しく理解してこそホーおじさんに学ぶことが意義を持ちます。創造的にホーおじさんに学び、模倣や教条主義ではありません。ホーおじさんは素朴だが単純ではありません。

多くの人が間違えて、与えられた仕事をうまくやるためにホーおじさんに学ぶべきなのに、茶色のズボンや布の服といった質素な服装でホーおじさんに学んでいます...ホーおじさんの格は指導者であり、我々はただの普通の人で、外見でホーおじさんを完全に模倣することはできません。ホー・チ・ミンは一人しかいませんが、何百万人もがホー・チ・ミンの道徳を学ぶことができます。

このように、第一の解決策は科学的認識教育を継続することで、特に若い世代、特に党の管理幹部チームに対してです。我が党は現在400万人の党員がいます。この400万人の党員がホーおじさんの模範に学び従えば、恐るべき力を持ち、国は良好に発展し、人民は党に結びつき、体制は持続可能になります。

次に、責任制度について明確な規定が必要で、まず各機関・団体の長、党委員会の長の責任...人民に対して責任を負い、地方で、自分の仕事の範囲で起こる大小すべての事柄について責任を負わなければなりません。我々の弱点は責任転嫁であり、責任の欠如こそが官僚主義と腐敗を「生む」のです。

現在実践的にホーおじさんに学ぶことは：質素、浪費との闘い、国家制度における官僚主義と闘い、腐敗という「国難」と闘うことに力を集中することです。透明性があってこそ腐敗と闘うことができ、透明性の欠如こそ腐敗の肥沃な土壌です。腐敗と闘うには人民の監視を強化し、人民の声と大衆メディアの力に基づいて幹部の行動を監視し、法律を用いて厳正に処理しなければなりません。ホーおじさんの言葉のように、誰であろうとすべての不廉潔な者を処罰する。今全党・全人民の努力で腐敗を克服し、腐敗を最小化して腐敗を押し戻すことができれば、それがホーおじさんに学ぶ最良の方法です。腐敗こそ人民を害し、国に損害を与えます。腐敗と闘うことは人民に奉仕することです。

最後に、どのようにしてホー・チ・ミンの思想道徳を核心とする文化基盤を築くか。我々はホーおじさんの模範と道徳に学び従うことを通じて党の文化に関する決議を実践します。互いの対応における道徳文化、党における道徳文化、特に法治国家における民主主義の問題。政治制度における文化、大衆団体における文化、そしてどこでも、いつでも人民の声を尊重し、人民の主人としての権利を尊重し、人民に利益をもたらすためにあらゆることを行います。今人民の心を得ることは党と体制の持続性を強化します。それはホーおじさんの最大の願いでもあります。ホーおじさんは党の団結を願い、国家が真に「人民の、人民による、人民のための」ものであることを願いました。ホーおじさんは全民族が心を一つにして現代的なベトナムを建設することだけを願いました。

フォン・リエン`
    },
    url: "https://baochinhphu.vn/tu-tuong-ho-chi-minh-nhung-gia-tri-vinh-cuu-102240518123456789.htm"
  }
];
