document.getElementById("resumeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const profileImage = document.getElementById("profileImage").files[0];
  
    // Display the preview container
    document.querySelector(".preview-container").style.display = "block";
  
    // Populate the preview
    document.getElementById("previewName").textContent = name;
    document.getElementById("previewEducation").textContent = education;
    document.getElementById("previewExperience").textContent = experience;
  
    // Handle image preview
    if (profileImage) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("previewImage").src = e.target.result;
        document.getElementById("previewImageContainer").style.display = "block";
      };
      reader.readAsDataURL(profileImage);
    } else {
      document.getElementById("previewImageContainer").style.display = "none";
    }
  });
  