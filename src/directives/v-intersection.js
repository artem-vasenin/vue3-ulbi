export default {
  name: 'intersection',
  mounted (el, binding) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.length > 0 && entries[0].isIntersecting) {
        binding.value();
      }
    }, { rootMargin: '0px', threshold: 1.0 });
    observer.observe(el);
  }
}
