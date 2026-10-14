/**
 * Mubashir Rehman - Premium Personal Portfolio
 * Vanilla JavaScript (ES6+)
 * No external framework dependencies. Clean, modular, and maintainable.
 */

// ==========================================================================
// 1. Projects Data Store (Case Details for Modal)
// ==========================================================================
const PROJECTS_DATA = {
  p1: {
    title: 'Portfolio Website Design',
    category: 'Web Design · UI/UX',
    image: '/assets/projects/project-1-portfolio.jpg',
    overview:
      'A personal portfolio website concept focused on presenting creative work, professional information, and projects through a modern and user-friendly interface.',
    goals: [
      'Establish a distinct visual identity combining typography and subtle gradients.',
      'Provide intuitive navigation across multi-disciplinary UI/UX and engineering skills.',
      'Ensure frictionless access to interactive Figma prototypes and contact channels.',
      'Achieve optimal readability in both dark and light ambient environments.'
    ],
    features: [
      'Dynamic hero section with personal statement and availability indicator',
      'Categorized interactive projects gallery with filter controls',
      'Clear career progression timeline showcasing internship milestones',
      'Accessible contact flow with multi-channel communication options'
    ],
    approach:
      'Conducted iterative wireframing in Figma exploring different hero compositions, spacing rules, and typography hierarchies. Selected a purple-to-pink gradient accents system with subtle background glows to give depth while keeping content readable.',
    tools: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Visual Hierarchy'],
    figmaUrl:
      'https://www.figma.com/proto/YDyPJgQATQno125QoMv5Fm/Untitled?node-id=1533-6883&t=HJDc07vuRYc4W0d7-1&scaling=scale-down-width&content-scaling=fixed&page-id=1123%3A6673&starting-point-node-id=1186%3A6673'
  },
  p2: {
    title: 'Desert Safari Booking Platform',
    category: 'Booking Platform · Web Design · UI/UX',
    image: '/assets/projects/project-2-safari.jpg',
    overview:
      'A booking platform design for exploring desert safari packages, reviewing options, selecting booking details, and following a simple reservation journey.',
    goals: [
      'Streamline the discovery of specialized tourism experiences in a single view.',
      'Design transparent pricing comparisons for day passes and overnight camping.',
      'Simplify multi-step date and guest checkout into intuitive selections.',
      'Evoke the warm, adventurous atmosphere of desert landscapes through imagery.'
    ],
    features: [
      'Interactive package comparison cards with ratings and verified reviews',
      'Streamlined date picker and guest allocation interface',
      'Visual breakdown of included amenities (dune bashing, BBQ, VIP camp)',
      'Clear, distraction-free reservation confirmation checkout flow'
    ],
    approach:
      'Focused heavily on the booking funnel UX. Designed high-contrast call-to-actions paired with desert-inspired amber accents to guide travelers smoothly from initial interest to package reservation.',
    tools: ['Figma', 'User Flow', 'Interactive Prototyping', 'E-Commerce UX', 'Design System'],
    figmaUrl:
      'https://www.figma.com/proto/YDyPJgQATQno125QoMv5Fm/Untitled?node-id=1186-6673&t=f1VFZAbpTcHRfi39-1&scaling=scale-down-width&content-scaling=fixed&page-id=1123%3A6673&starting-point-node-id=1345%3A140'
  },
  p3: {
    title: 'Watch Animation Web Design',
    category: 'Motion UI · Web Design · UI/UX',
    image: '/assets/projects/project-3-watch-anim.jpg',
    overview:
      'A premium watch showcase concept featuring product-focused visuals, elegant presentation, and animated web design interactions.',
    goals: [
      'Showcase high-end luxury watch craftsmanship through product-first layout design.',
      'Incorporate fluid motion micro-interactions without distracting from key product specs.',
      'Highlight dial complications, chronographs, and mechanical details dynamically.'
    ],
    features: [
      'Interactive timepiece presentation with smooth interactive transitions',
      'Dynamic spec breakdown (movement, crystal, water resistance, diameter)',
      'Luxury typography pairing with dark aesthetic and warm metallic highlights',
      'Quick purchase inquiry and boutique consultation touchpoints'
    ],
    approach:
      'Prototyped interactive scroll animations and component state transitions in Figma. Focused on high-fidelity visual fidelity, balanced whitespace, and luxury aesthetic cues.',
    tools: ['Figma', 'Micro-interactions', 'Motion Design', 'High-Fidelity UI', 'Prototyping'],
    figmaUrl:
      'https://www.figma.com/proto/YDyPJgQATQno125QoMv5Fm/Untitled?node-id=504-1403&t=jFqXB2pIgqqXKRwh-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=504%3A1403&show-proto-sidebar=1'
  },
  p4: {
    title: 'SkyCars — Car Rental & Vehicle Booking Website',
    category: 'Web Application · UI/UX',
    image: '/assets/projects/project-4-skycars.jpg',
    overview:
      'A vehicle rental website concept designed to help users explore cars, compare options, and navigate the vehicle booking experience.',
    goals: [
      'Empower customers to filter vehicle fleets by transmission, category, and rate.',
      'Provide clear, upfront vehicle specifications (0-100 km/h, drivetrain, seating).',
      'Reduce rental booking abandonment through transparent terms and insurance options.'
    ],
    features: [
      'Category fleet browser (Sports, SUVs, Luxury, Electric)',
      'Detailed vehicle specification comparison modal',
      'Flexible pickup date, drop-off location, and add-on insurance selectors',
      'Prominent customer protection badges (free cancellation, 24/7 roadside)'
    ],
    approach:
      'Employed a dark-mode neon cyan and slate palette to create a high-tech modern automotive feeling. Organized complex technical specs into scannable data chips.',
    tools: ['Figma', 'UI Design', 'Information Architecture', 'Responsive Layout', 'Prototyping'],
    figmaUrl:
      'https://www.figma.com/proto/YDyPJgQATQno125QoMv5Fm/Untitled?node-id=1363-7141&t=7ygdiDxAHlsiLXkI-1&scaling=contain&content-scaling=fixed&page-id=1123%3A6673&starting-point-node-id=1186%3A6673&show-proto-sidebar=1'
  },
  p5: {
    title: 'TechLearn — Technology Learning Platform',
    category: 'EdTech · Web Design · UI/UX',
    image: '/assets/projects/project-5-techlearn.jpg',
    overview:
      'An online learning platform concept focused on course discovery, student learning journeys, progress tracking, and an organized digital learning experience.',
    goals: [
      'Motivate students through clear visual progress indicators and syllabus tracking.',
      'Organize comprehensive engineering topics into digestible modular sections.',
      'Deliver an organized dashboard with clean navigation and minimal cognitive load.'
    ],
    features: [
      'Interactive student learning dashboard with resume-lesson capabilities',
      'Visual completion progress bars and milestone indicators',
      'Course discovery catalog with rating stars and student enrollment counts',
      'Curriculum sidebar with quick navigation to assignments and certificates'
    ],
    approach:
      'Designed using an accessible 8pt spacing grid and modular dashboard components. Combined purple and pink gradient accents to create an encouraging, energetic learning environment.',
    tools: ['Figma', 'EdTech UX', 'Dashboard Design', 'Component Library', 'User Flows'],
    figmaUrl:
      'https://www.figma.com/proto/YDyPJgQATQno125QoMv5Fm/Untitled?node-id=1405-1955&t=3UfO35tayhtOnRWG-1&scaling=contain&content-scaling=fixed&page-id=1123%3A6673&starting-point-node-id=1406%3A539&show-proto-sidebar=1'
  },
  p6: {
    title: 'FoodieGo (Fast Food Delivery App)',
    category: 'Mobile App · UI/UX',
    image: '/assets/projects/project-6-foodiego.jpg',
    overview:
      'A mobile food delivery app design focused on food discovery, menu browsing, a clear ordering flow, and a convenient user experience.',
    goals: [
      'Speed up the time between app opening and meal checkout for hungry customers.',
      'Present food items with appetite-appealing imagery and transparent pricing.',
      'Ensure single-hand thumb navigation on modern mobile screen sizes.'
    ],
    features: [
      'Category icons carousel (Burgers, Pizzas, Asian, Beverages, Desserts)',
      'Speedy delivery ETA tracker ("20-30 Min ETA")',
      'Customizable meal configuration with add-ons and side selections',
      'One-tap add-to-cart and streamlined address selection header'
    ],
    approach:
      'Adopted mobile-first user flow optimization. Designed thumb-friendly tap targets, high-contrast action buttons, and appetizing warm orange color accents.',
    tools: ['Figma', 'Mobile UI/UX', 'iOS / Android Guidelines', 'Interactive Prototyping', 'Thumb Zone UX'],
    figmaUrl:
      'https://www.figma.com/proto/YDyPJgQATQno125QoMv5Fm/Untitled?node-id=2002-35473&t=jbiHEVFTXq6BnVOa-1&scaling=contain&content-scaling=fixed&page-id=1123%3A6673&starting-point-node-id=2002%3A35472&show-proto-sidebar=1'
  },
  p7: {
    title: 'Watch Web Application',
    category: 'Web Application · Product UI · UI/UX',
    image: '/assets/projects/project-7-watch-app.jpg',
    overview:
      'A watch-focused web application concept featuring a product presentation interface with an emphasis on visual appeal and user-friendly navigation.',
    goals: [
      'Allow customers to personalize watch strap materials and dial combinations.',
      'Present luxury horology engineering with minimal clutter and maximum clarity.',
      'Provide instant price recalculation based on selected finishes.'
    ],
    features: [
      'Interactive configurator selector (Titanium, Leather, High-grade Rubber)',
      'Live dial complication and movement specs overview',
      'Transparent warranty, shipping, and concierge support badges',
      'Direct "Add to Collection" checkout button'
    ],
    approach:
      'Crafted an elegant dark studio atmosphere with titanium and silver gradients. Emphasized Swiss design balance with clean sans-serif typography.',
    tools: ['Figma', 'Product UI', 'Configurator UX', 'Visual Design', 'Wireframing'],
    figmaUrl:
      'https://www.figma.com/proto/YDyPJgQATQno125QoMv5Fm/Untitled?node-id=1433-470&t=cHpJzfcdpwUmRIpr-1&scaling=scale-down-width&content-scaling=fixed&page-id=1123%3A6673&starting-point-node-id=1186%3A6673'
  },
  p8: {
    title: 'Doctor Appointments',
    category: 'Healthcare · Web Design · Mobile App · UI/UX',
    image: '/assets/projects/project-8-doctor.jpg',
    overview:
      'A healthcare appointment interface concept designed to help users navigate doctor information and appointment booking through a clear, accessible experience.',
    goals: [
      'Eliminate confusion when booking specialized medical consultations.',
      'Clearly present doctor qualifications, reviews, and clinical background.',
      'Provide immediate clarity between Video Telemedicine vs. In-Clinic visits.'
    ],
    features: [
      'Verified doctor profile card with specialty, rating, and patient reviews',
      'Real-time available appointment slots with same-day booking tags',
      'Consultation mode toggles (Video Consultation or In-Clinic visit)',
      'Synced Electronic Health Record (EHR) reminders and prescription refills'
    ],
    approach:
      'Selected calming medical teal and cyan tones to instill trust and comfort. Prioritized WCAG accessibility, readable font sizes, and prominent confirmation cues.',
    tools: ['Figma', 'Healthcare UX', 'Accessibility (WCAG)', 'Appointment Booking Flow', 'Prototyping'],
    figmaUrl:
      'https://www.figma.com/proto/YDyPJgQATQno125QoMv5Fm/Untitled?node-id=1876-13719&t=JOFxSUZa6RFp6DQ8-1&scaling=contain&content-scaling=fixed&page-id=1123%3A6673&starting-point-node-id=1186%3A6673&show-proto-sidebar=1'
  }
};

