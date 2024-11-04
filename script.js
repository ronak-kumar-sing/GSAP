let t1 = gsap.timeline()

t1.from('#box1 h1', {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power2.out',
})

t1.from('#box2 h1', {
  x: -100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power2.out',
})

t1.from('#img img', {
  x: -100,
  rotate: 20,
  opacity: 0,
  duration: 2,
  stagger: 0.2,
  ease: 'power3.out',
})
