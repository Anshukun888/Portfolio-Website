// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.slide-up').forEach(el => {
    observer.observe(el);
});

// Data Visualization for Skills
function createSkillChart() {
    const skills = [
        {name: 'Python', level: 90},
        {name: 'SQL', level: 85},
        {name: 'Data Visualization', level: 88},
        {name: 'Excel', level: 92},
        {name: 'Tableau', level: 87},
        {name: 'Power BI', level: 83},
        {name: 'Statistics', level: 85}
    ];

    const chartContainer = document.getElementById('skills-chart');
    
    skills.forEach(skill => {
        const metricCard = document.createElement('div');
        metricCard.className = 'metric-card';
        
        metricCard.innerHTML = `
            <h3>${skill.name}</h3>
            <div class="progress-bar">
                <div class="progress" style="width: ${skill.level}%"></div>
            </div>
            <span>${skill.level}%</span>
        `;

        chartContainer.appendChild(metricCard);
    });
}


// Initialize when page loads
window.addEventListener('DOMContentLoaded', () => {
    createSkillChart();
    
    // Animate progress bars
    setTimeout(() => {
        document.querySelectorAll('.progress').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, 500);
    
    // Add smooth scroll to footer links
    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});



