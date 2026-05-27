const observer = new IntersectionObserver(
	(entries, instance) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add('is-visible');
			instance.unobserve(entry.target); // play once, stop watching
		});
	},
	{
		threshold: 0.1,
	}
);

document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
