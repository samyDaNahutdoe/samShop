// ===== DATA =====
const products = [
    {
        id: 1,
        title: "I DONT WANT IT",
        subtitle: "Collab Project File",
        price: "Php29.99",
        category: "After Effects",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "MINIMAL GLITCH",
        subtitle: "Visual Effects Pack",
        price: "Php19.99",
        category: "Premiere Pro",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "MONOCHROME WAVES",
        subtitle: "Motion Graphics",
        price: "Php34.99",
        category: "After Effects",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "CLEAN TITLES",
        subtitle: "Title Animation",
        price: "Php24.99",
        category: "Final Cut",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "GRAYSCALE EDIT",
        subtitle: "Color Grading Presets",
        price: "Php14.99",
        category: "Lightroom",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "MINIMAL TEXT",
        subtitle: "Typography Pack",
        price: "Php22.99",
        category: "After Effects",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        title: "INDUSTRIAL SFX",
        subtitle: "SFX Bundle",
        price: "Php39.99",
        category: "Audio",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        title: "MINIMAL BEATS",
        subtitle: "Music Templates",
        price: "Php27.99",
        category: "FL Studio",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const commissionVideos = [
    {
        id: 101,
        title: "Music Video Edit",
        description: "Y2K aesthetic music video commission for independent artist",
        price: "Php150",
        duration: "3:45",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 102,
        title: "Product Commercial",
        description: "Minimalist product showcase for tech startup",
        price: "Php200",
        duration: "2:15",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 103,
        title: "Corporate Video",
        description: "Company introduction video for corporate client",
        price: "Php300",
        duration: "4:30",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 104,
        title: "Social Media Ad",
        description: "Instagram story ad campaign for fashion brand",
        price: "Php120",
        duration: "1:00",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 105,
        title: "Event Highlights",
        description: "Conference aftermovie with dynamic editing",
        price: "Php250",
        duration: "5:20",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 106,
        title: "YouTube Intro",
        description: "Custom animated intro for YouTube creator",
        price: "Php80",
        duration: "0:45",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const sellingVideos = [
    {
        id: 201,
        title: "Minimal Edit Pack",
        description: "Premium minimal editing style video templates",
        price: "Php49.99",
        duration: "2:30",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 202,
        title: "Glitch Effects Showcase",
        description: "Professional glitch transition effects pack",
        price: "Php39.99",
        duration: "1:45",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 203,
        title: "Motion Graphics Template",
        description: "Clean motion graphics template for videos",
        price: "Php59.99",
        duration: "3:15",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 204,
        title: "Title Animation Pack",
        description: "Modern title animations for your projects",
        price: "Php34.99",
        duration: "1:20",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const productImages = [
    {
        id: 301,
        title: "Minimal Aesthetic Pack",
        description: "Premium minimal design templates and assets",
        price: "Php29.99",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 302,
        title: "Grayscale Collection",
        description: "Professional grayscale design templates",
        price: "Php24.99",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 303,
        title: "Modern Typography",
        description: "Clean typography templates for your projects",
        price: "Php34.99",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 304,
        title: "Abstract Designs",
        description: "Unique abstract design assets and templates",
        price: "Php39.99",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

// Make data globally available for all pages
window.products = products;
window.commissionVideos = commissionVideos;
window.sellingVideos = sellingVideos;
window.productImages = productImages;

// Carousel states
let productsCarouselState = {
    currentIndex: 0,
    isDragging: false,
    startPos: 0,
    currentTranslate: 0,
    prevTranslate: 0,
    animationID: null,
    itemsPerView: 4,
    totalItems: products.length,
    velocity: 0,
    startTime: 0,
    lastPos: 0,
    lastTime: 0,
    autoSwipeInterval: null
};

let videosCarouselState = {
    currentIndex: 0,
    isDragging: false,
    startPos: 0,
    currentTranslate: 0,
    prevTranslate: 0,
    animationID: null,
    itemsPerView: 4,
    totalItems: commissionVideos.length,
    velocity: 0,
    startTime: 0,
    lastPos: 0,
    lastTime: 0
};

// ===== GENERATE HOME PAGE CAROUSELS =====
function generateHomePageCarousels() {
    // Generate product carousel items
    const productsWrapper = document.getElementById('products-wrapper');
    if (productsWrapper) {
        productsWrapper.innerHTML = products.slice(0, 6).map(product => `
            <div class="carousel-item">
                <div class="product-card" data-id="${product.id}">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}" loading="lazy">
                    </div>
                    <div class="product-info">
                        <h3>${product.title}</h3>
                        <div class="category">${product.subtitle}</div>
                        <div class="price">${product.price}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Generate video carousel items
    const videosWrapper = document.getElementById('videos-wrapper');
    if (videosWrapper) {
        videosWrapper.innerHTML = commissionVideos.slice(0, 6).map(video => `
            <div class="carousel-item">
                <div class="video-card" data-video-id="${video.id}">
                    <div class="video-container">
                        <video poster="${video.thumbnail}" preload="metadata">
                            <source src="${video.videoUrl}" type="video/mp4">
                        </video>
                        <div class="video-play-button">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="video-duration">${video.duration}</div>
                    </div>
                    <div class="video-info">
                        <h3>${video.title}</h3>
                        <div class="description">${video.description}</div>
                        <div class="price">${video.price}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ===== INITIALIZE HOME CAROUSELS =====
function initializeHomeCarousels() {
    // Calculate items per view based on screen width
    updateCarouselItemsPerView();
    
    // Initialize both carousels
    const productsWrapper = document.getElementById('products-wrapper');
    const productsPagination = document.getElementById('products-pagination');
    const productsPrev = document.getElementById('products-prev');
    const productsNext = document.getElementById('products-next');
    
    const videosWrapper = document.getElementById('videos-wrapper');
    const videosPagination = document.getElementById('videos-pagination');
    const videosPrev = document.getElementById('videos-prev');
    const videosNext = document.getElementById('videos-next');
    
    if (productsWrapper) {
        setupCarousel(productsWrapper, productsCarouselState, productsPagination, productsPrev, productsNext);
        // Start auto-swipe for products carousel
        startAutoSwipe(productsWrapper, productsCarouselState, productsPagination, productsPrev, productsNext);
    }
    
    if (videosWrapper) {
        setupCarousel(videosWrapper, videosCarouselState, videosPagination, videosPrev, videosNext);
    }
    
    // Update pagination
    if (productsPagination) {
        updatePagination(productsCarouselState, productsPagination);
    }
    
    if (videosPagination) {
        updatePagination(videosCarouselState, videosPagination);
    }
    
    // Update navigation arrows
    if (productsPrev && productsNext) {
        updateNavigationArrows(productsCarouselState, productsPrev, productsNext);
    }
    
    if (videosPrev && videosNext) {
        updateNavigationArrows(videosCarouselState, videosPrev, videosNext);
    }
}

// ===== CAROUSEL FUNCTIONS =====
function setupCarousel(wrapper, state, pagination, prevBtn, nextBtn) {
    if (!wrapper) return;
    
    // Touch events for mobile with passive listeners for better performance
    const touchStartHandler = touchStart(state);
    const touchMoveHandler = touchMove(state);
    const touchEndHandler = touchEnd(state, wrapper, pagination, prevBtn, nextBtn);
    
    wrapper.addEventListener('touchstart', touchStartHandler, { passive: false });
    wrapper.addEventListener('touchmove', touchMoveHandler, { passive: false });
    wrapper.addEventListener('touchend', touchEndHandler, { passive: true });
    wrapper.addEventListener('touchcancel', touchEndHandler, { passive: true });
    
    // Mouse events for desktop
    wrapper.addEventListener('mousedown', mouseDown(state));
    wrapper.addEventListener('mousemove', mouseMove(state));
    wrapper.addEventListener('mouseup', mouseUp(state, wrapper, pagination, prevBtn, nextBtn));
    wrapper.addEventListener('mouseleave', mouseLeave(state, wrapper, pagination, prevBtn, nextBtn));
    
    // Prevent image drag and default behaviors
    wrapper.addEventListener('dragstart', (e) => e.preventDefault());
    wrapper.addEventListener('selectstart', (e) => e.preventDefault());
    
    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            state.currentIndex = Math.max(state.currentIndex - 1, 0);
            updateCarouselPosition(state, wrapper, true);
            updatePagination(state, pagination);
            updateNavigationArrows(state, prevBtn, nextBtn);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            state.currentIndex = Math.min(state.currentIndex + 1, Math.ceil(state.totalItems / state.itemsPerView) - 1);
            updateCarouselPosition(state, wrapper, true);
            updatePagination(state, pagination);
            updateNavigationArrows(state, prevBtn, nextBtn);
        });
    }
}

function touchStart(state) {
    return function(e) {
        // Prevent default scrolling behavior
        if (e.touches.length !== 1) return;
        
        state.isDragging = true;
        state.startPos = e.touches[0].clientX;
        state.startTime = Date.now();
        state.velocity = 0;
        state.lastPos = state.startPos;
        state.lastTime = state.startTime;
        
        // Cancel any ongoing animations
        if (state.animationID) {
            cancelAnimationFrame(state.animationID);
        }
        
        state.animationID = requestAnimationFrame(() => animation(state));
        e.currentTarget.classList.add('grabbing');
        
        // Prevent default to avoid scrolling
        e.preventDefault();
    };
}

function touchMove(state) {
    return function(e) {
        if (!state.isDragging) return;
        if (e.touches.length !== 1) return;
        
        const currentPosition = e.touches[0].clientX;
        const currentTime = Date.now();
        
        // Calculate velocity for momentum
        const deltaTime = currentTime - state.lastTime;
        if (deltaTime > 0) {
            const deltaPos = currentPosition - state.lastPos;
            state.velocity = deltaPos / deltaTime;
        }
        
        state.lastPos = currentPosition;
        state.lastTime = currentTime;
        
        // Update position
        state.currentTranslate = state.prevTranslate + currentPosition - state.startPos;
        
        // Prevent default to avoid scrolling
        e.preventDefault();
    };
}

function touchEnd(state, wrapper, pagination, prevBtn, nextBtn) {
    return function(e) {
        if (!state.isDragging) return;
        
        state.isDragging = false;
        cancelAnimationFrame(state.animationID);
        
        const movedBy = state.currentTranslate - state.prevTranslate;
        const swipeThreshold = 50; // Reduced threshold for easier swiping
        const velocityThreshold = 0.3; // Velocity threshold for momentum
        
        // Determine direction based on movement and velocity
        const hasMomentum = Math.abs(state.velocity) > velocityThreshold;
        const swipeRight = movedBy > swipeThreshold || (hasMomentum && state.velocity > 0);
        const swipeLeft = movedBy < -swipeThreshold || (hasMomentum && state.velocity < 0);
        
        if (swipeLeft && state.currentIndex < Math.ceil(state.totalItems / state.itemsPerView) - 1) {
            state.currentIndex += 1;
        } else if (swipeRight && state.currentIndex > 0) {
            state.currentIndex -= 1;
        }
        
        // Smooth transition to final position
        updateCarouselPosition(state, wrapper, true);
        if (pagination) updatePagination(state, pagination);
        if (prevBtn && nextBtn) updateNavigationArrows(state, prevBtn, nextBtn);
        wrapper.classList.remove('grabbing');
        
        // Reset velocity
        state.velocity = 0;
    };
}

function mouseDown(state) {
    return function(e) {
        state.isDragging = true;
        state.startPos = e.clientX;
        state.startTime = Date.now();
        state.velocity = 0;
        state.lastPos = state.startPos;
        state.lastTime = state.startTime;
        
        if (state.animationID) {
            cancelAnimationFrame(state.animationID);
        }
        
        state.animationID = requestAnimationFrame(() => animation(state));
        e.currentTarget.classList.add('grabbing');
    };
}

function mouseMove(state) {
    return function(e) {
        if (!state.isDragging) return;
        
        const currentPosition = e.clientX;
        const currentTime = Date.now();
        
        // Calculate velocity for momentum
        const deltaTime = currentTime - state.lastTime;
        if (deltaTime > 0) {
            const deltaPos = currentPosition - state.lastPos;
            state.velocity = deltaPos / deltaTime;
        }
        
        state.lastPos = currentPosition;
        state.lastTime = currentTime;
        
        state.currentTranslate = state.prevTranslate + currentPosition - state.startPos;
    };
}

function mouseUp(state, wrapper, pagination, prevBtn, nextBtn) {
    return function() {
        if (!state.isDragging) return;
        
        state.isDragging = false;
        cancelAnimationFrame(state.animationID);
        
        const movedBy = state.currentTranslate - state.prevTranslate;
        const swipeThreshold = 50;
        const velocityThreshold = 0.3;
        
        const hasMomentum = Math.abs(state.velocity) > velocityThreshold;
        const swipeRight = movedBy > swipeThreshold || (hasMomentum && state.velocity > 0);
        const swipeLeft = movedBy < -swipeThreshold || (hasMomentum && state.velocity < 0);
        
        if (swipeLeft && state.currentIndex < Math.ceil(state.totalItems / state.itemsPerView) - 1) {
            state.currentIndex += 1;
        } else if (swipeRight && state.currentIndex > 0) {
            state.currentIndex -= 1;
        }
        
        updateCarouselPosition(state, wrapper, true);
        if (pagination) updatePagination(state, pagination);
        if (prevBtn && nextBtn) updateNavigationArrows(state, prevBtn, nextBtn);
        wrapper.classList.remove('grabbing');
        state.velocity = 0;
    };
}

function mouseLeave(state, wrapper, pagination, prevBtn, nextBtn) {
    return function() {
        if (state.isDragging) {
            state.isDragging = false;
            cancelAnimationFrame(state.animationID);
            updateCarouselPosition(state, wrapper, true);
            if (pagination) updatePagination(state, pagination);
            if (prevBtn && nextBtn) updateNavigationArrows(state, prevBtn, nextBtn);
            wrapper.classList.remove('grabbing');
            state.velocity = 0;
        }
    };
}

function animation(state) {
    const wrapper = state === productsCarouselState ? document.getElementById('products-wrapper') : document.getElementById('videos-wrapper');
    if (!wrapper) return;
    
    // Use CSS transform with hardware acceleration
    wrapper.style.transform = `translate3d(${state.currentTranslate}px, 0, 0)`;
    wrapper.style.webkitTransform = `translate3d(${state.currentTranslate}px, 0, 0)`;
    
    if (state.isDragging) {
        state.animationID = requestAnimationFrame(() => animation(state));
    }
}

function updateCarouselPosition(state, wrapper, smooth = false) {
    if (!wrapper || !wrapper.querySelector('.carousel-item')) return;
    const itemWidth = wrapper.querySelector('.carousel-item').offsetWidth + 32;
    state.currentTranslate = -state.currentIndex * itemWidth * state.itemsPerView;
    state.prevTranslate = state.currentTranslate;
    
    // Apply smooth transition if requested
    if (smooth) {
        wrapper.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
    
    wrapper.style.transform = `translate3d(${state.currentTranslate}px, 0, 0)`;
    wrapper.style.webkitTransform = `translate3d(${state.currentTranslate}px, 0, 0)`;
    
    // Remove transition after animation completes
    if (smooth) {
        setTimeout(() => {
            wrapper.style.transition = '';
        }, 400);
    }
}

function updatePagination(state, pagination) {
    if (!pagination) return;
    
    const totalPages = Math.ceil(state.totalItems / state.itemsPerView);
    pagination.innerHTML = '';
    
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === state.currentIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            state.currentIndex = i;
            const wrapper = state === productsCarouselState ? document.getElementById('products-wrapper') : document.getElementById('videos-wrapper');
            if (wrapper) {
                updateCarouselPosition(state, wrapper, true);
                updatePagination(state, pagination);
                updateNavigationArrows(
                    state,
                    state === productsCarouselState ? document.getElementById('products-prev') : document.getElementById('videos-prev'),
                    state === productsCarouselState ? document.getElementById('products-next') : document.getElementById('videos-next')
                );
            }
        });
        pagination.appendChild(dot);
    }
}

function updateNavigationArrows(state, prevBtn, nextBtn) {
    if (!prevBtn || !nextBtn) return;
    
    if (state.currentIndex === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
    
    if (state.currentIndex >= Math.ceil(state.totalItems / state.itemsPerView) - 1) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

function updateCarouselItemsPerView() {
    const width = window.innerWidth;
    
    if (width < 576) {
        productsCarouselState.itemsPerView = 1;
        videosCarouselState.itemsPerView = 1;
    } else if (width < 768) {
        productsCarouselState.itemsPerView = 2;
        videosCarouselState.itemsPerView = 2;
    } else if (width < 992) {
        productsCarouselState.itemsPerView = 3;
        videosCarouselState.itemsPerView = 3;
    } else {
        productsCarouselState.itemsPerView = 4;
        videosCarouselState.itemsPerView = 4;
    }
}

// ===== AUTO SWIPE FUNCTIONALITY =====
function startAutoSwipe(wrapper, state, pagination, prevBtn, nextBtn) {
    // Clear any existing interval
    if (state.autoSwipeInterval) {
        clearInterval(state.autoSwipeInterval);
    }
    
    // Auto-swipe every 3 seconds
    state.autoSwipeInterval = setInterval(() => {
        // Don't auto-swipe if user is dragging
        if (state.isDragging) return;
        
        const maxIndex = Math.ceil(state.totalItems / state.itemsPerView) - 1;
        
        // Move to next slide, loop back to start if at end
        if (state.currentIndex >= maxIndex) {
            state.currentIndex = 0;
        } else {
            state.currentIndex += 1;
        }
        
        updateCarouselPosition(state, wrapper, true);
        if (pagination) updatePagination(state, pagination);
        if (prevBtn && nextBtn) updateNavigationArrows(state, prevBtn, nextBtn);
    }, 3000); // 3 seconds
    
    // Pause auto-swipe when user hovers (desktop)
    wrapper.addEventListener('mouseenter', () => {
        if (state.autoSwipeInterval) {
            clearInterval(state.autoSwipeInterval);
        }
    });
    
    wrapper.addEventListener('mouseleave', () => {
        startAutoSwipe(wrapper, state, pagination, prevBtn, nextBtn);
    });
    
    // Pause on touch start, resume after touch end (mobile)
    wrapper.addEventListener('touchstart', () => {
        if (state.autoSwipeInterval) {
            clearInterval(state.autoSwipeInterval);
        }
    }, { once: false });
    
    wrapper.addEventListener('touchend', () => {
        setTimeout(() => {
            if (!state.isDragging) {
                startAutoSwipe(wrapper, state, pagination, prevBtn, nextBtn);
            }
        }, 3000); // Resume after 3 seconds
    }, { once: false });
}

// ===== GENERATE SELLING PRODUCTS =====
function generateSellingProducts() {
    const sellingGrid = document.getElementById('selling-grid');
    if (!sellingGrid) return;
    
    const generateCardHTML = (product) => `
        <div class="product-card fade-in" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${product.title}</h3>
                <div class="category">${product.subtitle}</div>
                <div class="price">${product.price}</div>
            </div>
        </div>
    `;
    
    // Generate all products for selling page
    sellingGrid.innerHTML = products.map(generateCardHTML).join('');
}

// ===== GENERATE SELLING VIDEOS =====
function generateSellingVideos() {
    const sellingVideoGrid = document.getElementById('selling-videos-grid');
    if (!sellingVideoGrid) return;
    
    const generateVideoHTML = (video) => `
        <div class="video-card fade-in" data-video-id="${video.id}">
            <div class="video-container">
                <video poster="${video.thumbnail}" preload="metadata">
                    <source src="${video.videoUrl}" type="video/mp4">
                </video>
                <div class="video-play-button">
                    <i class="fas fa-play"></i>
                </div>
                <div class="video-duration">${video.duration}</div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <div class="description">${video.description}</div>
                <div class="price">${video.price}</div>
            </div>
        </div>
    `;
    
    // Generate all videos for selling page
    sellingVideoGrid.innerHTML = sellingVideos.map(generateVideoHTML).join('');
}

// ===== GENERATE PRODUCT IMAGES =====
function generateProductImages() {
    const productImagesGrid = document.getElementById('product-images-grid');
    if (!productImagesGrid) return;
    
    const generateImageHTML = (image) => `
        <div class="video-card fade-in" data-image-id="${image.id}">
            <div class="video-container">
                <img src="${image.image}" alt="${image.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="video-info">
                <h3>${image.title}</h3>
                <div class="description">${image.description}</div>
                <div class="price">${image.price}</div>
            </div>
        </div>
    `;
    
    // Generate all images for selling page
    productImagesGrid.innerHTML = productImages.map(generateImageHTML).join('');
}

// ===== GENERATE COMMISSION VIDEOS =====
function generateCommissionVideos() {
    const commissionGrid = document.getElementById('commission-grid');
    if (!commissionGrid) return;
    
    const generateVideoHTML = (video) => `
        <div class="video-card fade-in" data-video-id="${video.id}">
            <div class="video-container">
                <video poster="${video.thumbnail}" preload="metadata">
                    <source src="${video.videoUrl}" type="video/mp4">
                </video>
                <div class="video-play-button">
                    <i class="fas fa-play"></i>
                </div>
                <div class="video-duration">${video.duration}</div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <div class="description">${video.description}</div>
                <div class="price">${video.price}</div>
            </div>
        </div>
    `;
    
    // Generate all videos for commission page
    commissionGrid.innerHTML = commissionVideos.map(generateVideoHTML).join('');
}

// ===== MOBILE MENU =====
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    if (!hamburger || !mobileMenu || !mobileMenuOverlay) return;
    
    hamburger.addEventListener('click', toggleMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    
    function toggleMobileMenu() {
        const isActive = mobileMenu.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

// ===== VIDEO MODAL =====
function setupVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.getElementById('closeModal');
    
    if (!videoModal || !modalVideo || !closeModal) return;
    
    closeModal.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
    
    // Close video modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVideoModal();
        }
    });
}

function openVideoModal(video) {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    if (!videoModal || !modalVideo) return;
    
    modalVideo.src = video.videoUrl;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalVideo.play();
}

function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    if (!videoModal || !modalVideo) return;
    
    videoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    modalVideo.pause();
    modalVideo.currentTime = 0;
}

// ===== COMMISSION REQUEST =====
function requestCommission(video) {
    const message = `I would like to request a commission similar to "${video.title}".\n\nProject details:\n- Type: ${video.description}\n- Budget: ${video.price}\n- Reference: ${video.title}`;
    
    // In a real app, this would open a contact form or email
    alert(`Commission Request for: ${video.title}\n\n${message}\n\nIn a real app, this would open a commission request form.`);
}

// ===== WINDOW RESIZE HANDLER =====
window.addEventListener('resize', () => {
    // Close mobile menu if resizing to desktop
    if (window.innerWidth > 991) {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const hamburger = document.getElementById('hamburger');
        
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
    
    // Update carousel items per view
    updateCarouselItemsPerView();
});