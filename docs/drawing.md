# Drawing API


## `(color <color>)`  
__Changes Drawing Color__  
`<color>` is an html color code. Ex: `#000000`  

---

## `(rect <x> <y> <width> <height>)`  
__Draws a Rectangle__  
`<x>` is the x coordinate. Ex: `0`  
`<y>` is the y coordinate. Ex: `0`  
`<width>` is an integer marking size. Ex: `20`  
`<height>` is an integer marking size. Ex: `20`  

---

## `(circle <x> <y> <r>)`
__Draws a Circle__  
`<x>` is the x coordinate. Ex: `0`  
`<y>` is the y coordinate. Ex: `0`  
`<r>` is circle's radius. Ex: `20`  

---

## `(heart)`
__Draws a Heart__  

---

## `(love-emoji <x> <y>)`
__Draws a Love Emoji__
`<x>` is the x coordinate. Ex: `0`  
`<y>` is the y coordinate. Ex: `0`  

---

## `(smiley)`
__Draws a Smiley Face__  

---

## `(send-love <x> <y> <language>)`
__Draws "I love you" in given language__
`<x>` is the x coordinate. Ex: `0`  
`<y>` is the y coordinate. Ex: `0`  
`<language>` is the language. Ex:`"French"`  

Supported Languages:
* English as `"english"`
* Hindi as `"hindi"`
* French as `"french"`
* Spanish as `"spanish"`
* Arabic as `"arabic"`
* Tamil as `"tamil"`
* Japanese as `"japanese"`
* Chinese as `"chinese"`
* Korean as `"korean"`
* Gujarati as `"gujarati"`
* Punjabi as `"punjabi"`
 
---

## `(mirror <string> <x> <y>)`
__Draw horizontal mirror for a given string__
`<string>` is the string. Ex: `"Hello"`  
`<x>` is the x coordinate. Ex: `0`  
`<y>` is the y coordinate. Ex: `0`  

---

## `(text <string> <x> <y> <size?>)`
__Draw text for a given string__
`<string>` is the string. Ex: `"Hello"`  
`<x>` is the x coordinate. Ex: `0`  
`<y>` is the y coordinate. Ex: `0`  
`<size?>` is the font size. Ex: `12`  

---

## `(line <x1> <y1> <x2> <y2> <width?>)`
__Draw line from (x1, y1) to (x2, y2)__    
`<x1>` is the x1 coordinate. Ex: `0`  
`<y1>` is the y1 coordinate. Ex: `0`  
`<x2>` is the x2 coordinate. Ex: `0`  
`<y2>` is the y2 coordinate. Ex: `0`  
`<width?>` is the line width. Ex: `12`   


