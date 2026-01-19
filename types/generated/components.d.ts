import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    icon: 'square';
    name: 'button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['Primary', 'Secondary', 'Outline']> &
      Schema.Attribute.DefaultTo<'Primary'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsChecklist extends Struct.ComponentSchema {
  collectionName: 'components_elements_checklists';
  info: {
    displayName: 'Checklist';
    icon: 'check-square';
    name: 'checklist';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.checklist-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsChecklistItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_checklist_items';
  info: {
    displayName: 'Checklist Item';
    icon: 'check';
    name: 'checklist-item';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_cards';
  info: {
    displayName: 'Feature Card';
    icon: 'square';
    name: 'feature-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFilterConfig extends Struct.ComponentSchema {
  collectionName: 'components_elements_filter_configs';
  info: {
    displayName: 'Filter Config';
    icon: 'filter';
    name: 'filter-config';
  };
  attributes: {
    enable_level_filter: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    enable_mentor_filter: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    enable_topic_filter: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_columns';
  info: {
    displayName: 'Footer Column';
    icon: 'align-left';
    name: 'footer-column';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    name: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_elements_process_steps';
  info: {
    displayName: 'Process Step';
    icon: 'arrow-right';
    name: 'process-step';
  };
  attributes: {
    description: Schema.Attribute.Text;
    step_number: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsQuote extends Struct.ComponentSchema {
  collectionName: 'components_elements_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote-left';
    name: 'quote';
  };
  attributes: {
    author_name: Schema.Attribute.String & Schema.Attribute.Required;
    author_title: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ElementsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    SocialLink: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'comment';
    name: 'testimonial';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    partners_involved: Schema.Attribute.Relation<
      'oneToMany',
      'api::partner.partner'
    >;
  };
}

export interface LayoutFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_columns';
  info: {
    displayName: 'Footer info';
    icon: 'align-left';
    name: 'footer-column';
  };
  attributes: {
    Address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    Phone: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'bars';
    name: 'navbar';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'elements.button', true>;
    items: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface SectionsCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_banners';
  info: {
    displayName: 'CTA Banner';
    icon: 'flag';
    name: 'cta-banner';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'elements.button', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeaturedArticles extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_articles';
  info: {
    displayName: 'Featured Articles';
    icon: 'newspaper';
    name: 'featured-articles';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsFeaturedCourses extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_courses';
  info: {
    displayName: 'Featured Courses';
    icon: 'book';
    name: 'featured-courses';
  };
  attributes: {
    courses: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
    heading: Schema.Attribute.String;
    link_text: Schema.Attribute.String;
  };
}

export interface SectionsFeaturedEvents extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_events';
  info: {
    displayName: 'Featured Events';
    icon: 'calendar';
    name: 'featured-events';
  };
  attributes: {
    events: Schema.Attribute.Relation<'oneToMany', 'api::event.event'>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsFeaturesGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_features_grids';
  info: {
    displayName: 'Features Grid';
    icon: 'th';
    name: 'features-grid';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.feature-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'heading';
    name: 'hero';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'videos'>;
    buttons: Schema.Attribute.Component<'elements.button', true>;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    sub_headline: Schema.Attribute.String;
  };
}

export interface SectionsHighlightEvent extends Struct.ComponentSchema {
  collectionName: 'components_sections_highlight_events';
  info: {
    displayName: 'Highlight Event';
    icon: 'star';
    name: 'highlight-event';
  };
  attributes: {
    event: Schema.Attribute.Relation<'oneToOne', 'api::event.event'>;
  };
}

export interface SectionsLesson extends Struct.ComponentSchema {
  collectionName: 'components_sections_lessons';
  info: {
    displayName: 'Lesson';
    icon: 'book-open';
    name: 'lesson';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video_url: Schema.Attribute.String;
  };
}

export interface SectionsMentorGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_mentor_grids';
  info: {
    displayName: 'Mentor Grid';
    icon: 'users';
    name: 'mentor-grid';
  };
  attributes: {
    mentors: Schema.Attribute.Relation<'oneToMany', 'api::mentor.mentor'>;
  };
}

export interface SectionsPartnerLogos extends Struct.ComponentSchema {
  collectionName: 'components_sections_partner_logos';
  info: {
    displayName: 'Partner Logos';
    icon: 'handshake';
    name: 'partner-logos';
  };
  attributes: {
    partners: Schema.Attribute.Relation<'oneToMany', 'api::partner.partner'>;
  };
}

export interface SectionsProcessSteps extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_steps';
  info: {
    displayName: 'Process Steps';
    icon: 'list';
    name: 'process-steps';
  };
  attributes: {
    steps: Schema.Attribute.Component<'elements.process-step', true>;
  };
}

export interface SectionsStartupPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_sections_startup_portfolios';
  info: {
    displayName: 'Startup Portfolio';
    icon: 'briefcase';
    name: 'startup-portfolio';
  };
  attributes: {
    heading: Schema.Attribute.String;
    startups: Schema.Attribute.Relation<'oneToMany', 'api::startup.startup'>;
  };
}

export interface SectionsTeamGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_grids';
  info: {
    displayName: 'Team Grid';
    icon: 'users';
    name: 'team-grid';
  };
  attributes: {
    members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'comment';
    name: 'testimonials';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.testimonial', true>;
  };
}

export interface SectionsTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_blocks';
  info: {
    displayName: 'Text Block';
    icon: 'align-left';
    name: 'text-block';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.button': ElementsButton;
      'elements.checklist': ElementsChecklist;
      'elements.checklist-item': ElementsChecklistItem;
      'elements.feature-card': ElementsFeatureCard;
      'elements.filter-config': ElementsFilterConfig;
      'elements.footer-column': ElementsFooterColumn;
      'elements.link': ElementsLink;
      'elements.process-step': ElementsProcessStep;
      'elements.quote': ElementsQuote;
      'elements.social-link': ElementsSocialLink;
      'elements.testimonial': ElementsTestimonial;
      'layout.footer-column': LayoutFooterColumn;
      'layout.navbar': LayoutNavbar;
      'sections.cta-banner': SectionsCtaBanner;
      'sections.featured-articles': SectionsFeaturedArticles;
      'sections.featured-courses': SectionsFeaturedCourses;
      'sections.featured-events': SectionsFeaturedEvents;
      'sections.features-grid': SectionsFeaturesGrid;
      'sections.hero': SectionsHero;
      'sections.highlight-event': SectionsHighlightEvent;
      'sections.lesson': SectionsLesson;
      'sections.mentor-grid': SectionsMentorGrid;
      'sections.partner-logos': SectionsPartnerLogos;
      'sections.process-steps': SectionsProcessSteps;
      'sections.startup-portfolio': SectionsStartupPortfolio;
      'sections.team-grid': SectionsTeamGrid;
      'sections.testimonials': SectionsTestimonials;
      'sections.text-block': SectionsTextBlock;
    }
  }
}
