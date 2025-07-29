<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Heartwarming Anniversary</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
    <style>
        /* General Body Styles */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f7f3e9; /* Light cream */
            color: #4a4a4a; /* Dark grey for text */
            display: flex;
            justify-content: center;
            align-items: flex-start; /* Align to start for scrolling content */
            min-height: 100vh;
            margin: 0;
            padding: 1rem;
            box-sizing: border-box;
            overflow-y: auto; /* Enable scrolling for the body */
        }

        /* Main Content Wrapper for centering the initial page */
        .main-content-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh; /* Ensure it takes full viewport height when active */
            width: 100%;
        }

        /* Main Container Styles */
        .container {
            background-color: #ffffff; /* White container */
            border: 1px solid #e0e0e0; /* Soft border */
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1); /* Softer shadow */
            max-width: 800px;
            width: 100%;
            padding: 3rem;
            border-radius: 2rem; /* Even more rounded corners */
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
        }

        /* Message Box Styles */
        .message-box {
            min-height: 180px; /* Slightly taller for more heartfelt messages */
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem; /* Larger, more prominent font */
            line-height: 2rem;
            color: #6a6a6a; /* Medium grey for message text */
            transition: opacity 0.7s ease-in-out; /* Slower, smoother transition */
            font-weight: 500;
            padding: 0 1rem; /* Add horizontal padding */
        }

        /* Navigation Button Styles */
        .nav-button {
            background-color: #a8dadc; /* Soft blue button */
            color: #ffffff;
            padding: 0.8rem 1.8rem;
            border-radius: 1rem;
            font-weight: 700;
            transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
            cursor: pointer;
            border: none;
            outline: none;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle button shadow */
        }
        .nav-button:hover {
            background-color: #8bbcd1; /* Slightly darker blue on hover */
            transform: translateY(-3px); /* More pronounced lift */
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }
        .nav-button:active {
            transform: translateY(0);
            background-color: #7aa1b8; /* Even darker on click */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        /* Title Styles */
        .title {
            font-family: 'Playfair Display', serif; /* Elegant font for title */
            font-size: 3.2rem; /* Larger, more grand title */
            font-weight: 700;
            color: #2c3e50; /* Dark blue-grey for title */
            margin-bottom: 0.5rem;
            letter-spacing: 0.05em; /* Slightly spaced letters */
        }

        /* Subtitle Styles */
        .subtitle {
            font-size: 1.6rem;
            font-weight: 600;
            color: #7f8c8d; /* Muted grey for subtitle */
            margin-bottom: 1.5rem;
        }

        /* Photo Gallery Specific Styles */
        #photo-gallery-page {
            width: 100%;
            max-width: 900px; /* Slightly wider for photos */
            padding: 2rem 1rem;
            display: none; /* Hidden by default */
            flex-direction: column;
            align-items: center;
            gap: 3rem; /* Space between photo rows */
            opacity: 0; /* Initially hidden for fade-in */
            transition: opacity 1s ease-in-out;
        }

        #photo-gallery-page.active {
            opacity: 1;
        }

        .photo-row {
            display: flex;
            align-items: center;
            gap: 2rem;
            width: 100%;
            opacity: 0; /* Hidden by default for scroll-in effect */
            transform: translateY(30px); /* Start slightly below */
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .photo-row.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .photo-row img {
            width: 100%; /* Make image fill its container */
            max-width: 400px; /* Max width for individual images */
            height: auto;
            border-radius: 1rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
            object-fit: cover; /* Ensure image covers the area without distortion */
        }

        .photo-row .text-content {
            flex: 1; /* Allow text content to take remaining space */
            text-align: left;
            padding: 0 1rem;
        }

        .photo-row h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            color: #2c3e50;
            margin-bottom: 0.5rem;
        }

        .photo-row p {
            font-size: 1.1rem;
            line-height: 1.7;
            color: #6a6a6a;
        }

        /* Responsive adjustments for main content */
        @media (max-width: 768px) {
            .container {
                padding: 2rem;
                gap: 2rem;
            }
            .title {
                font-size: 2.5rem;
            }
            .subtitle {
                font-size: 1.3rem;
            }
            .message-box {
                font-size: 1.2rem;
                line-height: 1.8rem;
                min-height: 150px;
            }
            .nav-button {
                padding: 0.7rem 1.4rem;
                font-size: 0.95rem;
            }
        }

        @media (max-width: 480px) {
            .container {
                padding: 1.5rem;
                border-radius: 1.5rem;
                gap: 1.5rem;
            }
            .title {
                font-size: 2rem;
            }
            .subtitle {
                font-size: 1.1rem;
            }
            .message-box {
                min-height: 130px;
                font-size: 1.1rem;
                line-height: 1.6rem;
            }
            .nav-button {
                padding: 0.6rem 1.2rem;
                font-size: 0.85rem;
            }
        }

        /* Responsive adjustments for photo gallery */
        @media (max-width: 768px) {
            .photo-row {
                flex-direction: column !important; /* Stack images and text on smaller screens */
                gap: 1.5rem;
                text-align: center;
            }
            .photo-row img {
                max-width: 100%; /* Full width on small screens */
            }
            .photo-row .text-content {
                padding: 0;
            }
            .photo-row h3 {
                font-size: 1.5rem;
            }
            .photo-row p {
                font-size: 1rem;
            }
            #photo-gallery-page {
                padding: 1.5rem 0.5rem;
                gap: 2rem;
            }
        }

        @media (max-width: 480px) {
            .photo-row h3 {
                font-size: 1.3rem;
            }
            .photo-row p {
                font-size: 0.95rem;
            }
        }
    </style>
