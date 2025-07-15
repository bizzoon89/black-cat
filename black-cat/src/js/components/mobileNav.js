export default function initMobileNav(element, activeClass) {
  const opener = document.querySelector(element);
  const { body } = document;
  const menuActiveClass = activeClass;

  if (!opener) return;

  opener.addEventListener('click', () => {
    const isExpanded = opener.getAttribute('aria-expanded') === 'true';

    opener.setAttribute('aria-expanded', String(!isExpanded));

    body.classList.toggle(menuActiveClass);
  });
}