// ==========================================================================
// 2. Main Application Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initProfilePhoto();
  initProjectsFilter();
  initProjectModal();
  initCVDownload();
  initContactForm();
  initCopyButtons();
  initScrollSpy();
  initScrollToTop();
});

// ==========================================================================
// 3. Theme Toggle & Persistence
// ==========================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('mubashir_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('mubashir_theme', newTheme);
    });
  }

  // Listen for system theme changes if user has no stored preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('mubashir_theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.setAttribute(
      'aria-label',
      `Current theme: ${theme}. Click to switch to ${theme === 'dark' ? 'light' : 'dark'} mode.`
    );
  }
}

// ==========================================================================
// 4. Mobile Menu & Navigation Smooth Scrolling
// ==========================================================================
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        mobileDrawer.classList.contains('open') &&
        !mobileDrawer.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    mobileToggle.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileToggle.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 5. Profile Photo Loader & Monogram Fallback
// ==========================================================================
function initProfilePhoto() {
  const profileImg = document.getElementById('user-profile-img');
  const fallback = document.getElementById('avatar-fallback');
  try { localStorage.removeItem('mubashir_profile_photo'); } catch (e) {}

  if (profileImg) {
    profileImg.addEventListener('error', () => {
      profileImg.style.display = 'none';
      if (fallback) fallback.style.display = 'flex';
    });
    profileImg.addEventListener('load', () => {
      profileImg.style.display = 'block';
      if (fallback) fallback.style.display = 'none';
    });
  }
}

