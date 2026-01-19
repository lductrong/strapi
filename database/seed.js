const Database = require('better-sqlite3');
const path = require('path');
const crypto = require('crypto');

const dbPath = path.join(__dirname, '../.tmp/data.db');
const db = new Database(dbPath);

function generateUUID() {
  return crypto.randomUUID();
}

console.log('🌱 Starting database seed...');

try {
  db.pragma('foreign_keys = ON');

  const partnerCount = db.prepare('SELECT COUNT(*) as count FROM partners').get();
  if (partnerCount.count > 0) {
    console.log('✅ Database already seeded. Skipping...');
    process.exit(0);
  }

  // Partners
  console.log('📝 Inserting Partners...');
  const insertPartner = db.prepare(`
    INSERT INTO partners (document_id, name, type, created_at, updated_at, published_at)
    VALUES (?, ?, ?, datetime('now'), datetime('now'), datetime('now'))
  `);
  insertPartner.run(generateUUID(), 'Đại học Công Nghệ (UET)', 'University');
  insertPartner.run(generateUUID(), 'VinAI Research', 'Enterprise');
  insertPartner.run(generateUUID(), 'CyberAgent Capital', 'Fund');

  // Mentors
  console.log('📝 Inserting Mentors...');
  const insertMentor = db.prepare(`
    INSERT INTO mentors (document_id, name, expertise, booking_link, created_at, updated_at, published_at)
    VALUES (?, ?, ?, ?, datetime('now'), datetime('now'), datetime('now'))
  `);
  insertMentor.run(generateUUID(), 'Phạm Minh Tuấn', 'AI & Machine Learning', 'https://calendly.com/pmtuan');
  insertMentor.run(generateUUID(), 'Lê Thị Lan', 'Marketing Strategy', 'https://calendly.com/lanle');

  // Courses
  console.log('📝 Inserting Courses...');
  const insertCourse = db.prepare(`
    INSERT INTO courses (document_id, title, slug, description, level, created_at, updated_at, published_at)
    VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'), datetime('now'))
  `);
  insertCourse.run(generateUUID(), 'Web Basics', 'web-basics', 'Khóa học nền tảng về HTML, CSS và JavaScript cho người mới bắt đầu.', 'Beginner');
  insertCourse.run(generateUUID(), 'Cloud Intro', 'cloud-intro', 'Nhập môn điện toán đám mây với AWS và Azure.', 'Intermediate');
  insertCourse.run(generateUUID(), 'AI Foundation', 'ai-foundation', 'Các khái niệm cốt lõi về trí tuệ nhân tạo, machine learning và deep learning.', 'Advanced');

  // Events
  console.log('📝 Inserting Events...');
  const insertEvent = db.prepare(`
    INSERT INTO events (document_id, name, date, type, registration_link, created_at, updated_at, published_at)
    VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'), datetime('now'))
  `);
  insertEvent.run(generateUUID(), 'Hackathon: AI for Future', '2025-10-20 08:00:00', 'Hackathon', 'https://register.univenture.vn/hackathon-ai');
  insertEvent.run(generateUUID(), 'Webinar: Cloud Career Path', '2025-10-27 19:00:00', 'Webinar', 'https://register.univenture.vn/webinar-cloud');

  // Startups
  console.log('📝 Inserting Startups...');
  const insertStartup = db.prepare(`
    INSERT INTO startups (document_id, name, funding_amount, description, created_at, updated_at, published_at)
    VALUES (?, ?, ?, ?, datetime('now'), datetime('now'), datetime('now'))
  `);
  insertStartup.run(generateUUID(), 'Green Energy IoT', 10000, 'Giải pháp tiết kiệm năng lượng cho tòa nhà thông minh.');
  insertStartup.run(generateUUID(), 'EdTech AI', 5000, 'Gia sư ảo hỗ trợ học tiếng Anh.');

  // Team Members
  console.log('📝 Inserting Team Members...');
  const insertTeamMember = db.prepare(`
    INSERT INTO team_members (document_id, name, role, bio, created_at, updated_at, published_at)
    VALUES (?, ?, ?, ?, datetime('now'), datetime('now'), datetime('now'))
  `);
  insertTeamMember.run(generateUUID(), 'Nguyễn Văn An', 'CEO', '10 năm kinh nghiệm trong lĩnh vực khởi nghiệp công nghệ.');
  insertTeamMember.run(generateUUID(), 'Trần Thị Bình', 'COO', 'Chuyên gia vận hành và quản lý quỹ đầu tư.');

  // Articles
  console.log('📝 Inserting Articles...');
  const insertArticle = db.prepare(`
    INSERT INTO articles (document_id, title, slug, content, created_at, updated_at, published_at)
    VALUES (?, ?, ?, ?, datetime('now'), datetime('now'), datetime('now'))
  `);
  insertArticle.run(generateUUID(), '5 xu hướng AI cho sinh viên 2025', '5-xu-huong-ai-2025', 'Năm 2025 là năm bùng nổ của AI trong giáo dục.');

  // Applications
  console.log('📝 Inserting Applications...');
  const insertApplication = db.prepare(`
    INSERT INTO applications (document_id, startup_name, description, status, created_at, updated_at, published_at)
    VALUES (?, ?, ?, ?, datetime('now'), datetime('now'), datetime('now'))
  `);
  insertApplication.run(generateUUID(), 'Green Energy IoT', 'Giải pháp tiết kiệm năng lượng.', 'Approved');
  insertApplication.run(generateUUID(), 'EdTech AI', 'Gia sư ảo hỗ trợ học tiếng Anh.', 'Under Review');

  // Mentoring Sessions
  console.log('📝 Inserting Mentoring Sessions...');
  const insertMentoringSession = db.prepare(`
    INSERT INTO mentoring_sessions (document_id, time, status, created_at, updated_at, published_at)
    VALUES (?, ?, ?, datetime('now'), datetime('now'), datetime('now'))
  `);
  insertMentoringSession.run(generateUUID(), '2025-09-15 14:00:00', 'Confirmed');
  insertMentoringSession.run(generateUUID(), '2025-09-20 10:00:00', 'Confirmed');

  // User Course Progress
  console.log('📝 Inserting User Course Progress...');
  const insertUserCourseProgress = db.prepare(`
    INSERT INTO user_course_progresses (document_id, progress_percent, created_at, updated_at, published_at)
    VALUES (?, ?, datetime('now'), datetime('now'), datetime('now'))
  `);
  insertUserCourseProgress.run(generateUUID(), 60);
  insertUserCourseProgress.run(generateUUID(), 30);

  console.log('✅ Database seed completed successfully!');

} catch (error) {
  console.error('❌ Error seeding database:', error.message);
  process.exit(1);
} finally {
  db.close();
}
