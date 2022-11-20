(function() {
  // Find the navigation list items and sections once.
  const navItems = document.querySelectorAll('nav li');
  const sectionItems = document.querySelectorAll('main section');

  // Set the click handler on the navigation list items
  navItems.forEach(item => {
    item.addEventListener('click', handleNavigationClickEvt);
  });

  // Set the click handler to show the contact form
  document.querySelector('.professionalism .layer-2 button').addEventListener('click', handleToggleContactForm);

  // Set the click handler to hide the contact form
  document.querySelector('.professionalism .contactform button[type="button"]').addEventListener('click', handleToggleContactForm);

  // Set the copyright
  document.querySelector('footer section.copyright').innerHTML = `&copy; ${new Date().getFullYear() } Brandon Lind`;

  /**
   * Sets the active navigation list item and shows the associated view.
   * @param {*} evt The click event.
   */
  function handleNavigationClickEvt(evt) {
    if (!evt || !evt.target.dataset.view) return;
    setActiveNav(evt.target);
    setActiveSection(evt.target.dataset.view);
  }

  function handleToggleContactForm() {
    document.querySelector('.professionalism .layer-2').classList.toggle('hidden');
    document.querySelector('.professionalism .contactform').classList.toggle('hidden');
  }

  /**
   * Sets the current navigation item to active and removes the active class from all other navigation list items.
   * @param {*} targetEl The clicked navigation list item.
   */
  function setActiveNav(targetEl) {
    navItems.forEach(el => {
      el.classList.remove('active');
    });

    targetEl.classList.add('active');
  }

  /**
   * Hides all but the active section in the main part of the document.
   * @param {*} viewName The class name of the section to display.
   */
  function setActiveSection(viewName) {
    sectionItems.forEach(el => {
      el.classList.add('hidden');
    });

    document.querySelector(`main section.${viewName}`).classList.remove('hidden');
  }
}());
