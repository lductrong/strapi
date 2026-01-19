# Sample Data cho Strapi - UniVenture Hub

Hướng dẫn: Nhập dữ liệu theo thứ tự từ trên xuống dưới để đảm bảo các Relation hoạt động đúng.

---

## PHẦN 1: COLLECTION TYPES (Dữ liệu nền tảng)

### 1. Partners (Đối tác)

#### Partner 1: Đại học Công Nghệ
```
Name: Đại học Công Nghệ (UET)
Type: University
Logo: [Upload file: uet-logo.png]
```

#### Partner 2: VinAI Research
```
Name: VinAI Research
Type: Enterprise
Logo: [Upload file: vinai-logo.png]
```

#### Partner 3: CyberAgent Capital
```
Name: CyberAgent Capital
Type: Fund
Logo: [Upload file: cyberagent-logo.png]
```

---

### 2. Mentors (Chuyên gia)

#### Mentor 1: Phạm Minh Tuấn
```
Name: Phạm Minh Tuấn
Expertise: AI & Machine Learning
Booking Link: https://calendly.com/pmtuan
Avatar: [Upload file: mentor-tuan.jpg]
```

#### Mentor 2: Lê Thị Lan
```
Name: Lê Thị Lan
Expertise: Marketing Strategy
Booking Link: https://calendly.com/lanle
Avatar: [Upload file: mentor-lan.jpg]
```

---

### 3. Courses (Khóa học)

#### Course 1: Web Basics
```
Title: Web Basics
Slug: web-basics
Description: Khóa học nền tảng về HTML, CSS và JavaScript cho người mới bắt đầu. Bạn sẽ học cách xây dựng website tĩnh và tương tác cơ bản.
Level: Beginner
Mentor: [Chọn: Phạm Minh Tuấn]
Thumbnail: [Upload file: course-web.jpg]
Curriculum: (Dynamic Zone - để trống hoặc thêm nội dung sau)
```

#### Course 2: Cloud Intro
```
Title: Cloud Intro
Slug: cloud-intro
Description: Nhập môn điện toán đám mây với AWS và Azure. Hiểu rõ các dịch vụ cloud cơ bản, cách deploy ứng dụng và quản lý tài nguyên.
Level: Intermediate
Mentor: [Chọn: Phạm Minh Tuấn]
Thumbnail: [Upload file: course-cloud.jpg]
Curriculum: (Dynamic Zone - để trống hoặc thêm nội dung sau)
```

#### Course 3: AI Foundation
```
Title: AI Foundation
Slug: ai-foundation
Description: Các khái niệm cốt lõi về trí tuệ nhân tạo, machine learning và deep learning. Ứng dụng thực tế trong các lĩnh vực khác nhau.
Level: Advanced
Mentor: [Chọn: Phạm Minh Tuấn]
Thumbnail: [Upload file: course-ai.jpg]
Curriculum: (Dynamic Zone - để trống hoặc thêm nội dung sau)
```

---

### 4. Events (Sự kiện)

#### Event 1: Hackathon AI for Future
```
Name: Hackathon: AI for Future
Date: 2025-10-20 08:00
Type: Hackathon
Registration Link: https://register.univenture.vn/hackathon-ai
Thumbnail: [Upload file: event-hackathon.jpg]
```

#### Event 2: Webinar Cloud Career Path
```
Name: Webinar: Cloud Career Path
Date: 2025-10-27 19:00
Type: Webinar
Registration Link: https://register.univenture.vn/webinar-cloud
Thumbnail: [Upload file: event-webinar.jpg]
```

---

### 5. Startups (Dự án đã đầu tư)

#### Startup 1: Green Energy IoT
```
Name: Green Energy IoT
Funding Amount: 10000
Description: Giải pháp tiết kiệm năng lượng cho tòa nhà thông minh. Sử dụng IoT sensors và AI để tối ưu hóa tiêu thụ điện năng.
Logo: [Upload file: startup-green.png]
```

#### Startup 2: EdTech AI
```
Name: EdTech AI
Funding Amount: 5000
Description: Gia sư ảo hỗ trợ học tiếng Anh. Ứng dụng AI để cá nhân hóa quá trình học tập cho từng học sinh.
Logo: [Upload file: startup-edtech.png]
```

---

### 6. TeamMembers (Ban điều hành)

#### TeamMember 1: Nguyễn Văn An (CEO)
```
Name: Nguyễn Văn An
Role: CEO
Bio: 10 năm kinh nghiệm trong lĩnh vực khởi nghiệp công nghệ. Đã thành lập 2 startup thành công và hiện là Advisor cho nhiều quỹ đầu tư.
Avatar: [Upload file: ceo-an.jpg]
```

