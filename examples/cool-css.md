# Cool CSS

## Dotted Blur
```css
{
  background-color: rgb(0,0,0);
  background-image: radial-gradient( rgba(0,0,0,0) 1px,
          rgb(0,0,0) 1px );
  background-size: 4px 4px;
  backdrop-filter: brightness(100%) blur(3px);
}
```

## Text Multi Lines Oveflow
```css
{
  display: -webkit-box;
  -webkit-line-clamp: 3; /* how many lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

## Grid Auto Layout
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
}
```

### Corner Shape
```css
border-radius: 20px;
@supports(corner-shape: squircle) {
  border-radius: 40px;
  corner-shape: squircle;
}
```

### Scroll Shadow

```css
.scroll-shadows {
  max-height: 200px;
  overflow: auto;

  background:
    /* Shadow Cover TOP */
    linear-gradient(
      white 30%,
      rgba(255, 255, 255, 0)
    ) center top,

    /* Shadow Cover BOTTOM */
    linear-gradient(
      rgba(255, 255, 255, 0),
      white 70%
    ) center bottom,

    /* Shadow TOP */
    radial-gradient(
      farthest-side at 50% 0,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ) center top,

    /* Shadow BOTTOM */
    radial-gradient(
      farthest-side at 50% 100%,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ) center bottom;

  background-repeat: no-repeat;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
}
```