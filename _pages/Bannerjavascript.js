document.addEventListener('DOMContentLoaded', function() {
    const banners = [
      "/assets/img/banner1.jpeg",
      "/assets/img/banner2.jpeg",
      "/assets/img/banner3.jpeg"
    ];
    let currentBanner = 0;
    const bannerElement = document.getElementById('page-banner');
  
    function rotateBanner() {
      currentBanner = (currentBanner + 1) % banners.length;
      bannerElement.style.backgroundImage = `url(${banners[currentBanner]})`;
    }
  
    setInterval(rotateBanner, 5000); // Change banner every 5 seconds
  });