#### TeamMember 2: Trần Thị Bình (COO)
```
Name: Trần Thị Bình
Role: COO
Bio: Chuyên gia vận hành và quản lý quỹ đầu tư. Có kinh nghiệm 8 năm trong lĩnh vực tài chính và quản lý dự án.
Avatar: [Upload file: coo-binh.jpg]
```

---

### 7. Articles (Tin tức)

#### Article 1: 5 xu hướng AI cho sinh viên 2025
```
Title: 5 xu hướng AI cho sinh viên 2025
Slug: 5-xu-huong-ai-2025
Cover Image: [Upload file: article-ai-trends.jpg]
Content: 
Năm 2025 là năm bùng nổ của AI trong giáo dục. Dưới đây là 5 xu hướng mà sinh viên cần nắm bắt:

1. **Personalized Learning**: AI sẽ tạo ra các khóa học được cá nhân hóa dựa trên phong cách học của từng sinh viên.

2. **AI-Powered Coding**: Các công cụ như GitHub Copilot sẽ trở thành bạn đồng hành của lập trình viên.

3. **Data Science Everywhere**: Mọi ngành nghề đều cần kỹ năng phân tích dữ liệu.

4. **Ethical AI**: Các công ty ngày càng quan tâm đến AI đạo đức và trách nhiệm xã hội.

5. **AI for Sustainability**: Sử dụng AI để giải quyết các vấn đề môi trường và phát triển bền vững.

Hãy chuẩn bị sẵn sàng để bắt kịp xu hướng này!

Published At: 2025-08-21
Author: [Chọn: Nguyễn Văn An]
```

---

## PHẦN 2: GLOBAL (Cấu hình chung)

### Global Settings

```
Site Name: UniVenture Hub
Logo: [Upload file: site-logo.png]

Component: layout.navbar
  Items (Repeatable):
    - Label: "Home", URL: "/"
    - Label: "About", URL: "/about"
    - Label: "Academy", URL: "/academy"
    - Label: "Community", URL: "/community"
    - Label: "Venture", URL: "/venture"
    - Label: "Partners", URL: "/partners"
  
  Buttons (Repeatable):
    - Label: "Login", URL: "/auth/login", Type: "Secondary"
    - Label: "Sign Up", URL: "/auth/register", Type: "Primary"

Component: layout.footer
  Copyright Text: "© 2025 UniVenture Hub. All rights reserved."
  
  Columns (Repeatable):
    Column 1:
      Title: "Công ty"
      Links:
        - Label: "Về chúng tôi", URL: "/about"
        - Label: "Liên hệ", URL: "/contact"
        - Label: "Tuyển dụng", URL: "/careers"
    
    Column 2:
      Title: "Chương trình"
      Links:
        - Label: "Academy", URL: "/academy"
        - Label: "Venture", URL: "/venture"
        - Label: "Community", URL: "/community"
    
    Column 3:
      Title: "Pháp lý"
      Links:
        - Label: "Chính sách bảo mật", URL: "/privacy"
        - Label: "Điều khoản sử dụng", URL: "/terms"
    
    Column 4:
      Title: "Theo dõi"
      Links:
        - Label: "Facebook", URL: "https://facebook.com/univenture"
        - Label: "LinkedIn", URL: "https://linkedin.com/company/univenture"
        - Label: "Twitter", URL: "https://twitter.com/univenture"
```

---

## PHẦN 3: SINGLE TYPES (Trang nội dung)

### 1. Homepage

