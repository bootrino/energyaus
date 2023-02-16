# Energy Australia coding test

Requirements:
https://eacp.energyaustralia.com.au/codingtest

Screencast:



https://user-images.githubusercontent.com/22624099/219223642-b5c6cb1e-aea2-4aaa-9dee-582b4d5766e9.mp4



----------------------------------------


ChatGPT prompt:

```
make a react application to these specs
given this data:

[{"name":"LOL-palooza","bands":[{"name":"Winter Primates","recordLabel":""},{"name":"Frank Jupiter","recordLabel":"Pacific Records"},{"name":"Jill Black","recordLabel":"Fourth Woman Records"},{"name":"Werewolf Weekday","recordLabel":"XS Recordings"}]},{"name":"Small Night In","bands":[{"name":"Squint-281","recordLabel":"Outerscope"},{"name":"The Black Dashes","recordLabel":"Fourth Woman Records"},{"name":"Green Mild Cold Capsicum","recordLabel":"Marner Sis. Recording"},{"name":"Yanke East","recordLabel":"MEDIOCRE Music"},{"name":"Wild Antelope","recordLabel":"Marner Sis. Recording"}]},{"name":"Trainerella","bands":[{"name":"Wild Antelope","recordLabel":"Still Bottom Records"},{"name":"Manish Ditch","recordLabel":"ACR"},{"name":"Adrian Venti","recordLabel":"Monocracy Records"},{"name":"YOUKRANE","recordLabel":"Anti Records"}]},{"name":"Twisted Tour","bands":[{"name":"Summon","recordLabel":"Outerscope"},{"name":"Auditones","recordLabel":"Marner Sis. Recording"},{"name":"Squint-281"}]},{"bands":[{"name":"Critter Girls","recordLabel":"ACR"},{"name":"Propeller","recordLabel":"Pacific Records"}]}]

using javascript, list out music festival data in a particular manner: at the top level, it should show the band record label, below that it should list out all bands under their management, and below that it should display which festivals they've attended, if any. All entries should be sorted alphabetically.

For example:

Record Label 1
  Band X
    Omega Festival
  Band Y

Record Label 2
  Band A
    Alpha Festival
    Beta Festival

the react application must include all components in a single file
implement all the required functions
use fetch, not axios
the url for the data is  https://corsproxy.io/?https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals
display an error if the return code is not 200
implement the display of the festivals  as a separate react component
anywhere that the record label field is empty or undefined or null, use the string "No record label"
put the display of festivals in the same code file
when displaying the band name, use css to indent 2em from left
when displaying the festival name, use css to indent 4em from left
all the code must be in a single file
present the output in a browser
```


