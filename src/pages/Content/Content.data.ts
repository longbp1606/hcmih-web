export type LocaleKey = 'vi' | 'en' | 'ja';
export type TopicKey = 'nationalIndependence' | 'nationalRevolution';

export type ContentParagraphItem = {
	title: string;
	image?: string;
	paragraphs: string[];
};

type TopicContentMap = Record<TopicKey, ContentParagraphItem[]>;

export const contentByLocale: Record<LocaleKey, TopicContentMap> = {
	vi: {
		nationalIndependence: [
			{
				title: 'Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm',
				paragraphs: [
					'Lịch sử dựng nước và giữ nước của dân tộc Việt Nam từ ngàn xưa đến nay gắn liền với truyền thống yêu nước, đấu tranh chống giặc ngoại xâm. Điều đó nói lên một khát khao to lớn của dân tộc ta là, luôn mong muốn có được một nền độc lập cho dân tộc, tự do cho nhân dân và đó cũng là một giá trị tinh thần thiêng liêng, bất hủ của dân tộc mà Hồ Chí Minh là hiện thân cho tinh thần ấy. Người nói rằng, cái mà tôi cần nhất trên đời là đồng bào tôi được tự do, Tổ quốc tôi được độc lập.',
					'Nhân cơ hội các nước đồng minh thắng trận trong Chiến tranh thế giới thứ nhất họp Hội nghị ở Vécxây (Pháp) năm 1919 mà ở đó Tổng thống Mỹ V. Wilson đã kêu gọi trao quyền tự quyết cho các dân tộc trên thế giới, thay mặt những người yêu nước Việt Nam tại Pháp, Hồ Chí Minh đã gửi tới Hội nghị bản Yêu sách của nhân dân An Nam, với hai nội dung chính là đòi quyền bình đẳng về mặt pháp lý và đòi các quyền tự do, dân chủ. Bản Yêu sách không được Hội nghị chấp nhận nhưng qua sự kiện trên cho thấy lần đầu tiên, tư tưởng Hồ Chí Minh về quyền của các dân tộc thuộc địa mà trước hết là quyền bình đẳng và tự do đã hình thành. Căn cứ vào những quyền tự do, bình đẳng và quyền con người - “những quyền mà không ai có thể xâm phạm được” đã được ghi trong bản Tuyên ngôn Độc lập của Cách mạng Mỹ năm 1776, Tuyên ngôn Nhân quyền và Dân quyền của Cách mạng Pháp năm 1791, Hồ Chí Minh tiếp tục khẳng định những giá trị thiêng liêng, bất biến về quyền dân tộc: “Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do... Đó là những lẽ phải không ai chối cãi được”.',
					`Trong Chánh cương vắn tắt của Đảng năm 1930, Hồ Chí Minh cũng đã xác định mục tiêu chính trị của Đảng là:
    “a) Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến.
    b) Làm cho nước Nam được hoàn toàn độc lập”`,
                    'Cách mạng Tháng Tám năm 1945 thành công, trong Tuyên ngôn Độc lập, Hồ Chí Minh thay mặt Chính phủ lâm thời trịnh trọng tuyên bố trước quốc dân đồng bào và thế giới rằng: “Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thực đã thành một nước tự do và độc lập. Toàn thể dân Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do và độc lập ấy”.',
                    'Ý chí và quyết tâm trên còn được thể hiện trong hai cuộc kháng chiến chống Pháp và chống Mỹ. Trong thư gửi Liên hợp quốc năm 1946, một lần nữa Hồ Chí Minh khẳng định: “Nhân dân chúng tôi thành thật mong muốn hòa bình. Nhưng nhân dân chúng tôi cũng kiên quyết chiến đấu đến cùng để bảo vệ những quyền thiêng liêng nhất: toàn vẹn lãnh thổ cho Tổ quốc và độc lập cho đất nước”.⁴ Khi thực dân Pháp tiến hành xâm lược Việt Nam lần thứ hai, trong Lời kêu gọi toàn quốc kháng chiến ngày 19-12-1946, Người ra lời hiệu triệu, thể hiện quyết tâm sắt đá, bảo vệ cho bằng được nền độc lập dân tộc — giá trị thiêng liêng mà nhân dân Việt Nam mới giành được: “Không! Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ”.',
                    'Năm 1965, đế quốc Mỹ tăng cường mở rộng chiến tranh ở Việt Nam: ở mặt đưa quân viễn chinh Mỹ, chủ yếu vào miền Nam tiến hành chiến lược “Chiến tranh cục bộ” và gây chiến tranh phá hoại miền Bắc. Trong hoàn cảnh khó khăn, chiến tranh ác liệt đó, Hồ Chí Minh đã nêu lên một chân lý thời đại, một tuyên ngôn bất hủ của các dân tộc khao khát nền độc lập, tự do trên thế giới “Không có gì quý hơn độc lập, tự do”.⁶ Với tư tưởng trên của Hồ Chí Minh, nhân dân Việt Nam đã anh dũng chiến đấu, đánh thắng để đế quốc Mỹ xâm lược, buộc chúng phải ký kết Hiệp định Paris, cam kết tôn trọng các quyền dân tộc cơ bản của nhân dân Việt Nam, rút quân Mỹ về nước.'
				]
			},
			{
				title: 'Độc lập gắn với tự do, ấm no và hạnh phúc của nhân dân',
				paragraphs: [
					'Theo Hồ Chí Minh, độc lập dân tộc phải gắn với tự do của nhân dân. Người đánh giá cao học thuyết “Tam dân” của Tôn Trung Sơn về độc lập và tự do: dân tộc độc lập, dân quyền tự do và dân sinh hạnh phúc. Và bằng lý lẽ đầy thuyết phục, khi viện dẫn bản Tuyên ngôn Nhân quyền và Dân quyền của Cách mạng Pháp năm 1791 — “Người ta sinh ra tự do và bình đẳng về quyền lợi, và phải luôn được tự do và bình đẳng về quyền lợi” — Hồ Chí Minh khẳng định dân tộc Việt Nam đương nhiên cũng phải được tự do và bình đẳng về quyền lợi. “Đó là lẽ phải không ai chối cãi được”.',
					'Trong Chánh cương vắn tắt của Đảng năm 1930, Người xác định mục tiêu đấu tranh của cách mạng là “Làm cho nước Nam được hoàn toàn độc lập… dân chúng được tự do… thu hồi hết các thứ quốc trái… thu hết ruộng đất của đế quốc chủ nghĩa làm của công chia cho dân cày nghèo… bỏ sưu thuế cho dân cày nghèo… thi hành luật ngày làm 8 giờ”³. Tổng khởi nghĩa Tháng Tám năm 1945 thành công, nước nhà được độc lập và một lần nữa Hồ Chí Minh khẳng định độc lập phải gắn với tự do: Người nói: “Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì”.',
					`Độc lập phải gắn với hạnh phúc của nhân dân. Ngay sau thắng lợi của Cách mạng Tháng Tám năm 1945 trong hoàn cảnh nhân dân đói rét, mù chữ…, Hồ Chí Minh yêu cầu: “Chúng ta phải...
                        Làm cho dân có ăn.
                        Làm cho dân có mặc.
                        Làm cho dân có chỗ ở.
                        Làm cho dân có học hành”.`,
                    'Có thể thấy rằng, xuyên suốt hoạt động cách mạng của Hồ Chí Minh, Người luôn coi độc lập gắn liền với tự do, hạnh phúc cho nhân dân; như Người từng bộc bạch: “Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành”.'
				]
			},
            {
                title: 'Độc lập dân tộc phải là nền độc lập thật sự, hoàn toàn và triệt để',
                paragraphs: [
                    'Trong quá trình đi xâm lược các nước, bọn thực dân đế quốc hay dùng chiêu bài mị dân, thành lập các chính phủ bù nhìn bản xứ, tuyên truyền cái gọi là “độc lập tự do” giả hiệu cho nhân dân các nước thuộc địa nhưng thực chất là nhằm che đậy bản chất “ăn cướp” và “giết người” của chúng',
                    'Theo Hồ Chí Minh, độc lập dân tộc phải là độc lập thật sự, hoàn toàn và triệt để trên tất cả các lĩnh vực. Người nhấn mạnh: độc lập mà người dân không có quyền tự quyết về ngoại giao, không có quân đội riêng, không có nền tài chính riêng… thì độc lập đó chẳng có ý nghĩa gì. Trên tinh thần đó và trong hoàn cảnh đất nước ta sau Cách mạng Tháng Tám còn gặp nhiều khó khăn, nhất là nạn thù trong, giặc ngoài bao vây, để bảo vệ nền độc lập thật sự mới giành được, Người đã thay mặt Chính phủ ký với đại diện Chính phủ Pháp Hiệp định Sơ bộ ngày 6-3-1946, theo đó: “Chính phủ Pháp công nhận nước Việt Nam Dân chủ Cộng hòa là một quốc gia tự do có chính phủ của mình, Nghị viện của mình, quân đội của mình, tài chính của mình”.'
                ],
            },
            {
                title: 'Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ',
                paragraphs: [
                    'Theo Hồ Chí Minh, độc lập dân tộc phải là độc lập thật sự, hoàn toàn và triệt để trên tất cả các lĩnh vực. Người nhấn mạnh: độc lập mà người dân không có quyền tự quyết về ngoại giao, không có quân đội riêng, không có nền tài chính riêng… thì độc lập đó chẳng có ý nghĩa gì. Trên tinh thần đó và trong hoàn cảnh đất nước ta sau Cách mạng Tháng Tám còn gặp nhiều khó khăn, nhất là nạn thù trong, giặc ngoài bao vây, để bảo vệ nền độc lập thật sự mới giành được, Người đã thay mặt Chính phủ ký với đại diện Chính phủ Pháp Hiệp định Sơ bộ ngày 6-3-1946, theo đó: “Chính phủ Pháp công nhận nước Việt Nam Dân chủ Cộng hòa là một quốc gia tự do có chính phủ của mình, Nghị viện của mình, quân đội của mình, tài chính của mình”.'
                ]
            }
		],
		nationalRevolution: [
			{
				title: 'Cách mạng giải phóng dân tộc muốn thắng lợi phải đi theo con đường cách mạng vô sản',
				paragraphs: [
					'Từ khi thực dân Pháp tiến hành xâm lược và đặt ách thống trị nước ta, vấn đề sống còn của dân tộc được đặt ra là phải đấu tranh để giải phóng dân tộc khỏi ách thực dân đế quốc. Hàng loạt những phong trào yêu nước chống thực dân đã nổ ra nhưng không thành công, sự thất bại của những phong trào yêu nước trong thời kỳ này đã nói lên sự khủng hoảng, bế tắc về giai cấp lãnh đạo và đường lối cách mạng. Vượt qua tầm nhìn của các bậc tiền bối, Hồ Chí Minh có chí hướng là muốn tìm kiếm con đường cứu nước, giải phóng dân tộc ở phương Tây; như Người đã nói: “Tôi muốn đi ra nước ngoài, xem nước Pháp và các nước khác. Sau khi xem xét họ làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta”¹. Nhưng qua tìm hiểu thực tế sau đó, Người quyết định không chọn con đường cách mạng tư sản vì cho rằng: “Cách mệnh Pháp cũng như cách mệnh Mỹ, nghĩa là cách mệnh tư bản, cách mệnh không đến nơi, tiếng là cộng hòa và dân chủ, kỳ thực trong thì tước lộc công nông, ngoài thì nó áp bức thuộc địa. Cách mệnh đã bốn lần rồi, mà nay công nông Pháp hằng còn phải mưu cách mệnh lần nữa mới hòng thoát khỏi vòng áp bức”',
					'Năm 1917, Cách mạng Tháng Mười Nga thắng lợi đã ảnh hưởng sâu sắc tới Hồ Chí Minh trong việc lựa chọn con đường cứu nước, giải phóng dân tộc. Người cho rằng: “Trong thế giới bây giờ chỉ có cách mệnh Nga là đã thành công và thành công đến nơi, nghĩa là dân chúng được hưởng cái hạnh phúc tự do, bình đẳng thật, không phải tự do và bình đẳng giả dối như đế quốc chủ nghĩa Pháp khoe khoang bên An Nam… Nói tóm lại là phải theo chủ nghĩa Mác Khắc Tư và Lênin”',
					`Năm 1920, sau khi đọc bản Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin, Hồ Chí Minh tìm thấy ở đó con đường cứu nước, giải phóng dân tộc: con đường cách mạng vô sản; như sau này Người khẳng định: “Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản”⁴. Đây là con đường cách mạng triệt để nhất phù hợp với yêu cầu của cách mạng Việt Nam và xu thế phát triển của thời đại. Trong bài Con đường dẫn tôi đến chủ nghĩa Lênin, Người kể lại: “Luận cương của Lênin làm cho tôi rất cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao! Tôi vui mừng đến phát khóc lên.Ngồi một mình trong buồng mà tôi nói to lên như đang nói trước quần chúng đông đảo: “Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta”. Từ đó tôi hoàn toàn tin theo Lênin, tin theo Quốc tế thứ ba¹.
                    Học thuyết cách mạng vô sản của chủ nghĩa Mác - Lê Nin được Người vận dụng một cách sáng tạo trong điều kiện cách mạng Việt Nam.`,
                    'Giải phóng dân tộc gắn với giải phóng giai cấp, trong đó giải phóng dân tộc là trước hết, trên hết. Theo Mác và Ăngghen, con đường cách mạng vô sản ở châu Âu là đi từ giải phóng giai cấp - giải phóng dân tộc - giải phóng xã hội - giải phóng con người. Còn theo Hồ Chí Minh, thì ở Việt Nam và các nước thuộc địa do hoàn cảnh lịch sử - chính trị khác với châu Âu nên phải là: giải phóng dân tộc - giải phóng xã hội - giải phóng giai cấp - giải phóng con người.',
                    'Độc lập dân tộc gắn liền với chủ nghĩa xã hội. Trong Chánh cương vắn tắt của Đảng năm 1930, Hồ Chí Minh đã khẳng định phương hướng chiến lược cách mạng Việt Nam: làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản. Phương hướng này vừa phù hợp với xu thế phát triển của thời đại vừa hướng tới giải quyết một cách triệt để những yêu cầu khách quan, cụ thể mà cách mạng Việt Nam đặt ra vào cuối thế kỷ XIX đầu thế kỷ XX.',
                    'Trong văn kiện Đại hội VI Quốc tế cộng sản, khái niệm “cách mạng tư sản dân quyền” không bao hàm đầy đủ nhiệm vụ chống đế quốc, giải phóng dân tộc ở các nước thuộc địa. Còn trong Chánh cương vắn tắt, Hồ Chí Minh nêu rõ: Cách mạng tư sản dân quyền trước hết là phải đánh đổ đế quốc và bọn phong kiến, làm cho nước Nam được hoàn toàn độc lập... Cũng theo Quốc tế cộng sản, thì hai nhiệm vụ chống đế quốc và phong kiến phải được thực hiện đồng thời, khăng khít với nhau, nương tựa vào nhau, nhưng xuất phát từ một nước thuộc địa, Hồ Chí Minh không coi hai nhiệm vụ đó nhất loạt phải thực hiện ngang nhau, mà đặt lên hàng đầu nhiệm vụ chống đế quốc, giải phóng dân tộc; còn nhiệm vụ chống phong kiến, mang lại ruộng đất cho nông dân thì sẽ từng bước thực hiện. Cho nên trong Chánh cương vắn tắt, Người chỉ nêu “thâu hết ruộng đất của đế quốc chủ nghĩa làm của công, chia cho dân cày nghèo” mà chưa nêu ra chủ trương “người cày có ruộng”. Đây là nét độc đáo, sáng tạo của Hồ Chí Minh.'
				]
			},
			{
				title: 'Cách mạng giải phóng dân tộc, trong điều kiện của Việt Nam, muốn thắng lợi phải do Đảng Cộng sản lãnh đạo',
				paragraphs: [
					'Về tầm quan trọng của tổ chức Đảng đối với cách mạng, chủ nghĩa Mác và Lênin chỉ rõ: Đảng cộng sản là nhân tố chủ quan để giai cấp công nhân hoàn thành sứ mệnh lịch sử của mình. Giai cấp công nhân phải tổ chức ra chính đảng; đảng đó phải thuyết phục, giác ngộ và tập hợp đông đảo quần chúng, huấn luyện quần chúng và đưa quần chúng ra đấu tranh. Hồ Chí Minh tiếp thu lý luận của chủ nghĩa Mác-Lênin và rất chú trọng đến việc thành lập đảng cộng sản, khẳng định vai trò to lớn của Đảng đối với cách mạng giải phóng dân tộc theo con đường cách mạng vô sản. Trong tác phẩm Đường cách mệnh (1927), Người đặt vấn đề: Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với các dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững cách mệnh mới thành công…',
					'Trong hoàn cảnh Việt Nam là một nước thuộc địa - phong kiến, theo Hồ Chí Minh, Đảng Cộng sản vừa là đội tiên phong của giai cấp công nhân vừa là đội tiên phong của nhân dân lao động kiên quyết nhất, hăng hái nhất, trong sạch nhất, tận tâm tận lực phụng sự Tổ quốc. Đó còn là Đảng của cả dân tộc Việt Nam. Trong Báo cáo chính trị tại Đại hội II của Đảng (1951), Người viết: chính vì Đảng Lao động Việt Nam là Đảng của giai cấp công nhân và nhân dân lao động, cho nên nó phải là Đảng của dân tộc Việt Nam.',
					'Đây là một luận điểm quan trọng của Hồ Chí Minh có ý nghĩa bổ sung, phát triển lý luận mácxít về đảng cộng sản.'
				]
			},
            {
                title: ' Cách mạng giải phóng dân tộc phải dựa trên lực lượng đại đoàn kết toàn dân tộc, lấy liên minh công - nông làm nền tảng',
                paragraphs: [
                    'Các nhà lý luận kinh điển của chủ nghĩa Mác - Lênin khẳng định rằng: cách mạng là sự nghiệp của quần chúng nhân dân; quần chúng nhân dân là chủ thể sáng tạo ra lịch sử. V.I.Lênin viết: “Không có sự đồng tình ủng hộ của đại đa số nhân dân lao động đối với đội tiên phong của mình tức là đối với giai cấp vô sản, thì cách mạng vô sản không thể thực hiện được”',
                    'Kế thừa tư tưởng các nhà lý luận nói trên, Hồ Chí Minh quan niệm: có dân là có tất cả, trên đời này không gì quý bằng dân, được lòng dân thì được tất cả, mất lòng dân thì mất tất cả. Người khẳng định: “cách mệnh là việc chung của dân chúng chứ không phải việc một hai người”². Người lý giải rằng, dân tộc cách mệnh thì chưa phân giai cấp, nghĩa là sĩ, nông, công, thương đều nhất trí chống lại cường quyền. Vậy nên phải tập hợp và đoàn kết toàn dân thì cách mạng mới thành công.',
                    'Năm 1930, trong Sách lược vắn tắt của Đảng, Hồ Chí Minh xác định lực lượng cách mạng bao gồm toàn dân: Đảng phải thu phục đại bộ phận giai cấp công nhân, tập hợp đại bộ phận dân cày và phải dựa vào dân cày nghèo làm thổ địa cách mệnh; liên lạc với tiểu tư sản, trí thức, trung nông… để lôi kéo họ về phía vô sản giai cấp; còn đối với phú nông, trung, tiểu địa chủ và tư bản Việt Nam mà chưa rõ mặt phản cách mạng thì phải lợi dụng, ít ra cũng làm cho họ trung lập.',
                    'Khi thực dân Pháp tiến hành xâm lược Việt Nam lần thứ hai, Hồ Chí Minh thiết tha kêu gọi mọi người không phân biệt giai, tầng, dân tộc, tôn giáo, đảng phái… đoàn kết đấu tranh chống kẻ thù chung của dân tộc. Trong Lời kêu gọi toàn quốc kháng chiến (12-1946), Người viết: “Bất kỳ đàn ông, đàn bà, bất kỳ người già, người trẻ, không chia tôn giáo, đảng phái, dân tộc. Hễ là người Việt Nam thì phải đứng lên đánh thực dân Pháp để cứu Tổ quốc”',
                    'Trong khi xác định lực lượng cách mạng là toàn dân, Hồ Chí Minh lưu ý rằng, không được quên “công nông là chủ cách mệnh… là gốc cách mệnh”². Trong tác phẩm Đường cách mệnh, Người giải thích: giai cấp công nhân và nông dân là hai giai cấp đông đảo và cách mạng nhất, bị bóc lột nặng nề nhất, vì thế “lòng cách mệnh càng bền, chí cách mệnh càng quyết… công nông là tay không chân rồi, nếu thua thì chỉ mất một cái kiếp khổ, nếu được thì được cả thế giới, cho nên họ gan góc”'
                ]
            },
            {
                title: 'Cách mạng giải phóng dân tộc cần chủ động, sáng tạo, có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc',
                paragraphs: [
                    'Do chưa đánh giá hết tiềm lực và khả năng to lớn của cách mạng thuộc địa nên Quốc tế Cộng sản có lúc xem nhẹ vai trò của cách mạng thuộc địa, coi cách mạng thuộc địa phụ thuộc vào cách mạng vô sản ở chính quốc. Đại hội VI Quốc tế Cộng sản năm 1928 đã thông qua Những luận cương về phong trào cách mạng trong các nước thuộc địa và nửa thuộc địa, trong đó có đoạn viết rằng: chỉ có thể thực hiện hoàn toàn công cuộc giải phóng các nước thuộc địa khi giai cấp vô sản giành được thắng lợi ở các nước tư bản tiên tiến. Quan điểm này có tác động không tốt, làm giảm đi tính chủ động, sáng tạo của nhân dân các nước thuộc địa trong công cuộc đấu tranh chống thực dân, đế quốc, giành độc lập cho dân tộc.',
                    'Quán triệt tư tưởng của V.I.Lênin về mối quan hệ chặt chẽ giữa cách mạng vô sản ở chính quốc với phong trào giải phóng dân tộc thuộc địa, từ rất sớm Hồ Chí Minh chỉ rõ mối quan hệ khăng khít, tác động qua lại lẫn nhau giữa cách mạng thuộc địa và cách mạng vô sản ở chính quốc — mối quan hệ bình đẳng, không lệ thuộc, phụ thuộc vào nhau. Năm 1924, tại Đại hội V của Quốc tế Cộng sản, Người nói: “Vận mệnh của giai cấp vô sản thế giới và đặc biệt là vận mệnh của giai cấp vô sản ở các nước bị xâm lược thuộc địa gắn chặt với vận mệnh của giai cấp bị áp bức ở các thuộc địa”',
                    'Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Người cũng viết: “Chủ nghĩa tư bản là một con đỉa có một cái vòi bám vào giai cấp vô sản ở chính quốc và một cái vòi khác bám vào giai cấp vô sản ở thuộc địa. Nếu muốn giết con vật ấy, người ta phải đồng thời cắt cả hai vòi. Nếu người ta chỉ cắt một vòi thôi, thì cái vòi còn lại kia vẫn tiếp tục hút máu của giai cấp vô sản, con vật vẫn tiếp tục sống và cái vòi bị cắt đứt lại sẽ mọc ra”',
                    'Là một người dân thuộc địa, là người cộng sản và là người nghiên cứu rất kỹ về chủ nghĩa đế quốc, Hồ Chí Minh cho rằng: cách mạng thuộc địa không những không phụ thuộc vào cách mạng vô sản ở chính quốc mà có thể giành thắng lợi trước. Người viết: “Ngày mà hàng trăm triệu nhân dân châu Á bị tàn sát và áp bức thức tỉnh để gạt bỏ sự bóc lột dễ tiện của một bọn thực dân lòng tham không đáy, họ sẽ hình thành một lực lượng khổng lồ, và trong khi thí tiêu một trong những điều kiện tồn tại của chủ nghĩa tư bản là chủ nghĩa đế quốc, họ có thể giúp đỡ những người anh em mình ở phương Tây trong nhiệm vụ giải phóng hoàn toàn”². Luận điểm sáng tạo trên của Hồ Chí Minh dựa trên các cơ sở sau:',
                    `
                        Thuộc địa có một vị trí, vai trò, tầm quan trọng đặc biệt đối với chủ nghĩa đế quốc, là nơi duy trì sự tồn tại, phát triển, là mỏ mồi “béo bở” cho chủ nghĩa đế quốc. Tại Đại hội V Quốc tế Cộng sản, trong Phiên họp thứ Tám, ngày 23-6-1924, Hồ Chí Minh đã phát biểu để “thức tỉnh… về vấn đề thuộc địa”³. Người cho rằng: “nọc độc và sức sống của con rắn độc tư bản chủ nghĩa đang tập trung ở các thuộc địa hơn là ở chính quốc”⁴, nếu thờ ơ về vấn đề cách mạng ở thuộc địa thì như “đánh chết rắn đang đuổi”⁵. Cho nên, cách mạng ở thuộc địa có vai trò rất lớn trong việc cùng với cách mạng vô sản ở chính quốc tiêu diệt chủ nghĩa đế quốc.

                        Tinh thần đấu tranh cách mạng hết sức quyết liệt của các dân tộc thuộc địa, mà theo Người nó sẽ bùng lên mạnh mẽ, hình thành một “lực lượng khổng lồ” khi được tập hợp, hướng dẫn và giác ngộ cách mạng.

                    `,
                    'Căn cứ vào luận điểm của C.Mác về khả năng tự giải phóng của giai cấp công nhân, trong Tuyên ngôn của Hội liên hiệp thuộc địa, khi kêu gọi các dân tộc thuộc địa đứng lên đấu tranh giành quyền độc lập dân tộc, Người viết: “Hỡi anh em ở các thuộc địa… Anh em phải làm thế nào để được giải phóng? Vận dụng công thức của Các Mác, chúng tôi xin nói với anh em rằng, công cuộc giải phóng anh em chỉ có thể thực hiện được bằng sự nỗ lực của bản thân anh em”',
                    'Với thực tiễn thắng lợi năm 1945 ở Việt Nam cũng như phong trào giải phóng dân tộc trên thế giới đã thành công vào những năm 60, trong khi cách mạng vô sản ở chính quốc chưa nổ ra và thắng lợi, càng chứng minh luận điểm trên của Hồ Chí Minh là độc đáo, sáng tạo, có giá trị lý luận và thực tiễn to lớn.'
                ]
            },
            {
                title: 'Cách mạng giải phóng dân tộc phải được tiến hành bằng phương pháp bạo lực cách mạng',
                paragraphs: [
                    'Trong bộ Tư bản, quyển I, tập thứ nhất, xuất bản lần đầu tiên năm 1867, C.Mác viết: “Bạo lực là bả đỡ của một chế độ xã hội cũ đang thai nghén một chế độ mới”². Năm 1878, trong tác phẩm Chống Đuyrinh, Ph.Ăngghen nhắc lại: “Bạo lực còn đóng một vai trò khác trong lịch sử, vai trò cách mạng; nói theo C.Mác, bạo lực còn là bà đỡ cho mọi xã hội cũ đang thai nghén một xã hội mới; bạo lực là công cụ mà sự vận động xã hội dùng để tự mở đường cho mình và đập tan tành những hình thức chính trị đã hóa đá và chết cứng”³. Trên cơ sở tiếp thu quan điểm của C.Mác và Ph.Ăngghen, với kinh nghiệm Cách mạng Tháng Mười Nga và cách mạng thế giới, V.I.Lênin khẳng định tính tất yếu của bạo lực cách mạng, làm sáng tỏ hơn vấn đề bạo lực cách mạng trong học thuyết về cách mạng vô sản: không có bạo lực cách mạng thì không thể thay thế nhà nước tư sản bằng nhà nước vô sản được.',
                    'Dựa trên cơ sở quan điểm về bạo lực cách mạng của các nhà kinh điển của chủ nghĩa Mác - Lênin, Hồ Chí Minh đã vận dụng sáng tạo phù hợp với thực tiễn cách mạng Việt Nam.',
                    'Dùng bạo lực cách mạng để chống lại bạo lực phản cách mạng. Hồ Chí Minh đã thấy rõ sự cần thiết phải sử dụng bạo lực cách mạng: “Trong cuộc đấu tranh gian khổ chống kẻ thù của giai cấp và dân tộc, cần dùng bạo lực cách mạng chống lại bạo lực phản cách mạng, giành lấy chính quyền và bảo vệ chính quyền”⁴. Tất yếu là vậy, vì ngay như hành động mang quân đi xâm lược của thực dân đế quốc đối với các nước thuộc địa và phụ thuộc, thì như Người vạch rõ: “Chế độ thực dân, tự bản thân nó, đã là một hành động bạo lực của kẻ mạnh đối với kẻ yếu rồi”',
                    'Và sau khi xâm chiếm các nước thuộc địa, bọn thực dân đế quốc đã thực hiện chế độ cai trị vô cùng tàn bạo: dùng bạo lực để đàn áp dã man các phong trào yêu nước, thủ tiêu mọi quyền tự do, dân chủ của nhân dân, bóc lột và đẩy người dân thuộc địa vào bước đường cùng. Vì vậy, muốn đánh đổ thực dân - phong kiến giành độc lập dân tộc thì tất yếu phải sử dụng phương pháp bạo lực cách mạng, dùng bạo lực cách mạng để chống lại bạo lực phản cách mạng của kẻ thù.',
                    'Về hình thức bạo lực cách mạng, theo Hồ Chí Minh, bạo lực cách mạng ở đây là bạo lực của quần chúng được với hai lực lượng chính trị và quân sự, hai hình thức đấu tranh: đấu tranh chính trị và đấu tranh vũ trang; chính trị và đấu tranh chính trị của quần chúng là cơ sở, nền tảng cho việc xây dựng lực lượng vũ trang và đấu tranh vũ trang; đấu tranh vũ trang có ý nghĩa quyết định đối với việc tiêu diệt lực lượng quân sự và âm mưu thôn tính của thực dân đế quốc, đi đến kết thúc chiến tranh. Việc xác định hình thức đấu tranh phải căn cứ vào hoàn cảnh lịch sử cụ thể mà áp dụng cho thích hợp, như Người đã chỉ rõ: “Tùy tình hình cụ thể mà quyết định những hình thức đấu tranh cách mạng thích hợp, sử dụng đúng và khéo kết hợp các hình thức đấu tranh vũ trang và đấu tranh chính trị để giành thắng lợi cho cách mạng”¹. Trong Cách mạng Tháng Tám năm 1945, với hình thức tổng khởi nghĩa của quần chúng nhân dân trong cả nước, chủ yếu dựa vào lực lượng chính trị, kết hợp với lực lượng vũ trang, nhân dân ta đã thắng lợi, giành chính quyền về tay nhân dân.'
                ]
            }
		]
	},
	en: {
		nationalIndependence: [
			{
				title: 'Independence and freedom as sacred, inalienable rights',
				paragraphs: [
					'Vietnam’s long history of nation-building and defense is bound to a tradition of patriotism and resistance to foreign aggression. It reflects a profound aspiration: national independence for the country and freedom for the people — sacred and enduring values embodied by Ho Chi Minh. As he said, "What I desire most is that my compatriots enjoy freedom and my Fatherland gains independence."',
					'In 1919, at the Versailles Conference, Ho Chi Minh submitted the “Claims of the Annamite People,” demanding legal equality and basic freedoms. Though rejected, this marked an early articulation of colonial peoples’ rights. Drawing on the U.S. Declaration of Independence (1776) and the French Declaration of the Rights of Man and of the Citizen (1789/1791), he affirmed: “All nations are born equal; every nation has the right to live, to be happy and free. Those are undeniable truths.”',
					`In the 1930 Brief Political Program of the Party, Ho Chi Minh set the political goal:
a) Overthrow French imperialism and the feudalists.
b) Win complete independence for Vietnam.`,
					'After the success of the August Revolution (1945), the Declaration of Independence proclaimed: “Vietnam has the right to be a free and independent country — and in fact it is. The entire Vietnamese people are determined to use all their spirit and strength, their lives and wealth to keep this freedom and independence.”',
					'This will and determination were affirmed throughout the wars against French colonialists and U.S. imperialists. In 1946, he wrote to the United Nations: “Our people sincerely desire peace, but we are also determined to fight to the end to safeguard the most sacred rights: the territorial integrity of the Fatherland and the independence of the country.” In 1965, amid escalating U.S. aggression, he declared the immortal truth: “Nothing is more precious than independence and freedom.”'
				]
			},
			{
				title: 'Independence linked to people’s freedom, well-being, and happiness',
				paragraphs: [
					'For Ho Chi Minh, national independence must go hand in hand with people’s freedom and a dignified, prosperous life.',
					'He appreciated Sun Yat-sen’s “Three People’s Principles”: national independence, civil rights, and people’s livelihood. Citing the French Declaration (1791) — “Men are born free and remain free and equal in rights” — he argued that the Vietnamese, too, must be free and equal: “That is a truth that no one can deny.”',
					`In the 1930 Program, he set revolutionary goals: complete independence for Vietnam; freedom for the people; reclaim public finances; redistribute imperialist land as public property for poor peasants; abolish oppressive taxes; and implement the 8‑hour work day.`,
					'He emphasized: “An independent country where the people do not enjoy happiness and freedom has no meaning.” Immediately after the August Revolution, he prioritized urgent tasks so people could eat, be clothed, housed, and educated — because genuine independence must deliver real benefits to the people.'
				]
			},
			{
				title: 'Independence must be genuine, complete, and thorough',
				paragraphs: [
					'Colonial powers often installed puppet regimes and advertised sham “freedom and independence” to disguise exploitation and violence.',
					'Ho Chi Minh insisted that independence must be real and comprehensive. If a nation has no autonomous diplomacy, no army, no finances of its own, that independence is meaningless. In March 1946, to safeguard Vietnam’s newly-won independence under complex conditions, he signed the Preliminary Agreement with France, whereby “France recognizes the Democratic Republic of Vietnam as a free state having its own government, parliament, army, and finances.”'
				]
			},
			{
				title: 'Independence inseparable from national unity and territorial integrity',
				paragraphs: [
					'National independence must go together with the unity of the country and the inviolability of its borders and territory. Any “independence” that tolerates division or subordination in core state functions is illusory and unacceptable.'
				]
			}
		],
		nationalRevolution: [
			{
				title: 'To win, national liberation must follow the path of the proletarian revolution',
				paragraphs: [
					'Under French colonial rule, the Vietnamese struggled for liberation, yet early patriotic movements failed due to a crisis of leadership and strategy.',
					'The victory of the October Revolution (1917) profoundly influenced Ho Chi Minh. Rejecting the bourgeois path as incomplete and oppressive at home and abroad, he embraced Marxism–Leninism as the only thoroughgoing road to liberation.',
					`In 1920, after reading Lenin’s Theses on the National and Colonial Questions, he found the road to salvation: the proletarian revolution. He recalled: “Lenin’s theses made me so moved, excited, clear‑sighted, and confident! … I exclaimed: ‘This is the path to our liberation.’ From then on I completely believed in Lenin and the Third International.”`,
					'Ho Chi Minh creatively applied Marxism–Leninism to Vietnam: liberation of the nation first, thereby creating conditions for social and human emancipation; independence coupled with socialism as the strategic direction.'
				]
			},
			{
				title: 'In Vietnam, the national liberation revolution must be led by the Communist Party',
				paragraphs: [
					'Marxism–Leninism holds that the Communist Party is the vanguard that organizes, educates, and leads the masses to fulfill their historical mission.',
					'In Vietnam’s colonial–feudal conditions, the Party is the vanguard of the working class and the working people — and, in Ho Chi Minh’s conception, the Party of the entire nation, wholeheartedly serving the Fatherland.',
					'This view enriches Marxist theory on the Party in colonial contexts and underscores the decisive role of leadership in national liberation.'
				]
			},
			{
				title: 'Rely on great national unity; the worker–peasant alliance as the foundation',
				paragraphs: [
					'Revolution is the cause of the masses. Ho Chi Minh emphasized winning the people’s hearts: with the people, everything is possible; without them, nothing is.',
					'The revolutionary forces encompass the entire nation; yet workers and peasants are the most steadfast and revolutionary, forming the backbone of the alliance.',
					'Unite all strata against the common enemy while firmly rooting the revolution in the worker–peasant alliance.'
				]
			},
			{
				title: 'Be proactive and creative; colonial revolutions can triumph before those in the metropoles',
				paragraphs: [
					'Ho Chi Minh affirmed an equal, mutually reinforcing relationship between colonial revolutions and proletarian revolutions in the capitalist centers — not subordination.',
					'Colonies were vital to imperialism; awakening hundreds of millions in the colonies would form a mighty force to help destroy imperialism together with the proletariat in the metropoles.',
					`Grounded in practice, Vietnam’s 1945 victory and later waves of decolonization in the 1960s confirmed that colonial revolutions could succeed even before revolutions in advanced capitalist countries.`
				]
			},
			{
				title: 'National liberation requires revolutionary violence against counter‑revolutionary violence',
				paragraphs: [
					'Following Marx, Engels, and Lenin, Ho Chi Minh held that the revolutionary path inevitably involves force against reactionary violence under colonial domination.',
					'Revolutionary violence combines political struggle (the masses’ mobilization) with armed struggle; forms must fit concrete conditions while coordinating both fronts to victory.',
					'The August Revolution (1945) succeeded through a general uprising led by mass political forces, combined with armed power — a vivid example of that synthesis.'
				]
			}
		]
	},
	ja: {
		nationalIndependence: [
			{
				title: '独立と自由は神聖にして侵すべからざる権利',
				paragraphs: [
					'建国と護国の歴史は、愛国の伝統と対外侵略への抵抗に結び付いている。ホー・チ・ミンはその体現者であり、「私が最も望むのは、同胞が自由を享受し、祖国が独立することだ」と述べた。',
					'1919年のヴェルサイユ会議で、彼は「安南人民の要求」を提出し、法の下の平等と自由を求めた。米国独立宣言（1776年）と人権宣言（1789/1791年）に基づき、「すべての民族は平等に生まれ、生命・幸福・自由を享受する権利がある」と主張した。',
					`1930年の「簡略綱領」では、a) フランス帝国主義と封建勢力を打倒し、b) ベトナムの完全独立を実現する、との政治目標を掲げた。`,
					'1945年の独立宣言では「ベトナムは自由で独立した国である」と世界に宣言した。その決意は対仏・対米の戦いで貫かれ、1965年には「独立と自由ほど尊いものはない」と高らかに示された。'
				]
			},
			{
				title: '独立は人民の自由・安寧・幸福と不可分',
				paragraphs: [
					'民族独立は人民の自由と尊厳ある生活と結び付かなければならない。',
					'孫文の「三民主義」（民族独立・民権・民生）への評価、人権宣言の引用を通じて、ベトナム人民の自由と平等の権利を擁護した。',
					`1930年綱領では、完全独立、人民の自由、財政再建、帝国主義の土地の公有化と貧農への分配、苛斂誅求の廃止、8時間労働制などを提示。`,
					'「国が独立しても人民が幸福と自由を享受しなければ、独立に意味はない」。革命直後から、衣食住・教育など人民生活の緊急課題に取り組んだ。'
				]
			},
			{
				title: '真の独立——完全かつ徹底した独立',
				paragraphs: [
					'植民地宗主国は傀儡政権を立て「偽りの独立」を宣伝した。',
					'ホー・チ・ミンは、外交・軍隊・財政など国家主権を自ら掌握しない独立は無意味だと強調。1946年の予備協定は、ベトナム民主共和国を「政府・議会・軍隊・財政」をもつ自由国家として承認した。'
				]
			},
			{
				title: '独立は国家統一と領土一体性と不可分',
				paragraphs: [
					'独立は国家の統一、国境・領土の不可侵と切り離せない。中核主権を欠く「独立」は容認できない。'
				]
			}
		],
		nationalRevolution: [
			{
				title: '勝利のため、民族解放は無産階級革命の道を歩むべき',
				paragraphs: [
					'初期の愛国運動は指導と路線の危機で敗北したが、1917年十月革命はホー・チ・ミンに決定的影響を与えた。',
					'彼は不徹底なブルジョア路線を退け、マルクス＝レーニン主義を民族解放の唯一徹底した道として受容した。',
					'レーニンの民族・植民地論を読んで「これこそ我々の解放の道」と確信し、ベトナムの現実に即して創造的に適用した。'
				]
			},
			{
				title: 'ベトナムでは共産党の指導が不可欠',
				paragraphs: [
					'共産党は大衆を組織・教育・指導する前衛である。',
					'植民地・封建の条件下で、党は労働者階級と労働人民の前衛であり、国民全体の党として祖国に奉仕する。',
					'この見解は植民地状況における党の役割に関する理論を豊かにし、民族解放における指導の決定的意義を強調する。'
				]
			},
			{
				title: '大団結に依拠し、労農同盟を基盤に',
				paragraphs: [
					'革命は大衆の事業である。人民の心を得ることが要だ。',
					'革命勢力は全国民に及ぶが、その中核は最も堅固な労働者と農民である。',
					'共通の敵に対して各層を団結させつつ、労農同盟を確固たる基盤とする。'
				]
			},
			{
				title: '主体性と創造性——植民地革命は本国に先行し得る',
				paragraphs: [
					'植民地革命と本国の無産階級革命は対等で相互補完的な関係にあり、従属しない。',
					'植民地は帝国主義維持の要であり、そこにおける人民の覚醒と結集は帝国主義打倒の巨大な力となる。',
					'1945年のベトナムの勝利や1960年代の脱植民地化は、この見解の妥当性を示した。'
				]
			},
			{
				title: '民族解放は反革命暴力に対抗する革命的暴力を要する',
				paragraphs: [
					'マルクス、エンゲルス、レーニンの考えに基づき、植民地支配下では反革命の暴力に対し、革命の暴力が不可避である。',
					'革命的暴力は大衆の政治闘争と武装闘争の結合であり、具体状況に即した形態の選択と両面の連携が勝利をもたらす。',
					'1945年の八月革命は、大衆政治闘争と武装力の結合による勝利の典型である。'
				]
			}
		]
	}
};

export function getIdeologyContent(locale: string, key: string): ContentParagraphItem[] {
	const loc = (locale === 'vi' || locale === 'en' || locale === 'ja') ? (locale as LocaleKey) : 'vi';
	const safeKey = (key === 'nationalIndependence' || key === 'nationalRevolution') ? (key as TopicKey) : 'nationalIndependence';
	const byLoc = contentByLocale[loc] as TopicContentMap | undefined;
	return byLoc?.[safeKey] ?? [];
}