```
Dynamic Zone: Sections

Section 1: Hero
  Headline: Kết nối Sinh viên – Doanh nghiệp – Đầu tư
  Sub Headline: Xây dựng tương lai công nghệ cùng thế hệ trẻ tài năng.
  Background: [Upload file: hero-bg.jpg]
  Buttons:
    - Label: "Tham gia Academy", URL: "/academy", Type: "Primary"
    - Label: "Nộp Startup Idea", URL: "/venture", Type: "Secondary"
    - Label: "Trở thành Mentor", URL: "/community", Type: "Outline"

Section 2: Features Grid (Vision Pillars)
  Title: Ba Trụ Cột Chiến Lược
  Items:
    - Title: "Talent"
      Icon: [Upload file: icon-talent.svg]
      Description: "Đào tạo và phát triển nhân tài công nghệ chất lượng cao."
    
    - Title: "Innovation"
      Icon: [Upload file: icon-bulb.svg]
      Description: "Thúc đẩy sáng tạo và nghiên cứu ứng dụng công nghệ mới."
    
    - Title: "Venture"
      Icon: [Upload file: icon-rocket.svg]
      Description: "Đầu tư và ươm mầm các dự án startup triển vọng toàn cầu."

Section 3: Featured Courses
  Heading: Khóa Học Academy
  Courses: [Chọn: Web Basics, Cloud Intro, AI Foundation]
  Link Text: "Xem thêm khóa học"

Section 4: Featured Events
  Heading: Community & Events
  Events: [Chọn: Hackathon: AI for Future, Webinar: Cloud Career Path]

Section 5: CTA Banner
  Title: Quỹ Khởi nghiệp Sinh viên
  Description: Chúng tôi hỗ trợ các startup sinh viên triển vọng biến những ý tưởng táo bạo thành hiện thực.
  Buttons:
    - Label: "Nộp hồ sơ ngay", URL: "/venture/apply", Type: "Primary"
    - Label: "Xem dự án đã đầu tư", URL: "/venture/portfolio", Type: "Secondary"

Section 6: Partner Logos
  Partners: [Chọn: Đại học Công Nghệ (UET), VinAI Research, CyberAgent Capital]
```

---

### 2. Academy Page

```
Dynamic Zone: Sections

Section 1: Hero
  Headline: Học tập cùng chuyên gia – Nhận chứng chỉ
  Sub Headline: Các khóa học được thiết kế thực tế, sát với nhu cầu doanh nghiệp.
  Background: [Upload file: academy-hero-bg.jpg]
  Buttons:
    - Label: "Khám phá khóa học", URL: "#courses", Type: "Primary"

Section 2: Filter Config (Tùy chọn)
  Show Filters: True
  Available Filters: Level, Mentor, Topic

Note: Frontend sẽ tự động gọi API GET /api/courses để hiển thị tất cả khóa học.
```

---

### 3. Community Page

```
Dynamic Zone: Sections

Section 1: Hero
  Headline: Cộng đồng & Sân chơi sinh viên
  Sub Headline: Nơi kết nối, chia sẻ và thi đấu để nâng cao năng lực.
  Background: [Upload file: community-hero-bg.jpg]
  Buttons:
    - Label: "Tham gia ngay", URL: "/community/join", Type: "Primary"

Section 2: Highlight Event
  Event: [Chọn: Hackathon: AI for Future]
  Button Label: "Đăng ký ngay"
  Button URL: "https://register.univenture.vn/hackathon-ai"

Section 3: Text Block (Capstone Project)
  Title: Capstone Project
  Content: "Chương trình hợp tác với ĐH Công Nghệ. Chủ đề: Ứng dụng IoT trong nông nghiệp. Sinh viên sẽ làm việc với mentor từ các công ty hàng đầu để xây dựng giải pháp thực tế."

Section 4: Mentor Grid
  Mentors: [Chọn: Phạm Minh Tuấn, Lê Thị Lan]
```

---

### 4. Venture Page

```
Dynamic Zone: Sections

Section 1: Hero
  Headline: Quỹ Khởi nghiệp Sinh viên
  Sub Headline: Nguồn vốn mồi và sự hỗ trợ toàn diện cho ý tưởng của bạn.
  Background: [Upload file: venture-hero-bg.jpg]
  Buttons:
    - Label: "Nộp hồ sơ", URL: "/venture/apply", Type: "Primary"
    - Label: "Xem hướng dẫn", URL: "/venture/guide", Type: "Secondary"

Section 2: Checklist (Tiêu chí)
  Title: Tiêu chí tham gia
  Items:
    - "Đội nhóm sinh viên (Core team > 50% là SV)"
    - "Đã có Prototype/MVP cơ bản"
    - "Ý tưởng đổi mới sáng tạo"
    - "Tạo tác động xã hội tích cực"

Section 3: Process Steps (Quy trình)
  Steps:
    - Step Number: 1
      Title: "Nộp hồ sơ"
      Description: "Điền form online với thông tin startup, ý tưởng và tài chính dự kiến."
    
    - Step Number: 2
      Title: "Mentor Clinic"
      Description: "Gặp gỡ chuyên gia tư vấn để hoàn thiện ý tưởng và kế hoạch kinh doanh."
    
    - Step Number: 3
      Title: "Pitch Day"
      Description: "Thuyết trình trước hội đồng đầu tư và nhận feedback."
    
    - Step Number: 4
      Title: "Đầu tư"
      Description: "Giải ngân vốn mồi và ký kết hợp đồng hỗ trợ."

Section 4: Startup Portfolio
  Startups: [Chọn: Green Energy IoT, EdTech AI]
```

