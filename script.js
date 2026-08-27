// ===== LUMA INTERIORS =====

// Keep the footer year automatically updated
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===== CMS CONTENT =====

async function loadCMSContent() {
    try {
        const response = await fetch("/content/site.yml");

        if (!response.ok) {
            throw new Error("Could not load CMS content.");
        }

        const text = await response.text();

        // Simple YAML parser for our current content structure
        const content = {};

        text.split("\n").forEach(line => {
            const match = line.match(/^([a-z_]+):\s*["']?(.*?)["']?\s*$/);

            if (match) {
                content[match[1]] = match[2];
            }
        });

        // Business name
        const businessName = document.getElementById("cms-business-name");

        if (businessName && content.business_name) {
            businessName.textContent = content.business_name;
        }

        // Hero title
        const heroTitle = document.getElementById("cms-hero-title");

        if (heroTitle && content.hero_title) {
            heroTitle.textContent = content.hero_title;
        }

        // Hero text
        const heroText = document.getElementById("cms-hero-text");

        if (heroText && content.hero_text) {
            heroText.textContent = content.hero_text;
        }

    } catch (error) {
        console.error("CMS content could not be loaded:", error);
    }
}

loadCMSContent();
