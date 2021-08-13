
//var script = document.getElementById("script");
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
 
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am [writing/calling] to urge you to make effective actions on reducing greenhouse gas emissions in [state/district/town name]. From the frequent rainstorms to heatwaves, we are feeling the impact of human-caused global warming more than ever. In our [state/district/town], we can decrease carbon footprints by developing better public transportation systems, optimizing buildings, transitioning to overall renewable energy, and more. To efficiently work towards accomplishing such goals, we need your help as our representative for our [state/district/town]. I urge you to support this cause and take leadership in taking act on creating a reduction in carbon emissions."  ;
}