---

### 5. About Page

```
Dynamic Zone: Sections

Section 1: Hero
  Headline: Về Chúng Tôi
  Sub Headline: Hành trình kiến tạo hệ sinh thái khởi nghiệp đổi mới sáng tạo.
  Background: [Upload file: about-hero-bg.jpg]

Section 2: Quote
  Content: "Chúng tôi tin rằng sinh viên Việt Nam có đủ tài năng để vươn ra thế giới nếu được dẫn dắt đúng hướng."
  Author Name: Nguyễn Văn An
  Author Title: CEO UniVenture Hub
  Avatar: [Upload file: ceo-an.jpg]

Section 3: Features Grid (Tầm nhìn & Sứ mệnh)
  Title: Tầm nhìn & Sứ mệnh
  Items:
    - Title: "Tầm nhìn"
      Icon: [Upload file: icon-vision.svg]
      Description: "Trở thành hệ sinh thái khởi nghiệp hàng đầu Đông Nam Á, nơi sinh viên tài năng được phát triển toàn diện."
    
    - Title: "Sứ mệnh"
      Icon: [Upload file: icon-mission.svg]
      Description: "Kết nối sinh viên, doanh nghiệp và nhà đầu tư để tạo ra các giải pháp công nghệ đổi mới sáng tạo."

Section 4: Team Grid
  Members: [Chọn: Nguyễn Văn An, Trần Thị Bình]

Section 5: Partner Logos
  Partners: [Chọn: Đại học Công Nghệ (UET), VinAI Research, CyberAgent Capital]
```

---

### 6. Partners Page

```
Dynamic Zone: Sections

Section 1: Hero
  Headline: Hợp tác cùng chúng tôi
  Sub Headline: Cùng nhau tạo ra giá trị bền vững cho giáo dục và công nghệ.
  Background: [Upload file: partners-hero-bg.jpg]
  Buttons:
    - Label: "Liên hệ ngay", URL: "/contact", Type: "Primary"

Section 2: Checklist (Lợi ích nhà trường)
  Title: Lợi ích cho Nhà trường
  Items:
    - "Đề tài capstone thực tế từ doanh nghiệp"
    - "Mentor giàu kinh nghiệm từ Industry"
    - "Cơ hội học bổng & quỹ nghiên cứu"
    - "Nâng cao xếp hạng và uy tín của trường"

Section 3: Checklist (Lợi ích doanh nghiệp)
  Title: Lợi ích cho Doanh nghiệp
  Items:
    - "Tiếp cận nguồn nhân tài sớm"
    - "Đồng tài trợ hackathon branding"
    - "Gắn thương hiệu với sự đổi mới sáng tạo"
    - "Xây dựng mối quan hệ dài hạn với sinh viên tài năng"

Section 4: Testimonials
  Items:
    - Content: "Dự án hợp tác với ĐH Kinh Tế và Công ty X đã tạo ra ứng dụng FinTech xuất sắc cho sinh viên. Chúng tôi rất hài lòng với kết quả."
      Partners Involved: [Chọn: Đại học Công Nghệ (UET), VinAI Research]
    
    - Content: "UniVenture Hub giúp chúng tôi tìm được những startup triển vọng để đầu tư. Đây là một nền tảng tuyệt vời."
      Partners Involved: [Chọn: CyberAgent Capital]
```

---

### 7. Blog Page

```
Dynamic Zone: Sections

Section 1: Hero
  Headline: Blog & Tin tức
  Sub Headline: Cập nhật những xu hướng công nghệ, kinh nghiệm khởi nghiệp và câu chuyện thành công.
  Background: [Upload file: blog-hero-bg.jpg]

Section 2: Featured Post
  Article: [Chọn: 5 xu hướng AI cho sinh viên 2025]
  Button Label: "Đọc tiếp"

Note: Frontend sẽ tự động gọi API GET /api/articles để hiển thị danh sách bài viết.
```

---

## PHẦN 4: COLLECTION TYPES - Dữ liệu bổ sung (Tùy chọn)

### Applications (Hồ sơ Startup đã nộp)

#### Application 1: Green Energy IoT
```
Startup Name: Green Energy IoT
Description: Giải pháp tiết kiệm năng lượng cho tòa nhà thông minh.
Status: Approved
Owner: [Chọn user hoặc để trống nếu chưa có]
```

