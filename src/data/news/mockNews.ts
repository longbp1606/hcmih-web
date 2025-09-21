// Dữ liệu mẫu tin tức
export interface NewsItem {
  id: number;
  title: string;
  desc: string;
  date?: string;
  img: string;
  source: string;
  content?: string;
  url?: string;
}

export const mockNews: NewsItem[] = [
  {
    id: 1,
    title: "Tặng 100.000 đồng/người cho toàn dân ăn Tết Độc lập",
    desc: "(Chinhphu.vn) - Thủ tướng Chính phủ vừa có Công điện số 149/CĐ-TTg ngày 28/8/2025 về việc tặng quà người dân nhân dịp kỷ niệm 80 năm Cách mạng Tháng Tám và Quốc khánh 2/9.",
    date: "28/08/2025  20:36",
    img: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/8/28/195b24ce05fa4c87be5ad4d59fb3b272-17563878953541339404104.jpg",
    source: "Nguồn: baochinhphu.vn",
    content: `Công điện nêu: Trong không khí cả nước tưng bừng phấn khởi chào mừng kỷ niệm 80 năm Cách mạng Tháng Tám và Quốc khánh 2/9, để tiếp tục thể hiện sự quan tâm sâu sắc của Đảng và Nhà nước đối với toàn thể nhân dân, triển khai ý kiến chỉ đạo của đồng chí Tổng Bí thư Tô Lâm, Đảng ủy Chính phủ đã trình Bộ Chính trị về việc tổ chức tặng quà cho người dân nhân dịp kỷ niệm 80 năm Cách mạng Tháng Tám và Quốc khánh 2/9.

Tại văn bản số 17129-CV/VPTW ngày 28 tháng 8 năm 2025 của Văn phòng Trung ương, Bộ Chính trị đã đồng ý về chủ trương tặng quà người dân nhân dịp kỷ niệm 80 năm Cách mạng Tháng Tám và Quốc khánh 2/9.

Để kịp thời triển khai ý kiến chỉ đạo của Bộ Chính trị, Thủ tướng Chính phủ yêu cầu:

1. Bộ Tài chính, Ngân hàng Nhà nước Việt Nam, Bộ Công an và Ủy ban nhân dân các tỉnh, thành phố trực thuộc Trung ương theo chức năng, nhiệm vụ được giao căn cứ ý kiến chỉ đạo của Bộ Chính trị tại văn bản số 17129-CV/VPTW, phối hợp chặt chẽ, triển khai ngay việc rà soát đối tượng nhận quà tặng và thực hiện chuyển phần quà đến người dân bằng biện pháp phù hợp (chuyển khoản hoặc trực tiếp) trong thời gian sớm nhất có thể, xong trước ngày Quốc khánh 02/9/2025.

Mức quà tặng: 100.000 đồng/người dân, cho toàn dân ăn Tết Độc lập.

2. Bộ Tài chính chủ trì, phối hợp với các cơ quan liên quan khẩn trương báo cáo cấp có thẩm quyền quyết định trước ngày 29 tháng 8 năm 2025 bố trí nguồn kinh phí phù hợp để thực hiện, bảo đảm cân đối ngân sách nhà nước.

3. Ngân hàng Nhà nước Việt Nam chỉ đạo các đơn vị có liên quan và các ngân hàng thương mại, nhất là các ngân hàng thương mại nơi Kho bạc nhà nước mở tài khoản, bảo đảm hệ thống thanh toán và tiền mặt, đáp ứng yêu cầu tặng quà cho người dân kịp thời, thông suốt, không để bỏ sót bất kỳ ai và không trùng lắp.

4. Ủy ban nhân dân các tỉnh, thành phố trực thuộc Trung ương chỉ đạo các cơ quan, đơn vị có liên quan trên địa bàn, phối hợp chặt chẽ với Bộ Công an, Bộ Tài chính, Ngân hàng Nhà nước Việt Nam để tổ chức chuyển quà kịp thời, an toàn đến người dân, bảo đảm tiến độ theo yêu cầu.

5. Bộ Văn hóa, Thể thao và Du lịch, Đài Truyền hình Việt Nam, Đài Tiếng nói Việt Nam, Thông tấn xã Việt Nam theo chức năng, nhiệm vụ được giao thực hiện công tác thông tin truyền thông về chính sách nêu trên của Đảng và Nhà nước, tạo không khí phấn khởi, đoàn kết trong nhân dân chào mừng kỷ niệm 80 năm Cách mạng Tháng Tám và Quốc khánh 2/9.

6. Văn phòng Chính phủ theo chức năng, nhiệm vụ được giao, theo dõi, đôn đốc việc thực hiện Công điện này; báo cáo cấp có thẩm quyền những vấn đề vượt thẩm quyền.`,
    url: "https://baochinhphu.vn/tang-100000-dong-nguoi-cho-toan-dan-an-tet-doc-lap-102250828203355315.htm",
  },
  {
    id: 2,
    title:
      "Vận dụng tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội trong công cuộc đổi mới đất nước hiện nay",
    desc: "Chủ tịch Hồ Chí Minh - Anh hùng giải phóng dân tộc, nhà văn hóa lớn. Người đã đến với chủ nghĩa Mác - Lênin, tìm thấy con đường cách mạng vô sản, gắn độc lập dân tộc với chủ nghĩa xã hội.",
    date: "12/06/2025 - 11:37 AM",
    img: "https://th.bing.com/th/id/OIP.IzulhyRGrGmlK4JbShjFCAHaFr?w=213&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    source:
      "ThS BÙI ĐỨC LÝ - Trường Đào tạo cán bộ Nguyễn Văn Cừ, tỉnh Quảng Ninh",
    content: `Tổng quan

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
    url: "https://tapchilichsudang.vn/van-dung-tu-tuong-ho-chi-minh-ve-doc-lap-dan-toc-va-chu-nghia-xa-hoi-trong-cong-cuoc-doi-moi-dat-nuoc-hien-nay.html",
  },
  {
    id: 3,
    title:
      "Toàn văn Nghị quyết Đại hội đại biểu toàn quốc lần thứ XIII của Đảng",
    desc: "(Chinhphu.vn) - Cổng Thông tin điện tử Chính phủ trân trọng giới thiệu toàn văn Nghị quyết Đại hội đại biểu toàn quốc lần thứ XIII của Đảng.",
    date: "26/02/2021  10:03",
    img: "https://th.bing.com/th/id/OIP.5gtumoZBBVTqOOwyV0rcaQHaE7?w=254&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    source: "Nguồn: baochinhphu.vn",
    content: `Đại hội đại biểu toàn quốc lần thứ XIII Đảng Cộng sản Việt Nam họp từ ngày 25/01/2021 đến ngày 01/02/2021, tại Thủ đô Hà Nội, sau khi thảo luận các văn kiện do Ban Chấp hành Trung ương Đảng khoá XII trình,
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
    url: "https://baochinhphu.vn/toan-van-nghi-quyet-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-cua-dang-102288263.htm",
  },
  {
    id: 4,
    title:
      "Các chính sách hỗ trợ rất quan trọng để quyết liệt phục hồi tăng trưởng",
    desc: "(Chinhphu.vn) - Chủ tịch nước Nguyễn Xuân Phúc nhận định, việc phấn đấu quyết liệt để phục hồi, tăng trưởng, hỗ trợ phát triển rất quan trọng. Chính vì thế, có chính sách hỗ trợ, phát triển là điều rất cần thiết trong lúc này.",
    date: "04/01/2022  18:40",
    img: "https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/tranthitiep/2022_01_04/IMG_4657%20(1).JPG",
    source: "Nguồn: baochinhphu.vn",
    content: `Chiều 4/1, tại Kỳ họp bất thường lần thứ nhất, Quốc hội khoá XV, các đại biểu Quốc hội thảo luận ở tổ dự thảo Nghị quyết về chính sách tài khóa, tiền tệ hỗ trợ triển khai Chương trình phục hồi và phát triển kinh tế-xã hội.

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
    url: "https://baochinhphu.vn/cac-chinh-sach-ho-tro-rat-quan-trong-de-quyet-liet-phuc-hoi-tang-truong-102306589.htm",
  },
  {
    id: 5,
    title:
      "Văn hóa là sức mạnh mềm, là 'năng lượng gốc' vô tận của dân tộc Việt Nam",
    desc: "(Chinhphu.vn) - 80 năm xây dựng và phát triển, dưới ánh sáng soi đường của Chủ nghĩa Mác - Lê nin, tư tưởng Hồ Chí Minh, sự lãnh đạo sáng suốt của Đảng và sự quản lý, điều hành của Nhà nước, Ngành Văn hóa, Thể thao và Du lịch đã đồng hành cùng dân tộc vượt qua mọi chặng đường lịch sử.",
    date: "23/08/2025  13:54",
    img: "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2025/8/23/z6936157601335992915d00766325838610554da6d0c8a-17559312207721721037868.jpg",
    source: "Nguồn: baochinhphu.vn",
    content: `Sáng 23/8, Bộ Văn hóa, Thể thao và Du lịch long trọng tổ chức Lễ kỷ niệm 80 năm Ngày truyền thống Ngành Văn hóa (28/8/1945 - 28/8/2025) tại Nhà hát Lớn Hà Nội.

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
    url: "https://baochinhphu.vn/van-hoa-la-suc-manh-mem-la-nang-luong-goc-vo-tan-cua-dan-toc-viet-nam-102250823134859831.htm",
  },
  {
    id: 6,
    title:
      "Phát huy truyền thống, khẳng định vai trò của Tạp chí Cộng sản trong công tác nghiên cứu lý luận",
    desc: "(Chinhphu.vn) - Ngày 28/6, Đảng bộ cơ quan Tạp chí Cộng sản tổ chức Đại hội nhiệm kỳ 2025-2030 với sự tham dự của 128 đảng viên của Đảng bộ. Bí thư Trung ương Đảng, Phó Bí thư Thường trực Đảng ủy các cơ quan Đảng Trung ương, Chánh Văn phòng Trung ương Đảng Lê Hoài Trung dự và chỉ đạo Đại hội.",
    date: "28/06/2025  20:26",
    img: "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2025/6/28/vnapotaltapchicongsantochucdaihoinhiemky2025-2030stand-17511148195191529580531.jpg",
    source: "Nguồn: baochinhphu.vn",
    content: `Phát biểu chỉ đạo Đại hội, đồng chí Lê Hoài Trung cơ bản nhất trí với Báo cáo chính trị, Báo cáo kiểm điểm của Ban Chấp hành Đảng bộ cơ quan Tạp chí Cộng sản cũng như phương hướng, nhiệm vụ, giải pháp trong nhiệm kỳ tới; nhấn mạnh, Đại hội Đảng bộ cơ quan Tạp chí Cộng sản nhiệm kỳ 2025-2030 diễn ra vào thời điểm rất quan trọng.

Đây cũng là giai đoạn Tạp chí Cộng sản bước vào giai đoạn phát triển mới, với mô hình tổ chức, chức năng, nhiệm vụ được bổ sung, cấu trúc lại. Đại hội Đảng bộ nhiệm kỳ 2025 - 2030 là đại hội hướng tới Tạp chí Cộng sản tròn 100 năm ra số đầu.

Do đó, trong thời gian tới, Ban Chấp hành Đảng bộ cơ quan cần thường xuyên và đặc biệt coi trọng công tác xây dựng Đảng, xây dựng Đảng bộ trong sạch, vững mạnh toàn diện; nắm vững chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh; nắm vững đường lối, quan điểm của Đảng.

Bên cạnh đó, Ban Chấp hành Đảng bộ cơ quan tiếp tục coi trọng, củng cố và tăng cường tinh thần đoàn kết, thấm nhuần lời dạy của Chủ tịch Hồ Chí Minh từng căn dặn: "Đoàn kết, đại đoàn kết, thành công, đại thành công"; gìn giữ sự đoàn kết trong Đảng như giữ gìn "con ngươi của mắt mình"...; đồng thời nâng cao chất lượng cấp ủy, tổ chức sinh hoạt Đảng, chất lượng sinh hoạt chi bộ và coi trọng sinh hoạt chi bộ, bảo đảm nền nếp, thiết thực, đúng nguyên tắc.

Đặc biệt, đồng chí Lê Hoài Trung nhấn mạnh, Đảng bộ cơ quan Tạp chí Cộng sản cần phát huy sức mạnh của việc tổ chức sắp xếp lại, sáp nhập trong thời gian vừa qua, không chỉ là tinh gọn bộ máy mà phát huy sức mạnh tổng hợp của việc tổ chức lại đội ngũ cán bộ; đi cùng với đó thực hiện đồng bộ công tác kiểm tra, giám sát.

Tiếp tục phát huy vai trò trong công tác nghiên cứu lý luận, thực hiện mục tiêu là ngọn cờ lý luận của Đảng; triển khai đường lối Đại hội lần thứ XIV của Đảng, gắn với việc nghiên cứu, tuyên truyền các văn kiện, tư tưởng mới trên các lĩnh vực; thúc đẩy hợp tác quốc tế, tranh thủ hiệu quả các nguồn lực phục vụ công tác chuyên môn…

Giữ vững vị trí, vai trò là cơ quan lý luận chính trị của Trung ương Đảng

Báo cáo chính trị trình Đại hội nêu rõ, việc thực hiện mục tiêu, các chỉ tiêu do Đại hội Đảng bộ cơ quan Tạp chí Cộng sản nhiệm kỳ 2020-2025 đề ra cơ bản đạt, một số nội dung có kết quả nổi bật. Mặc dù có thay đổi về cơ cấu tổ chức, bộ máy, nhân sự, nhất là nhân sự chủ chốt, nhiệm vụ tăng thêm, nhiệm kỳ 2020-2025, Đảng ủy, Ban Thường vụ Đảng ủy cơ quan Tạp chí Cộng sản đã lãnh đạo xây dựng Đảng bộ cơ quan Tạp chí Cộng sản trong sạch, vững mạnh.

Một số mặt công tác Đảng có bước chuyển biến tích cực; phối hợp với Ban Biên tập lãnh đạo hoàn thành tốt các nhiệm vụ chính trị.

Công tác xây dựng Đảng ngày càng được chú trọng, hoạt động ngày càng bài bản, chuyên sâu, nhuần nhuyễn. Đảng bộ cơ quan Tạp chí Cộng sản đã hoàn thành khối lượng lớn công việc. Công tác xây dựng Đảng từng bước thể hiện rõ vai trò lãnh đạo toàn diện, có đóng góp quan trọng vào xây dựng và phát triển Đảng bộ, cơ quan Tạp chí Cộng sản.

Công tác xây dựng Đảng về chính trị, tư tưởng, đạo đức đi vào chiều sâu. Công tác tổ chức xây dựng Đảng giúp kiện toàn, nâng tầm tổ chức bộ máy của cơ quan và Đảng bộ, nâng cao chất lượng đảng viên, thực hiện nghiêm công tác bảo vệ chính trị nội bộ.

Công tác kiểm tra, giám sát và kỷ luật đảng ngày càng đi vào nền nếp, bảo đảm quy trình chặt chẽ; đổi mới phương thức lãnh đạo của Đảng toàn diện trên các phương thức cơ bản, giúp nâng cao năng lực lãnh đạo, sức chiến đấu của tổ chức đảng.

Các đoàn thể hoạt động tích cực, là yếu tố quan trọng chăm lo đời sống tinh thần cho cán bộ, đảng viên; công tác đảng vụ hoàn thành khối lượng công việc lớn, giúp Đảng bộ hoạt động, vận hành thuận lợi...

Trong điều kiện chưa nhất thể hóa chức danh Bí thư Đảng ủy và Tổng Biên tập, Đảng ủy cơ quan Tạp chí Cộng sản và Ban Biên tập thực hiện tốt Quy chế phối hợp công tác giữa Đảng ủy và Ban Biên tập trong việc lãnh đạo thực hiện công tác xây dựng Đảng và nhiệm vụ chính trị, cơ bản thông suốt.

Đảng ủy và Ban Biên tập luôn bám sát sự lãnh đạo, chỉ đạo, chương trình nghị sự của Ban Chấp hành Trung ương, Bộ Chính trị, Ban Bí thư, của Ban Thường vụ Đảng ủy các cơ quan Đảng Trung ương; thực hiện các nghị quyết quan trọng "Bộ tứ trụ cột" phù hợp với chức năng, nhiệm vụ của Tạp chí Cộng sản...

Việc phối hợp lãnh đạo thực hiện nhiệm vụ chính trị nghiên cứu, tuyên truyền, bảo vệ, giáo dục, phổ biến lý luận chính trị đạt nhiều kết quả quan trọng, nâng vị thế của Tạp chí. Tạp chí Cộng sản giữ vững phẩm chất, cốt cách chính luận, giữ vững vị trí, vai trò là cơ quan lý luận chính trị của Trung ương Đảng.

Đại hội đã bầu ra Ban Chấp hành Đảng bộ cơ quan Tạp chí Cộng sản nhiệm kỳ 2025-2030 gồm 17 đồng chí bảo đảm tiêu chuẩn, cơ cấu hợp lý, là các đồng chí tiêu biểu về phẩm chất chính trị, đạo đức, có năng lực lãnh đạo, bản lĩnh, trí tuệ, đáp ứng yêu cầu công tác lãnh đạo, chỉ đạo Đảng bộ tổ chức thực hiện thắng lợi Nghị quyết của Đại hội; các chỉ thị, nghị quyết của cấp ủy cấp trên.

Ban Chấp hành khóa mới đã họp phiên đầu tiên bầu ra Ban Thường vụ, Bí thư, Phó Bí thư, Ủy ban Kiểm tra, Chủ nhiệm Ủy ban Kiểm tra nhiệm kỳ 2025-2030. Ban Thường vụ gồm 5 đồng chí; Ủy ban Kiểm tra gồm 4 đồng chí.

Theo đó, Ủy viên Trung ương Đảng, Tổng Biên tập Tạp chí Cộng sản Hoàng Trung Dũng được bầu làm Bí thư Đảng ủy cơ quan Tạp chí Cộng sản nhiệm kỳ 2025-2030; Phó Tổng Biên tập Tạp chí Cộng sản Phạm Minh Tuấn được bầu làm Phó Bí thư Đảng ủy cơ quan Tạp chí Cộng sản nhiệm kỳ 2025-2030.

Đại hội cũng đã bầu Đoàn đại biểu đi dự Đại hội đại biểu Đảng bộ các cơ quan Đảng Trung ương lần thứ nhất, nhiệm kỳ 2025-2030, gồm 9 đại biểu chính thức và một đại biểu dự khuyết.

Vũ Phong`,
    url: "https://baochinhphu.vn/phat-huy-truyen-thong-khang-dinh-vai-tro-cua-tap-chi-cong-san-trong-cong-tac-nghien-cuu-ly-luan-102250628194911504.htm",
  },
  {
    id: 7,
    title: "Từ tư tưởng Hồ Chí Minh đến hành trình đổi mới giáo dục",
    desc: "(Chinhphu.vn) - Sinh thời, Chủ tịch Hồ Chí Minh đặc biệt quan tâm đến giáo dục và đào tạo. Người đã đưa ra nhiều tư tưởng sâu sắc và chiến lược nhằm xây dựng nền giáo dục toàn diện.",
    date: "19/05/2025 08:38",
    img: "https://bcp.cdnchinhphu.vn/thumb_w/640/334894974524682240/2025/5/18/edit-img0096-17475840849861132090641.png",
    source: "Nguồn: baochinhphu.vn",
    content: `Sinh thời, Chủ tịch Hồ Chí Minh đặc biệt quan tâm đến giáo dục và đào tạo. Người đã đưa ra nhiều tư tưởng sâu sắc và chiến lược nhằm xây dựng nền giáo dục toàn diện. Điều đó thể hiện rõ trong những tư tưởng giáo dục của Người - không chỉ dừng lại ở việc nâng cao dân trí, mà còn chú trọng rèn luyện đạo đức, nhân cách, phát triển con người toàn diện.

Bày tỏ niềm xúc động trước những tình cảm của Chủ tịch Hồ Chí Minh dành cho ngành giáo dục, Bộ trưởng Bộ Giáo dục và Đào tạo Nguyễn Kim Sơn đã chia sẻ về những mục tiêu giáo dục vừa mang tính cốt lõi, vừa có tính phổ quát, tạo nên nền tảng vững chắc cho sự phát triển con người.

Bộ trưởng Nguyễn Kim Sơn nhấn mạnh, những lời dạy của Chủ tịch Hồ Chí Minh về vai trò của giáo dục luôn là nền tảng vững chắc để ngành giáo dục Việt Nam tiếp tục vươn lên.

Chủ tịch Hồ Chí Minh luôn đặt giáo dục ở vị trí trung tâm, coi đó là nền tảng để xây dựng con người toàn diện. Trong bức thư gửi cho học sinh nhân ngày khai trường đầu tiên của Nước Việt Nam dân chủ cộng hòa, thư gửi cho giáo viên, học sinh, cán bộ thanh niên và nhi đồng năm 1955 và một số bức thư khác, Chủ tịch Hồ Chí Minh đã đưa ra những tuyên ngôn về giáo dục, đã trao truyền, phó thác sứ mệnh cho người học, đã khơi dậy những cảm hứng to lớn và ý chí nghị lực cho những người trẻ tuổi Việt Nam để lớp lớp các thế hệ người Việt Nam vùng lên giải phóng đất nước và vững bước chung tay xây dựng non sông.

Tư tưởng giáo dục của Chủ tịch Hồ Chí Minh là sự kết hợp hài hòa giữa tinh hoa văn hóa giáo dục truyền thống của dân tộc và những tư tưởng giáo dục tiên tiến của nhân loại. Chủ tịch Hồ Chí Minh nhấn mạnh vai trò của tự học, học tập thường xuyên, học tập suốt đời, học mọi nơi mọi lúc, học của mọi người là phương cách để phát triển con người, để con người luôn thích ứng, đáp ứng các yêu cầu của công việc và yêu cầu của thời đại.

Những nguyên tắc giáo dục cơ bản mà Chủ tịch Hồ Chí Minh đề ra:

1. Giáo dục toàn diện: Không chỉ truyền thụ kiến thức mà còn rèn luyện đạo đức, phát triển thể chất và thẩm mỹ.

2. Giáo dục gắn với thực tiễn: Học phải đi đôi với hành, lý luận phải kết hợp với thực hành.

3. Giáo dục vì nhân dân: Mọi hoạt động giáo dục đều hướng tới phục vụ nhân dân, vì lợi ích của đất nước.

4. Tự học và học tập suốt đời: Khuyến khích tinh thần tự học, không ngừng trau dồi kiến thức và kỹ năng.

5. Kết hợp giữa truyền thống và hiện đại: Giữ gìn tinh hoa văn hóa dân tộc đồng thời tiếp thu tiến bộ của thế giới.

Hành trình đổi mới giáo dục Việt Nam

Từ những tư tưởng sâu sắc của Chủ tịch Hồ Chí Minh, ngành giáo dục Việt Nam đã trải qua hành trình đổi mới không ngừng:

Giai đoạn 1945-1975: Xây dựng nền tảng giáo dục quốc dân, chống mù chữ, phổ cập giáo dục tiểu học.

Giai đoạn 1975-1986: Thống nhất hệ thống giáo dục toàn quốc, mở rộng quy mô và nâng cao chất lượng.

Giai đoạn 1986-2000: Đổi mới căn bản giáo dục theo tinh thần Đại hội VI của Đảng, phát triển giáo dục theo cơ chế thị trường.

Giai đoạn 2000-2020: Hiện đại hóa giáo dục, hội nhập quốc tế, phát triển giáo dục chất lượng cao.

Giai đoạn 2020-nay: Chuyển đổi số trong giáo dục, phát triển giáo dục thông minh, bền vững.

Những thành tựu đạt được:

- Phổ cập giáo dục tiểu học và trung học cơ sở
- Mở rộng cơ hội tiếp cận giáo dục cho mọi tầng lớp nhân dân
- Nâng cao chất lượng đào tạo, đáp ứng nhu cầu phát triển kinh tế-xã hội
- Xây dựng đội ngũ nhà giáo có trình độ chuyên môn cao
- Hiện đại hóa cơ sở vật chất và phương pháp giảng dạy

Định hướng tương lai:

Bộ trưởng Nguyễn Kim Sơn khẳng định, trên nền tảng tư tưởng giáo dục của Chủ tịch Hồ Chí Minh, ngành giáo dục Việt Nam sẽ tiếp tục đổi mới để:

- Phát triển con người toàn diện, có năng lực và phẩm chất
- Ứng dụng công nghệ số trong giáo dục một cách hiệu quả
- Nâng cao chất lượng giáo dục theo tiêu chuẩn quốc tế
- Xây dựng hệ thống giáo dục mở, linh hoạt, học tập suốt đời
- Đào tạo nguồn nhân lực chất lượng cao phục vụ sự nghiệp công nghiệp hóa, hiện đại hóa đất nước

Thu Trang`,
    url: "https://media.chinhphu.vn/tu-tu-tuong-ho-chi-minh-den-hanh-trinh-doi-moi-giao-duc-102250518230559307.htm",
  },
  {
    id: 8,
    title:
      "Di sản Chủ tịch Hồ Chí Minh: Từ đoàn kết trong Đảng đến đồng thuận xã hội",
    desc: '(Chinhphu.vn) - "Tôi chỉ có một đảng, Đảng Việt Nam" - Đó là lời tuyên bố của Chủ tịch Hồ Chí Minh trước Quốc hội, trước quốc dân, trước thế giới, tại Kỳ họp thứ hai Quốc hội khoá I (ngày 31/10/1946).',
    date: "19/05/2024  08:53",
    img: "https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/nguyenxuanhong/2021_12_16/BHo.jpg",
    source: "Nguồn: baochinhphu.vn",
    content: `"Tôi chỉ có một đảng, Đảng Việt Nam" - Đó là lời tuyên bố của Chủ tịch Hồ Chí Minh trước Quốc hội, trước quốc dân, trước thế giới, tại Kỳ họp thứ hai Quốc hội khoá I (ngày 31/10/1946). Đó là sự khẳng định của Người sáng lập ra Đảng, xây dựng thiết chế Nhà nước và mở đường kiến thiết đất nước và đó cũng là tuyên bố có giá trị bền vững, bởi Đảng không phải là tổ chức làm quan phát tài, mà Đảng luôn đồng hành cùng dân tộc, vì dân tộc, giương cao chiến lược đại đoàn kết toàn dân tộc vì mục tiêu, khát vọng của nhân dân.

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
    url: "https://baochinhphu.vn/van-dung-tu-tuong-ho-chi-minh-ve-doi-ngoai-va-doan-ket-quoc-te-trong-thoi-ky-moi-102305614.htm",
  },
  {
    id: 9,
    title:
      "Vận dụng tư tưởng Hồ Chí Minh về Đối ngoại và Đoàn kết quốc tế trong thời kỳ mới",
    desc: "(Chinhphu.vn) - Ngoại giao Việt Nam trên cơ sở quán triệt và vận dụng sáng tạo tư tưởng Hồ Chí Minh về đối ngoại và đoàn kết quốc tế, triển khai đồng bộ, sáng tạo hiệu quả cao đường lối đối ngoại độc lập tự chủ, hòa bình, hữu nghị, hợp tác và phát triển, đa dạng hóa đa phương hóa quan hệ đối ngoại.",
    date: "16/12/2021  07:59",
    img: "https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/nguyenxuanhong/2021_12_16/BHo.jpg",
    source: "Nguồn: baochinhphu.vn",
    content: `Chủ tịch Hồ Chí Minh lãnh tụ thiên tài, người thầy vĩ đại của Đảng cộng sản Việt Nam và của dân tộc Việt Nam, người anh hùng giải phóng dân tộc, chiến sĩ lỗi lạc của phong trào cộng sản và công nhân quốc tế, danh nhân văn hóa kiệt xuất thế giới. Cuộc đời và sự nghiệp cách mạng của Người đã để lại cho Đảng ta và dân tộc ta những di sản vô giá - đó là sự nghiệp giành độc lập cho dân tộc, xây dựng một nước Việt Nam dân giàu nước mạnh, dân chủ, công bằng văn minh, sánh vai với các cường quốc năm châu, là bạn với các quốc gia trên thế giới vì hòa bình độc lập, tiến bộ xã hội và Tư tưởng Hồ Chí Minh – cùng với chủ nghĩa Marx-Lenin là nền tảng tư tưởng, kim chỉ nam cho hành động của cách mạng Việt Nam.

Tư tưởng Hồ Chí Minh là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam. Tư tưởng Hồ Chí Minh về đối ngoại và đoàn kết quốc tế - Tư tưởng Ngoại giao Hồ Chí Minh là một bộ phận rất quan trọng và đặc sắc trong hệ thống các quan điểm của Tư tưởng Hồ Chí Minh.

Là người khai sinh ra nền ngoại giao của nước Việt Nam dân chủ cộng hòa, ngày nay là nước Cộng hòa XHCN Việt Nam, Tư tưởng ngoại giao Hồ Chí Minh hình thành và phát triển gắn liền với toàn bộ sự nghiệp hoạt động cách mạng của Người.

Hình thành và phát triển tư tưởng ngoại giao Hồ Chí Minh

Trước hết tư tưởng đối ngoại và đoàn kết quốc tế của Người đã thể hiện nổi bật trong hệ thống các tác phẩm báo chí, các bức thư, các lời kêu gọi, các tác phẩm chính luận của Người. Các quan điểm đối ngoại của Chủ tịch Hồ Chí Minh phát triển, hoàn thiện được thể hiện tập trung trong "Đường cách mệnh" (1927), Chính cương vắn tắt, Sách lược vắn tắt (1930), Chương trình 10 điểm của mặt trận Việt Minh (1944), Tuyên ngôn Độc lập (2.9.1945).

Tìm hiểu, nghiên cứu tư tưởng ngoại giao Hồ Chí Minh chúng ta không chỉ dừng ở việc nghiên cứu trước tác phẩm của Người trong toàn tập Hồ Chí Minh, Văn kiện Đảng toàn tập, mà một phương pháp rất quan trọng là chúng ta phải tìm hiểu, nghiên cứu các hoạt động lãnh đạo, chỉ đạo, tổ chức và trực tiếp thực hiện các hoạt động đối ngoại và đoàn kết quốc tế của Người.

Jean Lacouture (Giăng Lacutuya) một nhà lãnh đạo Đảng cộng sản Pháp đã có một nhận định rất sâu sắc: "Qua lăng kính tư tưởng của vị nguyên Tổng Bí thư Đảng cộng sản Đông Dương, kế đó là Đảng Lao động Việt Nam xuất hiện một hệ thống học thuyết hình thành bởi những hành động hơn bởi những từ ngữ."

Giáo sư Trần Văn Giàu đã khẳng định sự đúng đắn trong phương pháp tiếp cận tư tưởng Hồ Chí Minh từ hành động: "Cụ Hồ là người chứng minh sự vận động bằng đi đứng", thể hiện lý thuyết bằng hành động: "Xét cho cùng thì hành động, hành động trước sau như một, lắm khi còn trung thành, chân thật hơn là lời nói và câu văn".

Tìm hiểu tư tưởng ngoại giao Hồ Chí Minh, tiếp cận từ các hoạt động trực tiếp của Người từ khi ra đi tìm đường cứu nước, trong thời kỳ hoạt động ở Pháp, Nga, Anh, Trung Quốc… (1911-1941) Bác đã có hàng loạt các hoạt động đối ngoại và đoàn kết quốc tế.

Trong thời kỳ ở Pháp và Nga, các hoạt động đối ngoại của Bác Hồ và các đồng chí của Người đã tranh thủ sự đồng tình và ủng hộ của Đảng cộng sản Pháp, của Hội liên hiệp các tổ chức thuộc địa, của quốc tế cộng sản; các hoạt động thiết lập các mối quan hệ với các lãnh đạo phong trào cách mạng thế giới ủng hộ cuộc đấu tranh giải phóng của các dân tộc thuộc địa nói chung và Việt Nam nói riêng.

Thời kỳ hoạt động ở Trung Quốc, bằng các hoạt động ngoại giao khôn khéo của Bác và các đồng chí của mình, đã lợi dụng được chính quyền Quốc dân Đảng Trung Quốc, đồng thời tranh thủ được sự ủng hộ của Đảng cộng sản Trung Quốc, nên đã tổ chức ở Côn Minh "Việt Nam dân chúng hưởng ứng Trung Quốc khẳng định hậu vận hội", tạo thế hợp pháp cho các hoạt động cách mạng của ta.

Các nguyên tắc cơ bản trong tư tưởng ngoại giao Hồ Chí Minh:

1. Quan điểm cơ bản – nền tảng tư tưởng ngoại giao Hồ Chí Minh: Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội. Tất cả hoạt động đối ngoại và đoàn kết quốc tế phải xuất phát từ lợi ích quốc gia, dân tộc, đặt lợi ích quốc gia dân tộc lên trên hết trước hết. Không có gì quý hơn độc lập tự do!

2. Xây dựng thực lực cách mạng: "Thực lực là cái chiêng, ngoại giao là cái tiếng. Chiêng có to, tiếng mới lớn". Tư tưởng ngoại giao rất quan trọng này đã xác định vị trí và mối quan hệ giữa xây dựng thực lực của cách mạng với sức mạnh và hiệu quả của hoạt động ngoại giao.

3. Ngoại giao là mặt trận: Quan điểm coi ngoại giao là một mặt trận, mặt trận ngoại giao cần và có thể triển khai trên khắp thế giới và ngay tại hậu phương của đối phương, do đó phải chủ động tiến công ngoại giao: "Tiến công ngoại giao là một tiến công quan trọng có ý nghĩa chiến lược".

4. Kiên định mục tiêu, linh hoạt sách lược: Nguyên tắc định hướng mọi hoạt động đối ngoại và đoàn kết quốc tế là: Kiên định vững chắc về mục tiêu chiến lược đồng thời linh hoạt mềm dẻo về sách lược.

5. Độc lập tự chủ kết hợp hợp tác quốc tế: Trong hoạt động đối ngoại và đoàn kết quốc tế phải xử lý tốt mối quan hệ giữa độc lập tự chủ, tự lực tự cường gắn liền với hợp tác quốc tế sẽ kết hợp tối ưu sức mạnh của dân tộc với sức mạnh của thời đại.

6. Phát huy sức mạnh tổng hợp: Xây dựng, phát triển và phát huy sức mạnh tổng hợp của ngoại giao Việt Nam là quan điểm tư tưởng rất quan trọng trong phương pháp cách mạng, phương pháp nghệ thuật ngoại giao Hồ Chí Minh.

Phong cách nghệ thuật ngoại giao Hồ Chí Minh

Ngoại giao là một mặt trận đấu tranh cực kỳ quan trọng, là một bộ phận không thể tách rời của cuộc đấu tranh cách mạng của nhân dân ta. Tạo ra và sử dụng sức mạnh tổng hợp là phương pháp cách mạng trong tư tưởng Hồ Chí Minh.

Trong suốt 58 năm hoạt động cách mạng (1911-1969), Bác Hồ đã trực tiếp tổ chức, lãnh đạo, chỉ đạo xây dựng, phát triển và phát huy sức mạnh của ngoại giao nhân dân, đối ngoại Đảng, ngoại giao nhà nước tạo nên sức mạnh tổng hợp của nền ngoại giao hiện đại Việt Nam.

Khi tiến hành các hoạt động đối ngoại và đoàn kết quốc tế phải tiến hành đồng thời hoạt động của các "binh chủng" ngoại giao, các hình thức ngoại giao, phối hợp chặt chẽ các binh chủng, các lực lượng ngoại giao: ngoại giao Nhà nước (Quốc hội, Chính phủ), ngoại giao Đảng (với các Đảng cộng sản, công nhân, các đảng cầm quyền, các đảng đối lập); ngoại giao nhân dân (với các đoàn thể, các tổ chức phi chính phủ, các cá nhân…), ngoại giao văn hóa, ngoại giao kinh tế, ngoại giao quốc phòng, an ninh… chủ động hội nhập quốc tế.

Ứng dụng trong thời kỳ mới

35 năm qua, dưới ánh sáng soi đường của tư tưởng Hồ Chí Minh về đối ngoại và đoàn kết quốc tế, ngoại giao Việt Nam đã phát huy sức mạnh tổng hợp của đối ngoại Đảng, ngoại giao nhà nước, ngoại giao nhân dân, ngoại giao văn hóa, ngoại giao kinh tế, ngoại giao quốc phòng… làm tốt vai trò tiên phong trong giữ vững môi trường hòa bình, ổn định, bảo vệ vững chắc chủ quyền toàn vẹn lãnh thổ và lợi ích quốc gia dân tộc.

Hiện nay, tình hình thế giới và trong nước có cả thuận lợi, thời cơ và khó khăn thách thức đan xen, đặt ra nhiều vấn đề mới yêu cầu mới nặng nề phức tạp hơn đối với sự nghiệp xây dựng và bảo vệ vững chắc Tổ quốc.

Ngoại giao Việt Nam trên cơ sở quán triệt và vận dụng sáng tạo tư tưởng Hồ Chí Minh về đối ngoại và đoàn kết quốc tế, triển khai đồng bộ, sáng tạo hiệu quả cao đường lối đối ngoại độc lập tự chủ, hòa bình, hữu nghị, hợp tác và phát triển, đa dạng hóa đa phương hóa quan hệ đối ngoại.

Bảo đảm cao nhất lợi ích quốc gia, dân tộc trên cơ sở các nguyên tắc cơ bản của Hiến chương Liên Hợp Quốc và luật pháp quốc tế, bình đẳng hợp tác cùng có lợi. Kết hợp sức mạnh dân tộc với sức mạnh thời đại, chủ động và tích cực hội nhập quốc tế toàn diện sâu rộng. Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực có trách nhiệm trong cộng đồng quốc tế!

PGS.TS Đào Duy Quát
Nguyên Phó Trưởng ban Thường trực
Ban Tư tưởng – Văn hóa Trung ương`,
    url: "https://baochinhphu.vn/van-dung-tu-tuong-ho-chi-minh-ve-doi-ngoai-va-doan-ket-quoc-te-trong-thoi-ky-moi-102305614.htm",
  },
  {
    id: 10,
    title:
      "Từ chỉ dẫn của Chủ tịch Hồ Chí Minh về công tác cán bộ đến cuộc cách mạng tinh gọn bộ máy Nhà nước hiện nay",
    desc: "(Chinhphu.vn) - Tư tưởng Hồ Chí Minh về công tác cán bộ vẫn luôn có tính thời sự và có ý nghĩa vô cùng quan trọng đối với sự nghiệp cách mạng ở nước ta hiện nay, khi chúng ta đang đứng trước cơ hội lớn để thực hiện cuộc cách mạng tinh gọn bộ máy nhằm tạo sự thay đổi về chất trong hoạt động của hệ thống chính trị.",
    date: "01/02/2025  13:39",
    img: "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2025/1/14/anh-1-nguyen-duc-manh-so-4-24-17368576403251596419101.jpg",
    source: "Nguồn: baochinhphu.vn",
    content: `Là nhà cách mạng luôn gắn liền với hoạt động thực tiễn, với mục tiêu lớn nhất là độc lập cho dân tộc, tự do, hạnh phúc cho nhân dân, Chủ tịch Hồ Chí Minh đã sớm đặt câu hỏi "cách mạng trước hết phải có cái gì?". Và Người xác định rằng trước hết phải có một đảng cách mạng gồm những con người tiêu biểu làm đầu tầu để dẫn dắt cách mạng đi đến thành công, rồi sau này sẽ là những người làm việc trong bộ máy nhà nước, trong hệ thống chính trị. Những con người đó chính là đội ngũ cán bộ. 

Tư tưởng Hồ Chí Minh - Chỉ dẫn quan trọng đối với cuộc cách mạng tinh gọn bộ máy
Vấn đề cán bộ đã hình thành rất sớm trong tư tưởng Hồ Chí Minh, trở thành một trong những vấn đề cốt lõi trong tư tưởng của Người, không chỉ phát huy vai trò trong cách mạng giải phóng dân tộc mà còn để lại nhiều chỉ dẫn quan trọng đối với cuộc cách mạng tinh gọn bộ máy nhà nước hiện nay.

Với quan điểm "Cán bộ là cái dây chuyền của bộ máy", "Cán bộ là gốc của mọi công việc", "Muôn việc thành công hoặc thất bại, đều do cán bộ tốt hoặc kém", "Bất cứ công việc gì thiếu cán bộ, khó thực hiện được"..., ở bất kỳ thời điểm lịch sử nào, Chủ tịch Hồ Chí Minh cũng luôn chú trọng xây dựng đội ngũ cán bộ, củng cố bộ máy Nhà nước để có đủ sức mạnh hoàn thành sứ mệnh lịch sử cao quý mà Đảng và nhân dân giao phó.

Ngay sau khi Cách mạng tháng Tám năm 1945 thành công, vừa phải xây dựng vừa phải đấu tranh giữ vững chính quyền Nhà nước mới, Chủ tịch Hồ Chí Minh càng đặc biệt quan tâm  đến vấn đề cán bộ, đặc biệt là cách thức, lề lối làm việc của bộ máy tổ chức. 

Hơn 1 tháng sau khi chính quyền nhân dân được thành lập, Người đã chỉ ra một khuyết điểm lớn, phổ biến trong các ủy ban nhân dân đó là "bệnh lộn xộn, thiếu tổ chức" khiến cho đội ngũ cán bộ "nhiều khi có người rất rỗi rãi, cả ngày chỉ chạy ra chạy vào cho có chuyện, có người lại bù đầu rối óc vì một mình phải kiêm đến mấy việc: nào ngoại giao, nào tư pháp, nào tài chính" [1]. Người yêu cầu anh em viên chức "phải tận tâm làm việc, một người làm bằng hai, ba người. Và phải tôn trọng kỷ luật... phải theo nguyên tắc là có việc mới cần đến người, chứ không phải là có sẵn người nên phải tìm việc cho làm"[2].

Chú trọng vai trò của nhân tài trong công cuộc xây dựng đất nước theo quan điểm "Tài to ta dùng làm việc to, tài nhỏ ta cắt làm việc nhỏ, ai có năng lực về việc gì, ta đặt ngay vào việc ấy", ngày 31/12/1945, Chủ tịch Hồ Chí Minh ký Sắc lệnh số 78 về việc lập Uỷ ban nghiên cứu kế hoạch kiến thiết của Chính phủ. Ủy ban này tập hợp hơn 30 nhân sĩ, trí thức ở tất cả các ngành, lĩnh vực như: kinh tế, luật pháp, y tế, giáo dục, văn hóa xã hội... để cố vấn cho Chính phủ kế hoạch xây dựng đất nước. Trong hoàn cảnh kháng chiến chống Pháp trường kỳ, gian khổ, Chủ tịch Hồ Chí Minh vẫn cho mở Trường Đại học Y Dược (Việt Bắc); lớp toán đại cương và các trường dự bị đại học, Trường Sư phạm Liên khu IV; các trường khoa học cơ bản và sư phạm cao cấp (Khu học xá Trung ương, Quảng Tây, Trung Quốc) nhằm tạo dựng một lớp người có đủ tài và đức phụng sự Tổ quốc, phụng sự nhân dân. 

Đến thời kì xây dựng chủ nghĩa xã hội ở miền Bắc, bên cạnh việc nhờ các chuyên gia nước ngoài đào tạo, Chủ tịch Hồ Chí Minh còn chủ trương cử người đi học ở Liên Xô, Trung Quốc và một số nước xã hội chủ nghĩa, góp phần hình thành nên đội ngũ các nhà khoa học đông đảo sau này. Vì vậy mà trong cuộc kháng chiến chống Mỹ chúng ta đã có nhiều nhân tài chỉ huy thao lược và cán bộ khoa học, kỹ thuật sử dụng thành thạo những vũ khí và phương tiện chiến tranh hiện đại, góp phần đánh thắng được đội quân xâm lược mạnh, được trang thiết bị hiện đại thời điểm bấy giờ là Mỹ.

Trong suốt quá trình lãnh đạo cách mạng, trên cương vị là người đứng đầu Đảng, Chính phủ, Chủ tịch Hồ Chí Minh đã có nhiều bài viết và tác phẩm về vấn đề cán bộ, thể hiện một cách sâu sắc tư tưởng Hồ Chí Minh về công tác cán bộ trên nhiều vấn đề, từ việc phát hiện, lựa chọn cán bộ đến đánh giá, cất nhắc, sử dụng cán bộ; từ huấn luyện, đào tạo, bồi dưỡng cán bộ đến việc kiểm soát, phê bình, khen thưởng cán bộ...

Cán bộ phải là công bộc của nhân dân
Khâu đầu tiên trong công tác cán bộ là phát hiện và lựa chọn cán bộ. Về vấn đề này, Chủ tịch Hồ Chí Minh rất tâm huyết với truyền thống tốt đẹp của dân tộc là trọng dụng nhân tài, như lời khắc ghi của cha ông ta vào bia đá ở Văn Miếu Quốc Tử Giám: "Hiền tài là nguyên khí quốc gia". Cách lựa chọn cán bộ theo Hồ Chí Minh phải trên cơ sở những tiêu chí về chất lượng, chú trọng tiêu chuẩn phẩm chất đạo đức và năng lực của người được lựa chọn. Những tiêu chuẩn phẩm chất của người cán bộ cách mạng được Chủ tịch Hồ Chí Minh chỉ ra hết sức cụ thể, đó là nhân, nghĩa, trí, dũng, liêm; là cần, kiệm, liêm, chính, chí công vô tư. Chủ tịch Hồ Chí Minh đòi hỏi người cán bộ phải giữ các phẩm chất đó để không trở nên hủ bại, không biến thành sâu mọt của nhân dân mà phải là công bộc của nhân dân, gánh vác công việc chung cho nhân dân.

Trong tiêu chuẩn xem xét, đánh giá cán bộ, Chủ tịch Hồ Chí Minh đề cập cụ thể về phong cách, tác phong công tác. Theo Người, phong cách của người cán bộ được thể hiện ở các yêu cầu như tác phong quần chúng, dân chủ, thẳng thắn, tính quyết đoán và tinh thần trách nhiệm cao, sâu sát, thận trọng, nhất quán giữa lời nói và việc làm, giữa lý luận và thực tiễn, thường xuyên nghiêm túc phê bình và tự phê bình… và đặc biệt là phong cách nêu gương. Chủ tịch Hồ Chí Minh khẳng định nghề nào cũng vinh quang và việc gì cũng phải cố gắng chuyên tâm, không chủ quan, đại khái. Vì thế, tất cả mọi người, ở mọi địa vị, vị trí công tác, trong mọi hoàn cảnh đều phải nêu cao tinh thần trách nhiệm. Mỗi cán bộ đều phải làm gương trong mọi công việc, từ nhỏ đến lớn, thể hiện thường xuyên về mọi mặt.

Bên cạnh việc chỉ ra những tiêu chí về phẩm chất của người cán bộ cách mạng, Chủ tịch Hồ Chí Minh đòi hỏi người cán bộ phải thường xuyên nâng cao trình độ, năng lực tổ chức thực hành để hoàn thành các nhiệm vụ được giao. Cán bộ phải là những người tiên tiến, nếu bị tụt hậu thì không thể xứng đáng là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân. Chủ tịch Hồ Chí Minh chỉ rõ: "Làm nghề gì cũng phải học, vậy làm cách mạng cũng phải học"[3]. Vì vậy, trong công tác cán bộ, Người rất coi trọng việc huấn luyện cán bộ, coi đó là "công việc gốc", là khâu có ý nghĩa quyết định đến trình độ và chất lượng của cán bộ.

Để sử dụng cán bộ sao cho hiệu quả, Chủ tịch Hồ Chí Minh đưa ra phương châm là "Hiểu biết cán bộ. Khéo dùng cán bộ. Cất nhắc cán bộ. Thương yêu cán bộ. Phê bình cán bộ"[4]. Hiểu và đánh giá cán bộ không phải chỉ một việc, chỉ bên ngoài, trong hiện tại, mà phải thông qua nhiều việc, cả quá khứ, hiện tại và hướng phát triển trong tương lai của cán bộ. Hiểu biết cán bộ để nhìn thấy và khơi dậy được những điểm tốt, điểm mạnh cũng như điểm yếu của cán bộ, qua đó tìm được cách sử dụng cán bộ cho thích hợp với khả năng của mỗi người.

Với cách nhìn nhân văn, Chủ tịch Hồ Chí Minh nêu rõ: Cán bộ cũng là con người, không phải thánh, có tốt, có xấu, nên vấn đề là khéo nâng cao chỗ tốt, sửa chữa chỗ xấu cho họ, "người đời ai cũng có chỗ hay chỗ dở. Ta phải dùng chỗ hay của người và giúp người chữa chỗ dở. Dùng người cũng như dùng gỗ. Người thợ khéo thì gỗ to, nhỏ, thẳng, cong, đều tuỳ chỗ mà dùng được"[5].

Chú trọng về con người, chú trọng về cán bộ cho nên Chủ tịch Hồ Chí Minh mới căn dặn phải phân biệt rõ khi rèn đạo đức cho cá nhân mình thì phải chấp nhận đau đớn như giã gạo (ở bài thơ Nghe tiếng giã gạo trong tập Nhật ký trong tù Bác đã viết: "Gạo đem vào giã bao đau đớn, Gạo giã xong rồi trắng tưạ bông; Sống ở trên đời người cũng vậy, Gian nan rèn luyện mới thành công") nhưng khi dùng người, sử dụng cán bộ thì chớ có dùng theo lối giã gạo: Nghĩa là trước khi cất nhắc, sử dụng cán bộ không xem xét kỹ: "Khi cất nhắc rồi không giúp đỡ họ. Khi họ sai lầm thì đẩy xuống. Chờ lúc họ làm khá lại cất nhắc lên. "Nếu cán bộ bị nhấc lên thả xuống ba lần như thế là hỏng cả đời". 

Chủ tịch Hồ Chí Minh còn lưu ý, trong dùng cán bộ cần phải tránh: "1. Ham dùng người bà con, anh em quen biết, bầu bạn, cho họ là chắc chắn hơn người ngoài. 2. Ham dùng những kẻ khéo nịnh hót mình, mà chán ghét những người chính trực. 3. Ham dùng những người tính tình hợp với mình, mà tránh những người tính tình không hợp với mình"[6]. Tuyệt đối không được sử dụng loại cán bộ "gió chiều nào che chiều đó", không có khí khái, không có chính kiến, bản lĩnh, xu nịnh, a dua, không dám chịu trách nhiệm, không dám phụ trách.

Đội ngũ cán bộ chính là công cụ đắc lực, chủ thể trực tiếp thực thi các hoạt động quản lý của Nhà nước đối với xã hội, là mối dây liên hệ giữa Nhà nước với công dân, là cầu nối chuyền tải giữa chính sách, pháp luật của Đảng và Nhà nước với xã hội và ngược lại, phản ánh tâm tư, nguyện vọng của nhân dân với Đảng, Nhà nước. Để bảo đảm sự vận hành đó, Chủ tịch Hồ Chí Minh coi trọng công tác kiểm tra, kiểm soát đối với cán bộ. Người đòi hỏi kiểm tra cán bộ phải trở thành nền nếp và thực hiện một cách có hệ thống, qua đó chống được các bệnh quan liêu, bàn giấy, biết được các nghị quyết có được thực thi không, có đúng không và đúng tới mức nào.

Cuộc cách mạng tinh gọn bộ máy cần sự nêu gương, tinh thần trách nhiệm và hy sinh
Tư tưởng Hồ Chí Minh về công tác cán bộ vẫn luôn có tính thời sự và có ý nghĩa vô cùng quan trọng đối với sự nghiệp cách mạng ở nước ta hiện nay, khi chúng ta đang thực hiện cuộc cách mạng tinh gọn bộ máy nhằm tạo sự thay đổi về chất trong hoạt động của hệ thống chính trị. Để quá trình này thành công, cần chuẩn bị thật tốt đội ngũ cán bộ đủ phẩm chất và năng lực đáp ứng được yêu cầu phát triển mới.

Chủ tịch Hồ Chí Minh đã viết: "Làm việc nước bây giờ là hy sinh, là phấn đấu, quên lợi riêng mà nghĩ lợi chung"[7]. Trong bài phát biểu tại Hội nghị toàn quốc quán triệt, triển khai tổng kết việc thực hiện Nghị quyết số 18-NQ/TW, ngày 25/10/2017 của Ban Chấp hành Trung ương Đảng khóa XII về "Một số vấn đề về tiếp tục đổi mới, sắp xếp tổ chức bộ máy của hệ thống chính trị tinh gọn, hoạt động hiệu lực, hiệu quả", Tổng Bí thư Tô Lâm cũng nhấn mạnh: "Mỗi cán bộ, đảng viên phải không ngừng tự học hỏi để "nâng mình lên" để đáp ứng yêu cầu, nhiệm vụ trong giai đoạn mới của đất nước, nếu không đáp ứng được thì tự nguyện đứng sang một bên để người khác làm". 

Hơn lúc nào hết, cuộc cách mạng tinh gọn bộ máy cần có sự nêu gương, tinh thần trách nhiệm và hy sinh từ từng cán bộ, đảng viên, đặc biệt là những người đứng đầu. Bởi đây là công việc rất khó khăn, phức tạp và nhạy cảm, sẽ động chạm đến lợi ích của mỗi người và rất nhiều người. Người đứng đầu của mỗi cơ quan, đơn vị trước tiên phải làm tốt công tác tư tưởng, tạo sự thống nhất cao về tư tưởng, nhận thức và hành động của cán bộ, đảng viên; phải dũng cảm nhìn thẳng vào thực tiễn tổ chức mình, rà soát những tồn tại, chấp nhận thay đổi, sẵn sàng điều chỉnh cơ cấu tổ chức, bộ máy, giảm số lượng cán bộ hoặc tự điều chỉnh cơ chế làm việc để phù hợp với tinh thần cải cách.

Song song với việc đẩy mạnh sắp xếp lại, tinh gọn bộ máy, người đứng đầu mỗi cơ quan, đơn vị cần hết sức lưu tâm tới việc giữ người tài, người có khả năng, trình độ, năng lực và có khát vọng cống hiến. Hay nói cách khác, phải làm sao hạn chế tình trạng "giảm" nhưng không "tinh" trong tinh giản biên chế, góp phần mang lại hiệu quả thiết thực trong thực hiện chủ trương này. Khi đánh giá đội ngũ cán bộ, công chức, viên chức, người đứng đầu phải có cách nhìn công tâm, khách quan để đánh giá những người làm được việc và người không làm được việc và phải chịu trách nhiệm về đánh giá của mình. Trên cơ sở đó mới có thể đưa ra khỏi đội ngũ những người không đủ tiêu chuẩn, điều kiện, không đáp ứng được yêu cầu công việc; thực hiện chính sách đối với những người không tiếp tục ở lại làm việc sau khi tinh giản biên chế, đồng thời bố trí được những người xứng đáng vào các vị trí của bộ máy mới.

Tấm gương hành động của người đứng đầu sẽ tạo động lực, truyền cảm hứng tới cả bộ máy. Mỗi cán bộ ở từng vị trí công việc phải tiếp tục làm tốt hơn nữa vai trò cá nhân mình, góp phần cho tập thể, phát huy tinh thần trách nhiệm, vì lợi ích chung, hy sinh lợi ích cá nhân (nếu có) để thực hiện sắp xếp, tinh gọn tổ chức bộ máy. Chắc chắn rằng, sau khi thực hiện tinh gọn bộ máy, số lượng công chức, viên chức sẽ giảm đáng kể. Những người tiếp tục công tác có thể phải gánh vác khối lượng công việc gấp đôi, gấp ba trước đó. Áp lực công việc lớn hơn nên cần phải nỗ lực hơn trước, "tận tâm làm việc, một người làm bằng hai, ba người". Sẽ không còn tình trạng làm việc "cầm chừng", đối phó để vừa đủ "lên lương". Sẽ phải có tinh thần cầu tiến và sự tận tâm, mạnh dạn cải tiến phương pháp làm việc, tận dụng lợi thế công nghệ để tăng hiệu quả công việc… Tất cả những thay đổi nhỏ này của mỗi cá nhân, khi cộng hưởng, sẽ tạo ra chuyển biến lớn cho tập thể, cho toàn hệ thống. Bởi mỗi vị trí không còn cần thiết, được tinh giản sẽ giải phóng nguồn lực cho các lĩnh vực trọng yếu của đơn vị, tổ chức, và rộng ra là của đất nước. Hơn thế, sự hy sinh vì tập thể cũng góp phần xây dựng niềm tin trong nhân dân về một hệ thống chính trị thực sự vì lợi ích chung, như Chủ tịch Hồ Chí Minh đã chỉ dạy: "Cách mạng phải vì lợi ích của dân tộc chứ không phải của một cá nhân".

Từ tháng 12/1958, trong tác phẩm Đạo đức cách mạng, Chủ tịch Hồ Chí Minh đã viết "Cách mạng tiến lên mãi, Đảng tiến lên mãi. Cho nên người cách mạng cũng phải tiến lên mãi". Đất nước ta đang đứng trước cánh cửa lịch sử bước vào kỷ nguyên vươn mình. Những công việc chúng ta làm hôm nay sẽ quyết định tương lai, tạo dựng được bộ máy nhà nước thực sự hiệu quả, phục vụ tốt nhất cho sự phát triển của đất nước trong kỷ nguyên vươn mình của dân tộc.
Vũ Thị Kim Yến 
Khu Di tích Chủ tịch Hồ Chí Minh tại Phủ Chủ tịch`,
    url: "https://baochinhphu.vn/tu-chi-dan-cua-chu-tich-ho-chi-minh-ve-cong-tac-can-bo-den-cuoc-cach-mang-tinh-gon-bo-may-nha-nuoc-hien-nay-102250114194047224.htm",
  },
];
