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