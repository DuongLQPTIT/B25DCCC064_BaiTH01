const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleBtn.innerHTML = document.body.classList.contains('dark-mode') ? '☀️ Sáng' : '🌙 Tối';
});

document.getElementById('currentYear').textContent = new Date().getFullYear();

const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');
messageInput.addEventListener('input', () => {
    charCount.textContent = messageInput.value.length;
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    const fullname = document.getElementById('fullname').value.trim();
    const nameError = document.getElementById('nameError');
    if (fullname.length < 3) {
        nameError.style.display = 'block';
        isValid = false;
    } else { nameError.style.display = 'none'; }

    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    } else { emailError.style.display = 'none'; }

    const topic = document.getElementById('topic').value;
    const topicError = document.getElementById('topicError');
    if (topic === 'chon') {
        topicError.style.display = 'block';
        isValid = false;
    } else { topicError.style.display = 'none'; }

    const msgError = document.getElementById('msgError');
    if (messageInput.value.trim() === '') {
        msgError.style.display = 'block';
        isValid = false;
    } else { msgError.style.display = 'none'; }

    if (isValid) {
        alert('Gửi thông tin liên hệ thành công!');
        contactForm.reset();
        charCount.textContent = '0';
    }
});

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

window.addEventListener('scroll', revealOnScroll);
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}
revealOnScroll();