</head>
<body>
    <!-- Main Anniversary Message Page -->
    <div id="main-anniversary-page" class="main-content-wrapper">
        <div class="container">
            <h1 class="title">Our Beautiful Journey</h1>
            <p class="subtitle" id="subtitle">Celebrating every moment, hand in hand.</p>

            <div id="message-display" class="message-box">
                "My heart still skips a beat every time I see you. Happy Anniversary, my love."
            </div>

            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <button id="prevButton" class="nav-button">Previous Memory</button>
                <button id="nextButton" class="nav-button">Next Thought</button>
                <button id="viewPhotosButton" class="nav-button">View Our Memories</button>
            </div>
        </div>
    </div>

    <!-- Photo Gallery Page -->
    <div id="photo-gallery-page">
        <h2 class="title text-center mb-8">Our Cherished Moments</h2>

        <!-- Back Button -->
        <button id="backButton" class="nav-button self-start mb-8">← Back to Messages</button>

        <!-- Photo Row 1 (Image Left) -->
        <div class="photo-row flex-col md:flex-row items-center">
            <img src="https://placehold.co/400x300/a8dadc/ffffff?text=Memory+1" alt="A cherished memory of us" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/333333?text=Image+Error';">
            <div class="text-content">
                <h3>Our First Adventure</h3>
                <p>Remember that day we explored the old town? It felt like the beginning of everything, full of excitement and new discoveries. Every step with you was an adventure.</p>
            </div>
        </div>

        <!-- Photo Row 2 (Image Right) -->
        <div class="photo-row flex-col md:flex-row-reverse items-center">
            <img src="https://placehold.co/400x300/f2cc8f/ffffff?text=Memory+2" alt="A happy moment together" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/333333?text=Image+Error';">
            <div class="text-content">
                <h3>Laughter in the Rain</h3>
                <p>That unexpected downpour turned into one of our favorite memories. Dancing in the rain, laughing until our sides hurt – moments like those remind me how simple and joyful life is with you.</p>
            </div>
        </div>

        <!-- Photo Row 3 (Image Left) -->
        <div class="photo-row flex-col md:flex-row items-center">
            <img src="https://placehold.co/400x300/8d99ae/ffffff?text=Memory+3" alt="A quiet, loving moment" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/333333?text=Image+Error';">
            <div class="text-content">
                <h3>Our Cozy Evenings</h3>
                <p>There's nothing quite like our quiet evenings in, just us, a good movie, and the comfort of your presence. These are the moments that truly anchor my soul.</p>
            </div>
        </div>

        <!-- Photo Row 4 (Image Right) -->
        <div class="photo-row flex-col md:flex-row-reverse items-center">
            <img src="https://placehold.co/400x300/e07a5f/ffffff?text=Memory+4" alt="A shared dream or goal" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/333333?text=Image+Error';">
            <div class="text-content">
                <h3>Building Dreams Together</h3>
                <p>From planning our future to overcoming challenges, every step we take together strengthens our bond. I'm so excited for all the dreams we'll continue to build.</p>
            </div>
        </div>

        <!-- Photo Row 5 (Image Left) -->
        <div class="photo-row flex-col md:flex-row items-center">
            <img src="https://placehold.co/400x300/3d405b/ffffff?text=Memory+5" alt="A recent happy memory" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/333333?text=Image+Error';">
            <div class="text-content">
                <h3>Just Being Us</h3>
                <p>Whether it's a grand adventure or a simple Sunday morning, every moment with you is a gift. Thank you for just being you, and for being mine.</p>
            </div>
        </div>

        <!-- Back Button at the bottom as well -->
        <button id="backButtonBottom" class="nav-button self-center mt-8">← Back to Messages</button>

    </div>

    <script>
        const messages = [
            "My heart still skips a beat every time I see you. Happy Anniversary, my love.",
            "Every year with you is a new chapter of our beautiful love story. Thank you for being my everything.",
            "You are not just my partner, but my best friend, my confidant, and my greatest adventure. I love you more each day.",
            "Remembering all the laughter, the quiet moments, and the dreams we've built together. Cheers to us!",
            "Thank you for your unwavering love, support, and for making every day brighter. You complete me.",
            "To the person who holds my heart, my soulmate, my forever. Happy Anniversary, my darling.",
            "Our love is a timeless melody, growing sweeter with every passing year. So grateful for you.",
            "You make ordinary moments extraordinary. I cherish every single one with you."
        ];

        let currentMessageIndex = 0;
        const messageDisplay = document.getElementById('message-display');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        const subtitle = document.getElementById('subtitle');
        const viewPhotosButton = document.getElementById('viewPhotosButton');
        const mainAnniversaryPage = document.getElementById('main-anniversary-page');
        const photoGalleryPage = document.getElementById('photo-gallery-page');
        const backButtons = document.querySelectorAll('#backButton, #backButtonBottom'); // Select both back buttons

        const photoRows = document.querySelectorAll('.photo-row');

        /**
         * Updates the displayed message with a fade effect.
         * @param {string} message The message to display.
         */
        function updateMessage(message) {
            messageDisplay.style.opacity = '0'; // Start fade out
            setTimeout(() => {
                messageDisplay.textContent = message;
                messageDisplay.style.opacity = '1'; // Fade in
            }, 700); // Match this duration with the CSS transition for a slower fade
        }

        /**
         * Shows the photo gallery page and hides the main anniversary page.
         */
        function showPhotoGallery() {
            mainAnniversaryPage.style.display = 'none';
            photoGalleryPage.style.display = 'flex';
            // Trigger fade-in for the gallery page itself
            setTimeout(() => {
                photoGalleryPage.classList.add('active');
            }, 50); // Small delay to allow display change to register before transition

            // Reset scroll position to top when showing gallery
            window.scrollTo(0, 0);

            // Trigger initial visibility check for photos
            checkPhotoVisibility();
        }

        /**
         * Shows the main anniversary page and hides the photo gallery page.
         */
        function showMainPage() {
            photoGalleryPage.classList.remove('active'); // Start fade-out
            setTimeout(() => {
                photoGalleryPage.style.display = 'none';
                mainAnniversaryPage.style.display = 'flex';
            }, 1000); // Wait for gallery fade-out before hiding it
        }

        /**
         * Checks which photo rows are in view and adds the 'visible' class.
         */
        function checkPhotoVisibility() {
            photoRows.forEach(row => {
                const rect = row.getBoundingClientRect();
                // Check if the top of the element is within the viewport
                // and if the bottom of the element is also within the viewport (or above the top)
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    row.classList.add('visible');
                } else {
                    // Optionally remove 'visible' class if it scrolls out of view
                    // row.classList.remove('visible');
                }
            });
        }

        // Event Listeners
        nextButton.addEventListener('click', () => {
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
            updateMessage(messages[currentMessageIndex]);
        });

        prevButton.addEventListener('click', () => {
            currentMessageIndex = (currentMessageIndex - 1 + messages.length) % messages.length;
            updateMessage(messages[currentMessageIndex]);
        });

        viewPhotosButton.addEventListener('click', showPhotoGallery);

        backButtons.forEach(button => {
            button.addEventListener('click', showMainPage);
        });

        // Listen for scroll events to trigger photo visibility
        window.addEventListener('scroll', checkPhotoVisibility);

        // Initial check for photo visibility when the gallery is first loaded (if it's the default view)
        // Or when it becomes visible after clicking "View Our Memories"
        window.onload = function() {
            subtitle.style.transition = 'transform 1.2s ease-out, opacity 1.2s ease-out';
            subtitle.style.transform = 'translateY(0)';
            subtitle.style.opacity = '1';
            // Initial check for photos if the gallery is visible on load (which it isn't by default)
            // checkPhotoVisibility(); // This will be called when showPhotoGallery is invoked
        };
    </script>
</body>
</html>
