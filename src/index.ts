import type { Core } from '@strapi/strapi';

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    console.log('🌱 Starting bootstrap seed...');

    try {
      const existingPartners = await strapi.entityService.findMany('api::partner.partner');
      if (existingPartners.length > 0) {
        console.log('✅ Data already seeded. Skipping...');
        return;
      }

      // Seed Partners
      console.log('📝 Creating Partners...');
      const partners = await Promise.all([
        strapi.entityService.create('api::partner.partner', {
          data: { name: 'Đại học Công Nghệ (UET)', type: 'University', publishedAt: new Date() },
        }),
        strapi.entityService.create('api::partner.partner', {
          data: { name: 'VinAI Research', type: 'Enterprise', publishedAt: new Date() },
        }),
        strapi.entityService.create('api::partner.partner', {
          data: { name: 'CyberAgent Capital', type: 'Fund', publishedAt: new Date() },
        }),
      ]);

      // Seed Mentors
      console.log('📝 Creating Mentors...');
      const mentors = await Promise.all([
        strapi.entityService.create('api::mentor.mentor', {
          data: {
            name: 'Phạm Minh Tuấn',
            expertise: 'AI & Machine Learning',
            booking_link: 'https://calendly.com/pmtuan',
            publishedAt: new Date(),
          },
        }),
        strapi.entityService.create('api::mentor.mentor', {
          data: {
            name: 'Lê Thị Lan',
            expertise: 'Marketing Strategy',
            booking_link: 'https://calendly.com/lanle',
            publishedAt: new Date(),
          },
        }),
      ]);

      // Seed Courses
      console.log('📝 Creating Courses...');
      const courses = await Promise.all([
        strapi.entityService.create('api::course.course', {
          data: {
            title: 'Web Basics',
            slug: 'web-basics',
            description: 'Khóa học nền tảng về HTML, CSS và JavaScript cho người mới bắt đầu.',
            level: 'Beginner',
            mentor: mentors[0].documentId,
            publishedAt: new Date(),
          },
        }),
        strapi.entityService.create('api::course.course', {
          data: {
            title: 'Cloud Intro',
            slug: 'cloud-intro',
            description: 'Nhập môn điện toán đám mây với AWS và Azure.',
            level: 'Intermediate',
            mentor: mentors[0].documentId,
            publishedAt: new Date(),
          },
        }),
        strapi.entityService.create('api::course.course', {
          data: {
            title: 'AI Foundation',
            slug: 'ai-foundation',
            description: 'Các khái niệm cốt lõi về trí tuệ nhân tạo, machine learning và deep learning.',
            level: 'Advanced',
            mentor: mentors[0].documentId,
            publishedAt: new Date(),
          },
        }),
      ]);

      // Seed Events
      console.log('📝 Creating Events...');
      const events = await Promise.all([
        strapi.entityService.create('api::event.event', {
          data: {
            name: 'Hackathon: AI for Future',
            date: '2025-10-20T08:00:00Z',
            type: 'Hackathon',
            registration_link: 'https://register.univenture.vn/hackathon-ai',
            publishedAt: new Date(),
          },
        }),
        strapi.entityService.create('api::event.event', {
          data: {
            name: 'Webinar: Cloud Career Path',
            date: '2025-10-27T19:00:00Z',
            type: 'Webinar',
            registration_link: 'https://register.univenture.vn/webinar-cloud',
            publishedAt: new Date(),
          },
        }),
      ]);

      // Seed Startups
      console.log('📝 Creating Startups...');
      const startups = await Promise.all([
        strapi.entityService.create('api::startup.startup', {
          data: {
            name: 'Green Energy IoT',
            funding_amount: 10000,
            description: 'Giải pháp tiết kiệm năng lượng cho tòa nhà thông minh.',
            publishedAt: new Date(),
          },
        }),
        strapi.entityService.create('api::startup.startup', {
          data: {
            name: 'EdTech AI',
            funding_amount: 5000,
            description: 'Gia sư ảo hỗ trợ học tiếng Anh.',
            publishedAt: new Date(),
          },
        }),
      ]);

      // Seed Team Members
      console.log('📝 Creating Team Members...');
      const teamMembers = await Promise.all([
        strapi.entityService.create('api::team-member.team-member', {
          data: {
            name: 'Nguyễn Văn An',
            role: 'CEO',
            bio: '10 năm kinh nghiệm trong lĩnh vực khởi nghiệp công nghệ.',
            publishedAt: new Date(),
          },
        }),
        strapi.entityService.create('api::team-member.team-member', {
          data: {
            name: 'Trần Thị Bình',
            role: 'COO',
            bio: 'Chuyên gia vận hành và quản lý quỹ đầu tư.',
            publishedAt: new Date(),
          },
        }),
      ]);

      // Seed Articles
      console.log('📝 Creating Articles...');
      await strapi.entityService.create('api::article.article', {
        data: {
          title: '5 xu hướng AI cho sinh viên 2025',
          slug: '5-xu-huong-ai-2025',
          content: 'Năm 2025 là năm bùng nổ của AI trong giáo dục.',
          author: teamMembers[0].documentId,
          publishedAt: new Date(),
        },
      });

      // Seed Applications
      console.log('📝 Creating Applications...');
      await Promise.all([
        strapi.entityService.create('api::application.application', {
          data: {
            startup_name: 'Green Energy IoT',
            description: 'Giải pháp tiết kiệm năng lượng.',
            status: 'Approved',
            publishedAt: new Date(),
          },
        }),
        strapi.entityService.create('api::application.application', {
          data: {
            startup_name: 'EdTech AI',
            description: 'Gia sư ảo hỗ trợ học tiếng Anh.',
            status: 'Under Review',
            publishedAt: new Date(),
          },
        }),
      ]);

      // Seed Mentoring Sessions
      console.log('📝 Creating Mentoring Sessions...');
      await Promise.all([
        strapi.entityService.create('api::mentoring-session.mentoring-session', {
          data: {
            mentor: mentors[0].documentId,
            time: '2025-09-15T14:00:00Z',
            status: 'Confirmed',
            publishedAt: new Date(),
          },
        }),
        strapi.entityService.create('api::mentoring-session.mentoring-session', {
          data: {
            mentor: mentors[1].documentId,
            time: '2025-09-20T10:00:00Z',
            status: 'Confirmed',
            publishedAt: new Date(),
          },
        }),
      ]);

      // Seed User Course Progress
      console.log('📝 Creating User Course Progress...');
      await Promise.all([
        strapi.entityService.create('api::user-course-progress.user-course-progress', {
          data: {
            course: courses[0].documentId,
            progress_percent: 60,
            publishedAt: new Date(),
          },
        }),
        strapi.entityService.create('api::user-course-progress.user-course-progress', {
          data: {
            course: courses[1].documentId,
            progress_percent: 30,
            publishedAt: new Date(),
          },
        }),
      ]);

      // Seed Global Settings
      console.log('📝 Creating Global Settings...');
      await strapi.entityService.create('api::global.global', {
        data: {
          site_name: 'UniVenture Hub',
          publishedAt: new Date(),
        },
      });

      // Seed Homepage
      console.log('📝 Creating Homepage...');
      await strapi.entityService.create('api::homepage.homepage', {
        data: {
          sections: [
            {
              __component: 'sections.hero',
              headline: 'Kết nối Sinh viên – Doanh nghiệp – Đầu tư',
              sub_headline: 'Xây dựng tương lai công nghệ cùng thế hệ trẻ tài năng.',
            },
          ],
          publishedAt: new Date(),
        },
      });

      // Seed Academy Page
      console.log('📝 Creating Academy Page...');
      await strapi.entityService.create('api::academy-page.academy-page', {
        data: {
          sections: [
            {
              __component: 'sections.hero',
              headline: 'Học tập cùng chuyên gia – Nhận chứng chỉ',
              sub_headline: 'Các khóa học được thiết kế thực tế, sát với nhu cầu doanh nghiệp.',
            },
          ],
          publishedAt: new Date(),
        },
      });

      // Seed Community Page
      console.log('📝 Creating Community Page...');
      await strapi.entityService.create('api::community-page.community-page', {
        data: {
          sections: [
            {
              __component: 'sections.hero',
              headline: 'Cộng đồng & Sân chơi sinh viên',
              sub_headline: 'Nơi kết nối, chia sẻ và thi đấu để nâng cao năng lực.',
            },
          ],
          publishedAt: new Date(),
        },
      });

      // Seed Venture Page
      console.log('📝 Creating Venture Page...');
      await strapi.entityService.create('api::venture-page.venture-page', {
        data: {
          sections: [
            {
              __component: 'sections.hero',
              headline: 'Quỹ Khởi nghiệp Sinh viên',
              sub_headline: 'Nguồn vốn mồi và sự hỗ trợ toàn diện cho ý tưởng của bạn.',
            },
          ],
          publishedAt: new Date(),
        },
      });

      // Seed About Page
      console.log('📝 Creating About Page...');
      await strapi.entityService.create('api::about-page.about-page', {
        data: {
          sections: [
            {
              __component: 'sections.hero',
              headline: 'Về Chúng Tôi',
              sub_headline: 'Hành trình kiến tạo hệ sinh thái khởi nghiệp đổi mới sáng tạo.',
            },
          ],
          publishedAt: new Date(),
        },
      });

      // Seed Partners Page
      console.log('📝 Creating Partners Page...');
      await strapi.entityService.create('api::partners-page.partners-page', {
        data: {
          sections: [
            {
              __component: 'sections.hero',
              headline: 'Hợp tác cùng chúng tôi',
              sub_headline: 'Cùng nhau tạo ra giá trị bền vững cho giáo dục và công nghệ.',
            },
          ],
          publishedAt: new Date(),
        },
      });

      // Seed Blog Page
      console.log('📝 Creating Blog Page...');
      await strapi.entityService.create('api::blog-page.blog-page', {
        data: {
          sections: [
            {
              __component: 'sections.hero',
              headline: 'Blog & Tin tức',
              sub_headline: 'Cập nhật những xu hướng công nghệ, kinh nghiệm khởi nghiệp và câu chuyện thành công.',
            },
          ],
          publishedAt: new Date(),
        },
      });

      console.log('✅ Bootstrap seed completed successfully!');
    } catch (error) {
      console.error('❌ Error in bootstrap seed:', error);
    }
  },
};