The purpose of this proof of concept web site is to demonstrate showing and hiding various language elements. If the user selects Afrikaans, then hide all language elements and only show the Afrikaans labels.


Step 1: I dentify all the text paragraphs and labels that require additional language tags

Example: This is a paragraph (It could be surrounded by html tags like '<span>' or '<p>' etc)



Step 2: Enclose the inner most text with 'span' tags. 
Note that the span html tag is an inline tag, meaning it does not affect the default structure of the web page. We need a tag in order to programmatically manipulate them.

Also give them 2 relevant class labels. An element can belong to many classes, but may only have 1 ID value. 

The first 'generic' class label is used to hide all text labels in our code.
The second 'language specific' class label is used to show a specific langauge.

Example:
<span class="lang-caption langtype-eng">This is a paragraph</span>


Step 3: Create additional span tags for other languages. Give them an additional attibute called 'hidden'. The hidden attribute will initially hide the other language tags.

Example: 
<span class="lang-caption langtype-eng">This is a paragraph</span>
<span class="lang-caption langtype-afr" hidden>Hierdie is 'n paragraaf</span>
<span class="lang-caption langtype-ger" hidden>Das ist ein Absatz</span>


Step 4: The javascript file will handle all the langauge changing functionality
The file language.js contains 
