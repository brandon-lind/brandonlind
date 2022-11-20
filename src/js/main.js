(function() {

  handleUrlNavigation();
  setClickEvents();
  setCopyright();
  setConsentVisibility();

  /**
   * Handles updating the concent for analytics storage.
   */
  function handleConsentAccept() {
    if (!gtag) return;

    gtag('consent', 'update', { 'analytics_storage': 'granted' });

    sessionStorage.setItem('analytics_storage', 'granted');

    document.querySelector('footer .consent').classList.add('hidden');
  }

  /**
   * Handles the decline of concent for analytics storage.
   */
  function handleConsentDecline() {
    gtag('consent', 'update', { 'analytics_storage': 'denied' });

    sessionStorage.setItem('analytics_storage', 'denied');

    document.querySelector('footer .consent').classList.add('hidden');
  }

  /**
   * Sets the active navigation list item and shows the associated view.
   * @param {*} evt The click event.
   */
  function handleNavigationClickEvt(evt) {
    if (!evt || !evt.target.dataset.view) return;
    setActiveNav(evt.target);
    setActiveSection(evt.target.dataset.view);
  }

  /**
   * Handles showing or hiding the contact form.
   */
  function handleToggleContactForm() {
    document.querySelector('.professionalism .layer-2').classList.toggle('hidden');
    document.querySelector('.professionalism .contactform').classList.toggle('hidden');
  }

  /**
   * Handles any showing/hiding of a specific view requested view the querystring.
   * @param {*} queryView The view query parameter value.
   */
  function handleUrlNavigation() {
    // Get the query parameters
    const queryParams = new URLSearchParams(location.search);

    if (!queryParams) return;

    const viewName = queryParams.get('view');

    // Handle any view switching
    if (viewName && viewName.startsWith('contact')) {
      handleToggleContactForm();
    }
  }

  /**
   * Sets the current navigation item to active and removes the active class from all other navigation list items.
   * @param {*} targetEl The clicked navigation list item.
   */
  function setActiveNav(targetEl) {
    const navItems = document.querySelectorAll('nav i');

    navItems.forEach(el => {
      el.parentElement.classList.remove('active');
    });

    targetEl.parentElement.classList.add('active');
  }

  /**
   * Hides all but the active section in the main part of the document.
   * @param {*} viewName The class name of the section to display.
   */
  function setActiveSection(viewName) {
    const sectionItems = document.querySelectorAll('main section');

    sectionItems.forEach(el => {
      el.style.display = 'none';
    });

    document.querySelector(`main section.${viewName}`).style.display = 'block';
  }

  /**
   * Sets up any click handlers on things like buttons.
   */
  function setClickEvents() {
    const navItems = document.querySelectorAll('nav i');

    // Set the click handler on the navigation list items
    navItems.forEach(item => {
      item.addEventListener('click', handleNavigationClickEvt);
    });

    // Set the click handler to show the contact form
    document.querySelector('.professionalism .layer-2 button').addEventListener('click', handleToggleContactForm);

    // Set the click handler to hide the contact form
    document.querySelector('.professionalism .contactform button[type="button"]').addEventListener('click', handleToggleContactForm);

    // Set the click handler to accept the analytics consent
    document.querySelector('footer .consent button[value="accept"]').addEventListener('click', handleConsentAccept);
    document.querySelector('footer .consent button[value="decline"]').addEventListener('click', handleConsentDecline);
  }

  /**
   * Sets the copyright text, including the current year.
   */
  function setCopyright() {
    const copyrightTxt = `&copy; ${new Date().getFullYear() } Brandon Lind`;

    document.querySelector('footer section.copyright').innerHTML = copyrightTxt;
  }

  /**
   * Sets the consent dialog visibility
   */
  function setConsentVisibility() {
    if (!sessionStorage.getItem('analytics_storage')) {
      document.querySelector('footer .consent').classList.remove('hidden');
    }
  }
}());