#### Application 2: EdTech AI
```
Startup Name: EdTech AI
Description: Gia sư ảo hỗ trợ học tiếng Anh.
Status: Under Review
Owner: [Chọn user hoặc để trống nếu chưa có]
```

---

### MentoringSession (Lịch đặt Mentor)

#### Session 1
```
Mentor: [Chọn: Phạm Minh Tuấn]
Mentee: [Chọn user hoặc để trống]
Time: 2025-09-15 14:00
Status: Confirmed
```

#### Session 2
```
Mentor: [Chọn: Lê Thị Lan]
Mentee: [Chọn user hoặc để trống]
Time: 2025-09-20 10:00
Status: Confirmed
```

---

### UserCourseProgress (Tiến độ học tập)

#### Progress 1
```
User: [Chọn user hoặc để trống]
Course: [Chọn: Web Basics]
Progress Percent: 60
```

#### Progress 2
```
User: [Chọn user hoặc để trống]
Course: [Chọn: Cloud Intro]
Progress Percent: 30
```

---

## Lưu ý quan trọng

1. **Media Files**: Tất cả các file ảnh/video cần được upload vào Media Library của Strapi trước khi sử dụng trong các field Media.

2. **Relation Fields**: Khi chọn các relation (như Mentor, Course, Partner), hãy chắc chắn rằng dữ liệu đó đã được tạo trước.

3. **Thứ tự nhập**: Luôn nhập Collection Types trước, sau đó mới nhập Global và Single Types.

4. **Dynamic Zone**: Các section trong Dynamic Zone có thể được sắp xếp lại hoặc xóa bỏ tùy theo nhu cầu.

5. **Tùy chỉnh nội dung**: Bạn có thể thay đổi nội dung, URL, và các thông tin khác để phù hợp với dự án thực tế.

6. **Publish**: Sau khi nhập xong, nhớ click "Publish" để các dữ liệu này hiển thị trên frontend.

---

## DANH SÁCH ẢNH CẦN UPLOAD

Tất cả các file ảnh dưới đây cần được upload vào **Media Library** của Strapi (Folder: `/public/uploads/`).

### Logo & Branding
- `site-logo.png` - Logo chính của website
- `uet-logo.png` - Logo Đại học Công Nghệ
- `vinai-logo.png` - Logo VinAI Research
- `cyberagent-logo.png` - Logo CyberAgent Capital
- `startup-green.png` - Logo Green Energy IoT
- `startup-edtech.png` - Logo EdTech AI

### Avatar & Profile
- `mentor-tuan.jpg` - Avatar Phạm Minh Tuấn
- `mentor-lan.jpg` - Avatar Lê Thị Lan
- `ceo-an.jpg` - Avatar Nguyễn Văn An (CEO)
- `coo-binh.jpg` - Avatar Trần Thị Bình (COO)

### Course Thumbnails
- `course-web.jpg` - Thumbnail khóa Web Basics
- `course-cloud.jpg` - Thumbnail khóa Cloud Intro
- `course-ai.jpg` - Thumbnail khóa AI Foundation

### Event Thumbnails
- `event-hackathon.jpg` - Thumbnail Hackathon: AI for Future
- `event-webinar.jpg` - Thumbnail Webinar: Cloud Career Path

### Article Cover Images
- `article-ai-trends.jpg` - Cover image bài viết "5 xu hướng AI cho sinh viên 2025"

### Hero Background Images
- `hero-bg.jpg` - Background trang chủ (Hero section)
- `academy-hero-bg.jpg` - Background trang Academy
- `community-hero-bg.jpg` - Background trang Community
- `venture-hero-bg.jpg` - Background trang Venture
- `about-hero-bg.jpg` - Background trang About
- `partners-hero-bg.jpg` - Background trang Partners
- `blog-hero-bg.jpg` - Background trang Blog

### Icons (SVG)
- `icon-talent.svg` - Icon cho "Talent"
- `icon-bulb.svg` - Icon cho "Innovation"
- `icon-rocket.svg` - Icon cho "Venture"
- `icon-vision.svg` - Icon cho "Tầm nhìn"
- `icon-mission.svg` - Icon cho "Sứ mệnh"

### Tổng cộng: 28 file ảnh cần upload

**Ghi chú**: Bạn có thể tạo các ảnh mẫu (placeholder) bằng các công cụ như:
- Figma
- Canva
- Placeholder.com
- Unsplash (cho background)
- Flaticon (cho icons)

Sau đó upload vào Strapi Media Library. Các ảnh này có thể được thay thế bằng ảnh thực tế sau này.
