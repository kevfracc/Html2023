<!DOCTYPE html>
<html>
<body>
  <style>
    .block {
      display: block;
      width: 100%;
      border: none;
      background-color: #04AA6D;
      color: white;
      padding: 14px 28px;
      font-size: 16px;
      cursor: pointer;
      text-align: center;
    }
    
    .block:hover {
      background-color: #ddd;
      color: black;
    }
    </style>
<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>
<div>
  <button type="randomSong"  class="block" onclick="randomSong()">Refresh Button</button>
  <input name="randomSong" id="randomSong" class="block">
</div>
<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
<script>
    // Your JavaScript code here
    var song = Array("song1", "song2", "song3", "song4", "song5", "song6");
    function randomSong() {
    var randomSong = song[Math.floor(Math.random()*song.length)];
    document.getElementById('randomSong').value = randomSong;}   
    document.getElementById("output").textContent = "Hello, JavaScript!";

  </script>

<div>
  <p id="Or"  class="block" > Or</p>
</div>

</body>
</html>
<!-- open /Users/kevfracc/java-/js.html -->



