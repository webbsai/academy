---
title: "The Box Model"
lastUpdated: 2023-12-11
description: "Mastering the CSS Box Model to build well-structured web pages"
banner: { content: "/assets/courses/CSS/lesson-1/css-banner.png" }
---

The CSS box model is a fundamental concept in web design. It defines the layout and spacing of all elements on a web page. Every element in CSS, including text, images, and buttons, is essentially a box.

Imagine each element on a web page as a box nested within another. Each element has its own box with content, padding, border, and margin. This nested structure allows for precise control over the layout and spacing of elements.

![Box Model Visualisation](/assets/courses/CSS/lesson-4/box-model.png "Photo taken from Chrome Developer Tools")

This is the visualization of the Box Model.

1. **Content:**

    - This is the innermost blue rectangle representing some dimension.
    - It is the actual content of the box, such as text, images, or other media.
    - Currently, this blue rectangle represents the width and height of your browser window
    - It is surrounded by the padding.

2. **Padding:**

    - It is the space between the content and the border.
    - It helps control the amount of space between the content and the border of the box.
    - Can be set using properties like `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.

3. **Border:**

    - A line that surrounds the padding (and content).
    - It separates the padding from the margin.
    - Can be styled using properties like `border-width`, `border-style`, and `border-color`.

4. **Margin:**
    - The space between the border of the box and other neighboring elements.
    - It helps control the spacing between elements on a web page.
    - Can be set using properties like `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

When you set the width and height of an element using CSS, you are defining the dimensions of the content area. The total size of the element, including padding, border, and margin, is calculated by adding these values to the width and height.

Suppose you have `<p> I am some content </p>`, then you'd draw its box model like this:

![Box Model Example](/assets/courses/CSS/lesson-4/box-model-text.png "The Box Model Example")

##### How to use the box model in WebbsAI:

The functionality for the box model is spread throughout the Styles panel in WebbsAI.
To adjust your padding and margin, select an element and go to Styles > Space.

![Styles > Space](/assets/courses/CSS/lesson-4/box-model-webbsai.png "Styles > Space")

The blue rectangle represents your content.

You can click on any of the values around the box and adjust it according to your convenience by typing in another value or simply moving the slider back and forth.

![Styles > Space](/assets/courses/CSS/lesson-4/box-model-adjust-space.png "Styles > Space")

To adjust the borders of that element, go to Styles > Borders

![Styles > Borders](/assets/courses/CSS/lesson-4/box-model-webbsai-borders.png "Styles > Borders")

All the general properties for borders can be modified in this section.

##### CSS Syntax:

###### Padding

**Syntax**:

```css
padding: [value] [unit];
```

To set a more precise value:

```css
padding-top: [value] [unit];
padding-bottom: [value] [unit];
padding-right: [value] [unit];
padding-left: [value] [unit];
```

**Example:**

```css
selector {
	padding: 10 px;
}
```

###### Margin

**Syntax**:

```css
margin: [value] [unit];
```

To set a more precise value:

```css
margin-top: [value] [unit];
margin-bottom: [value] [unit];
margin-right: [value] [unit];
margin-left: [value] [unit];
```

**Example**:

```css
selector {
	margin: 1.5 em;
}
```

###### Border

**Syntax**:

```css
border: [border-width] [border-style] [border-color];
```

**Example**:

```css
selector {
	border: 2 px solid green;
}
```

## Conclusion

By understanding and utilizing the box model through simple tools provided by WebbsAI, you can control the layout and spacing of elements on your website, and go on to create a more professional and visually appealing user experience for your customers.
