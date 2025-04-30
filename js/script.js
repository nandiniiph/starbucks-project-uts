// Main button interactions
document.getElementById('viewMenuBtn')?.addEventListener('click', function() {
    window.location.href = 'viewmenu.html';
});

document.getElementById('orderNowBtn')?.addEventListener('click', function() {
    alert('Redirecting to order page!');
});

document.getElementById('learnMoreBtn')?.addEventListener('click', function() {
    alert('Redirecting to Learn more page!');
});

document.getElementById('joinNowBtn')?.addEventListener('click', function() {
    alert('Redirecting to Join now page!');
});

// Social Media Links Setup
const socialMediaLinks = [
    { 
        icon: 'assets/social-spotify.svg', 
        url: 'https://open.spotify.com/user/starbucks',
        alt: 'Spotify'
    },
    { 
        icon: 'assets/social-facebook.svg', 
        url: 'https://www.facebook.com/Starbucks/',
        alt: 'Facebook'
    },
    { 
        icon: 'assets/social-pinterest.svg', 
        url: 'https://id.pinterest.com/starbucks/',
        alt: 'Pinterest' 
    },
    { 
        icon: 'assets/social-instagram.svg', 
        url: 'https://www.instagram.com/starbucks/',
        alt: 'Instagram'
    },
    { 
        icon: 'assets/social-youtube.svg', 
        url: 'https://www.youtube.com/starbucks',
        alt: 'YouTube'
    },
    { 
        icon: 'assets/social-twitter.svg', 
        url: 'https://x.com/starbucks/',
        alt: 'Twitter'
    }
];

// Function to create social media links
function setupSocialLinks() {
    const socialContainer = document.querySelector('.social-links');
    
    if (socialContainer) {
        // Clear any existing placeholder content
        socialContainer.innerHTML = '';
        
        // Create and append each social media link
        socialMediaLinks.forEach(platform => {
            const link = document.createElement('a');
            link.href = platform.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.title = `Visit Starbucks on ${platform.alt}`;
            
            const img = document.createElement('img');
            img.src = platform.icon;
            img.alt = platform.alt;
            img.loading = 'lazy';
            
            link.appendChild(img);
            socialContainer.appendChild(link);
        });
    }
}

// Menu Navigation Functionality
document.querySelectorAll('.secondary-nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.secondary-nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Handle navigation for specific buttons
        const buttonText = this.textContent.trim();
        
        if (buttonText === 'Featured') {
            window.location.href = 'viewmenu.html';
        }
        // Add other navigation logic here if needed
        
        console.log(`Loading ${buttonText} content...`);
    });
});

// Initialize social links when page loads
document.addEventListener('DOMContentLoaded', setupSocialLinks);