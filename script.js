function generateStory() {
    // Get selected options
    const hero = document.getElementById("hero").value;
    const location = document.getElementById("location").value;
    const magicalItem = document.getElementById("magicalItem").value;
    const theme = document.getElementById("theme").value;
    const storyLength = document.getElementById("storyLength").value;
  
    // Define unique morals based on themes
    const morals = {
      friendship: "Friendship makes us stronger together.",
      courage: "Courage helps us overcome our fears.",
      honesty: "Honesty is the best policy.",
      kindness: "A small act of kindness can change someone's day.",
      perseverance: "Never give up, even when things get tough.",
      teamwork: "Together, we can achieve more than alone.",
      gratitude: "Being thankful brings joy to our hearts.",
      generosity: "Sharing what we have brings happiness to all."
    };
  
    // Base story templates in simple language
    const shortStory = `${hero} lived in ${location}. One day, they found ${magicalItem}. This special item taught them about ${theme}, and they decided to share this lesson with everyone around them.\n\nMORAL: ${morals[theme]}`;
  
    const mediumStory = `${hero} lived in ${location}. One sunny day, they discovered ${magicalItem}. This magical item helped them understand how others felt. As they faced different challenges, they learned important lessons about ${theme}. They shared what they learned with their friends, encouraging everyone to practice ${theme} in their lives.\n\nMORAL: ${morals[theme]}`;
  
    const longStory = `${hero} lived in ${location}, a place known for its beautiful stories about being kind and brave. One day, while exploring the woods, they found ${magicalItem}. This amazing item showed them the hidden problems people had and how often they forgot to show ${theme}. Feeling a strong desire to help, ${hero} decided to go on a journey to assist those in need, using ${magicalItem} to spread kindness and support. They met many challenges along the way, including moments of doubt and temptation, but every experience helped them remember the importance of ${theme}. In the end, the community came together, changed by what they learned, and celebrated the power of kindness and bravery. ${hero} realized that true strength comes from lifting others up and that together, they could make the world a better place.\n\nMORAL: ${morals[theme]}`;
  
    // Select story based on length
    let story;
    if (storyLength === "short") {
      story = shortStory;
    } else if (storyLength === "medium") {
      story = mediumStory;
    } else if (storyLength === "long") {
      story = longStory;
    }
  
    // Display the generated story
    const storyOutput = document.getElementById("storyOutput");
    storyOutput.innerText = story;
    storyOutput.classList.remove("hidden"); // Reveal the story element
    storyOutput.classList.add("visible");   // Apply the fade-in effect
  }
  