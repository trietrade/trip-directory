document.addEventListener('DOMContentLoaded', () => {
    let header = document.getElementById('header');
    window.onscroll = () => { stickyHeader() }
    // Header Fixed
    function stickyHeader() {
        if (window.pageYOffset > 0) {
            header.classList.add('fixed-top')
        } else {
            header.classList.remove('fixed-top')
        }
        
    }
});