// ==========================================================================
// 6. Project Category Filter
// ==========================================================================
function initProjectsFilter() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');

      // Update active state on tabs
      filterTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Filter cards
      projectCards.forEach((card) => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

// ==========================================================================
// 7. Project Details Modal Dialog
// ==========================================================================
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-body-content');
  const closeBtn = document.getElementById('modal-close-btn');
  const detailButtons = document.querySelectorAll('.view-details-btn');

  detailButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute('data-project');
      const project = PROJECTS_DATA[projectId];
      if (project) {
        openModal(project);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  function openModal(project) {
    modalContent.innerHTML = `
      <img src="${project.image}" alt="${project.title} Preview" class="modal-header-img" onerror="this.onerror=null;this.src=this.src.replace('/projects/','/').replace('.jpg','.svg');" />
      <div class="modal-content-wrap">
        <div>
          <span class="modal-tag">${project.category}</span>
          <h3 class="modal-title" id="modal-title">${project.title}</h3>
        </div>

        <p class="modal-overview">${project.overview}</p>

        <div class="modal-section-block">
          <h4 class="modal-section-title">Design Goals</h4>
          <ul class="modal-list">
            ${project.goals.map((g) => `<li>${g}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-section-block">
          <h4 class="modal-section-title">Key Features &amp; User Screens</h4>
          <ul class="modal-list">
            ${project.features.map((f) => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-section-block">
          <h4 class="modal-section-title">Design Approach</h4>
          <p class="modal-overview" style="font-size: 0.92rem;">${project.approach}</p>
        </div>

        <div class="modal-section-block">
          <h4 class="modal-section-title">Tools &amp; Skills Applied</h4>
          <div class="modal-tools-chips">
            ${project.tools.map((t) => `<span class="tool-chip">${t}</span>`).join('')}
          </div>
        </div>

        <div class="modal-footer-cta">
          <button class="btn btn-secondary btn-sm" id="modal-inner-close">Close Details</button>
          <a href="${project.figmaUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <span>Open Figma Prototype</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    `;

    const innerClose = document.getElementById('modal-inner-close');
    if (innerClose) {
      innerClose.addEventListener('click', closeModal);
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    setTimeout(() => {
      closeBtn.focus();
    }, 100);
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 8. CV Download Handler & Toast Feedback
// ==========================================================================
const CV_FILENAME = 'Mubashir_Rehman_CV.pdf';
const CV_BASE64 = 'JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PCAvVHlwZSAvQ2F0YWxvZyAvUGFnZXMgMiAwIFIgPj4KZW5kb2JqCjIgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzIC9LaWRzIFszIDAgUl0gL0NvdW50IDEgPj4KZW5kb2JqCjMgMCBvYmoKPDwgL1R5cGUgL1BhZ2UgL1BhcmVudCAyIDAgUiAvTWVkaWFCb3ggWzAgMCA2MTIgNzkyXSAvUmVzb3VyY2VzIDw8IC9Gb250IDw8IC9GMSA0IDAgUiAvRjIgNSAwIFIgPj4gPj4gL0NvbnRlbnRzIDYgMCBSID4+CmVuZG9iago0IDAgb2JqCjw8IC9UeXBlIC9Gb250IC9TdWJ0eXBlIC9UeXBlMSAvQmFzZUZvbnQgL0hlbHZldGljYSA+PgplbmRvYmoKNSAwIG9iago8PCAvVHlwZSAvRm9udCAvU3VidHlwZSAvVHlwZTEgL0Jhc2VGb250IC9IZWx2ZXRpY2EtQm9sZCA+PgplbmRvYmoKNiAwIG9iago8PCAvTGVuZ3RoIDU2MzggPj4Kc3RyZWFtCjAuOTUgMC45NiAwLjk5IHJnIDQwIDcwMCA1MzIgNzIgcmUgZgowLjQwIDAuNDUgMC45MCBSRyAyIHcgNDAgNzAwIG0gNTcyIDcwMCBsIFMKMC4wOCAwLjEwIDAuMjUgcmcKQlQgL0YyIDIyIFRmIDU0IDc0MiBUZCAoTXViYXNoaXIgUmVobWFuKSBUaiBFVAowLjM1IDAuNDAgMC42MCByZwpCVCAvRjEgMTEgVGYgNTQgNzI0IFRkIChTb2Z0d2FyZSBFbmdpbmVlciAgfCAgVUkvVVggRGVzaWduZXIgIHwgIEZyb250ZW5kIERldmVsb3BlcikgVGogRVQKMC40MCAwLjQ1IDAuNTUgcmcKQlQgL0YxIDkgVGYgNTQgNzA5IFRkIChJc2xhbWFiYWQvUmF3YWxwaW5kaSwgUGFraXN0YW4gIHwgIDAzMzQgMjkxMTI0NCAgfCAgbXViYXNoaXJraGF4MUBnbWFpbC5jb20gIHwgIGxpbmtlZGluLmNvbS9pbi9tdWJhc2hpci1yZWhtYW4tOTRiNTI5Mjk0KSBUaiBFVAowLjIwIDAuMjUgMC42MCByZwpCVCAvRjIgMTIgVGYgNDAgNjc1IFRkIChQUk9GRVNTSU9OQUwgU1VNTUFSWSkgVGogRVQKMC44NSAwLjg4IDAuOTUgUkcgMSB3IDQwIDY3MSBtIDU3MiA2NzEgbCBTCjAuMjAgMC4yMCAwLjI1IHJnCkJUIC9GMSA5LjUgVGYgNDAgNjU3IFRkIChCUyBTb2Z0d2FyZSBFbmdpbmVlcmluZyBncmFkdWF0ZSB3aXRoIDErIHllYXJzIG9mIGhhbmRzLW9uIGV4cGVyaWVuY2UgZGVzaWduaW5nIGludHVpdGl2ZSBkaWdpdGFsIGV4cGVyaWVuY2VzIGFuZCBidWlsZGluZykgVGogRVQKMC4yMCAwLjIwIDAuMjUgcmcKQlQgL0YxIDkuNSBUZiA0MCA2NDQgVGQgKHJlc3BvbnNpdmUgd2ViIGludGVyZmFjZXMuIFByb2ZpY2llbnQgaW4gRmlnbWEgZm9yIHdpcmVmcmFtaW5nLCB1c2VyIGZsb3dzLCBhbmQgaW50ZXJhY3RpdmUgcHJvdG90eXBpbmcsIGFuZCBpbiBIVE1MNSwgQ1NTMywgYW5kKSBUaiBFVAowLjIwIDAuMjAgMC4yNSByZwpCVCAvRjEgOS41IFRmIDQwIDYzMSBUZCAoSmF2YVNjcmlwdCBmb3IgdHJhbnNsYXRpbmcgZGVzaWducyBpbnRvIGZ1bmN0aW9uYWwsIG1vZGVybiB3ZWIgZXhwZXJpZW5jZXMuIEV4cGVyaWVuY2VkIGluIGNsaWVudCBmcmVlbGFuY2UgYW5kIGludGVybnNoaXAgcHJvamVjdHMuKSBUaiBFVAowLjIwIDAuMjUgMC42MCByZwpCVCAvRjIgMTIgVGYgNDAgNjA3IFRkIChDT1JFIEVYUEVSVElTRSAmIFNLSUxMUykgVGogRVQKMC44NSAwLjg4IDAuOTUgUkcgMSB3IDQwIDYwMyBtIDU3MiA2MDMgbCBTCjAuMTUgMC4xOCAwLjMwIHJnCkJUIC9GMiA5LjUgVGYgNDAgNTkwIFRkIChVSS9VWCBEZXNpZ246KSBUaiBFVAowLjI1IDAuMjUgMC4zMCByZwpCVCAvRjEgOS41IFRmIDEyMCA1OTAgVGQgKEZpZ21hLCBVSSBEZXNpZ24sIFVYIERlc2lnbiwgV2lyZWZyYW1pbmcsIFVzZXIgRmxvd3MsIEludGVyYWN0aXZlIFByb3RvdHlwaW5nLCBEZXNpZ24gU3lzdGVtcywgVmlzdWFsIEhpZXJhcmNoeSkgVGogRVQKMC4xNSAwLjE4IDAuMzAgcmcKQlQgL0YyIDkuNSBUZiA0MCA1NzYgVGQgKEZyb250ZW5kIERldjopIFRqIEVUCjAuMjUgMC4yNSAwLjMwIHJnCkJUIC9GMSA5LjUgVGYgMTIwIDU3NiBUZCAoSFRNTDUsIENTUzMsIEphdmFTY3JpcHQgXChWYW5pbGxhXCksIFJlYWN0LmpzIEJhc2ljcywgUmVzcG9uc2l2ZSBMYXlvdXRzLCBDU1MgQW5pbWF0aW9ucywgR2l0ICYgR2l0SHViKSBUaiBFVAowLjE1IDAuMTggMC4zMCByZwpCVCAvRjIgOS41IFRmIDQwIDU2MiBUZCAoQUkgJiBQcm9kdWN0aXZpdHk6KSBUaiBFVAowLjI1IDAuMjUgMC4zMCByZwpCVCAvRjEgOS41IFRmIDEyMCA1NjIgVGQgKEFJLUFzc2lzdGVkIERlc2lnbiBUb29scywgUHJvbXB0IEVuZ2luZWVyaW5nLCBDYW52YSwgTVMgT2ZmaWNlIFwoV29yZCwgRXhjZWwsIFBvd2VyUG9pbnRcKSwgRG9jdW1lbnRhdGlvbikgVGogRVQKMC4yMCAwLjI1IDAuNjAgcmcKQlQgL0YyIDEyIFRmIDQwIDUzOCBUZCAoV09SSyBFWFBFUklFTkNFICYgSU5URVJOU0hJUFMpIFRqIEVUCjAuODUgMC44OCAwLjk1IFJHIDEgdyA0MCA1MzQgbSA1NzIgNTM0IGwgUwowLjEwIDAuMTUgMC4zMCByZwpCVCAvRjIgMTAuNSBUZiA0MCA1MjAgVGQgKFVJL1VYIERlc2lnbmVyICYgRnJvbnRlbmQgRGV2ZWxvcGVyICAtLSAgU2VsZi1FbXBsb3llZCkgVGogRVQKMC40NSAwLjUwIDAuNjAgcmcKQlQgL0YxIDkuNSBUZiA0NDAgNTIwIFRkIChKYW4gMjAyNSAtIFByZXNlbnQpIFRqIEVUCjAuMjUgMC4yNSAwLjMwIHJnCkJUIC9GMSA5IFRmIDUyIDUwNiBUZCAoLSBEZXNpZ25lZCBtb2Rlcm4gd2ViIGFuZCBtb2JpbGUgYXBwbGljYXRpb24gaW50ZXJmYWNlcyBpbiBGaWdtYSB3aXRoIGludGVyYWN0aXZlIHByb3RvdHlwZXMgYW5kIHVzZXIgZmxvd3MuKSBUaiBFVAowLjI1IDAuMjUgMC4zMCByZwpCVCAvRjEgOSBUZiA1MiA0OTQgVGQgKC0gRGV2ZWxvcGVkIHJlc3BvbnNpdmUgZnJvbnRlbmQgbGF5b3V0cyB1c2luZyBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0LCBlbnN1cmluZyBjcm9zcy1kZXZpY2UgdXNhYmlsaXR5IGFuZCBjbGVhbiBjb2RlLikgVGogRVQKMC4yNSAwLjI1IDAuMzAgcmcKQlQgL0YxIDkgVGYgNTIgNDgyIFRkICgtIE1hbmFnZWQgY2xpZW50IGRlc2lnbiByZXF1aXJlbWVudHMsIGl0ZXJhdGl2ZSBmZWVkYmFjayBjeWNsZXMsIGFuZCBwcmVwYXJlZCBwcm9tb3Rpb25hbCBhc3NldHMgJiBkb2N1bWVudGF0aW9uLikgVGogRVQKMC4xMCAwLjE1IDAuMzAgcmcKQlQgL0YyIDEwLjUgVGYgNDAgNDY2IFRkIChVSS9VWCBEZXNpZ24gSW50ZXJuICAtLSAgQ29kZUFscGhhKSBUaiBFVAowLjQ1IDAuNTAgMC42MCByZwpCVCAvRjEgOS41IFRmIDQxMCA0NjYgVGQgKDEwIEp1bHkgMjAyNiAtIDEwIEF1Z3VzdCAyMDI2KSBUaiBFVAowLjI1IDAuMjUgMC4zMCByZwpCVCAvRjEgOSBUZiA1MiA0NTIgVGQgKC0gRGVzaWduZWQgaGlnaC1maWRlbGl0eSB1c2VyIGludGVyZmFjZXMgYW5kIHdpcmVmcmFtZXMgaW4gRmlnbWEgYXBwbHlpbmcgcmVzcG9uc2l2ZSBkZXNpZ24gcHJpbmNpcGxlcy4pIFRqIEVUCjAuMjUgMC4yNSAwLjMwIHJnCkJUIC9GMSA5IFRmIDUyIDQ0MCBUZCAoLSBDcmVhdGVkIHVzZXIgZmxvd3MgYW5kIGludGVyYWN0aXZlIHByb3RvdHlwZXMgdHJhbnNsYXRpbmcgcHJvamVjdCBzcGVjaWZpY2F0aW9ucyBpbnRvIGludHVpdGl2ZSBsYXlvdXRzLikgVGogRVQKMC4xMCAwLjE1IDAuMzAgcmcKQlQgL0YyIDEwLjUgVGYgNDAgNDI0IFRkIChGcm9udGVuZCBEZXZlbG9wbWVudCBJbnRlcm4gIC0tICBEZWNvZGUgTGFicykgVGogRVQKMC40NSAwLjUwIDAuNjAgcmcKQlQgL0YxIDkuNSBUZiAzOTUgNDI0IFRkIChTZXB0IDIwMjYgLSBPY3QgMjAyNiB8IFJlbW90ZSkgVGogRVQKMC4yNSAwLjI1IDAuMzAgcmcKQlQgL0YxIDkgVGYgNTIgNDEwIFRkICgtIEJ1aWx0IGFuZCByZWZpbmVkIGludGVyZmFjZSBjb21wb25lbnRzIHdpdGggSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdCBhZGhlcmluZyB0byByZXNwb25zaXZlIGZyb250ZW5kIGZ1bmRhbWVudGFscy4pIFRqIEVUCjAuMTAgMC4xNSAwLjMwIHJnCkJUIC9GMiAxMC41IFRmIDQwIDM5NCBUZCAoVUkvVVggRGVzaWduIEludGVybiAgLS0gIFN5bnRlY3hodWIpIFRqIEVUCjAuNDUgMC41MCAwLjYwIHJnCkJUIC9GMSA5LjUgVGYgMzkwIDM5NCBUZCAoMTIgU2VwdCAyMDI2IC0gMTIgT2N0IDIwMjYgfCBSZW1vdGUpIFRqIEVUCjAuMjUgMC4yNSAwLjMwIHJnCkJUIC9GMSA5IFRmIDUyIDM4MCBUZCAoLSBFeGVjdXRlZCBVSSBkZXNpZ24gdGFza3MgYW5kIHJlc3BvbnNpdmUgaW50ZXJmYWNlIGNvbmNlcHRzLCB3aXJlZnJhbWluZyBhbmQgcHJvdG90eXBpbmcga2V5IGRpZ2l0YWwgam91cm5leXMuKSBUaiBFVAowLjIwIDAuMjUgMC42MCByZwpCVCAvRjIgMTIgVGYgNDAgMzU4IFRkIChGRUFUVVJFRCBERVNJR04gJiBGUk9OVEVORCBQUk9KRUNUUykgVGogRVQKMC44NSAwLjg4IDAuOTUgUkcgMSB3IDQwIDM1NCBtIDU3MiAzNTQgbCBTCjAuMTUgMC4xOCAwLjMwIHJnCkJUIC9GMiA5LjUgVGYgNDAgMzQyIFRkIChQb3J0Zm9saW8gV2Vic2l0ZSBEZXNpZ246KSBUaiBFVAowLjI1IDAuMjUgMC4zMCByZwpCVCAvRjEgOSBUZiAxNzUgMzQyIFRkIChQZXJzb25hbCBwb3J0Zm9saW8gY29uY2VwdCBwcmVzZW50aW5nIGNyZWF0aXZlIHdvcmsgYW5kIGRlc2lnbiBjYXNlIHN0dWRpZXMgd2l0aCBoaWdoIHZpc3VhbCBhcHBlYWwuKSBUaiBFVAowLjE1IDAuMTggMC4zMCByZwpCVCAvRjIgOS41IFRmIDQwIDMyOSBUZCAoRGVzZXJ0IFNhZmFyaSBCb29raW5nIFBsYXRmb3JtOikgVGogRVQKMC4yNSAwLjI1IDAuMzAgcmcKQlQgL0YxIDkgVGYgMTk1IDMyOSBUZCAoVG91ciBleHBsb3JhdGlvbiwgcGFja2FnZSBjb21wYXJpc29uLCBhbmQgc3RyZWFtbGluZWQgbXVsdGktc3RlcCByZXNlcnZhdGlvbiBib29raW5nIGpvdXJuZXkuKSBUaiBFVAowLjE1IDAuMTggMC4zMCByZwpCVCAvRjIgOS41IFRmIDQwIDMxNiBUZCAoU2t5Q2FycyBSZW50YWwgV2Vic2l0ZTopIFRqIEVUCjAuMjUgMC4yNSAwLjMwIHJnCkJUIC9GMSA5IFRmIDE2NSAzMTYgVGQgKFZlaGljbGUgcmVudGFsIGNhdGFsb2csIGNhciBmaWx0ZXJpbmcsIHNwZWNpZmljYXRpb24gY29tcGFyaXNvbiwgYW5kIHNlYW1sZXNzIGJvb2tpbmcgZXhwZXJpZW5jZS4pIFRqIEVUCjAuMTUgMC4xOCAwLjMwIHJnCkJUIC9GMiA5LjUgVGYgNDAgMzAzIFRkIChGb29kaWVHbyBEZWxpdmVyeSBBcHA6KSBUaiBFVAowLjI1IDAuMjUgMC4zMCByZwpCVCAvRjEgOSBUZiAxNjAgMzAzIFRkIChNb2JpbGUgZm9vZCBkZWxpdmVyeSBhcHAgVUkgZm9jdXNpbmcgb24gZmFzdCBkaXNjb3ZlcnksIG1lbnUgYnJvd3NpbmcsIGFuZCBjbGVhciBjYXJ0L29yZGVyIGNoZWNrb3V0LikgVGogRVQKMC4xNSAwLjE4IDAuMzAgcmcKQlQgL0YyIDkuNSBUZiA0MCAyOTAgVGQgKFRlY2hMZWFybiAmIERvY3RvciBBcHBvaW50bWVudHM6KSBUaiBFVAowLjI1IDAuMjUgMC4zMCByZwpCVCAvRjEgOSBUZiAyMTUgMjkwIFRkIChJbnRlcmFjdGl2ZSBvbmxpbmUgY291cnNlIGxlYXJuaW5nIExNUyBhbmQgYWNjZXNzaWJsZSB0ZWxlbWVkaWNpbmUgYXBwb2ludG1lbnQgc2NoZWR1bGluZyBwbGF0Zm9ybS4pIFRqIEVUCjAuMjAgMC4yNSAwLjYwIHJnCkJUIC9GMiAxMiBUZiA0MCAyNjggVGQgKEVEVUNBVElPTiAmIENFUlRJRklDQVRJT05TKSBUaiBFVAowLjg1IDAuODggMC45NSBSRyAxIHcgNDAgMjY0IG0gNTcyIDI2NCBsIFMKMC4xMCAwLjE1IDAuMzAgcmcKQlQgL0YyIDkuNSBUZiA0MCAyNTIgVGQgKEJhY2hlbG9yIG9mIFNjaWVuY2UgaW4gU29mdHdhcmUgRW5naW5lZXJpbmcpIFRqIEVUCjAuNDUgMC41MCAwLjYwIHJnCkJUIC9GMSA5IFRmIDQ0MCAyNTIgVGQgKE9jdCAyMDIxIC0gSnVuZSAyMDI1KSBUaiBFVAowLjMwIDAuMzUgMC40NSByZwpCVCAvRjEgOSBUZiA0MCAyNDAgVGQgKFRoZSBDaXR5IFVuaXZlcnNpdHkgb2YgU2NpZW5jZSBhbmQgSW5mb3JtYXRpb24gVGVjaG5vbG9neSwgUGVzaGF3YXIpIFRqIEVUCjAuMTUgMC4xOCAwLjMwIHJnCkJUIC9GMiA5LjUgVGYgNDAgMjI2IFRkIChDZXJ0aWZpY2F0aW9uczopIFRqIEVUCjAuMjUgMC4yNSAwLjMwIHJnCkJUIC9GMSA5IFRmIDExNSAyMjYgVGQgKFVJL1VYIERlc2lnbiBDZXJ0aWZpY2F0aW9uICB8ICBQcm9tcHQgRW5naW5lZXJpbmcgLS0gMSBNaWxsaW9uIFByb21wdGVycykgVGogRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNwowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2NCAwMDAwMCBuIAowMDAwMDAwMTIxIDAwMDAwIG4gCjAwMDAwMDAyNTcgMDAwMDAgbiAKMDAwMDAwMDMyNyAwMDAwMCBuIAowMDAwMDAwNDAyIDAwMDAwIG4gCnRyYWlsZXIKPDwgL1NpemUgNyAvUm9vdCAxIDAgUiA+PgpzdGFydHhyZWYKNjA5MgolJUVPRg==';

function downloadCV() {
  const bytes = Uint8Array.from(atob(CV_BASE64), (ch) => ch.charCodeAt(0));
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = CV_FILENAME;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function initCVDownload() {
  const cvButtons = document.querySelectorAll(
    '.cv-download-trigger, #nav-download-cv, a[href$="Mubashir_Rehman_CV.pdf"]'
  );
  cvButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      try {
        downloadCV();
        showToast('Downloading ' + CV_FILENAME + '...');
      } catch (err) {
        window.open('assets/' + CV_FILENAME, '_blank');
      }
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('cv-toast');
  if (!toast) return;

  const msgSpan = toast.querySelector('.toast-message strong');
  if (msgSpan) {
    msgSpan.textContent = message;
  }

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ==========================================================================
// 9. Contact Form Client-side Validation & Mailto Fallback
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  const banner = document.getElementById('form-success-banner');

  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Reset errors
    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(subjectInput, subjectError);
    clearError(messageInput, messageError);

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, nameError, 'Please enter your full name.');
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      showError(emailInput, emailError, 'Please enter your email address.');
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, emailError, 'Please enter a valid email address.');
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showError(subjectInput, subjectError, 'Please specify the subject.');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError(messageInput, messageError, 'Please write your message.');
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError(messageInput, messageError, 'Message should be at least 10 characters.');
      isValid = false;
    }

    if (isValid) {
      const recipient = 'mubashirkhax1@gmail.com';
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()}`);
      const body = encodeURIComponent(
        `Hello Mubashir,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
      );

      // Open mailto URL
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;

      // Show friendly on-screen confirmation
      if (banner) {
        banner.style.display = 'block';
        banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      showToast('Opening email client for Mubashir Rehman...');
    }
  });

  function showError(input, errorElement, msg) {
    input.classList.add('error');
    errorElement.textContent = msg;
  }

  function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
  }
}

// ==========================================================================
// 10. Copy Contact Information to Clipboard
// ==========================================================================
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            const originalText = btn.textContent;
            btn.textContent = 'Copied!';
            btn.style.backgroundColor = 'var(--accent-emerald)';
            btn.style.color = '#fff';
            setTimeout(() => {
              btn.textContent = originalText;
              btn.style.backgroundColor = '';
              btn.style.color = '';
            }, 2000);
          })
          .catch(() => {
            showToast(`Copied: ${textToCopy}`);
          });
      }
    });
  });
}

// ==========================================================================
// 11. ScrollSpy (Active Navigation Link Highlighting)
// ==========================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

// ==========================================================================
// 12. Scroll to Top Floating Button
// ==========================================================================
function initScrollToTop() {
  const scrollBtn = document.getElementById('scroll-to-top');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
