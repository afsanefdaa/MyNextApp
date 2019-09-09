import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Divider } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Link } from '../../components';


const Vallinajs = () => {
  const router = useRouter();
  const { lesson } = router.query;
  let code;
  let explanation;

  switch (lesson) {
    case 'ofconst':
      code = `
      Object.defineProperty(window, 'myImmutableVariable', {
        value: "Hello World",
        writable: false,
      })`;
      break;
    case 'ajax':
      code = `
      var url = "https://api.unsplash.com/search/photos/?query=javascript&client-id=your-client-id";
      function handleRequest(){
          if(this.readyState == 4 && this.status == 200){ //Explain this in a bit.
              console.log(JSON.parse(request.responseText));
          }
      }
      
      var url;
      url = "https://api.unsplash.com/search/photos/?query=home"; //We are searching for the query home.
      var request = new XMLHttpRequest();
      request.onreadystatechange = handleRequest;
      request.open('GET',url,true);
      request.setRequestHeader('Authorization','Client-ID urn:ietf:wg:oauth:2.0:oob'); // Unique client ID.
      request.send();
      `;
      break;
    case 'unsplashapi':
      code = `
      //ES5 for simplicity.
      function sendRequest(){
          var url;
          url = "https://api.unsplash.com/search/photos/?query=mobile";
          var request = new XMLHttpRequest();
          request.onreadystatechange = handleRequest;// callback to insert the image into the page...
          request.open('GET',url,true);
          request.setRequestHeader('Authorization','Client-ID 69896dfb2f0e3faaf3ab85691840c3674480619c4a29c89bd21f0757a02b9a6c');
          request.send();
  
          function handleRequest(){
              if(this.readyState === 4 && this.status === 200){
                  var response = JSON.parse(request.responseText);
                  var img = document.querySelector('img');
                  img.src = response.results[0].urls.full;
              }
          }
      }
  
  
      var btn = document.querySelector('button');
      btn.addEventListener('click',sendRequest);//callback to handle the click event...
      `;
      break;
    case 'callapplybind':
      code = `//Demo with javascript .call()

      var obj = {name:"afsoon"};
      
      var greeting = function(a,b,c){
          return "welcome "+this.name+" to "+a+" "+b+" in "+c;
      };
      
      console.log(greeting.call(obj,"Baecelona","Spain","WB"));
      // returns output as welcome Niladri to Newtown KOLKATA in WB
      
      //Demo with javascript .apply()
      
      var obj = {name:"Niladri"};
      
      var greeting1 = function(a,b,c){
          return "welcome "+this.name+" to "+a+" "+b+" in "+c;
      };
      
      // array of arguments to the actual function
      var args = ["Newtown","KOLKATA","WB"];  
      console.log("Output using .apply() below ")
      console.log(greeting1.apply(obj,args));
    
      /* The output will be 
        Output using .apply() below
       welcome Niladri to Newtown KOLKATA in WB */
      
      //Use .bind() javascript
      
      var obj = {name:"Niladri"};
      
      var greeting2 = function(a,b,c){
          return "welcome "+this.name+" to "+a+" "+b+" in "+c;
      };
      
      //creates a bound function that has same body and parameters 
      var bound = greeting2.bind(obj); 
      
      
      console.dir(bound); ///returns a function
      
      console.log("Output using .bind() below ");
      
      console.log(bound("Newtown","KOLKATA","WB")); //call the bound function
      
      /* the output will be 
      Output using .bind() below
      welcome Niladri to Newtown KOLKATA in WB */`;
      break;
    case 'closure':
      code = `
        //1
        
        if(1 === 1) {
            let name = 'hello';
        
            const inner = () =>{
                console.log(name)
            }
        }
        
        inner(); //ReferenceError: inner is not defined
        
        //2
        
        let inner;
        if(1 === 1) {
            let name = 'hello';
        
            inner = () =>{
                console.log(name)
            }
        }
        // console.log(name); // ReferenceError: name is not defined
        
        console.dir(inner) //hello // in the same block
        
        //3 in this case there is one closure
        
        let out = () => {
            let name = "afsoon";
            let fname = "fadaei";
            return () => { //anonymos function
                console.log(name);
            }
        };
        
        console.dir(out())
        
        //4 in this case there is two closure
        
        let out = () => {
            let name = "afsoon";
            let fname = "fadaei";
            return () => { //anonymos function
                console.log(name, fname);
            }
        };
        
        console.dir(out())
        
        //5 closure in loops *************highly important********
        
        for(let i = 0; i < 3 ; i++) {
            setTimeout(()=> {
                console.log(i)
            }, 1000)
        }
        console.log('after the loop');
        
        // output:
        // after the loop
        // undefined
        // VM136:3 0
        // VM136:3 1
        // VM136:3 2
        
        for(var j = 0; j < 3 ; j++) {
            setTimeout(()=> {
                console.log(j)
            }, 1000)
        }
        console.log('after the loop');
        
        // output:
        // after the loop
        // undefined
        // 3 3 // prints 3 for 3 times
        
        
        // why ? ***********
        
        for(var i = 0; i < 3 ; i++) {
            ((i) =>{
                setTimeout(()=> {
                    console.log(i)
                }, 1000)})(i)
        }
        console.log('after the loop');
      `;
      break;
    case 'IIFE':
      code = `
      // Ways to create IIFE
      (function() {
        console.log("Parentheses around the function");
      })();
      
      -(function() {
        console.log("Parentheses around the whole thing");
      }());
      
      !function() {
        console.log("Bitwise NOT operator starts the expression");
      }();
      
      +function() {
        console.log("Unary plus starts the expression");
      }();
      
      var result = (function() {
          return "From IIFE";
      }());
      
      console.log(result);
      result = 'changed';
      `;
      break;
    case 'this':
      code = `
      const post = {
        id: 1,
        renderId: () => console.log(id),
        renderThisId: () => console.log(this.id),
        }
        
        //*************************1
        const post = {
          id: 1,
          renderId: function() {
            console.log(id);
          },
          renderThisId: function() {
            console.log(this.id);
          },
        }
        
        post.renderId();
        post.renderThisId();
        
        var render = post.renderThisId; //function reference lose track of this
        render();
        
        //*************************2
        
        const video = {
          id: 100,
          play() {
            console.log(this, 'play');
          }
        }
  
        video.play(); // play is a method inside obj so it refers to the obj itself
        
        video.stop = function() {
          console.log(this,'stop');
        }
        
        video.stop();
        
        function ConstructionVideo(id) {
          this.id = id;
          console.log(this, 'construction this')
        }
        
        const v = new ConstructionVideo(200);
        
        
        //*************************3
        
        const video = {
          title: 'a',
          tags: ['e','f','g'],
          showTags() {
            this.tags.forEach(function(tag) { //for each has 2 parameters the first is a callback and seconf is thisArg
              console.log(this, tag) // in browser this will refer to the document , global
            }, this.title)
          }
        }
        
        video.showTags();
        
        //*************************4
        
        
        let user = {
          name: "John",
          hi() { console.log('hi ' + this.name); },
          bye() { console.log("Bye"); }
        };
        
        user.bye(); // John (the simple call works)
        
        // now let's call user.hi or user.bye depending on the name
        (user.name == "John" ? user.hi() : user.bye()); // sucess!
        
        (user.name == "John" ? user.hi : user.bye)(); // Error!
        
        //*************************5
        
        let user = {
          name: "John",
          go: function() { console.log(this.name) }
        };
        
        // user.go(); //success
        (user.go)(); //error
        
        function identify() {
          return this.name.toUpperCase();
        }
        
        function speak() {
          var greeting = "Hello, I'm " + identify.call( this );
          console.log( greeting );
        }
        
        var me = {
          name: "Kyle"
        };
        
        var you = {
          name: "Reader"
        };
        identify.apply( me ); // KYLE
      `;
      break;
    case 'duplicate':
      explanation = (
        <>
         There are at least 5 (!) ways to clone an array:
          <ul>
            <li>loop</li>
            <li>slice</li>
            <li>Array.from()</li>
            <li>concat</li>
            <li>spread operator (FASTEST)</li>
          </ul>
        </>
      );
      code = `
      const arr = [1,2,3,4,5];
      
      // Spread Operator ES6 spread operator
      const arr1 = [...arr];
      
      // Slice Operator
      const arr2 = arr.slice(0);
      
      // Concat
      const arr3 = [].concat(arr)
      
      // Array.from()
      const arr4 = Array.from(arr);
      
      // For loop
      function arr5(arr) {
          let newArr = [];
          for(let i=0; i<arr.length; ++i) {
              newArr[i] = arr[i];
          }
          return arr;
      }
      console.log(arr1,arr2,arr3,arr4);
      `;
      break;
    case 'settimeout':
      explanation = (
        <>
          It is possible to cancel the setTimeout before taking place (jQuery sample)
        </>
      );
      code = `
        let tID;
        $(#setTimeout).click(() => {
          tID = setTimeout(
            () => {
              console.log("from timeout") 
            }
            ,5000
            )
        })
       
        $(#celarit).click(() => {
          clearTimeout(tID)
        })
      `;
      break;
    default:
      code = 'console.log(\'default\')';
      break;
  }
  return (
    <>
      <Button type="primary">
        <Link href="/[vanillajs]" as="/vanillajs">Back</Link>
      </Button>
      <Divider />
      <div>
        {explanation}
      </div>
      <SyntaxHighlighter language="javascript">
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export default Vallinajs;
