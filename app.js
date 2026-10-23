(() => {
  'use strict';
  const form = document.querySelector('form');
  const submitButton = form.querySelector('button[type="submit"]');
  const result = document.getElementById('submission-result');
  const error = document.getElementById('submission-error');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submitButton.disabled || !form.reportValidity()) return;
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting…';
    error.hidden = true;
    result.hidden = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch('https://formsubmit.co/ajax/sahuveshali8@gmail.com', {
        method: 'POST', headers: { Accept: 'application/json' },
        body: new FormData(form), signal: controller.signal
      });
      const data = await response.json();
      if (!response.ok || !(data.success === true || data.success === 'true')) throw new Error('Submission was not accepted');
      form.hidden = true;
      result.hidden = false;
      result.focus();
    } catch (_) {
      error.textContent = 'We could not confirm your submission. Please try again, chat with support, or email sahuveshali8@gmail.com. Your entries have been kept.';
      error.hidden = false;
    } finally {
      clearTimeout(timeout);
      submitButton.disabled = false;
      submitButton.textContent = 'Request Setup Assistance';
    }
  });
  const url = window.SUPPORT_CHAT_URL;
  if (url && /^https:\/\/embed\.tawk\.to\/[a-zA-Z0-9/]+$/.test(url)) {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    const script = document.createElement('script');
    script.async = true;
    script.src = url;
    script.charset = 'UTF-8';
    script.referrerPolicy = 'strict-origin-when-cross-origin';
    document.head.appendChild(script);
  }
  document.querySelectorAll('[data-chat]').forEach(button => button.addEventListener('click', () => {
    if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
      window.Tawk_API.maximize();
    } else {
      document.getElementById('chat-status').textContent = 'Live chat is not available yet. Please use the support form or email sahuveshali8@gmail.com.';
      document.getElementById('chat-status').scrollIntoView({behavior:'smooth',block:'center'});
    }
  }));
})();
