export default defineNuxtPlugin((nuxtApp) => {
  const html = document.documentElement;

  const stripDarkClass = () => {
    html.classList.remove("dark");
  };

  stripDarkClass();

  let remainingTicks = 30;
  const intervalId = window.setInterval(() => {
    stripDarkClass();
    remainingTicks -= 1;

    if (remainingTicks <= 0) {
      window.clearInterval(intervalId);
    }
  }, 100);

  nuxtApp.hook("app:mounted", stripDarkClass);
});
